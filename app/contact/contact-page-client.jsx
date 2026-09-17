"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMapPin, LuPhone } from "react-icons/lu";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import useReveal from "../use-reveal";
import { CONTACT } from "../site";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  country: "",
  company: "",
  message: "",
};

export default function ContactPageClient() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  useReveal();

  function onChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="home">
      <SiteHeader />

      <section className="contact-hero reveal" id="top">
        <div className="contact-hero-inner wrap">
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
              Prefer a quick chat? Call or WhatsApp us - or send a message and
              we&apos;ll follow up.
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
                    <input
                      className="input"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={onChange}
                      placeholder="With country code"
                    />
                  </label>
                  <label className="field">
                    <span>Country</span>
                    <input
                      className="input"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      value={form.country}
                      onChange={onChange}
                      placeholder="Your country"
                    />
                  </label>
                </div>
                <label className="field">
                  <span>Company</span>
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
                <button className="btn btn-primary contact-submit" type="submit">
                  Send message
                </button>
                <p className="form-note">
                  Or reach us anytime on WhatsApp
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
