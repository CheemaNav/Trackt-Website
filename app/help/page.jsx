import Link from "next/link";
import ContentPage from "../components/content-page";
import { FaqJsonLd } from "../json-ld";
import { APP_LOGIN_URL, APP_REGISTER_URL, CONTACT } from "../site";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const FAQS = [
  {
    q: "How do I get started?",
    a: "Create a free account at https://dashboard.tracktcrm.com/register. Every new account starts on the Free plan for 1 user, with no credit card. You can also book a 30-minute demo and we will help you set up.",
  },
  {
    q: "Where do I log in?",
    a: "Use https://dashboard.tracktcrm.com/login with the credentials from signup.",
  },
  {
    q: "How do I get support?",
    a: `Email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or WhatsApp during ${CONTACT.supportHours}.`,
  },
];

export const metadata = buildMetadata("/help");

export default function HelpPage() {
  return (
    <ContentPage
      badge="HELP CENTER"
      title={PAGE_SEO["/help"].h1}
      lead="The TracktCRM Help Center has quick answers for sign-up, login and support. For everything else, talk to the team."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Help", href: "/help" },
      ]}
      schema={<FaqJsonLd id="schema-help-faq" faqs={FAQS} />}
    >
      <div className="help-links">
        <Link href={APP_LOGIN_URL} target="_blank" rel="noopener noreferrer">
          Open app login
        </Link>
        <Link href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer">
          Try the CRM free
        </Link>
        <Link href="/pricing">Pricing &amp; plans</Link>
        <Link href="/contact">Book a demo</Link>
        <Link href="/crm-software">CRM software</Link>
        <Link href="/integrations">Integrations</Link>
        <Link href="/industries/ai-crm">AI sales assistant guide</Link>
        <Link href="/industries/real-estate-crm">Real estate CRM guide</Link>
        <Link href="/industries/education-crm">Education CRM guide</Link>
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
          If the TracktCRM Help Center does not answer your question, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or
          message us on <Link href="/contact">the contact form</Link>. We reply
          within one business day.
        </p>
      </article>
    </ContentPage>
  );
}
