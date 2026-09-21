import Link from "next/link";
import ContentPage from "../components/content-page";
import { FaqJsonLd } from "../json-ld";
import { SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

const FAQS = [
  {
    q: "What is a WhatsApp CRM?",
    a: "A WhatsApp CRM connects Business WhatsApp conversations to lead records, pipelines and follow-ups so chats do not live only in a phone inbox.",
  },
  {
    q: "Does TracktCRM send WhatsApp messages automatically?",
    a: "Yes. The AI sales assistant can reply within seconds when an enquiry lands, then log the conversation on the lead.",
  },
  {
    q: "Is WhatsApp CRM only for real estate?",
    a: "No. Agencies, consultants and freelancers use the same WhatsApp-first workflows; real estate teams get extra site-visit and broker tools.",
  },
];

export const metadata = {
  title: "WhatsApp CRM for Sales Teams",
  description:
    "WhatsApp CRM software that captures leads, sends instant replies and keeps every chat in your sales pipeline. Try TracktCRM free for 1 month.",
  alternates: { canonical: "/whatsapp-crm" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/whatsapp-crm`,
    siteName: SITE_NAME,
    title: "WhatsApp CRM for Sales Teams | TracktCRM",
    description:
      "Capture WhatsApp leads, reply in seconds and manage follow-ups in one CRM pipeline.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM WhatsApp CRM",
      },
    ],
  },
};

export default function WhatsAppCrmPage() {
  return (
    <ContentPage
      badge="WHATSAPP CRM"
      title="WhatsApp CRM that answers leads while they are still warm"
      lead="Your buyers already message on WhatsApp. TracktCRM turns those chats into pipeline records with instant AI replies, reminders and a clean hand-off to reps."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "WhatsApp CRM", href: "/whatsapp-crm" },
      ]}
      schema={<FaqJsonLd id="schema-whatsapp-faq" faqs={FAQS} />}
    >
      <article className="prose-block">
        <h2>Why sales teams need a WhatsApp CRM</h2>
        <p>
          Phone-only WhatsApp inboxes lose context, ownership and reporting.
          A WhatsApp CRM keeps every enquiry tied to a lead, stage and owner -
          and pairs it with an{" "}
          <Link href="/ai-crm">AI sales assistant</Link> that responds in
          seconds across WhatsApp, email and SMS.
        </p>

        <h2>What TracktCRM does on WhatsApp</h2>
        <ul>
          <li>Capture enquiries from WhatsApp into the CRM instantly</li>
          <li>Send personalised first replies without waiting for a free agent</li>
          <li>Log transcripts against the deal for the next human touch</li>
          <li>Trigger follow-ups and reminders when chats go quiet</li>
          <li>
            Support industry flows such as{" "}
            <Link href="/real-estate-crm">site visits for property teams</Link>
          </li>
        </ul>

        <h2>Built for how Indian and global teams sell</h2>
        <p>
          WhatsApp is often the primary sales channel. TracktCRM is designed
          around that reality - not as a bolt-on afterthought to a desktop CRM.
          Pair it with forms, ads and portal leads so every source lands in one
          pipeline.
        </p>

        <h2>Get started</h2>
        <p>
          Start a <Link href="/pricing">free 1-month trial</Link> or{" "}
          <Link href="/contact">book a 30-minute demo</Link> to see WhatsApp
          lead capture and AI reply on your scripts.
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
