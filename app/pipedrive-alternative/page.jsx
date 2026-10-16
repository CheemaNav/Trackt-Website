import Link from "next/link";
import ContentPage from "../components/content-page";
import { ArrowIcon } from "../icons";
import { FaqJsonLd, WebPageJsonLd } from "../json-ld";
import { APP_REGISTER_URL } from "../site";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const SEO = PAGE_SEO["/pipedrive-alternative"];
const LAST_UPDATED = { iso: "2026-10-07", label: "7 October 2026" };

const SOURCES = [
  {
    label: "Pipedrive pricing",
    href: "https://www.pipedrive.com/en/pricing",
  },
  {
    label: "Pipedrive: how pricing works",
    href: "https://support.pipedrive.com/en/article/how-does-pricing-work-in-pipedrive",
  },
  {
    label: "Pipedrive: WhatsApp integration",
    href: "https://support.pipedrive.com/en/article/whatsapp-integration",
  },
  {
    label: "Pipedrive: CRM integrations hub",
    href: "https://www.pipedrive.com/en/crm/integrations",
  },
  {
    label: "Pipedrive: AI Sales Assistant",
    href: "https://www.pipedrive.com/en/features/ai-sales-assistant",
  },
];

const GLANCE_ROWS = [
  {
    label: "Best for",
    pipedrive:
      "Teams that want a mature, configurable sales pipeline and a large app marketplace",
    trackt:
      "Teams that sell on WhatsApp, need fast lead response and capture leads from regional lead portals",
  },
  {
    label: "Pipeline",
    pipedrive: "Deals, stages and activities, with deep customisation",
    trackt: "Visual pipeline with custom stages and a simple set-up",
  },
  {
    label: "WhatsApp",
    pipedrive:
      "Native WhatsApp integration on the Growth plan and above, currently in beta and not yet available to every customer",
    trackt:
      "Built around WhatsApp through the Business API, with a shared team inbox",
  },
  {
    label: "Instant lead response",
    pipedrive: "AI Sales Assistant that helps reps with recommendations",
    trackt:
      "AI replies to new leads in seconds and can place a follow-up call",
  },
  {
    label: "Regional lead portals",
    pipedrive:
      "Check the Pipedrive Marketplace for apps that connect specific portals",
    trackt:
      "99acres, Housing.com, MagicBricks, IndiaMART, Justdial and others",
  },
  {
    label: "Pricing",
    pipedrive:
      "Public per-seat plans from US$14 per seat per month billed annually, or US$24 billed monthly. Billing currency depends on your location",
    trackt:
      "Free plan for 1 user. Pro, Premium and All-in-One are per-user plans billed at company level and shown in your local currency",
  },
  {
    label: "Integrations",
    pipedrive: "500+ apps and integrations in its marketplace",
    trackt: "24 integrations, plus webhooks and custom forms",
  },
];

const FAQS = [
  {
    q: "Is TracktCRM a good Pipedrive alternative?",
    a: "It is a good fit for teams that need fast lead response, WhatsApp and leads from regional lead portals. Pipedrive remains strong for classic pipeline management and has a larger app marketplace.",
  },
  {
    q: "Can I migrate from Pipedrive?",
    a: "Yes. Our team helps you import contacts, companies, deals and stages so you do not start from a blank sheet.",
  },
  {
    q: "Does TracktCRM replace WhatsApp Business?",
    a: "TracktCRM connects to WhatsApp through the Business API. Your team sends and receives messages from the CRM, so you do not need to run the WhatsApp Business app separately.",
  },
  {
    q: "Is TracktCRM cheaper than Pipedrive?",
    a: "It depends on your team size and the plan you need. TracktCRM has a Free plan for 1 user, and Pro, Premium and All-in-One are priced per user per month and shown in your local currency. Pipedrive publishes per-seat plans from US$14 per seat per month billed annually. Compare both pricing pages, since prices change.",
  },
  {
    q: "Which currency are TracktCRM prices shown in?",
    a: "The pricing page shows every plan in your local currency, based on where you are browsing from.",
  },
  {
    q: "Can I try TracktCRM with my own leads?",
    a: "Yes. Start on the Free plan and run live enquiries before you upgrade. No credit card needed.",
  },
  {
    q: "Does TracktCRM have as many integrations as Pipedrive?",
    a: "No. Pipedrive has a much larger marketplace. TracktCRM offers 24 integrations focused on WhatsApp, regional lead portals, ads and payments, plus webhooks and custom work.",
  },
  {
    q: "What about support?",
    a: "You get onboarding and support from our team in Mohali, Punjab, India, who help set up your pipeline and move your data.",
  },
];

export const metadata = buildMetadata("/pipedrive-alternative");

