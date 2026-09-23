import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  ChannelCallIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  FieldMessageIcon,
  InventoryIcon,
  ProjectPipelineIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { AiCrmJsonLd, BreadcrumbJsonLd } from "../../json-ld";
import {
  AI_FAQS,
  CHOOSING_POINTS,
  COMPARE_POINTS,
  FEATURES,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  TESTIMONIALS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  channels: ChannelWhatsAppIcon,
  calls: ChannelCallIcon,
  summaries: FieldMessageIcon,
  reporting: ProjectPipelineIcon,
  catalog: InventoryIcon,
  control: AiLeadIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: "AI Sales Assistant: Instant Lead Response",
  description:
    "See how TracktCRM's AI answers leads on WhatsApp, email and SMS, places follow-up calls and hands off to reps with full context. Book a demo.",
  alternates: {
    canonical: "/industries/ai-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/ai-crm`,
    siteName: SITE_NAME,
    title: "AI Sales Assistant: Instant Lead Response | TracktCRM",
    description:
      "Instant multi-channel lead response, automated follow-up calls, and AI-powered reporting - not just another AI dashboard.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM AI sales assistant answering leads",
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
    title: "AI Sales Assistant: Instant Lead Response | TracktCRM",
    description:
      "Instant multi-channel lead response, automated follow-up calls, and AI-powered reporting - not just another AI dashboard.",
    images: [ogImage],
  },
};

