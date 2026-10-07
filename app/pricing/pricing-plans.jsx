"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookDemoButton } from "../components/demo-request-provider";
import {
  BASE_CURRENCY,
  convertPrice,
  countryFromLocale,
  countryFromTimezone,
  currencyForCountry,
  formatPrice,
} from "./currency";
import { PLANS, YEARLY_SAVING } from "./plans";

function CheckMark() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCta({ plan }) {
  const { cta } = plan;
  if (cta.external) {
    return (
      <a className="btn btn-primary pr-cta" href={cta.href} target="_blank" rel="noopener noreferrer">
        {cta.label}
      </a>
    );
  }
  return (
    <Link className="btn btn-primary pr-cta" href={cta.href}>
      {cta.label}
    </Link>
  );
}

export default function PricingPlans() {
  const [billing, setBilling] = useState("yearly");
  const [{ currency, rate }, setLocal] = useState({ currency: BASE_CURRENCY, rate: 1 });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/pricing-rates")
      .then((response) => response.json())
      .then((data) => {
        if (cancelled || !data?.rates) return;
        const country = data.country || countryFromTimezone() || countryFromLocale();
        const next = currencyForCountry(country);
        if (data.rates[next]) setLocal({ currency: next, rate: data.rates[next] });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="pr-plans">
      <h2 className="sr-only">TracktCRM plans and prices</h2>

      <div className="pr-controls">
        <div className="pr-toggle-wrap">
          <div className="pr-toggle" role="group" aria-label="Billing period">
            {["monthly", "yearly"].map((period) => (
              <button
                key={period}
                type="button"
                className={billing === period ? "is-active" : undefined}
                aria-pressed={billing === period}
                onClick={() => setBilling(period)}
              >
                {period === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
          <p className="pr-save">
            <svg className="pr-save-arrow" viewBox="0 0 60 34" aria-hidden="true">
              <path
                d="M56 30C50 10 30 2 8 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M8 6l-1 8.5 8.5 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Go yearly and <strong>save up to {YEARLY_SAVING}</strong>
          </p>
        </div>
      </div>

      <div className="pr-grid">
        {PLANS.map((plan) => {
          const usd = billing === "yearly" ? plan.yearly : plan.monthly;
          const { symbol, value } = formatPrice(convertPrice(usd, rate), currency);
          const note =
            plan.note ||
            (billing === "yearly" ? "/user/month, billed yearly" : "/user/month, billed monthly");
          return (
            <article
              key={plan.id}
              className={`pr-card${plan.popular ? " is-popular" : ""}`}
            >
              <div className="pr-card-tags">
                {plan.popular ? <span className="pr-popular">★ Most popular</span> : <span />}
                {plan.ai ? <span className="pr-ai">Powered by AI</span> : null}
              </div>
              <h3>{plan.name}</h3>
              <p className="pr-tagline">{plan.tagline}</p>
              <p className="pr-price" aria-live="polite">
                <span className={`pr-symbol${/^[A-Z]{2,}/.test(symbol) ? " is-code" : ""}`}>
                  {symbol}
                </span>
                <span className="pr-amount">{value}</span>
              </p>
              <p className="pr-note">{note}</p>
              <div className="pr-actions">
                <PlanCta plan={plan} />
                {plan.demo ? (
                  <BookDemoButton className="btn btn-outline pr-cta">Get a demo</BookDemoButton>
                ) : null}
              </div>
              <p className="pr-features-label">{plan.featuresLabel}</p>
              <ul className="pr-features">
                {plan.features.map((feature) => (
                  <li key={feature.text} className={feature.excluded ? "is-excluded" : undefined}>
                    <span className="pr-mark" aria-hidden="true">
                      {feature.excluded ? "–" : <CheckMark />}
                    </span>
                    {feature.excluded ? <span className="sr-only">Not included: </span> : null}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
