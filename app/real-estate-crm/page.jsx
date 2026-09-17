import {
  ArrowIcon,
  BrokerIcon,
  CaptureIcon,
  CheckIcon,
  InventoryIcon,
  ProjectPipelineIcon,
  SiteVisitIcon,
} from "../icons";
import RevealInit from "../components/reveal-init";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { SITE_URL } from "../site";
import {
  BROKER_POINTS,
  FEATURES,
  PIPELINE_STAGES,
  PROBLEM_POINTS,
  RE_FAQS,
  TESTIMONIAL,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  visit: SiteVisitIcon,
  broker: BrokerIcon,
  inventory: InventoryIcon,
  pipeline: ProjectPipelineIcon,
};

export const metadata = {
  title: "Real Estate CRM Software - Capture & Close Property Leads",
  description:
    "TracktCRM is a real estate CRM that captures enquiries from every portal and WhatsApp, books site visits instantly, and tracks every broker, unit and deal.",
  alternates: {
    canonical: "/real-estate-crm",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/real-estate-crm`,
    title: "TracktCRM - The CRM Built for How Property Actually Sells",
    description:
      "Capture leads from every portal, book site visits instantly, and manage brokers, units and deals in one real estate CRM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TracktCRM - The CRM Built for How Property Actually Sells",
    description:
      "Capture leads from every portal, book site visits instantly, and manage brokers, units and deals in one real estate CRM.",
  },
};

export default function RealEstateCrmPage() {
  return (
    <div className="home">
      <RevealInit />
      <SiteHeader />

      <section className="re-hero reveal" id="top">
        <div className="re-hero-inner">
          <div className="badge">
            <span className="pulse" />
            REAL ESTATE CRM
          </div>
          <h1 className="h1">The CRM Built for How Property Actually Sells</h1>
          <p className="re-hero-sub">
            Property enquiries land from a dozen portals, WhatsApp and
            walk-ins - all at once. TracktCRM is a real estate CRM that
            captures every lead instantly, books the site visit, and keeps
            every broker, unit and deal in one pipeline.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/#demo">
              Book a Demo
            </a>
            <a className="btn btn-outline" href="/#demo">
              Start Free Trial
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className="trust-row">
            <span className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <CheckIcon size={11} />
              </span>
              Used by real estate teams managing 500+ live listings
            </span>
            <span className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <CheckIcon size={11} />
              </span>
              No setup fee
            </span>
          </div>
        </div>
      </section>

      <section className="section reveal" id="problem">
        <p className="kicker">THE REAL ESTATE PROBLEM</p>
        <h2 className="h2">
          Your leads are scattered across a dozen portals - your pipeline
          shouldn&apos;t be
        </h2>
        <p className="re-section-intro">
          A generic CRM makes you build real estate workflows from scratch.
          TracktCRM comes with them built in:
        </p>
        <div className="re-check-list">
          {PROBLEM_POINTS.map((point) => (
            <div className="re-check-item" key={point}>
              <span className="compare-icon compare-icon-ok" aria-hidden="true">
                <CheckIcon size={13} />
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section reveal" id="features">
        <p className="kicker">FEATURES</p>
        <h2 className="h2">Everything a real estate sales team needs</h2>
        <div className="re-feature-grid">
          {FEATURES.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon];
            return (
              <article className="re-feature-card" key={feature.title}>
                <div className="re-feature-icon">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section reveal" id="pipeline-preview">
        <p className="kicker">SEE IT IN ACTION</p>
        <h2 className="h2">One pipeline, from enquiry to registration</h2>
        <p className="re-section-intro">
          Every project gets its own pipeline - stages, units and deals stay
          organized from the first enquiry to the signed sale deed.
        </p>
        <div className="re-pipeline-card">
          <div className="re-pipeline-top">
            <span className="dot" />
            Skyline Towers - live pipeline
          </div>
          <div className="re-pipeline-cols">
            {PIPELINE_STAGES.map((stage) => (
              <div className="col-box" key={stage.name}>
                <div className="col-head">
                  <span>{stage.name}</span>
                  <span>{stage.count}</span>
                </div>
                {stage.cards.map((card) => (
                  <div className="mini-card" key={card.t}>
                    <b>{card.t}</b>
                    <span>{card.v}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" id="brokers">
        <p className="kicker">CHANNEL PARTNERS</p>
        <h2 className="h2">Built for how channel partners actually work with you</h2>
        <p className="re-section-intro">
          Real estate deals rarely close through a single agent - most run
          through a network of brokers and channel partners. TracktCRM gives
          each partner:
        </p>
        <div className="re-check-list">
          {BROKER_POINTS.map((point) => (
            <div className="re-check-item" key={point}>
              <span className="compare-icon compare-icon-ok" aria-hidden="true">
                <CheckIcon size={13} />
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
        <p className="re-section-intro">
          This turns broker relationships from a WhatsApp-group free-for-all
          into a trackable, accountable channel.
        </p>
      </section>

      <section className="section reveal" id="testimonial">
        <div className="re-testimonial">
          <blockquote>&ldquo;{TESTIMONIAL.quote}&rdquo;</blockquote>
          <cite>- {TESTIMONIAL.attribution}</cite>
        </div>
      </section>

      <section className="section faq reveal" id="faq">
        <p className="kicker" style={{ textAlign: "center" }}>
          FAQ
        </p>
        <h2 className="h2" style={{ textAlign: "center" }}>
          Frequently asked questions
        </h2>
        <div className="faq-list re-faq-list">
          {RE_FAQS.map((item, index) => (
            <details className="faq-item" key={item.q} defaultOpen={index === 0}>
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
            <h2>See TracktCRM on your own property portfolio</h2>
            <p>
              Book a 20-minute demo and we&apos;ll show you how your current
              listings and leads would look inside TracktCRM.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn-dark" href="/#demo">
              Book a Demo
            </a>
            <a className="btn-ghost" href="/#demo">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