export default function AiCrmPage() {
  return (
    <div className="home">
      <AiCrmJsonLd faqs={AI_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/#industries" },
          { name: "AI Sales Assistant", href: "/industries/ai-crm" },
        ]}
      />
      <RevealInit />
      <SiteHeader />

      <main>
      <section className="re-banner ai-banner reveal" id="top">
        <div className="re-banner-inner ai-banner-inner">
          <div className="re-banner-copy">
            <div className="badge re-banner-badge">
              <span className="pulse" aria-hidden="true" />
              AI SALES ASSISTANT
            </div>
            <h1 className="re-banner-title">
              An AI Sales Assistant That Answers Your Leads,
              <span>Not Just Analyzes Them</span>
            </h1>
            <p className="re-banner-sub">
              Most &quot;AI CRM&quot; tools stop at smart dashboards.
              TracktCRM&apos;s AI responds to every lead within seconds across
              WhatsApp, email and SMS, places automated follow-up calls, and
              hands your reps a fully-briefed conversation - not a cold lead.
            </p>
            <div className="re-banner-ctas">
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
              <a className="btn btn-outline" href="#proof">
                See It In Action
              </a>
            </div>
            <p className="re-banner-trust">
              No credit card required · Free 1 month trial · Every response
              logged automatically
            </p>
          </div>
          <figure className="re-banner-media ai-banner-media">
            <img
              src="/assets/AI-CRM.png"
              alt="TracktCRM AI CRM responding to leads across WhatsApp, email and SMS"
              width={1600}
              height={1000}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section re-band reveal" id="problem">
        <div className="re-section-head is-wide">
          <p className="kicker">THE &quot;AI-WASHING&quot; PROBLEM</p>
          <h2 className="h2">
            Most AI CRMs just report on leads. TracktCRM&apos;s AI acts on them.
          </h2>
          <p className="re-section-intro">
            A lot of CRMs bolt on a chatbot or a smart-sounding report and call
            it &quot;AI.&quot; That&apos;s not automation - it&apos;s a dashboard
            with a new label. TracktCRM&apos;s AI is built to actually do the
            work of the first five minutes after a lead comes in:
          </p>
        </div>
        <div className="re-point-grid">
          {PROBLEM_POINTS.map((point) => (
            <article className="re-point-card" key={point.title}>
              <span className="re-point-check" aria-hidden="true">
                <CheckIcon size={14} />
              </span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="what-is">
        <div className="re-split re-split-reverse">
          <figure className="re-photo re-photo-contain">
            <img
              src="/assets/AI-CRM-actually.jpg"
              alt="TracktCRM AI CRM pipeline board organizing leads by stage"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="re-split-copy">
            <p className="kicker">AI CRM SOFTWARE</p>
            <h2 className="h2">
              What does &quot;AI CRM&quot; actually mean, and what should it do?
            </h2>
            <p className="re-section-intro">
              An AI CRM is customer relationship management software that uses
              artificial intelligence to act on your leads and deals - not just
              organize them. The term gets used loosely, so here&apos;s what
              separates a genuine AI CRM from a regular CRM with a chatbot
              bolted on.
            </p>
            <p className="re-section-intro">
              TracktCRM is built around this definition, not adapted from a
              regular CRM with an AI feature added on top.
            </p>
          </div>
        </div>
        <div className="re-capability-row">
          {WHAT_IS_POINTS.map((point) => (
            <article className="re-capability" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="features">
        <div className="re-section-head is-wide">
          <p className="kicker">FEATURES</p>
          <h2 className="h2">What TracktCRM&apos;s AI actually does</h2>
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
                <p>{feature.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section re-band reveal" id="process">
        <div className="re-section-head">
          <p className="kicker">FROM ENQUIRY TO REP</p>
          <h2 className="h2">
            How a lead moves from AI response to a human conversation
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

      <section className="section reveal" id="compare">
        <div className="re-section-head is-wide">
          <p className="kicker">HOW IT COMPARES</p>
          <h2 className="h2">
            How TracktCRM&apos;s AI differs from other CRM AI features
          </h2>
          <p className="re-section-intro">
            Several CRMs now offer an AI feature - here&apos;s a factual look at
            how they differ, so you can judge what fits your team:
          </p>
          <p className="content-meta">
            Last verified: September 2026 · Based on publicly documented product
            features. Always confirm current pricing and capabilities with each
            vendor.
          </p>
        </div>
        <div className="ai-compare-grid">
          {COMPARE_POINTS.map((item) => (
            <article
              className={`ai-compare-card${item.highlight ? " is-highlight" : ""}`}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="choosing">
        <p className="kicker">BUYER&apos;S GUIDE</p>
        <h2 className="h2">What to look for in an AI CRM</h2>
        <p className="re-section-intro">
          &quot;AI CRM&quot; is used loosely across the market. Here&apos;s what
          actually matters when evaluating one:
        </p>
        <div className="re-choose-grid">
          {CHOOSING_POINTS.map((item) => (
            <article className="re-choose-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section re-int-band reveal" id="integrations">
        <p className="kicker">INTEGRATIONS</p>
        <h2 className="h2">Works across the channels your leads already use</h2>
        <div className="re-int-list">
          {INTEGRATIONS.map((item) => (
            <article className="re-int-card" key={item.title}>
              {item.brand ? (
                <span className="re-int-logo">
                  <BrandMark name={item.brand} />
                </span>
              ) : (
                <span className="re-int-fallback" aria-hidden="true">
                  {item.title.slice(0, 1)}
                </span>
              )}
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="proof">
        <p className="kicker is-centered">SEE IT IN ACTION</p>
        <h2 className="h2 is-centered">
          From enquiry to AI response to a briefed hand-off
        </h2>
        <p className="re-section-intro is-centered">
          Lead arrives, WhatsApp / email / SMS go out, a follow-up call is
          placed, and your rep picks up with a summarized conversation attached.
        </p>
        <figure className="re-shot re-shot-wide">
          <img
            src="/assets/AI-response.png"
            alt="TracktCRM AI CRM reporting dashboard from enquiry response to hand-off"
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
          Teams using TracktCRM&apos;s AI to answer every lead
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
          {AI_FAQS.map((item) => (
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
            <h2>See TracktCRM&apos;s AI respond to a lead in real time</h2>
            <p>
              Start a free 1 month trial, or book a live demo to see instant
              response, automated follow-up calls, and the AI hand-off with your
              own scripts.
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
            <a className="btn-ghost" href="/contact">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
