"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import useReveal from "../use-reveal";
import { CONTACT } from "../site";

const CONTACT_FAQS = [
  {
    q: "How quickly do you reply?",
    a: "We usually reply within one business day. For urgent demos, WhatsApp is the fastest channel.",
  },
  {
    q: "What happens on a demo?",
    a: "A 30-minute walkthrough where we map your lead flow, show TracktCRM on your use case, and answer pricing questions.",
  },
  {
    q: "Do you support teams outside India?",
    a: "Yes. TracktCRM supports sales teams worldwide. Support hours are listed below in IST.",
  },
];

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  country: "India",
  company: "",
  message: "",
};

export default function ContactPageClient() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useReveal();

  function onChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  }

  async function onSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Failed to send message.");
      }

      setSent(true);
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="home">
      <SiteHeader />

      <main>
      <section className="contact-hero reveal" id="top">
        <div className="contact-hero-inner wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span aria-current="page">Contact</span>
              </li>
            </ol>
          </nav>
          <div className="badge contact-hero-badge">
            <span className="pulse" aria-hidden="true" />
            CONTACT US
          </div>
          <h1 className="contact-title">
            Let&apos;s talk about your sales pipeline
          </h1>
          <p className="contact-lead">
            Book a demo, ask a question, or send us a message. We usually reply
            within one business day - wherever you are.
          </p>
        </div>
      </section>

      <section className="contact-section reveal">
        <div className="contact-grid wrap">
          <aside className="contact-info">
            <h2 className="h2 contact-info-title">Get in touch</h2>
            <p className="contact-info-copy">
              Prefer a quick chat? Call, email or WhatsApp us - or send a
              message and we&apos;ll follow up.
            </p>

            <div className="contact-cards">
              <a className="contact-card" href={`tel:${CONTACT.phoneTel}`}>
                <span className="contact-card-icon" aria-hidden="true">
                  <LuPhone size={20} strokeWidth={2.2} />
                </span>
                <span>
                  <strong>Phone</strong>
                  <em>{CONTACT.phoneDisplay}</em>
                </span>
              </a>

              <a className="contact-card" href={`mailto:${CONTACT.email}`}>
                <span className="contact-card-icon" aria-hidden="true">
                  <LuMail size={20} strokeWidth={2.2} />
                </span>
                <span>
                  <strong>Email</strong>
                  <em>{CONTACT.email}</em>
                </span>
              </a>

              <a
                className="contact-card"
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-card-icon is-wa" aria-hidden="true">
                  <FaWhatsapp size={22} />
                </span>
                <span>
                  <strong>WhatsApp</strong>
                  <em>Chat with us on WhatsApp</em>
                </span>
              </a>

              <div className="contact-card contact-card-static">
                <span className="contact-card-icon" aria-hidden="true">
                  <LuClock size={20} strokeWidth={2.2} />
                </span>
                <span>
                  <strong>Support hours</strong>
                  <em>{CONTACT.supportHours}</em>
                </span>
              </div>

              <a
                className="contact-card"
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-card-icon" aria-hidden="true">
                  <LuMapPin size={20} strokeWidth={2.2} />
                </span>
                <span>
                  <strong>Office</strong>
                  <em>{CONTACT.address}</em>
                </span>
              </a>
            </div>
          </aside>

          <div className="demo-card contact-form-card">
            <div className="demo-label">
              <span className="pulse" aria-hidden="true" />
              SEND A MESSAGE
            </div>
            <h2>Tell us how we can help</h2>
            <p>
              Share a few details and our team will get back to you shortly.
            </p>

            {sent ? (
              <div className="sent-box">
                <div className="display">Message sent</div>
                <p>
                  Thanks {form.name || "there"} - we&apos;ll reply soon. You can
                  also reach us on WhatsApp anytime.
                </p>
                <a
                  className="btn btn-primary contact-sent-cta"
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <form className="demo-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <label className="field">
                    <span>Full name</span>
                    <input
                      className="input"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                    />
                  </label>
                  <label className="field">
                    <span>Work email</span>
                    <input
                      className="input"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label className="field">
                    <span>Phone</span>
                    <PhoneInput
                      defaultCountry="in"
                      value={form.phone}
                      onChange={(phone, meta) => {
                        setForm((current) => ({
                          ...current,
                          phone,
                          country: meta?.country?.name || current.country,
                        }));
                      }}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoComplete: "tel",
                        "aria-label": "Phone number",
                      }}
                      className="contact-phone"
                      placeholder="Phone number"
                    />
                  </label>
                  <label className="field">
                    <span>Company Name</span>
                    <input
                      className="input"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Optional"
                    />
                  </label>
                </div>
                <label className="field">
                  <span>Message</span>
                  <textarea
                    className="input contact-textarea"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={onChange}
                    placeholder="How can we help?"
                  />
                </label>
                <button
                  className="btn btn-primary contact-submit"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
                {error ? <p className="contact-form-error">{error}</p> : null}
                <p className="form-note">
                  Or reach us anytime on WhatsApp
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section contact-faq reveal" id="faq">
        <div className="wrap">
          <h2 className="h2 is-centered">Contact FAQ</h2>
          <div className="faq-list re-faq-list">
            {CONTACT_FAQS.map((item, index) => (
              <details
                className="faq-item"
                key={item.q}
                open={index === 0}
              >
                <summary>
                  {item.q}
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
