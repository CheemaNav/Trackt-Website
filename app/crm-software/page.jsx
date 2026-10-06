import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  BrokerIcon,
  CaptureIcon,
  ChannelSnoozeIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  FieldMessageIcon,
  ProjectPipelineIcon,
} from "../icons";
import RevealInit from "../components/reveal-init";
import { BookDemoButton } from "../components/demo-request-provider";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../site";
import { BreadcrumbJsonLd, CrmSoftwareJsonLd } from "../json-ld";
import { INTEGRATIONS } from "../home-data";
import {
  AUDIENCES,
  CHOOSING_POINTS,
  COMPARE_ROWS,
  CS_FAQS,
  FEATURES,
  PROCESS_STEPS,
  SIMPLE_POINTS,
  TESTIMONIALS,
  WHAT_IS_JOBS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  pipeline: ProjectPipelineIcon,
  automation: ChannelSnoozeIcon,
  ai: AiLeadIcon,
  inbox: ChannelWhatsAppIcon,
  reporting: FieldMessageIcon,
  mobile: BrokerIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "CRM Software for Leads, Pipeline & Follow-Ups | TracktCRM",
  },
  description:
    "TracktCRM is simple, AI-powered CRM software that captures leads, replies in seconds and tracks every deal in one pipeline. Start your free 1 month trial.",
  alternates: {
    canonical: "/crm-software",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/crm-software`,
    siteName: SITE_NAME,
    title: "TracktCRM — Simple, AI-Powered CRM Software",
    description:
      "Capture leads, reply in seconds and track every deal in one simple CRM.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM CRM software pipeline and inbox",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "TracktCRM — Simple, AI-Powered CRM Software",
    description:
      "Capture leads, reply in seconds and track every deal in one simple CRM.",
    images: [ogImage],
  },
};

export default function CrmSoftwarePage() {
  return (
    <div className="home cs-page">
      <CrmSoftwareJsonLd faqs={CS_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "CRM Software", href: "/crm-software" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="hero cs-hero reveal" id="top">
          <div className="hero-copy">
            <div className="badge">
              <span className="pulse" aria-hidden="true" />
              CRM SOFTWARE
            </div>
            <h1 className="h1">
              Simple CRM Software That Captures Every Lead{" "}
              <span className="cs-hero-accent">and Closes More Deals</span>
            </h1>
            <p className="lead">
              TracktCRM is customer relationship management software for small
              and growing teams. Capture leads from every channel, reply in
              seconds with AI, and track every deal in one pipeline, without
              the complexity of enterprise CRM.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
              <BookDemoButton className="btn btn-outline">
                Book a Demo
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </BookDemoButton>
            </div>
            <div className="trust-row">
              <span className="trust-item">
                <span className="trust-check" aria-hidden="true">
                  <CheckIcon size={11} />
                </span>
                Free 1 month trial
              </span>
              <span className="trust-item">
                <span className="trust-check" aria-hidden="true">
                  <CheckIcon size={11} />
                </span>
                One company plan, team members never pay separately
              </span>
            </div>
          </div>
          <div className="hero-showcase">
            <div className="hero-visual">
              <figure className="cs-hero-shot">
                <img
                  src="/assets/dashboard.png"
                  alt="TracktCRM CRM software dashboard showing leads, pipeline stages and follow-ups"
                  width={1600}
                  height={1000}
                  fetchPriority="high"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section reveal" id="what-is">
          <div className="re-section-head is-wide">
            <p className="kicker">WHAT IS A CRM</p>
            <h2 className="h2">What is CRM software?</h2>
            <p className="re-section-intro">
              CRM software, short for customer relationship management software,
              is a system that keeps every lead, customer and conversation in
              one place, tracks where each deal stands, and reminds your team
              what to do next. So what is a CRM in practice? It is the shared
              record your whole team works from, instead of spreadsheets, chat
              threads and personal inboxes.
            </p>
            <p className="re-section-intro">
              A good CRM does four jobs:
            </p>
          </div>
          <div className="re-point-grid">
            {WHAT_IS_JOBS.map((point) => (
              <article className="re-point-card" key={point.title}>
                <span className="re-point-check" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
          <p className="cs-footnote">
            Any team that handles leads across more than one channel benefits:
            small businesses, startups, agencies, consultants, freelancers and
            sales teams in industries like{" "}
            <a href="/industries/real-estate-crm">real estate</a> and{" "}
            <a href="/industries/education-crm">education</a>.
          </p>
        </section>

        <section className="section re-band reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">
              CRM software features your team will actually use
            </h2>
          </div>
          <div className="re-feature-grid">
            {FEATURES.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon] || CaptureIcon;
              return (
                <article className="re-feature-card" key={feature.title}>
                  <div className="re-feature-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>
                    {feature.body}
                    {feature.href ? (
                      <>
                        {" "}
                        <a href={feature.href}>{feature.linkLabel}</a>.
                      </>
                    ) : null}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section reveal" id="process">
          <div className="re-section-head">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">
              How TracktCRM works, from first enquiry to closed deal
            </h2>
          </div>
          <div className="re-process-grid">
            {PROCESS_STEPS.map((step) => (
              <article className="re-process-card" key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="choosing">
          <div className="re-section-head is-wide">
            <p className="kicker">BEST CRM SOFTWARE</p>
            <h2 className="h2">
              What makes the best CRM software for your team?
            </h2>
            <p className="re-section-intro">
              There is no single best CRM software for everyone. The best CRM is
              the one your team will open every day. When you compare options,
              check these six things:
            </p>
          </div>
          <div className="re-choose-grid">
            {CHOOSING_POINTS.map((item) => (
              <article className="re-choose-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="compare">
          <div className="re-section-head is-wide">
            <p className="kicker">CRM VS SPREADSHEET</p>
            <h2 className="h2">
              CRM vs spreadsheet: when is it time to switch?
            </h2>
            <p className="re-section-intro">
              A spreadsheet is a fine place to start. It stops working when
              leads arrive from several channels, more than one person needs the
              same information, or follow-ups depend on someone remembering.
              Here is how the options compare:
            </p>
          </div>
          <div className="compare-table-wrap cs-compare-wrap">
            <table className="compare-table cs-compare-table">
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Spreadsheet</th>
                  <th>Typical enterprise CRM</th>
                  <th>TracktCRM</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.need}>
                    <th scope="row">{row.need}</th>
                    <td>{row.spreadsheet}</td>
                    <td>{row.enterprise}</td>
                    <td>{row.trackt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cs-footnote">
            Comparing a named product too? See our{" "}
            <a href="/pipedrive-alternative">Pipedrive alternative</a>.
          </p>
        </section>

        <section className="section re-band reveal" id="simple">
          <div className="re-section-head is-wide">
            <p className="kicker">SIMPLE CRM</p>
            <h2 className="h2">A simple CRM your team will actually use</h2>
            <p className="re-section-intro">
              Many teams abandon their CRM because it is complicated. TracktCRM
              is built to be a simple CRM: one pipeline view, one inbox, and
              automation that runs in the background. An easy to use CRM gets
              updated, and a CRM that gets updated gives you numbers you can
              trust.
            </p>
          </div>
          <div className="cs-simple-grid">
            {SIMPLE_POINTS.map((item) => (
              <article className="cs-simple-card" key={item.title}>
                <span className="re-point-check" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="who">
          <div className="re-section-head is-wide">
            <p className="kicker">WHO IT&apos;S FOR</p>
            <h2 className="h2">
              <a className="industries-head-link" href="/industries">
                CRM software for every kind of sales team
              </a>
            </h2>
            <p className="re-section-intro">
              Dedicated setups for real estate, education, agencies,
              recruitment, insurance, automotive and healthcare. <a href="/industries">See every industry TracktCRM
              supports</a>.
            </p>
          </div>
          <div className="cs-audience-grid">
            {AUDIENCES.map((item) => (
              <article className="cs-audience-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.href ? (
                  <a href={item.href}>{item.linkLabel}</a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="pricing">
          <div className="re-section-head is-wide">
            <p className="kicker">PRICING</p>
            <h2 className="h2">
              Affordable CRM software with one company-level plan
            </h2>
            <p className="re-section-intro">
              Start with a free 1 month trial. After the trial, your company
              moves to a per-user plan billed at the company level, so team
              members never pay separately. It is affordable CRM software
              designed for teams that are still growing.
            </p>
            <p className="re-section-intro">
              <a href="/pricing">See TracktCRM pricing and trial details</a>.
            </p>
          </div>
        </section>

        <section className="section reveal" id="integrations">
          <div className="int-wrap">
            <div className="int-center">
              <h2>
                <span className="accent int-cap">Connects</span> with the{" "}
                <span className="orange int-cap">tools</span>
                <br />
                you already use
              </h2>
              <a
                className="int-cta"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
                <span className="int-cta-arrow">
                  <ArrowIcon />
                </span>
              </a>
            </div>
            <div className="int-grid">
              {INTEGRATIONS.map((name, index) => (
                <div
                  className={`int-cell${name ? "" : " is-empty"}`}
                  key={`${name || "empty"}-${index}`}
                  aria-hidden={name ? undefined : true}
                >
                  {name ? <BrandMark name={name} /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="proof">
          <p className="kicker is-centered">SEE IT IN ACTION</p>
          <h2 className="h2 is-centered">
            Pipeline view alongside a unified inbox
          </h2>
          <p className="re-section-intro is-centered">
            See every deal stage next to the conversation — so lead management
            stays inside the CRM, not in a separate spreadsheet or chat app.
          </p>
          <figure className="re-shot re-shot-wide">
            <img
              src="/assets/leadmanage.png"
              alt="TracktCRM pipeline view next to a unified inbox for WhatsApp, email and SMS"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="section reveal" id="testimonial">
          <p className="kicker is-centered">SOCIAL PROOF</p>
          <h2 className="h2 is-centered">
            Teams that replaced spreadsheets with one pipeline
          </h2>
          <div className="re-testimonial-grid">
            {TESTIMONIALS.map((item) => (
              <div className="re-testimonial" key={item.quote}>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <cite>- {item.attribution}</cite>
              </div>
            ))}
          </div>
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <div className="faq-list re-faq-list">
            {CS_FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
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
              <h2>Try TracktCRM with a free 1 month trial</h2>
              <p>
                Set up your pipeline, capture your first leads and see AI reply
                in seconds. Or book a demo and we will walk through it with your
                own sales process.
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
              <BookDemoButton className="btn-ghost">Book a Demo</BookDemoButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
