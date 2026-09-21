import Link from "next/link";
import ContentPage from "../components/content-page";
import { FaqJsonLd } from "../json-ld";
import { CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

const FAQS = [
  {
    q: "How do I start a trial?",
    a: "Open the contact page, send a message asking for a trial, or book a 30-minute demo and we will provision access.",
  },
  {
    q: "Where do I log in?",
    a: "Use https://app.tracktcrm.com with the credentials we issue after signup.",
  },
  {
    q: "How do I get support?",
    a: `Email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or WhatsApp during ${CONTACT.supportHours}.`,
  },
];

export const metadata = {
  title: "Help Center",
  description:
    "Get help with TracktCRM - login, free trial, demos, integrations and support contact details.",
  alternates: { canonical: "/help" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/help`,
    siteName: SITE_NAME,
    title: "Help Center | TracktCRM",
    description: "TracktCRM support, login and trial help.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TracktCRM help" }],
  },
};

export default function HelpPage() {
  return (
    <ContentPage
      badge="HELP CENTER"
      title="How can we help?"
      lead="Quick answers for trials, login and support. For everything else, talk to the team."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Help", href: "/help" },
      ]}
      schema={<FaqJsonLd id="schema-help-faq" faqs={FAQS} />}
    >
      <div className="help-links">
        <Link href="https://app.tracktcrm.com" target="_blank" rel="noopener noreferrer">
          Open app login
        </Link>
        <Link href="/pricing">Pricing &amp; trial</Link>
        <Link href="/contact">Book a demo</Link>
        <Link href="/ai-crm">AI sales assistant guide</Link>
        <Link href="/real-estate-crm">Real estate CRM guide</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>

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

      <article className="prose-block">
        <h2>Still stuck?</h2>
        <p>
          Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or
          message us on <Link href="/contact">the contact form</Link>. We reply
          within one business day.
        </p>
      </article>
    </ContentPage>
  );
}
