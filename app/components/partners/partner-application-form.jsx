"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "../lazy-phone-input";
import { CheckIcon } from "../../icons";
import {
  HONEYPOT_FIELD,
  PARTNER_FORMS,
  emptyValues,
  validatePartnerApplication,
} from "@/lib/partner-application";

/** Pairs consecutive `half` fields into two-column rows. */
function groupRows(fields) {
  const rows = [];
  for (let index = 0; index < fields.length; index += 1) {
    const field = fields[index];
    const next = fields[index + 1];
    if (field.half && next?.half) {
      rows.push([field, next]);
      index += 1;
    } else {
      rows.push([field]);
    }
  }
  return rows;
}

function readUtm() {
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") || "",
    medium: params.get("utm_medium") || "",
    campaign: params.get("utm_campaign") || "",
  };
}

export default function PartnerApplicationForm({ programType, partnerEmail }) {
  const form = PARTNER_FORMS[programType];
  const [values, setValues] = useState(() => emptyValues(programType));
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const fieldRefs = useRef({});
  const successRef = useRef(null);
  const utmRef = useRef({ source: "", medium: "", campaign: "" });

  useEffect(() => {
    utmRef.current = readUtm();
  }, []);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const idFor = (name) => `${programType}-${name}`;
  const errorId = (name) => `${idFor(name)}-error`;

  function setField(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
    if (generalError) setGeneralError("");
  }

  function focusFirstError(nextErrors) {
    const first = form.fields.find((field) => nextErrors[field.name]);
    if (first) fieldRefs.current[first.name]?.focus();
  }

  async function onSubmit(event) {
    event.preventDefault();
    const { errors: clientErrors } = validatePartnerApplication(programType, values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) {
      focusFirstError(clientErrors);
      return;
    }

    setSubmitting(true);
    setGeneralError("");
    try {
      const response = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          program_type: programType,
          [HONEYPOT_FIELD]: honeypot,
          utm: utmRef.current,
        }),
      });
      const payload = await response.json().catch(() => ({}));

      if (response.status === 422 && payload.errors) {
        setErrors(payload.errors);
        focusFirstError(payload.errors);
        return;
      }
      if (!response.ok) {
        setGeneralError(
          response.status === 429 && payload.error ? payload.error : "fallback",
        );
        return;
      }

      window.gtag?.("event", "generate_lead", { program_type: programType });
      setSent(true);
    } catch {
      setGeneralError("fallback");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="pp-success" role="status" tabIndex={-1} ref={successRef}>
        <span className="pp-success-icon" aria-hidden="true">
          <CheckIcon size={22} />
        </span>
        <h3>Application received</h3>
        <p>{form.success}</p>
      </div>
    );
  }

  function describedBy(field, extra) {
    return [errors[field.name] ? errorId(field.name) : null, extra].filter(Boolean).join(" ") || undefined;
  }

  function renderError(field) {
    return errors[field.name] ? (
      <small className="field-error" id={errorId(field.name)}>
        {errors[field.name]}
      </small>
    ) : null;
  }

  function renderLabel(field) {
    return (
      <label className="pp-label" htmlFor={idFor(field.name)}>
        {field.label}
        {field.required ? (
          <>
            <em className="field-req" aria-hidden="true">*</em>
            <span className="sr-only"> (required)</span>
          </>
        ) : (
          <span className="pp-optional"> (optional)</span>
        )}
      </label>
    );
  }

  function renderField(field) {
    const invalid = errors[field.name] ? "true" : undefined;
    const common = {
      id: idFor(field.name),
      name: field.name,
      ref: (node) => {
        fieldRefs.current[field.name] = node;
      },
      "aria-invalid": invalid,
      "aria-required": field.required ? "true" : undefined,
    };

    switch (field.type) {
      case "phone":
        return (
          <div className="field" key={field.name}>
            {renderLabel(field)}
            <PhoneInput
              ref={(node) => {
                fieldRefs.current[field.name] = node;
              }}
              defaultCountry="in"
              value={values.phone}
              onChange={(phone) => setField("phone", phone)}
              inputProps={{
                id: idFor(field.name),
                name: "phone",
                autoComplete: "tel",
                "aria-invalid": invalid,
                "aria-required": "true",
                "aria-describedby": describedBy(field),
              }}
              className={`contact-phone${invalid ? " is-invalid" : ""}`}
              placeholder="Phone number"
            />
            {renderError(field)}
          </div>
        );

      case "select":
        return (
          <div className="field" key={field.name}>
            {renderLabel(field)}
            <select
              {...common}
              className="input pp-select"
              value={values[field.name]}
              onChange={(event) => setField(field.name, event.target.value)}
              aria-describedby={describedBy(field)}
            >
              <option value="">Select an option</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {renderError(field)}
          </div>
        );

      case "checkboxes":
        return (
          <fieldset
            className="field pp-fieldset"
            key={field.name}
            aria-describedby={describedBy(field)}
            aria-invalid={invalid}
          >
            <legend className="pp-label">
              {field.label}
              {field.required ? (
                <>
                  <em className="field-req" aria-hidden="true">*</em>
                  <span className="sr-only"> (required)</span>
                </>
              ) : (
                <span className="pp-optional"> (optional, choose any)</span>
              )}
            </legend>
            <div className="pp-check-grid">
              {field.options.map((option, index) => {
                const checked = values[field.name].includes(option);
                return (
                  <label className="pp-check" key={option}>
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option}
                      checked={checked}
                      ref={
                        index === 0
                          ? (node) => {
                              fieldRefs.current[field.name] = node;
                            }
                          : undefined
                      }
                      onChange={() =>
                        setField(
                          field.name,
                          checked
                            ? values[field.name].filter((item) => item !== option)
                            : [...values[field.name], option],
                        )
                      }
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
            {renderError(field)}
          </fieldset>
        );

      case "textarea": {
        const length = values[field.name].length;
        const counterId = `${idFor(field.name)}-count`;
        return (
          <div className="field" key={field.name}>
            {renderLabel(field)}
            <textarea
              {...common}
              className="input contact-textarea pp-textarea"
              rows={4}
              value={values[field.name]}
              onChange={(event) => setField(field.name, event.target.value)}
              aria-describedby={describedBy(field, counterId)}
            />
            <div className="pp-textarea-foot">
              {renderError(field) || <span />}
              <span
                id={counterId}
                className={`pp-counter${length > field.max ? " is-over" : ""}`}
                aria-live="polite"
              >
                {length}/{field.max}
              </span>
            </div>
          </div>
        );
      }

      case "consent":
        return (
          <div className="field pp-consent" key={field.name}>
            <label className="pp-check" htmlFor={idFor(field.name)}>
              <input
                {...common}
                type="checkbox"
                checked={values.consent}
                onChange={(event) => setField("consent", event.target.checked)}
                aria-describedby={describedBy(field)}
              />
              <span>
                {form.consentText} <Link href="/privacy-policy">Privacy Policy</Link>.
                <em className="field-req" aria-hidden="true">*</em>
              </span>
            </label>
            {renderError(field)}
          </div>
        );

      default:
        return (
          <div className="field" key={field.name}>
            {renderLabel(field)}
            <input
              {...common}
              className="input"
              type={field.type === "url" ? "url" : field.type}
              inputMode={field.type === "url" ? "url" : undefined}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={(event) => setField(field.name, event.target.value)}
              aria-describedby={describedBy(field)}
            />
            {renderError(field)}
          </div>
        );
    }
  }

  return (
    <form className="demo-form pp-form" onSubmit={onSubmit} noValidate>
      <div className="pp-honeypot" aria-hidden="true">
        <label htmlFor={idFor(HONEYPOT_FIELD)}>Leave this field empty</label>
        <input
          id={idFor(HONEYPOT_FIELD)}
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {groupRows(form.fields).map((row) =>
        row.length === 2 ? (
          <div className="form-row" key={row[0].name}>
            {row.map(renderField)}
          </div>
        ) : (
          renderField(row[0])
        ),
      )}

      <p className="pp-required-note">
        Fields marked <em className="field-req" aria-hidden="true">*</em>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <button className="btn btn-primary contact-submit pp-submit" type="submit" disabled={submitting}>
        {submitting ? "Submitting…" : form.submitLabel}
      </button>

      {generalError ? (
        <p className="contact-form-error" role="alert">
          {generalError === "fallback" ? (
            <>
              Something went wrong, please try again or email{" "}
              <a href={`mailto:${partnerEmail}`}>{partnerEmail}</a>.
            </>
          ) : (
            generalError
          )}
        </p>
      ) : null}
    </form>
  );
}
