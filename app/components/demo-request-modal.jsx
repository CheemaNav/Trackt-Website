"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
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

export const DEMO_REQUESTED_KEY = "tc-demo-requested";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_ORDER = ["name", "email", "phone"];

// The phone field always holds the dial code (e.g. "+91"), so only digits after it count.
function validate(form, dialCode) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  const email = form.email.trim();
  if (!email) errors.email = "Work email is required.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email address.";
  const digits = form.phone.replace(/\D/g, "");
  const national = digits.startsWith(dialCode) ? digits.slice(dialCode.length) : digits;
  if (!national) errors.phone = "Phone number is required.";
  else if (national.length < 6 || national.length > 14) errors.phone = "Enter a valid phone number.";
  return errors;
}

export default function DemoRequestModal({ open, auto = false, onClose }) {
  if (!open) return null;
  return <DemoRequestDialog auto={auto} onClose={onClose} />;
}

function DemoRequestDialog({ auto, onClose }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [form, setForm] = useState(INITIAL);
  const [dialCode, setDialCode] = useState("91");
  const [fieldErrors, setFieldErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focusing an input on an unrequested popup would open the phone keyboard.
    const timer = window.setTimeout(
      () => (auto ? dialogRef.current : firstFieldRef.current)?.focus(),
      40,
    );

    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [auto, onClose]);

  function onChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((current) => ({ ...current, [name]: "" }));
    if (error) setError("");
  }

  async function onSubmit(event) {
    event.preventDefault();
    const errors = validate(form, dialCode);
    setFieldErrors(errors);
    const firstInvalid = REQUIRED_ORDER.find((key) => errors[key]);
    if (firstInvalid) {
      ({ name: firstFieldRef, email: emailRef, phone: phoneRef })[firstInvalid].current?.focus();
      return;
    }
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
      try {
        window.localStorage.setItem(DEMO_REQUESTED_KEY, "1");
      } catch {}
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
        ref={dialogRef}
        tabIndex={-1}
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

            <form className="demo-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <label className="field">
                  <span>
                    Full name<em className="field-req" aria-hidden="true">*</em>
                  </span>
                  <input
                    ref={firstFieldRef}
                    className="input"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={fieldErrors.name ? "true" : undefined}
                    aria-describedby={fieldErrors.name ? `${titleId}-name-error` : undefined}
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                  />
                  {fieldErrors.name ? (
                    <small className="field-error" id={`${titleId}-name-error`}>
                      {fieldErrors.name}
                    </small>
                  ) : null}
                </label>
                <label className="field">
                  <span>
                    Work email<em className="field-req" aria-hidden="true">*</em>
                  </span>
                  <input
                    ref={emailRef}
                    className="input"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={fieldErrors.email ? "true" : undefined}
                    aria-describedby={fieldErrors.email ? `${titleId}-email-error` : undefined}
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                  />
                  {fieldErrors.email ? (
                    <small className="field-error" id={`${titleId}-email-error`}>
                      {fieldErrors.email}
                    </small>
                  ) : null}
                </label>
              </div>
              <div className="form-row">
                <label className="field">
                  <span>
                    Phone<em className="field-req" aria-hidden="true">*</em>
                  </span>
                  <PhoneInput
                    ref={phoneRef}
                    defaultCountry="in"
                    value={form.phone}
                    onChange={(phone, meta) => {
                      setForm((current) => ({
                        ...current,
                        phone,
                        country: meta?.country?.name || current.country,
                      }));
                      if (meta?.country?.dialCode) setDialCode(meta.country.dialCode);
                      if (fieldErrors.phone) setFieldErrors((current) => ({ ...current, phone: "" }));
                      if (error) setError("");
                    }}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoComplete: "tel",
                      "aria-label": "Phone number",
                      "aria-invalid": fieldErrors.phone ? "true" : undefined,
                      "aria-describedby": fieldErrors.phone ? `${titleId}-phone-error` : undefined,
                    }}
                    className={`contact-phone${fieldErrors.phone ? " is-invalid" : ""}`}
                    placeholder="Phone number"
                  />
                  {fieldErrors.phone ? (
                    <small className="field-error" id={`${titleId}-phone-error`}>
                      {fieldErrors.phone}
                    </small>
                  ) : null}
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
            </form>
          </>
        )}
      </div>
    </div>
  );
}