export default function PipedriveAlternativePage() {
  return (
    <ContentPage
      badge="COMPARE"
      title={SEO.h1}
      lead="Pipedrive is a strong, mature sales CRM. TracktCRM is built for teams that need to reply to leads in seconds, work from WhatsApp, capture leads from regional lead portals and start on a free plan. This page compares the two honestly so you can decide."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Pipedrive alternative", href: "/pipedrive-alternative" },
      ]}
      schema={
        <>
          <WebPageJsonLd
            name={SEO.title}
            description={SEO.description}
            path="/pipedrive-alternative"
            dateModified={LAST_UPDATED.iso}
          />
          <FaqJsonLd id="schema-pipedrive-faq" faqs={FAQS} />
        </>
      }
    >
      <article className="prose-block">
        <p className="content-meta">
          Written by the TracktCRM team. Last updated{" "}
          <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.label}</time>. We are
          not affiliated with Pipedrive. Pipedrive details are taken from its
          public pages, <a href="#sources">linked below</a>.
        </p>

        <h2>TracktCRM vs Pipedrive at a Glance</h2>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th aria-label="Comparison" />
                <th>Pipedrive</th>
                <th>TracktCRM</th>
              </tr>
            </thead>
            <tbody>
              {GLANCE_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.pipedrive}</td>
                  <td>{row.trackt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <a href="#migration">See how to import from Pipedrive</a>
        </p>

        <h2>Who Should Consider Switching From Pipedrive</h2>
        <ul>
          <li>
            Most of your leads arrive on WhatsApp, forms and ads, often outside
            working hours
          </li>
          <li>
            You want every new lead answered in seconds, without waiting for a
            rep to log in
          </li>
          <li>
            You buy leads from 99acres, IndiaMART, Justdial or similar portals
            and want them in the CRM automatically
          </li>
          <li>You want a free plan to start and a clear per-user price after that</li>
          <li>
            You need <Link href="/industries/real-estate-crm">real estate CRM</Link>{" "}
            or <Link href="/industries/education-crm">education CRM</Link>{" "}
            pipelines without building them yourself
          </li>
        </ul>

        <h2>Who Should Stay With Pipedrive</h2>
        <ul>
          <li>
            You already use many Pipedrive marketplace apps that have no
            TracktCRM equivalent
          </li>
          <li>
            Your team depends on Pipedrive add-ons and the higher automation,
            report and custom field limits of its larger plans
          </li>
          <li>
            You sell mainly through email and calls in markets where WhatsApp is
            not central
          </li>
        </ul>
        <p>
          Switching has a cost. TracktCRM is the better fit when response speed
          and WhatsApp are your bottleneck, not when you only need a polished
          pipeline.
        </p>

        <h2>Pipedrive vs TracktCRM: Where They Differ</h2>
        <h3>Lead response and WhatsApp</h3>
        <p>
          TracktCRM replies to a new enquiry within seconds on WhatsApp and
          email, and can follow up by call. Replies and history stay on the
          lead. See the <Link href="/industries/ai-crm">AI CRM</Link> and{" "}
          <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> pages.
        </p>
        <h3>Pipeline and customisation</h3>
        <p>
          Both give you a visual pipeline with custom stages. Pipedrive offers
          more advanced customisation, with limits that grow on higher plans.
          TracktCRM focuses on getting a team live quickly.
        </p>
        <h3>Reporting</h3>
        <p>
          Both show pipeline and activity reports. TracktCRM adds response-time
          reports and rep scorecards out of the box.
        </p>
        <h3>Integrations</h3>
        <p>
          Pipedrive has a much larger marketplace. TracktCRM covers regional
          lead portals and marketplaces that many global tools do not, and offers
          webhooks and custom integrations. See{" "}
          <Link href="/integrations">all integrations</Link>.
        </p>
        <h3>Pricing and billing</h3>
        <p>
          Pipedrive publishes per-seat plans, with a lower rate for annual
          billing. TracktCRM has a Free plan for 1 user, and paid plans are
          billed per user at company level and shown in your local currency. See <Link href="/pricing">TracktCRM pricing</Link>.
        </p>
        <h3>Set-up and migration</h3>
        <p>
          Our team helps you map your stages and move your data, so you can run
          TracktCRM on live enquiries before switching over.
        </p>

        <h2 id="migration">How to Move From Pipedrive to TracktCRM</h2>
        <ol>
          <li>
            Export your data from Pipedrive (persons, organisations, deals and
            activities) as CSV.
          </li>
          <li>
            Book a 30-minute demo and map your Pipedrive stages and fields to
            TracktCRM.
          </li>
          <li>Import contacts, companies and open deals.</li>
          <li>Connect WhatsApp, email, forms and your ad accounts.</li>
          <li>
            Run TracktCRM on live enquiries, then switch your team over.
          </li>
        </ol>

        <div className="prose-ctas">
          <a
            className="btn btn-primary"
            href={APP_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the CRM free
            <span className="btn-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
          <Link className="btn btn-outline" href="/contact">
            Talk to us about switching
          </Link>
        </div>

        <h2 id="sources">Sources</h2>
        <p className="prose-sources">
          Pipedrive details checked on {LAST_UPDATED.label}. Plans and features
          change, so confirm current details on Pipedrive&apos;s own pages:
        </p>
        <ul className="prose-sources">
          {SOURCES.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>

        <h2>Pipedrive Alternative FAQs</h2>
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
            <h2>Try TracktCRM Free Alongside Pipedrive</h2>
            <p>
              Try the CRM free and run it on live enquiries, or book a
              demo and we will show how your pipeline would look. No credit
              card, no lock-in.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn-dark"
              href={APP_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the CRM free
            </a>
            <Link className="btn-ghost" href="/contact">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
