import {
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  ChannelSnoozeIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  FieldMessageIcon,
  ProjectPipelineIcon,
  AiLeadIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import { BookDemoButton } from "../../components/demo-request-provider";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { BreadcrumbJsonLd, WhatsAppCrmJsonLd } from "../../json-ld";
import { INTEGRATIONS as HOME_INTEGRATIONS } from "../../home-data";
import {
  CHOOSING_POINTS,
  FEATURES,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  TESTIMONIALS,
  WA_FAQS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  reply: ChannelWhatsAppIcon,
  templates: FieldMessageIcon,
  history: ProjectPipelineIcon,
  reminders: ChannelSnoozeIcon,
  inbox: AiLeadIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute:
      "WhatsApp CRM Software — Capture, Chat & Close on WhatsApp | TracktCRM",
  },
  description:
    "TracktCRM is a WhatsApp CRM that captures leads, automates replies and tracks every deal — right inside the WhatsApp chats your customers already use.",
  alternates: {
    canonical: "/features/whatsapp-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/features/whatsapp-crm`,
    siteName: SITE_NAME,
    title: "TracktCRM — The CRM Built Around WhatsApp, Not Bolted Onto It",
    description:
      "Capture leads, automate replies, and manage your whole pipeline without ever leaving WhatsApp.",
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
    title: "TracktCRM — The CRM Built Around WhatsApp, Not Bolted Onto It",
    description:
      "Capture leads, automate replies, and manage your whole pipeline without ever leaving WhatsApp.",
    images: [ogImage],
  },
};

export default function WhatsAppCrmPage() {
  return (
    <div className="home wa-page">
      <WhatsAppCrmJsonLd faqs={WA_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features/whatsapp-crm" },
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
                The CRM Built Around WhatsApp —
                <span className="wa-hero-accent">Not Bolted Onto It</span>
              </h1>
              <p className="lead">
                Your customers already message you on WhatsApp. TracktCRM is a
                WhatsApp CRM that captures every enquiry, replies automatically,
                and tracks the full deal — without you or your team ever
                switching apps.
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
                  Works with WhatsApp Business API
                </span>
              </div>
            </div>

            <figure className="wa-hero-visual">
              <img
                className="wa-hero-banner"
                src="/assets/whatsapp/whatsapp-crm-hero.png"
                alt="TracktCRM WhatsApp CRM on desktop and mobile — chats and contact details in one place"
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
              <h2 className="h2">Most CRMs treat WhatsApp as an afterthought</h2>
              <p className="lead">
                Plenty of CRMs offer a WhatsApp &quot;integration&quot; — a
                basic connector bolted onto software built for email and forms.
                That&apos;s not the same as a CRM designed around how WhatsApp
                conversations actually work:
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
                <h2 className="h2">What makes a CRM a genuine WhatsApp CRM?</h2>
                <p className="lead">
                  A WhatsApp CRM is customer relationship management software
                  built around WhatsApp as a primary channel — not just connected
                  to it as an add-on. TracktCRM is built around this definition
                  from the ground up — WhatsApp isn&apos;t a plug-in, it&apos;s
                  the core channel. Pair it with our{" "}
                  <a href="/industries/ai-crm">AI sales assistant</a> or see how{" "}
                  <a href="/industries/real-estate-crm">real estate teams</a> use WhatsApp
                  for site-visit follow-ups.
                </p>
              </div>
              <figure className="wa-what-visual">
                <img
                  src="/assets/whatsapp/whatsapp-banner.png"
                  alt="WhatsApp and TracktCRM sync — messages flow both ways into the CRM"
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
              <h2 className="h2">Everything you need to sell over WhatsApp</h2>
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
                    <p>{feature.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="wa-section reveal" id="process">
          <div className="wrap">
            <div className="wa-section-head is-center">
              <p className="kicker is-centered">HOW IT WORKS</p>
              <h2 className="h2 is-centered">
                How a WhatsApp conversation becomes a tracked deal
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
              <h2 className="h2">What to look for in a WhatsApp CRM</h2>
              <p className="lead">
                Not every &quot;WhatsApp Business CRM&quot; is built the same.
                Here is what actually matters when you evaluate WhatsApp CRM
                software and CRM with WhatsApp integration:
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
                <span className="accent int-cap">WhatsApp</span>, and everything{" "}
                <span className="orange int-cap">around it</span>
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
          <p className="int-note">
            Don&apos;t see your tool?{" "}
            <a href="/contact">
              Let us know — we&apos;ll integrate it for you
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
                WhatsApp lead management next to your pipeline
              </h2>
              <p className="lead is-centered">
                A live conversation thread beside the lead&apos;s deal stage and
                notes — so WhatsApp lead management stays inside the CRM, not in
                a separate phone inbox.
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

        <section className="wa-section wa-quotes reveal" id="testimonial">
          <div className="wrap">
            <div className="wa-section-head is-center">
              <p className="kicker is-centered">SOCIAL PROOF</p>
              <h2 className="h2 is-centered">
                Teams that stopped losing WhatsApp leads
              </h2>
            </div>
            <div className="wa-quote-row">
              {TESTIMONIALS.map((item) => (
                <blockquote className="wa-quote" key={item.quote}>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <cite>{item.attribution}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="wa-section reveal" id="faq">
          <div className="wrap wa-faq-wrap">
            <div className="wa-section-head is-center">
              <p className="kicker is-centered">FAQ</p>
              <h2 className="h2 is-centered">Frequently asked questions</h2>
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
              <h2>Turn your WhatsApp into a real sales pipeline</h2>
              <p className="lead">
                Start a free 1 month trial and connect your WhatsApp Business
                number in minutes — or book a demo to see it with your own
                conversations.
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
