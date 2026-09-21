import Link from "next/link";
import ContentPage from "../components/content-page";
import { FaqJsonLd } from "../json-ld";
import { CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every feature is available on a free 1-month trial with no credit card required.",
  },
  {
    q: "Do you publish fixed list prices?",
    a: "Plans depend on seats, channels and volume. Start a trial or book a 30-minute demo for a quote in INR or USD.",
  },
  {
    q: "Are features gated by plan?",
    a: "Core CRM, AI lead response, WhatsApp workflows and reporting are included during the trial so you can evaluate the full product.",
  },
];

export const metadata = {
  title: {
    absolute: "TracktCRM Pricing | Free 1-Month Trial",
  },
  description:
    "Start a free 1-month TracktCRM trial with no credit card. Get transparent CRM pricing for your team in INR or USD after a short demo.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/pricing`,
    siteName: SITE_NAME,
    title: "TracktCRM Pricing | Free 1-Month Trial",
    description:
      "Free 1-month trial of TracktCRM. Talk to sales for seat-based plans in INR or USD.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TracktCRM pricing" }],
  },
};

export default function PricingPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE_NAME,
    description:
      "AI CRM software with lead response, pipeline management and WhatsApp workflows.",
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "INR",
      price: "0",
      description: "1-month free trial, then paid subscription plans",
      availability: "https://schema.org/InStock",
      category: "FreeTrial",
    },
  };

  return (
    <ContentPage
      badge="PRICING"
      title="Simple trial. Clear next step."
      lead="Start free for one month. When you are ready to continue, we share seat-based plans in INR or USD that match your channels and volume."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Pricing", href: "/pricing" },
      ]}
      schema={
        <>
          <script
            id="schema-pricing-offer"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
          />
          <FaqJsonLd id="schema-pricing-faq" faqs={FAQS} />
        </>
      }
    >
      <div className="pricing-grid">
        <article className="pricing-card is-featured">
          <p className="pricing-eyebrow">Start here</p>
          <h2>Free 1-month trial</h2>
          <p className="pricing-price">
            ₹0 <span>/ first month</span>
          </p>
          <ul>
            <li>Full CRM + AI lead response</li>
            <li>WhatsApp, email and SMS workflows</li>
            <li>Pipeline, reporting and forms</li>
            <li>No credit card required</li>
          </ul>
          <Link className="btn btn-primary" href="/contact">
            Start free trial
          </Link>
        </article>
        <article className="pricing-card">
          <p className="pricing-eyebrow">After trial</p>
          <h2>Paid plans</h2>
          <p className="pricing-price">
            Custom <span>INR / USD</span>
          </p>
          <ul>
            <li>Priced by seats and usage</li>
            <li>Same product features you trialled</li>
            <li>Onboarding and data migration help</li>
            <li>30-minute walkthrough before you buy</li>
          </ul>
          <Link className="btn btn-outline" href="/contact">
            Get a quote
          </Link>
        </article>
      </div>

      <article className="prose-block">
        <h2>What&apos;s included</h2>
        <p>
          TracktCRM is built so teams are not blocked by feature gates while
          evaluating. During the trial you can run real pipelines, connect
          channels, and test the{" "}
          <Link href="/ai-crm">AI sales assistant</Link> on live enquiries.
        </p>
        <h2>Need numbers for procurement?</h2>
        <p>
          Email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
          <Link href="/contact">book a demo</Link> and we will send a written
          quote with INR and USD options.
        </p>
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
    </ContentPage>
  );
}
