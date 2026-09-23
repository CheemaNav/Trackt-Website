import Link from "next/link";
import ContentPage from "../components/content-page";
import { FaqJsonLd } from "../json-ld";
import { SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

const FAQS = [
  {
    q: "Is TracktCRM a good Pipedrive alternative?",
    a: "Yes for teams that need WhatsApp-native AI lead response, automated follow-up calls and simpler pricing for small sales orgs. Pipedrive remains strong for classic pipeline CRM workflows.",
  },
  {
    q: "Can I migrate from Pipedrive?",
    a: "Yes. On onboarding we help import leads, deals and pipeline stages so you are not starting from a blank spreadsheet.",
  },
  {
    q: "Does TracktCRM replace WhatsApp Business?",
    a: "No. It works with WhatsApp workflows so conversations and CRM stages stay connected.",
  },
];

export const metadata = {
  title: "Pipedrive Alternative for AI Lead Response",
  description:
    "Looking for a Pipedrive alternative? Compare TracktCRM for WhatsApp-native AI lead response, automated follow-ups and affordable CRM for small teams.",
  alternates: { canonical: "/pipedrive-alternative" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/pipedrive-alternative`,
    siteName: SITE_NAME,
    title: "Pipedrive Alternative | TracktCRM",
    description:
      "Compare TracktCRM vs Pipedrive for AI lead response, WhatsApp and small-team CRM needs.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM as a Pipedrive alternative",
      },
    ],
  },
};

export default function PipedriveAlternativePage() {
  return (
    <ContentPage
      badge="COMPARE"
      title="A Pipedrive alternative built around instant lead response"
      lead="Pipedrive is a strong sales CRM. TracktCRM is for teams that also need WhatsApp-native AI replies, automated follow-up calls and simpler evaluation pricing."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Pipedrive alternative", href: "/pipedrive-alternative" },
      ]}
      schema={<FaqJsonLd id="schema-pipedrive-faq" faqs={FAQS} />}
    >
      <article className="prose-block">
        <p className="content-meta">
          Last verified: September 2026 · Based on publicly documented product
          positioning. Confirm current features and pricing with each vendor.
        </p>

        <h2>Who should consider switching</h2>
        <ul>
          <li>Leads arrive on WhatsApp, forms and ads after hours</li>
          <li>You want an <Link href="/industries/ai-crm">AI sales assistant</Link> that acts, not only reports</li>
          <li>You need real-estate or SMB pipelines without enterprise complexity</li>
          <li>You are comparing affordable CRM alternatives for a smaller team</li>
        </ul>

        <h2>Feature and trade-off comparison</h2>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Need</th>
                <th>Pipedrive</th>
                <th>TracktCRM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Classic deal pipeline</td>
                <td>Mature, widely adopted</td>
                <td>Included with simpler setup</td>
              </tr>
              <tr>
                <td>Instant multi-channel reply</td>
                <td>Depends on add-ons / stack</td>
                <td>Built-in WhatsApp, email, SMS AI response</td>
              </tr>
              <tr>
                <td>Automated follow-up calls</td>
                <td>Not a core native flow</td>
                <td>Part of the AI hand-off</td>
              </tr>
              <tr>
                <td>Real estate workflows</td>
                <td>Configurable</td>
                <td>
                  Ready-made on{" "}
                  <Link href="/industries/real-estate-crm">/industries/real-estate-crm</Link>
                </td>
              </tr>
              <tr>
                <td>Evaluation</td>
                <td>Paid plans by seats/features</td>
                <td>
                  <Link href="/pricing">1-month free trial</Link>, then quote
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Honest trade-offs</h2>
        <p>
          If your team already runs a deep Pipedrive ecosystem with many
          marketplace apps, migrating has a cost. TracktCRM wins when response
          speed and WhatsApp are the bottleneck - not when you only need a
          polished pipeline UI.
        </p>

        <h2>Migration steps</h2>
        <ol>
          <li>Book a 30-minute demo and map stages and sources</li>
          <li>Import leads and open deals</li>
          <li>Connect WhatsApp / email / forms</li>
          <li>Run the free trial on live enquiries before cutting over</li>
        </ol>

        <p>
          <Link className="btn btn-primary" href="/contact">
            Talk to sales about switching
          </Link>
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
