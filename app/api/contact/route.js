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

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.RESEND_FROM_EMAIL || "TracktCRM <onboarding@resend.dev>";

    if (!to) {
      return Response.json(
        { error: "Contact inbox is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const country = String(body?.country || "").trim();
    const company = String(body?.company || "").trim();
    const message = String(body?.message || "").trim();

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
      subject: `New contact from ${name}${company ? ` · ${company}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1c1f3b">
          <h2 style="margin:0 0 12px">New TracktCRM contact form</h2>
          <p style="margin:0 0 16px">Someone submitted the contact form on tracktcrm.com.</p>
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
        "New TracktCRM contact form",
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
      return Response.json(
        { error: error.message || "Failed to send message." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, id: data?.id });
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
