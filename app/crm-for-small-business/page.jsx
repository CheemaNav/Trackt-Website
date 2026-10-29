import Link from "next/link";
import {
  ArrowIcon,
  CaptureIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  ClientIcon,
  ProjectPipelineIcon,
  ReminderIcon,
  ReportIcon,
} from "../icons";
import RevealInit from "../components/reveal-init";
import { INDUSTRY_ICONS } from "../components/related-industries";
import { BookDemoButton } from "../components/demo-request-provider";
import { APP_REGISTER_URL } from "../site";
import { BreadcrumbJsonLd, FeatureSoftwareJsonLd } from "../json-ld";
import {
  CHOOSE_POINTS,
  FAQS,
  FEATURES,
  INDUSTRIES,
  PRICING_ROWS,
  SETUP_STEPS,
  SIGNS,
  SWITCH_LINKS,
} from "./data";
import { buildMetadata } from "@/lib/seo";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  pipeline: ProjectPipelineIcon,
  reminder: ReminderIcon,
  whatsapp: ChannelWhatsAppIcon,
  contacts: ClientIcon,
  report: ReportIcon,
};

export const metadata = buildMetadata("/crm-for-small-business");

export default function CrmForSmallBusinessPage() {
  return (
    <div className="home">
      <FeatureSoftwareJsonLd id="schema-small-business" path="/crm-for-small-business" faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "CRM for Small Business", href: "/crm-for-small-business" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span aria-current="page">CRM for Small Business</span>
                  </li>
                </ol>
              </nav>
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                SMALL BUSINESS CRM
              </div>
              <h1 className="re-banner-title">
                CRM for Small Business That Your Team Will <span>Actually Use</span>
              </h1>
              <p className="re-banner-sub">
                TracktCRM is a simple CRM for small business owners and small
                sales teams. Every enquiry from your website, ads, WhatsApp and
                lead portals lands in one place, gets an owner and a follow-up
                reminder, and moves through your pipeline until it becomes a
                customer. No Excel sheets, no lost WhatsApp chats, no
                complicated setup.
              </p>
              <div className="re-banner-ctas">
                <a
                  className="btn btn-primary"
                  href={APP_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start free
                  <span className="btn-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
                <BookDemoButton className="btn btn-outline">Book a demo</BookDemoButton>
              </div>
              <p className="re-banner-trust">
                Free plan for 1 user · No credit card · Cancel anytime
              </p>
            </div>
            <figure className="re-banner-media re-banner-media-ui">
              <img
                src="/assets/crm-for-small-business-hero.webp"
                alt="TracktCRM small business CRM dashboard showing leads, pipeline stages and today's follow-ups"
                width={1280}
                height={720}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="signs">
          <div className="re-split">
            <div className="re-split-copy">
              <p className="kicker">SIGNS YOU NEED A CRM</p>
              <h2 className="h2">Signs your small business needs a CRM</h2>
              <p className="re-section-intro">
                Most small businesses start with Excel, a notebook and WhatsApp.
                That works for the first 20 customers. After that, leads start
                slipping through. If any of these sound familiar, it is time for
                a CRM:
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/crm-for-small-business-before-after.webp"
                alt="Before and after: scattered leads in Excel and WhatsApp versus one small business CRM"
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="re-point-grid">
            {SIGNS.map((sign) => (
              <article className="re-point-card industry-point-card" key={sign.title}>
                <span className="re-point-check" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <p>
                  <strong>{sign.title}</strong> {sign.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">What TracktCRM does for small businesses</h2>
            <p className="re-section-intro industry-wide-intro">
              TracktCRM is customer relationship management software for small
              business teams that want to sell more without adding admin work.
              Everything you need is in one screen.
            </p>
          </div>
          <div className="re-feature-grid industry-feature-grid">
            {FEATURES.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <article className="re-feature-card" key={feature.title}>
                  <div className="re-feature-icon">
                    <Icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>
                    {feature.before}
                    {feature.href ? (
                      <>
                        <Link href={feature.href}>{feature.linkLabel}</Link>
                        {feature.after}
                      </>
                    ) : null}
                  </p>
                </article>
              );
            })}
          </div>
          <p className="industry-page-links">
            Works in <Link href="/cloud-based-crm">any browser</Link> on laptop and
            mobile, so your team can update leads from the office, a site visit
            or the road.
          </p>
        </section>

        <section className="section re-band reveal" id="pricing">
          <div className="re-section-head is-wide">
            <p className="kicker">PRICING</p>
            <h2 className="h2">Small business CRM pricing that grows with you</h2>
            <p className="re-section-intro">
              Start with the free CRM for small business and upgrade only when
              your team grows. All paid plans are priced per user, billed
              yearly, with no forced contracts.
            </p>
          </div>
          <div
            className="compare-table-wrap cs-compare-wrap"
            role="region"
            aria-label="Small business CRM pricing, scroll sideways on small screens"
            tabIndex={0}
          >
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Plan</th>
                  <th scope="col">Price</th>
                  <th scope="col">Best for</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((row) => (
                  <tr key={row.plan}>
                    <th scope="row">{row.plan}</th>
                    <td>{row.price}</td>
                    <td>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cs-footnote">
            Prices billed yearly. Taxes may apply. WhatsApp message charges from
            Meta are separate.
          </p>
          <div className="re-banner-ctas">
            <Link className="btn btn-outline" href="/pricing">
              See full pricing
            </Link>
          </div>
        </section>

        <section className="section reveal" id="setup">
          <div className="re-section-head">
            <p className="kicker">GETTING STARTED</p>
            <h2 className="h2">How to set up a CRM for your small business in 4 steps</h2>
          </div>
          <figure className="re-photo re-photo-contain">
            <img
              src="/assets/crm-for-small-business-setup-steps.webp"
              alt="Four steps to set up TracktCRM for a small business: sign up, add leads, set your pipeline, follow up"
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="re-process-grid">
            {SETUP_STEPS.map((step) => (
              <article className="re-process-card" key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="industries">
          <div className="re-section-head is-wide">
            <p className="kicker">WHO IT&apos;S FOR</p>
            <h2 className="h2">Which small businesses use TracktCRM</h2>
            <p className="re-section-intro">
              TracktCRM works as a small business CRM in any industry where
              leads come in and need quick follow-up.
            </p>
          </div>
          <div className="related-industries-grid">
            {INDUSTRIES.map((item) => {
              const Icon = INDUSTRY_ICONS[item.icon];
              return (
                <Link className="related-industry-card" href={item.href} key={item.href}>
                  <span className="related-industry-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span className="related-industry-copy">
                    <strong>{item.label}</strong>
                  </span>
                  <span className="related-industry-arrow" aria-hidden="true">
                    <ArrowIcon size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="industry-page-links">
            Just starting out? TracktCRM also works as a CRM for startups and
            small companies with 1 to 50 users.
          </p>
        </section>

        <section className="section reveal" id="choosing">
          <div className="re-section-head is-wide">
            <p className="kicker">BUYER&apos;S GUIDE</p>
            <h2 className="h2">How to choose the best CRM for small business</h2>
            <p className="re-section-intro">
              The best CRM for small business is the one your team opens every
              day. Before you pick one, check these 6 things:
            </p>
          </div>
          <div className="re-choose-grid is-three">
            {CHOOSE_POINTS.map((point, index) => (
              <article className="re-choose-card" key={point.title}>
                <h3>
                  {index + 1}. {point.title}
                </h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
          <p className="industry-page-links">
            Still deciding between a CRM and a spreadsheet? Read our{" "}
            <Link href="/crm-vs-excel">CRM vs Excel comparison</Link>. Want the
            full shortlist? See our guide to the{" "}
            <Link href="/blog/best-crm-software-india">best CRM software</Link>.
            Looking for free options? Read about{" "}
            <Link href="/blog/free-crm-small-business">free CRM for small business</Link>.
          </p>
        </section>

        <section className="section re-band reveal" id="switch">
          <div className="re-section-head is-wide">
            <p className="kicker">SWITCHING</p>
            <h2 className="h2">Switching from another small business CRM?</h2>
            <p className="re-section-intro">
              Many teams move to TracktCRM from Zoho Bigin, HubSpot, Pipedrive
              or a spreadsheet when they want simpler follow-ups, WhatsApp built
              in and lower per-user pricing. We help you move your data.
            </p>
          </div>
          <p className="industry-page-links">
            {SWITCH_LINKS.map((item, index) => (
              <span key={item.href}>
                {index > 0 ? " · " : null}
                <Link href={item.href}>{item.label}</Link>
              </span>
            ))}
          </p>
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">CRM for small business FAQs</h2>
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
        </section>

        <section className="cta-section reveal" id="demo">
          <div className="cta">
            <div>
              <h2>Start free with a CRM built for small businesses</h2>
              <p>Set up in minutes. Free plan for 1 user, no credit card needed.</p>
            </div>
            <div className="cta-actions">
              <a
                className="btn-dark"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free
              </a>
              <BookDemoButton className="btn-ghost">Book a demo</BookDemoButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
