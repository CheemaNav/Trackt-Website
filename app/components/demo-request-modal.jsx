"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CloseIcon } from "../icons";
import { CONTACT } from "../site";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  country: "India",
  company: "",
  message: "",
};

export default function DemoRequestModal({ open, onClose }) {
  const titleId = useId();
  const firstFieldRef = useRef(null);
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 40);

    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setForm(INITIAL);
      setSent(false);
      setSubmitting(false);
      setError("");
    }
  }, [open]);

  if (!open) return null;

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
        body: JSON.stringify({
          ...form,
          intent: "demo",
          message:
            form.message.trim() ||
            "I'd like to book a 30-minute TracktCRM demo.",
        }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Failed to send demo request.");
      }

      setSent(true);
    } catch (err) {
      setError(err.message || "Failed to send demo request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="demo-modal-root"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={`demo-modal${sent ? " is-sent" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="demo-modal-close"
          aria-label="Close demo form"
          onClick={onClose}
        >
          <CloseIcon size={18} />
        </button>

        {sent ? (
          <div className="demo-sent">
            <div className="demo-label">
              <span className="pulse" aria-hidden="true" />
              DEMO REQUESTED
            </div>
            <h2 id={titleId}>Demo request sent</h2>
            <p>
              Thanks {form.name || "there"} — our team will reach out shortly to
              schedule your walkthrough.
            </p>
            <div className="demo-sent-actions">
              <a
                className="btn btn-primary"
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="demo-label">
              <span className="pulse" aria-hidden="true" />
              BOOK A DEMO
            </div>
            <h2 id={titleId}>See TracktCRM on your sales process</h2>
            <p>
              Share a few details and we&apos;ll schedule a 30-minute walkthrough
              — no credit card, no obligation.
            </p>

            <form className="demo-form" onSubmit={onSubmit}>
              <div className="form-row">
                <label className="field">
                  <span>Full name</span>
                  <input
                    ref={firstFieldRef}
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
                      if (error) setError("");
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
                <span>Anything we should know?</span>
                <textarea
                  className="input contact-textarea demo-modal-textarea"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Team size, industry, or preferred demo time (optional)"
                />
              </label>
              <button
                className="btn btn-primary contact-submit"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Request demo"}
              </button>
              {error ? <p className="contact-form-error">{error}</p> : null}
              <p className="form-note">
                We usually reply within one business day.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
