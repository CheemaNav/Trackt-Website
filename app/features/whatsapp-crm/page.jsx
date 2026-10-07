import {
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  ChannelSnoozeIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  FieldMessageIcon,
  LabelIcon,
  ProjectPipelineIcon,
  AiLeadIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import { BookDemoButton } from "../../components/demo-request-provider";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { BreadcrumbJsonLd, WhatsAppCrmJsonLd } from "../../json-ld";
import { INTEGRATIONS as HOME_INTEGRATIONS } from "../../home-data";
import {
  APP_VS_API_ROWS,
  CHOOSING_POINTS,
  FEATURES,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  WA_FAQS,
  WA_RULES,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  reply: ChannelWhatsAppIcon,
  templates: FieldMessageIcon,
  history: ProjectPipelineIcon,
  reminders: ChannelSnoozeIcon,
  inbox: AiLeadIcon,
  labels: LabelIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const pageTitle = "WhatsApp CRM India: Capture, Reply & Track Leads | TracktCRM";
const pageDescription =
  "WhatsApp CRM for Indian teams: capture every WhatsApp enquiry as a lead, reply from a shared inbox, automate follow-ups and track deals. Free 1 month trial.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/features/whatsapp-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/features/whatsapp-crm`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM WhatsApp CRM inbox and pipeline",
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

export default function WhatsAppCrmPage() {
  return (
    <div className="home wa-page">
      <WhatsAppCrmJsonLd faqs={WA_FAQS} features={FEATURES} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "WhatsApp CRM", href: "/features/whatsapp-crm" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="wa-hero reveal" id="top">
          <div className="wa-hero-inner wrap">
            <div className="wa-hero-copy">
              <div className="badge">
                <span className="pulse" aria-hidden="true" />
                WHATSAPP CRM
              </div>
              <h1 className="h1">
                WhatsApp CRM for India:{" "}
                <span className="wa-hero-accent">
                  Capture, Reply to and Track Every Lead in One Place
                </span>
              </h1>
              <p className="lead">
                Your customers already message you on WhatsApp. TracktCRM is a
                WhatsApp CRM that turns every enquiry into a lead, lets your team
                reply from a shared inbox, sends automatic first replies and
                keeps the whole conversation on the deal. Nobody has to switch
                between WhatsApp and the CRM.
              </p>
              <div className="hero-ctas">
                <a
                  className="btn btn-primary"
                  href={APP_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
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
                  No credit card required
                </span>
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
                  Works with the WhatsApp Business API
                </span>
              </div>
            </div>

            <figure className="wa-hero-visual">
              <img
                className="wa-hero-banner"
                src="/assets/whatsapp/whatsapp-crm-hero.png"
                alt="TracktCRM WhatsApp CRM on desktop and mobile, with chats and contact details in one place"
                width={1400}
                height={1000}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="wa-section wa-problem reveal" id="problem">
          <div className="wrap wa-problem-grid">
            <div className="wa-problem-intro">
              <p className="kicker">THE WHATSAPP PROBLEM</p>
              <h2 className="h2">Why Most CRMs Handle WhatsApp Badly</h2>
              <p className="lead">
                Many CRMs offer a WhatsApp &quot;integration&quot; that sits on
                top of software built for email and forms. That is not the same
                as a CRM designed around how WhatsApp conversations work. Four
                problems show up again and again:
              </p>
            </div>
            <ol className="wa-problem-list">
              {PROBLEM_POINTS.map((point, index) => (
                <li key={point.title}>
                  <span className="wa-problem-num">0{index + 1}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="wa-section reveal" id="what-is">
          <div className="wrap">
            <div className="wa-what-layout">
              <div className="wa-what-head">
                <p className="kicker">WHATSAPP CRM SOFTWARE</p>
                <h2 className="h2">What Is a WhatsApp CRM?</h2>
                <p className="lead">
                  A WhatsApp CRM is customer relationship management software
                  built around WhatsApp as a main channel, not added on as an
                  extra. It turns each WhatsApp message into a lead, lets your
                  team reply from one shared inbox, and keeps every conversation
                  on the lead or deal record.
                </p>
                <p className="lead">
                  Use it with our{" "}
                  <a href="/industries/ai-crm">AI sales assistant</a>, explore
                  our <a href="/crm-software">CRM software</a>, or see how{" "}
                  <a href="/industries/real-estate-crm">real estate teams</a>,{" "}
                  <a href="/industries/education-crm">admissions teams</a>,{" "}
                  <a href="/industries/crm-for-agencies">agencies</a> and{" "}
                  <a href="/industries/crm-for-recruitment">recruiters</a> use
                  WhatsApp.
                </p>
              </div>
              <figure className="wa-what-visual">
                <img
                  src="/assets/whatsapp/whatsapp-banner.png"
                  alt="WhatsApp and TracktCRM sync, with messages flowing both ways into the CRM"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div className="wa-pill-grid">
              {WHAT_IS_POINTS.map((point) => (
                <article className="wa-pill" key={point.title}>
                  <span className="wa-pill-check" aria-hidden="true">
                    <CheckIcon size={14} />
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wa-section wa-features reveal" id="features">
          <div className="wrap">
            <div className="wa-section-head">
              <p className="kicker">FEATURES</p>
              <h2 className="h2">WhatsApp CRM Features for Sales Teams</h2>
            </div>
            <div className="wa-bento">
              {FEATURES.map((feature, index) => {
                const Icon = FEATURE_ICONS[feature.icon] || CaptureIcon;
                return (
                  <article
                    className={`wa-bento-card wa-bento-${index + 1}`}
                    key={feature.title}
                  >
                    <div className="wa-bento-icon">
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
          </div>
        </section>

        <section className="wa-section reveal" id="whatsapp-rules">
          <div className="wrap">
            <div className="wa-section-head">
              <p className="kicker">WHATSAPP RULES</p>
              <h2 className="h2">
                WhatsApp Business Rules Every Sales Team Should Know
              </h2>
              <p className="lead">
                WhatsApp has its own rules, and a good WhatsApp CRM helps you
                follow them. In plain terms:
              </p>
            </div>
            <div className="re-point-grid wa-rules-grid">
              {WA_RULES.map((rule) => (
                <article className="re-point-card" key={rule.title}>
                  <span className="re-point-check" aria-hidden="true">
                    <CheckIcon size={14} />
                  </span>
                  <h3>{rule.title}</h3>
                  <p>
                    {rule.body}
                    {rule.href ? (
                      <>
                        {" "}
                        <a href={rule.href} target="_blank" rel="noopener noreferrer">
                          {rule.linkLabel}
                        </a>
                        .
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wa-section wa-app-api reveal" id="app-vs-api">
          <div className="wrap">
            <div className="wa-section-head">
              <p className="kicker">APP VS API</p>
              <h2 className="h2">
                WhatsApp Business App vs WhatsApp Business API vs TracktCRM
              </h2>
            </div>
            <div className="compare-table-wrap cs-compare-wrap industry-compare-wrap">
              <table className="compare-table cs-compare-table">
                <thead>
                  <tr>
                    <th aria-label="Comparison" />
                    <th>WhatsApp Business app</th>
                    <th>WhatsApp Business API</th>
                    <th>TracktCRM</th>
                  </tr>
                </thead>
                <tbody>
                  {APP_VS_API_ROWS.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.app}</td>
                      <td>{row.api}</td>
                      <td>{row.tracktcrm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="wa-section reveal" id="process">
          <div className="wrap">
            <div className="wa-section-head is-center">
              <p className="kicker is-centered">HOW IT WORKS</p>
              <h2 className="h2 is-centered">
                How a WhatsApp Conversation Becomes a Tracked Deal
              </h2>
            </div>
            <div className="wa-timeline">
              {PROCESS_STEPS.map((step) => (
                <article className="wa-timeline-item" key={step.n}>
                  <span className="wa-timeline-dot">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wa-section wa-choose reveal" id="choosing">
          <div className="wrap wa-choose-layout">
            <div className="wa-choose-intro">
              <p className="kicker">BUYER&apos;S GUIDE</p>
              <h2 className="h2">What to Look For in a WhatsApp CRM</h2>
              <p className="lead">
                Not every WhatsApp CRM is built the same. Check these five
                things:
              </p>
            </div>
            <div className="wa-choose-list">
              {CHOOSING_POINTS.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="integrations">
          <div className="int-wrap">
            <div className="int-center">
              <h2>
                <span className="accent int-cap">WhatsApp CRM</span>{" "}
                Integrations:{" "}
                <span className="orange int-cap">
                  Ads, Portals, Gmail and Payments
                </span>
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
              {HOME_INTEGRATIONS.map((name, index) => (
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
          <p className="industry-page-links wa-int-text">
            WhatsApp works with the rest of your stack: Meta and Google Ads,
            99acres and Housing.com, Gmail and Google Calendar, Shopify and
            Razorpay. <a href="/integrations">Browse all CRM integrations</a> or
            see <a href="/pricing">TracktCRM pricing</a>.
          </p>
          <p className="int-note">
            Don&apos;t see your tool?{" "}
            <a href="/contact">
              Let us know and we&apos;ll integrate it for you
              <span className="int-note-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </p>
        </section>

        <section className="wa-section wa-proof reveal" id="proof">
          <div className="wrap">
            <div className="wa-section-head is-center">
              <p className="kicker is-centered">SEE IT IN ACTION</p>
              <h2 className="h2 is-centered">
                See WhatsApp Lead Management Next to Your Pipeline
              </h2>
              <p className="lead is-centered">
                A live conversation sits beside the lead&apos;s stage and notes,
                so WhatsApp lead management stays inside the CRM and not in a
                phone inbox.
              </p>
            </div>
            <figure className="wa-proof-frame">
              <img
                src="/assets/whatsapp/whatsapp-lead-management.png"
                alt="TracktCRM WhatsApp lead management next to the sales pipeline"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="wa-section reveal" id="faq">
          <div className="wrap wa-faq-wrap">
            <div className="wa-section-head is-center">
              <p className="kicker is-centered">FAQ</p>
              <h2 className="h2 is-centered">WhatsApp CRM FAQs</h2>
            </div>
            <div className="wa-faq-list">
              {WA_FAQS.map((item) => (
                <details className="wa-faq-item" key={item.q}>
                  <summary>
                    {item.q}
                    <span className="wa-faq-plus" aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="wa-cta reveal" id="demo">
          <div className="wrap wa-cta-inner">
            <div>
              <h2>Turn Your WhatsApp Into a Sales Pipeline</h2>
              <p className="lead">
                Start a free 1 month trial and connect your WhatsApp Business
                number, or book a demo to see it with your own conversations.
              </p>
            </div>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
              <BookDemoButton className="btn btn-outline">
                Book a Demo
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </BookDemoButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
