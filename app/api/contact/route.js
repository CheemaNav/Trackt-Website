import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const SEND_FAILED =
  "We couldn't send your request right now. Please email support@tracktcrm.com and we'll get back to you.";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.RESEND_FROM_EMAIL || "TracktCRM <onboarding@resend.dev>";

    if (!apiKey || !to) {
      console.error(
        `[contact] Missing env: ${[!apiKey && "RESEND_API_KEY", !to && "CONTACT_TO_EMAIL"].filter(Boolean).join(", ")}`,
      );
      return Response.json({ error: SEND_FAILED }, { status: 503 });
    }

    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const country = String(body?.country || "").trim();
    const company = String(body?.company || "").trim();
    const message = String(body?.message || "").trim();
    const intent = String(body?.intent || "").trim().toLowerCase();
    const isDemo = intent === "demo";

    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Please fill in name, email, phone and message." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Enter a valid work email." }, { status: 400 });
    }

    if (phone.replace(/\D/g, "").length < 8) {
      return Response.json(
        { error: "Enter a valid phone number." },
        { status: 400 },
      );
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      country: escapeHtml(country || "—"),
      company: escapeHtml(company || "—"),
      message: escapeHtml(message).replaceAll("\n", "<br />"),
    };

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: isDemo
        ? `Demo request from ${name}${company ? ` · ${company}` : ""}`
        : `New contact from ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1c1f3b">
          <h2 style="margin:0 0 12px">${isDemo ? "New TracktCRM demo request" : "New TracktCRM contact form"}</h2>
          <p style="margin:0 0 16px">${isDemo ? "Someone requested a demo from the homepage popup." : "Someone submitted the contact form on tracktcrm.com."}</p>
          <table style="border-collapse:collapse;width:100%;max-width:560px">
            <tr><td style="padding:8px 0;font-weight:700">Name</td><td style="padding:8px 0">${safe.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Email</td><td style="padding:8px 0"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Phone</td><td style="padding:8px 0">${safe.phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Country</td><td style="padding:8px 0">${safe.country}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Company</td><td style="padding:8px 0">${safe.company}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;vertical-align:top">Message</td><td style="padding:8px 0">${safe.message}</td></tr>
          </table>
        </div>
      `,
      text: [
        isDemo ? "New TracktCRM demo request" : "New TracktCRM contact form",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Country: ${country || "—"}`,
        `Company: ${company || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error.message || error);
      return Response.json({ error: SEND_FAILED }, { status: 502 });
    }

    return Response.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json({ error: SEND_FAILED }, { status: 500 });
  }
}
