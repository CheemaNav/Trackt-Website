import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  ChannelSnoozeIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  MobileIcon,
  ProjectPipelineIcon,
  ProposalIcon,
  ReportIcon,
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
  CRM_TYPES,
  CS_FAQS,
  FEATURES,
  GETTING_STARTED,
  INTEGRATION_LINES,
  PROCESS_STEPS,
  SIMPLE_POINTS,
  WHAT_IS_JOBS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  pipeline: ProjectPipelineIcon,
  automation: ChannelSnoozeIcon,
  ai: AiLeadIcon,
  inbox: ChannelWhatsAppIcon,
  forms: ProposalIcon,
  reporting: ReportIcon,
  mobile: MobileIcon,
};

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const pageTitle = "CRM Software India: Leads, Pipeline & Follow-Ups | TracktCRM";
const pageDescription =
  "CRM software for Indian teams: capture leads from WhatsApp and ads, reply in seconds with AI, and track every deal in one pipeline. Try the CRM free.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/crm-software",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/crm-software`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM CRM software for Indian teams: pipeline and shared inbox",
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
    title: pageTitle,
    description: pageDescription,
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
              Simple CRM Software for Indian Teams That Captures Every Lead{" "}
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
                Try the CRM free
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
                Try the CRM free
              </span>
              <span className="trust-item">
                <span className="trust-check" aria-hidden="true">
                  <CheckIcon size={11} />
                </span>
                One company plan, so team members never pay separately
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
            <h2 className="h2">What Is CRM Software?</h2>
            <p className="re-section-intro">
              CRM software, short for customer relationship management software,
              keeps every lead, customer and conversation in one place, tracks
              where each deal stands, and reminds your team what to do next. It
              is the shared record your whole team works from, instead of
              spreadsheets, chat threads and personal inboxes.
            </p>
            <p className="re-section-intro">A good CRM does four jobs:</p>
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
            Any team that handles leads on more than one channel benefits, from
            small businesses and startups to agencies, consultants, freelancers
            and sales teams in{" "}
            <a href="/industries/real-estate-crm">real estate</a> and{" "}
            <a href="/industries/education-crm">education</a>.
          </p>
        </section>

        <section className="section re-band reveal" id="types">
          <div className="re-section-head is-wide">
            <p className="kicker">TYPES OF CRM</p>
            <h2 className="h2">
              Types of CRM Software: Operational, Analytical and Collaborative
            </h2>
            <p className="re-section-intro">
              CRM software is usually grouped into three types. Most teams need
              a mix.
            </p>
          </div>
          <div className="re-choose-grid is-three">
            {CRM_TYPES.map((item) => (
              <article className="re-choose-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">
              CRM Software Features for Small and Growing Teams
            </h2>
          </div>
          <div className="re-feature-grid is-balanced">
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

        <section className="section re-band reveal" id="process">
          <div className="re-section-head">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">
              How CRM Software Works: From First Enquiry to Closed Deal
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

        <section className="section reveal" id="choosing">
          <div className="re-section-head is-wide">
            <p className="kicker">BEST CRM SOFTWARE</p>
            <h2 className="h2">
              How to Choose the Best CRM Software for Your Team
            </h2>
            <p className="re-section-intro">
              There is no single best CRM software for everyone. The best CRM is
              the one your team opens every day. Check these six things when you
              compare options:
            </p>
          </div>
          <div className="re-choose-grid">
            {CHOOSING_POINTS.map((item) => (
              <article className="re-choose-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>
                  {item.body}
                  {item.href ? (
                    <>
                      {" "}
                      <a href={item.href}>{item.linkLabel}</a>.
                    </>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="compare">
          <div className="re-section-head is-wide">
            <p className="kicker">CRM VS SPREADSHEET</p>
            <h2 className="h2">
              CRM vs Spreadsheet: When Is It Time to Switch?
            </h2>
            <p className="re-section-intro">
              A spreadsheet is a fine place to start. It stops working when
              leads arrive from several channels, more than one person needs the
              same information, or follow-ups depend on someone remembering.
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

        <section className="section reveal" id="simple">
          <div className="re-section-head is-wide">
            <p className="kicker">SIMPLE CRM</p>
            <h2 className="h2">A Simple CRM Your Team Will Actually Use</h2>
            <p className="re-section-intro">
              Many teams abandon their CRM because it is too complicated.
              TracktCRM keeps it simple: one pipeline view, one inbox, and
              automation that runs in the background. A CRM that is easy to use
              gets updated, and a CRM that gets updated gives you numbers you
              can trust.
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

        <section className="section re-band reveal" id="who">
          <div className="re-section-head is-wide">
            <p className="kicker">WHO IT&apos;S FOR</p>
            <h2 className="h2">
              <a className="industries-head-link" href="/industries">
                CRM Software for Small Businesses, Startups, Agencies, Real
                Estate and Education
              </a>
            </h2>
            <p className="re-section-intro">
              Dedicated setups also cover recruitment, insurance, automotive and
              healthcare.{" "}
              <a href="/industries">See every industry TracktCRM supports</a>.
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

        <section className="section reveal" id="getting-started">
          <div className="re-section-head">
            <p className="kicker">GETTING STARTED</p>
            <h2 className="h2">Getting Started: Import Your Leads and Go Live</h2>
          </div>
          <div className="re-process-grid">
            {GETTING_STARTED.map((step) => (
              <article className="re-process-card" key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="pricing">
          <div className="re-section-head is-wide">
            <p className="kicker">PRICING</p>
            <h2 className="h2">CRM Software Pricing in India</h2>
            <p className="re-section-intro">
              Try the CRM free. After that, your company
              moves to a per-user plan billed at the company level, in INR or
              USD, so team members never pay separately. Plans depend on seats,
              channels and volume.
            </p>
            <p className="re-section-intro">
              <a href="/pricing">See the pricing page for details</a>.
            </p>
          </div>
        </section>

        <section className="section reveal" id="integrations">
          <div className="int-wrap">
            <div className="int-center">
              <h2>
                <span className="accent int-cap">CRM Integrations</span>:
                WhatsApp, Gmail, Google Calendar,{" "}
                <span className="orange int-cap">Meta Ads</span> and More
              </h2>
              <p className="int-sub">
                Connect the tools your team already uses.
              </p>
              <a
                className="int-cta"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the CRM free
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
          <ul className="cs-int-lines">
            {INTEGRATION_LINES.map((item) => (
              <li key={item.name}>
                <strong>{item.name}:</strong> {item.body}
              </li>
            ))}
          </ul>
          <p className="int-note">
            <a href="/integrations">
              Browse all CRM integrations
              <span className="int-note-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </p>
        </section>

        <section className="section re-band reveal" id="security">
          <div className="re-section-head is-wide">
            <p className="kicker">SECURITY</p>
            <h2 className="h2">Data Security and Privacy</h2>
            <p className="re-section-intro">
              Your leads and customer conversations are business data.
              TracktCRM lets you control who in your team can see what, and you
              decide which messages go out. India&apos;s Digital Personal Data
              Protection Act, 2023 applies to the personal data you store, so
              keep consent records for the people you contact.
            </p>
          </div>
        </section>

        <section className="section reveal" id="proof">
          <p className="kicker is-centered">SEE IT IN ACTION</p>
          <h2 className="h2 is-centered">
            See a Pipeline and Inbox Working Together
          </h2>
          <p className="re-section-intro is-centered">
            See every deal stage next to the conversation, so lead management
            stays inside the CRM and not in a spreadsheet or chat app.
          </p>
          <div className="cs-demo-grid">
            <figure className="re-shot">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board with deals in New, Won, Lost and Junk stages"
                width={1383}
                height={695}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="re-shot">
              <img
                src="/assets/whatsapp/whatsapp-lead-management.png"
                alt="TracktCRM deal record with its pipeline stage and the WhatsApp, email and call conversation on the lead"
                width={1820}
                height={864}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">CRM Software FAQs</h2>
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
              <h2>Try the CRM Free</h2>
              <p>
                Set up your pipeline, capture your first leads and see the AI
                reply in seconds. Or book a demo and we will walk through it
                with your own sales process.
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
              <BookDemoButton className="btn-ghost">Book a Demo</BookDemoButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
