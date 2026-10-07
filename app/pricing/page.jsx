import Link from "next/link";
import ContentPage from "../components/content-page";
import { FaqJsonLd, WebPageJsonLd } from "../json-ld";
import { APP_REGISTER_URL, CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const pageTitle = "CRM Pricing in India: Plans, Free Trial | TracktCRM";
const pageDescription =
  "TracktCRM pricing: per-user plans in INR or USD billed at company level, a free 1 month trial with no credit card, and onboarding help. See what is included.";

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every feature is available on a free 1 month trial with no credit card required.",
  },
  {
    q: "How much does TracktCRM cost?",
    a: "Plans are priced per user and billed at company level, in INR or USD. Tell us your team size and channels and we send a written quote before you buy.",
  },
  {
    q: "Are features gated by plan?",
    a: "Core CRM, AI lead response, WhatsApp workflows and reporting are included in the trial, so you can test the full product. Paid plans include the same product features you trialled.",
  },
  {
    q: "Do I pay separately for WhatsApp messages?",
    a: "Meta charges per delivered WhatsApp business message, with rates that depend on the message type and the customer's country. Each business number gets a monthly allowance of free replies. We explain how these charges are billed in your quote.",
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

export default function PricingPage() {
  return (
    <ContentPage
      badge="PRICING"
      title="TracktCRM Pricing: Per-User CRM Plans in Rupees, With a Free 1 Month Trial"
      lead="Start free for one month with every feature, no credit card needed. After that, plans are priced per user and billed at company level, in rupees or US dollars. Here is what you get and what costs extra."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Pricing", href: "/pricing" },
      ]}
      schema={
        <>
          <WebPageJsonLd name={pageTitle} description={pageDescription} path="/pricing" />
          <FaqJsonLd id="schema-pricing-faq" faqs={FAQS} />
        </>
      }
    >
      <h2 className="pricing-heading">TracktCRM Plans and Prices</h2>
      <div className="pricing-grid">
        <article className="pricing-card is-featured">
          <p className="pricing-eyebrow">Start here</p>
          <h3>Free 1 month trial</h3>
          <p className="pricing-price">
            ₹0 <span>/ first month</span>
          </p>
          <ul>
            <li>Full CRM and AI lead response</li>
            <li>WhatsApp, email and SMS workflows</li>
            <li>Pipeline, reporting and forms</li>
            <li>No credit card required</li>
          </ul>
          <Link
            className="btn btn-primary"
            href={APP_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </Link>
        </article>
        <article className="pricing-card">
          <p className="pricing-eyebrow">After the trial</p>
          <h3>Paid plans</h3>
          <p className="pricing-price">
            Per user <span>INR or USD</span>
          </p>
          <ul>
            <li>Priced per user, billed at company level</li>
            <li>Same product features you trialled</li>
            <li>Onboarding and data migration help</li>
            <li>30-minute walkthrough before you buy</li>
          </ul>
          <Link className="btn btn-outline" href="/contact">
            Talk to Us
          </Link>
        </article>
      </div>

      <article className="prose-block">
        <h2>What Is Included in Every Plan</h2>
        <ul>
          <li>Core CRM, sales pipeline and custom stages</li>
          <li>
            AI lead response on WhatsApp, email and SMS. See the{" "}
            <Link href="/industries/ai-crm">AI CRM</Link>.
          </li>
          <li>
            WhatsApp CRM with a shared team inbox. See the{" "}
            <Link href="/features/whatsapp-crm">WhatsApp CRM</Link>.
          </li>
          <li>Reporting and custom lead forms</li>
          <li>Onboarding and data migration help</li>
          <li>A 30-minute walkthrough before you buy</li>
        </ul>

        <h2>What Costs Extra</h2>
        <p>
          Some channels have their own charges that are set by the provider,
          not by TracktCRM. Being clear about them avoids surprises:
        </p>
        <h3>WhatsApp message charges</h3>
        <p>
          Meta charges per delivered WhatsApp business message. Rates depend on
          the type of message and the customer&apos;s country, and each business
          number gets a monthly allowance of free replies. See{" "}
          <a
            href="https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meta&apos;s WhatsApp pricing
          </a>
          .
        </p>
        <h3>SMS, AI calls and custom work</h3>
        <p>
          SMS credits, AI follow-up call minutes and custom integrations can
          depend on your volume and set-up. We confirm any of these in your
          written quote before you buy. See the{" "}
          <Link href="/integrations">integrations</Link> that are ready to
          connect.
        </p>

        <h2>How Billing Works</h2>
        <ul>
          <li>
            Plans are priced per user and billed at company level, so team
            members never pay separately.
          </li>
          <li>You can be billed in INR or USD.</li>
          <li>You get a written quote before you pay.</li>
        </ul>

        <h2>How TracktCRM Pricing Compares</h2>
        <p>
          Pipedrive and other global CRMs publish dollar prices per user.
          TracktCRM can be billed in rupees and includes WhatsApp workflows and
          AI lead response in the plan. See the honest side-by-side on our{" "}
          <Link href="/pipedrive-alternative">Pipedrive alternative</Link> page,
          and the full product overview on our{" "}
          <Link href="/crm-software">CRM software</Link> page.
        </p>

        <h2>Pricing for Real Estate, Education, Agencies and Recruiters</h2>
        <p>
          The same plans work for every industry. See how TracktCRM fits{" "}
          <Link href="/industries/real-estate-crm">real estate</Link>,{" "}
          <Link href="/industries/education-crm">education</Link>,{" "}
          <Link href="/industries/crm-for-agencies">agencies</Link> and{" "}
          <Link href="/industries/crm-for-recruitment">recruitment</Link>.
        </p>

        <h2>CRM Pricing FAQs</h2>
      </article>

      <div className="faq-list re-faq-list">
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

      <section className="cta-section prose-cta" id="demo">
        <div className="cta">
          <div>
            <h2>Start Free, Then Pick a Plan</h2>
            <p>
              Start a free 1 month trial with no credit card, or talk to us
              about your team size and channels. Email{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> for a
              written quote.
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
    </ContentPage>
  );
}
