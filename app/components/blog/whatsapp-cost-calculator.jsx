"use client";

import { useId, useState } from "react";
import { formatDate } from "@/lib/blog-format";

/** Meta's India (+91) rates in INR per delivered message. Update here when Meta changes them. */
export const WHATSAPP_RATES = {
  asOf: "2026-10-01",
  gst: 0.18,
  freeServicePerNumber: 1000,
  marketing: 0.8631,
  utility: 0.115,
  authentication: 0.115,
};

const FIELDS = [
  { key: "marketing", label: "Marketing messages per month", hint: "Offers, launches, broadcasts" },
  { key: "utility", label: "Utility messages per month", hint: "Reminders, order and payment updates" },
  { key: "authentication", label: "Authentication messages per month", hint: "OTPs and login codes" },
  { key: "service", label: "Service replies per month", hint: "Free-form replies to customers" },
  { key: "numbers", label: "Business phone numbers", hint: "Each gets 1,000 free service replies" },
  { key: "providerFee", label: "Provider fee per month (₹, optional)", hint: "Platform fee or markup total" },
];

const INITIAL = {
  marketing: "3000",
  utility: "1500",
  authentication: "0",
  service: "1200",
  numbers: "1",
  providerFee: "0",
};

const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function toCount(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

const round2 = (value) => Math.round(value * 100) / 100;

export function calculateWhatsAppCost(input, rates = WHATSAPP_RATES) {
  const numbers = Math.max(1, Math.floor(toCount(input.numbers)));
  const billableService = Math.max(0, toCount(input.service) - rates.freeServicePerNumber * numbers);
  const meta = round2(
    toCount(input.marketing) * rates.marketing +
      toCount(input.utility) * rates.utility +
      toCount(input.authentication) * rates.authentication +
      billableService * rates.utility,
  );
  const provider = round2(toCount(input.providerFee));
  const gst = round2((meta + provider) * rates.gst);
  return { billableService, meta, provider, gst, total: round2(meta + provider + gst) };
}

export default function WhatsAppCostCalculator() {
  const id = useId();
  const [values, setValues] = useState(INITIAL);
  const result = calculateWhatsAppCost(values);

  return (
    <section className="wa-calc" aria-labelledby={`${id}-title`}>
      <p className="wa-calc-title" id={`${id}-title`}>
        WhatsApp API cost calculator (India)
      </p>
      <p className="wa-calc-note">
        Uses Meta&apos;s rates as of <time dateTime={WHATSAPP_RATES.asOf}>{formatDate(WHATSAPP_RATES.asOf)}</time>:
        marketing ₹{WHATSAPP_RATES.marketing}, utility, authentication and service ₹{WHATSAPP_RATES.utility} per
        delivered message, plus {WHATSAPP_RATES.gst * 100}% GST.
      </p>

      <div className="wa-calc-grid">
        {FIELDS.map((field) => (
          <label className="wa-calc-field" key={field.key} htmlFor={`${id}-${field.key}`}>
            <span className="wa-calc-label">{field.label}</span>
            <input
              id={`${id}-${field.key}`}
              type="number"
              inputMode="numeric"
              min={field.key === "numbers" ? 1 : 0}
              step="1"
              value={values[field.key]}
              onChange={(event) => setValues((current) => ({ ...current, [field.key]: event.target.value }))}
            />
            <span className="wa-calc-hint">{field.hint}</span>
          </label>
        ))}
      </div>

      <dl className="wa-calc-result" aria-live="polite">
        <div>
          <dt>Billable service replies</dt>
          <dd>{result.billableService.toLocaleString("en-IN")}</dd>
        </div>
        <div>
          <dt>Meta subtotal</dt>
          <dd>{rupees.format(result.meta)}</dd>
        </div>
        {result.provider ? (
          <div>
            <dt>Provider fee</dt>
            <dd>{rupees.format(result.provider)}</dd>
          </div>
        ) : null}
        <div>
          <dt>GST {WHATSAPP_RATES.gst * 100}%</dt>
          <dd>{rupees.format(result.gst)}</dd>
        </div>
        <div className="is-total">
          <dt>Estimated monthly total</dt>
          <dd>{rupees.format(result.total)}</dd>
        </div>
      </dl>
    </section>
  );
}
