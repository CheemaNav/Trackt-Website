import Link from "next/link";
import RevealInit from "../components/reveal-init";
import { BookDemoButton } from "../components/demo-request-provider";
import { BreadcrumbJsonLd, FaqJsonLd, PricingJsonLd, WebPageJsonLd } from "../json-ld";
import { APP_REGISTER_URL, CONTACT, SITE_NAME, SITE_URL } from "../site";
import PricingPlans from "./pricing-plans";
import { PLANS, PRICING_PERKS, YEARLY_SAVING } from "./plans";

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const pageTitle = "CRM Pricing in India: Plans, Free Trial | TracktCRM";
const pageDescription =
  "TracktCRM pricing: a Free plan, then Pro, Premium and All-in-One per-user plans shown in your local currency. Free 1 month trial, no credit card, cancel anytime.";

const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
];

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes. Pro and Premium come with a free 1 month trial, with no credit card required. There is also a Free plan for one user.",
  },
  {
    q: "How much does TracktCRM cost?",
    a: `There is a Free plan for one user. Paid plans are Pro, Premium and All-in-One, priced per user per month. Paying yearly saves up to ${YEARLY_SAVING}. Prices on this page are shown in your local currency.`,
  },
  {
    q: "Why are prices shown in my currency?",
    a: "Plans are priced in Indian rupees. This page converts them to the currency of the country you are browsing from at the current exchange rate and rounds them.",
  },
  {
    q: "Are features gated by plan?",
    a: "Free covers a single pipeline, unlimited records, 3 automations, WhatsApp integration and a standard dashboard. Pro adds more pipelines and automations, file storage, ad and email integrations and a dedicated onboarding specialist. Premium and All-in-One add AI features such as email reply suggestions, email drafting and record summaries, with monthly AI credits.",
  },
  {
    q: "What counts as a record?",
    a: "A record is any single row you create across pipelines, contacts, activities or notes. Every plan, including Free, has unlimited records.",
  },
  {
    q: "Can I switch plans or cancel later?",
    a: "Yes. Upgrade, downgrade or cancel at any point from your dashboard. There are no long-term contracts or early-termination fees on any plan.",
  },
  {
    q: "Do I pay separately for WhatsApp messages?",
    a: "Meta charges per delivered WhatsApp business message, with rates that depend on the message type and the customer's country. Each business number gets a monthly allowance of free replies. These charges are separate from your TracktCRM plan.",
  },
  {
    q: "Do you charge for onboarding or data migration?",
    a: "Onboarding and data migration help are part of every paid plan.",
  },
  {
    q: "Is the price the same for every industry?",
    a: "Yes. Real estate, education, agency and recruitment teams use the same plans.",
  },
];

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/pricing`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TracktCRM pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

const BILLING = [
  {
    icon: "calendar",
    title: "Per user, per month",
    text: `Pay monthly, or pay yearly and save up to ${YEARLY_SAVING}.`,
  },
  {
    icon: "building",
    title: "One company bill",
    text: "Plans are billed at company level, so team members never pay separately.",
  },
  {
    icon: "globe",
    title: "Your local currency",
    text: "Prices are set in Indian rupees and shown in your local currency everywhere else.",
  },
  {
    icon: "switch",
    title: "Change anytime",
    text: "Upgrade, downgrade or cancel at any time from your dashboard.",
  },
];

const INDUSTRIES = [
  { name: "Real estate", href: "/industries/real-estate-crm" },
  { name: "Education", href: "/industries/education-crm" },
  { name: "Agencies", href: "/industries/crm-for-agencies" },
  { name: "Recruitment", href: "/industries/crm-for-recruitment" },
];

const ICON_PATHS = {
  chat: "M4 5h16v11H9l-5 4z M8 9.5h8 M8 12.5h5",
  phone:
    "M6 3.5h3l1.6 4.2-2.1 1.3a11 11 0 0 0 6.5 6.5l1.3-2.1 4.2 1.6v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4 5.5a2 2 0 0 1 2-2z",
  plug: "M9 3v4 M15 3v4 M6 7h12v3.5a6 6 0 0 1-12 0z M12 16.5V21",
  calendar: "M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4",
  building: "M4 21V5l8-2v18 M12 9h8v12 M7 8h2 M7 12h2 M7 16h2 M15 13h2 M15 17h2 M2 21h20",
  globe:
    "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M3 12h18 M12 3c3.2 3.6 3.2 14.4 0 18 M12 3c-3.2 3.6-3.2 14.4 0 18",
  switch: "M4 8h14l-3.5-3.5 M20 16H6l3.5 3.5",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d={ICON_PATHS[name]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PerkCheck() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.2 10.3l2.5 2.4 5-5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <WebPageJsonLd name={pageTitle} description={pageDescription} path="/pricing" />
      <PricingJsonLd plans={PLANS} />
      <FaqJsonLd id="schema-pricing-faq" faqs={FAQS} />
      <BreadcrumbJsonLd items={BREADCRUMBS} />
      <RevealInit />
      <main>
        <section className="pr-hero" id="top">
          <div className="pr-hero-inner wrap">
            <nav className="breadcrumbs pr-breadcrumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span aria-current="page">Pricing</span>
                </li>
              </ol>
            </nav>
            <h1 className="pr-title">Simple CRM Pricing, Shown in Your Currency</h1>
            <ul className="pr-perks">
              {PRICING_PERKS.map((perk) => (
                <li key={perk.text} className={perk.highlight ? "is-highlight" : undefined}>
                  <PerkCheck />
                  {perk.text}
                </li>
              ))}
            </ul>

            <PricingPlans />

            <div className="pr-help">
              <div>
                <h2>Not sure which plan fits your team?</h2>
                <p>
                  Book a 30-minute walkthrough and we will map your lead flow to
                  the right plan.
                </p>
              </div>
              <BookDemoButton className="btn btn-primary pr-help-btn">
                Book a Demo <span aria-hidden="true">→</span>
              </BookDemoButton>
            </div>

            <div className="pr-includes">
              <div className="pr-includes-copy">
                <h2>All our paid plans include:</h2>
                <ul>
                  <li>
                    Google Ads, Meta Ads, Gmail, Google Sheets, Outlook and X
                    integrations. See all{" "}
                    <Link href="/integrations">integrations</Link>.
                  </li>
                  <li>
                    WhatsApp integration. See the{" "}
                    <Link href="/features/whatsapp-crm">WhatsApp CRM</Link>.
                  </li>
                  <li>A dedicated onboarding specialist to set up your account.</li>
                  <li>Custom website forms that send leads straight to your pipeline.</li>
                  <li>
                    AI features on Premium and All-in-One. See the{" "}
                    <Link href="/industries/ai-crm">AI CRM</Link>.
                  </li>
                  <li>Help moving your data from another CRM, including Pipedrive.</li>
                  <li>
                    Upgrade, downgrade or cancel from your dashboard, with no
                    early-termination fees.
                  </li>
                  <li>Your data is never sold or used for ad targeting.</li>
                </ul>
                <p className="pr-footnote">
                  Prices are set in Indian rupees and shown in your local currency
                  at the current exchange rate, rounded. Taxes may apply
                  depending on where you are. WhatsApp message charges from Meta
                  are separate.
                </p>
              </div>
              <figure className="pr-includes-art">
                <img
                  src="/assets/pricing/pricing-plans-include.webp"
                  alt="Illustration of a sales professional working in TracktCRM with reports, chats, calendar and support around her"
                  width={900}
                  height={675}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="pr-section reveal" id="extras">
          <div className="wrap">
            <div className="pr-section-head">
              <span className="pr-eyebrow">No surprises</span>
              <h2>What Costs Extra</h2>
              <p>
                Some channels have their own charges that are set by the
                provider, not by TracktCRM. Being clear about them avoids
                surprises.
              </p>
            </div>
            <div className="pr-extra-grid">
              <article className="pr-box">
                <span className="pr-icon" aria-hidden="true">
                  <Icon name="chat" />
                </span>
                <h3>WhatsApp message charges</h3>
                <p>
                  Meta charges per delivered WhatsApp business message. Rates
                  depend on the type of message and the customer&apos;s
                  country, and each business number gets a monthly allowance of
                  free replies. See{" "}
                  <a
                    href="https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Meta&apos;s WhatsApp pricing
                  </a>
                  .
                </p>
              </article>
              <article className="pr-box">
                <span className="pr-icon" aria-hidden="true">
                  <Icon name="phone" />
                </span>
                <h3>SMS and extra AI credits</h3>
                <p>
                  SMS credits, and AI credits beyond your plan&apos;s monthly
                  allowance, can depend on your volume. We confirm them with you
                  before you buy.
                </p>
              </article>
              <article className="pr-box">
                <span className="pr-icon" aria-hidden="true">
                  <Icon name="plug" />
                </span>
                <h3>Custom integrations</h3>
                <p>
                  Custom integrations and set-up work are scoped with you
                  first. See the <Link href="/integrations">integrations</Link>{" "}
                  that are ready to connect.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="pr-section pr-section-soft reveal" id="billing">
          <div className="wrap">
            <div className="pr-section-head">
              <span className="pr-eyebrow">Billing</span>
              <h2>How Billing Works</h2>
              <p>Simple per-user plans, one bill for your company, and no lock-in.</p>
            </div>
            <div className="pr-billing-grid">
              {BILLING.map((item) => (
                <article className="pr-box pr-billing-box" key={item.title}>
                  <span className="pr-icon" aria-hidden="true">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pr-section reveal" id="compare">
          <div className="pr-split wrap">
            <div className="pr-panel pr-panel-dark">
              <span className="pr-eyebrow is-light">Compare</span>
              <h2>How TracktCRM Pricing Compares</h2>
              <p>
                Pipedrive and other global CRMs publish dollar prices per user.
                TracktCRM can be billed in rupees, includes WhatsApp
                integration on every plan, and adds AI features on Premium and
                All-in-One.
              </p>
              <div className="pr-panel-actions">
                <Link className="btn btn-primary" href="/pipedrive-alternative">
                  Pipedrive alternative
                </Link>
                <Link className="btn pr-btn-light" href="/crm-software">
                  CRM software overview
                </Link>
              </div>
            </div>
            <div className="pr-panel">
              <span className="pr-eyebrow">Industries</span>
              <h2>One Price for Every Industry</h2>
              <p>
                Real estate, education, agency and recruitment teams use the
                same plans. See how TracktCRM fits your team.
              </p>
              <ul className="pr-industry-links">
                {INDUSTRIES.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      {item.name}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pr-section pr-section-soft reveal" id="faq">
          <div className="wrap">
            <div className="pr-section-head">
              <span className="pr-eyebrow">FAQs</span>
              <h2>CRM Pricing FAQs</h2>
            </div>
            <div className="pr-faq-box">
              <div className="faq-list">
                {FAQS.map((item, index) => (
                  <details className="faq-item" key={item.q} open={index === 0}>
                    <summary>
                      {item.q}
                      <span className="faq-toggle" aria-hidden="true" />
                    </summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section prose-cta pr-final-cta" id="demo">
          <div className="cta">
            <div>
              <h2>Start Free, Then Pick a Plan</h2>
              <p>
                Start a free 1 month trial with no credit card, or talk to us
                about your team size and channels. Email{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with any
                questions.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="btn-dark"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
              <Link className="btn-ghost" href="/contact">
                Talk to Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
