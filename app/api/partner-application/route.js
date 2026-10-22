import { Resend } from "resend";
import {
  HONEYPOT_FIELD,
  PARTNER_FORMS,
  PROGRAM_TYPES,
  applicantName,
  validatePartnerApplication,
} from "@/lib/partner-application";
import { PARTNER_EMAIL } from "@/lib/partner-program";
import { isDatabaseConfigured, savePartnerApplication } from "@/lib/partner-db";

export const runtime = "nodejs";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
// Per server process; resets on restart, which is acceptable for spam throttling.
const submissionsByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);
  submissionsByIp.set(ip, recent);
  if (submissionsByIp.size > 5000) {
    for (const [key, times] of submissionsByIp) {
      if (!times.some((time) => now - time < RATE_WINDOW_MS)) submissionsByIp.delete(key);
    }
  }
  return recent.length >= RATE_LIMIT;
}

function recordSubmission(ip) {
  const times = submissionsByIp.get(ip) || [];
  times.push(Date.now());
  submissionsByIp.set(ip, times);
}

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cleanUtm(value, max) {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, max) : null;
}

function detailRows(programType, values, extra) {
  const rows = PARTNER_FORMS[programType].fields
    .filter((field) => field.type !== "consent")
    .map((field) => {
      const value = values[field.name];
      return [field.label, Array.isArray(value) ? value.join(", ") : value];
    });
  rows.push(["Consent", values.consent ? "Yes" : "No"]);
  for (const [label, value] of extra) rows.push([label, value]);
  return rows.map(([label, value]) => [label, value || "—"]);
}

async function sendEmail(resend, message) {
  const { error } = await resend.emails.send(message);
  if (error) throw new Error(error.message || "Resend error");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const programType = String(body?.program_type || "");
  if (!PROGRAM_TYPES.includes(programType)) {
    return Response.json({ error: "Unknown partner program." }, { status: 400 });
  }

  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many applications from this network. Please try again in an hour." },
      { status: 429 },
    );
  }

  // Bots fill every field; people never see this one. Pretend it worked.
  if (typeof body[HONEYPOT_FIELD] === "string" && body[HONEYPOT_FIELD].trim()) {
    recordSubmission(ip);
    return Response.json({ ok: true });
  }

  const { errors, values } = validatePartnerApplication(programType, body);
  if (Object.keys(errors).length) {
    return Response.json({ error: "Please fix the highlighted fields.", errors }, { status: 422 });
  }

  recordSubmission(ip);

  const form = PARTNER_FORMS[programType];
  const name = applicantName(programType, values);
  const utm = body?.utm || {};
  const row = {
    program_type: programType,
    full_name: name,
    first_name: values.first_name || null,
    last_name: values.last_name || null,
    email: values.email,
    phone: values.phone,
    city: values.city,
    company_name: values.company_name || null,
    role: values.role || null,
    company_type: values.company_type || null,
    team_size: values.team_size || null,
    client_industries: values.client_industries ?? null,
    crm_experience: values.crm_experience || null,
    other_crm_partner: values.other_crm_partner || null,
    profile_type: values.profile_type || null,
    promotion_channels: values.promotion_channels ?? null,
    audience_reach: values.audience_reach || null,
    website: values.website || null,
    message: values.message || null,
    consent: values.consent ? 1 : 0,
    ip: ip.slice(0, 64),
    user_agent: (request.headers.get("user-agent") || "").slice(0, 512) || null,
    utm_source: cleanUtm(utm.source, 120),
    utm_medium: cleanUtm(utm.medium, 120),
    utm_campaign: cleanUtm(utm.campaign, 160),
  };

  let savedId = null;
  if (isDatabaseConfigured()) {
    try {
      savedId = await savePartnerApplication(row);
    } catch (error) {
      console.error("[partner-application] Database save failed:", error?.message || error);
    }
  } else {
    console.error("[partner-application] DATABASE_URL is not set; application not saved to the database.");
  }

  let notified = false;
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL || "TracktCRM <onboarding@resend.dev>";
    const subject = `New ${form.label} Partner Application – ${name}, ${values.city}`;
    const rows = detailRows(programType, values, [
      ["Program", form.label],
      ["UTM source", row.utm_source],
      ["UTM medium", row.utm_medium],
      ["UTM campaign", row.utm_campaign],
      ["IP", row.ip],
      ["Database id", savedId ? String(savedId) : "Not saved"],
    ]);
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1c1f3b">
        <h2 style="margin:0 0 12px">${escapeHtml(subject)}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="padding:6px 12px 6px 0;font-weight:700;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value).replaceAll("\n", "<br />")}</td></tr>`,
            )
            .join("")}
        </table>
      </div>`;
    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

    const inboxes = [...new Set([PARTNER_EMAIL, process.env.CONTACT_TO_EMAIL].filter(Boolean))];
    for (const inbox of inboxes) {
      try {
        await sendEmail(resend, { from, to: [inbox], replyTo: values.email, subject, html, text });
        notified = true;
        break;
      } catch (error) {
        console.error(`[partner-application] Notification to ${inbox} failed:`, error.message);
      }
    }

    try {
      await sendEmail(resend, {
        from,
        to: [values.email],
        replyTo: PARTNER_EMAIL,
        subject: `We received your TracktCRM ${form.label.toLowerCase()} application`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#1c1f3b"><p>Hi ${escapeHtml(name)},</p><p>${escapeHtml(form.success)}</p><p>TracktCRM Partner Team<br /><a href="mailto:${PARTNER_EMAIL}">${PARTNER_EMAIL}</a></p></div>`,
        text: `Hi ${name},\n\n${form.success}\n\nTracktCRM Partner Team\n${PARTNER_EMAIL}`,
      });
    } catch (error) {
      console.error("[partner-application] Confirmation email failed:", error.message);
    }
  } else {
    console.error("[partner-application] RESEND_API_KEY is not set; no emails sent.");
  }

  if (!savedId && !notified) {
    return Response.json(
      { error: `Something went wrong, please try again or email ${PARTNER_EMAIL}.` },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
