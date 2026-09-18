import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
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
import { SITE_NAME, SITE_URL } from "../site";
import { RealEstateJsonLd } from "../json-ld";
import {
  BROKER_POINTS,
  CHOOSING_POINTS,
  FEATURES,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  RE_FAQS,
  TESTIMONIALS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  visit: SiteVisitIcon,
  broker: BrokerIcon,
  inventory: InventoryIcon,
  pipeline: ProjectPipelineIcon,
  ai: AiLeadIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const siteLogo = `${SITE_URL}/logo.png`;

export const metadata = {
  title: "Real Estate CRM Software - Capture & Close Property Leads",
  description:
    "TracktCRM is a real estate CRM that captures enquiries from every portal and WhatsApp, books site visits instantly, and tracks every broker, unit and deal.",
  keywords: [
    "crm for real estate",
    "real estate crm software",
    "ai crm for real estate",
    "crm for real estate agents",
  ],
  alternates: {
    canonical: "/real-estate-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/real-estate-crm`,
    siteName: SITE_NAME,
    title: "TracktCRM - The CRM Built for How Property Actually Sells",
    description:
      "Capture leads from every portal, book site visits instantly, and manage brokers, units and deals in one real estate CRM.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM - The CRM Built for How Property Actually Sells",
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
    title: "TracktCRM - The CRM Built for How Property Actually Sells",
    description:
      "Capture leads from every portal, book site visits instantly, and manage brokers, units and deals in one real estate CRM.",
    images: [ogImage],
  },
  other: {
    "og:logo": siteLogo,
  },
};

export default function RealEstateCrmPage() {
  return (
    <div className="home">
      <RealEstateJsonLd faqs={RE_FAQS} />
      <RevealInit />
      <SiteHeader />

      <section className="re-banner reveal" id="top">
        <div className="re-banner-inner">
          <div className="re-banner-copy">
            <div className="badge re-banner-badge">
              <span className="pulse" aria-hidden="true" />
              REAL ESTATE CRM
            </div>
            <h1 className="re-banner-title">
              The CRM Built for
              <span>How Property Actually Sells</span>
            </h1>
            <p className="re-banner-sub">
              Property enquiries land from a dozen portals, WhatsApp and
              walk-ins - all at once. TracktCRM is a real estate CRM that
              captures every lead instantly, books the site visit, and keeps
              every broker, unit and deal in one pipeline.
            </p>
            <div className="re-banner-ctas">
              <a className="btn btn-primary" href="#demo">
                Book a Demo
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
              <a className="btn btn-outline" href="#demo">
                Start Free Trial
              </a>
            </div>
            <p className="re-banner-trust">
              Used by real estate teams managing 500+ live listings · No setup
              fee
            </p>
          </div>
          <figure className="re-banner-media">
            <img
              src="/assets/Property-enquiries.png"
              alt="Bright modern apartment interior overlooking a city skyline and park"
              width={1552}
              height={1013}
            />
          </figure>
        </div>
      </section>

      <section className="section re-band reveal" id="problem">
        <div className="re-split">
          <div className="re-split-copy">
            <p className="kicker">THE REAL ESTATE PROBLEM</p>
            <h2 className="h2">
              Your leads are scattered across a dozen portals - your pipeline
              shouldn&apos;t be
            </h2>
            <p className="re-section-intro">
              A generic CRM makes you build real estate workflows from scratch.
              TracktCRM comes with them built in.
            </p>
          </div>
          <figure className="re-photo re-photo-contain">
            <img
              src="/assets/real-estate/for-real-estate.jpg"
              alt="TracktCRM pipeline board organizing real estate leads by stage"
              width={1386}
              height={698}
            />
          </figure>
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
              src="/assets/real-estate/real-estate-CRM-organizes.jpg"
              alt="TracktCRM organizing real estate leads from portals, WhatsApp and ads in one pipeline"
              width={1600}
              height={900}
            />
          </figure>
          <div className="re-split-copy">
            <p className="kicker">REAL ESTATE CRM SOFTWARE</p>
            <h2 className="h2">
              What is a CRM for real estate, and why do you need one?
            </h2>
            <p className="re-section-intro">
              A real estate CRM is software that organizes every buyer, seller,
              tenant and broker relationship your business manages - along with
              the property details, conversations and paperwork attached to each
              one. Instead of leads living across WhatsApp chats, spreadsheets
              and a dozen portal inboxes, a real estate CRM gives your whole
              team one shared view of every deal, from first enquiry to signed
              paperwork.
            </p>
            <p className="re-section-intro">
              For real estate specifically, a good CRM needs to do more than
              store contacts. TracktCRM is built around exactly this workflow -
              not adapted from a generic sales CRM.
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
          <h2 className="h2">Everything a real estate sales team needs</h2>
        </div>
        <div className="re-feature-grid">
          {FEATURES.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon];
            return (
              <article className="re-feature-card" key={feature.title}>
                <div className="re-feature-icon">
                  <Icon />
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
          <p className="kicker">FROM ENQUIRY TO KEYS</p>
          <h2 className="h2">How a deal moves through TracktCRM, start to finish</h2>
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

      <section className="section reveal" id="brokers">
        <div className="re-split">
          <figure className="re-photo">
            <img
              src="/assets/real-estate/broker-handshake.jpg"
              alt="Handshake closing a property partnership deal"
              width={1200}
              height={900}
            />
          </figure>
          <div className="re-split-copy">
            <p className="kicker">CHANNEL PARTNERS</p>
            <h2 className="h2">
              Built for how channel partners actually work with you
            </h2>
            <p className="re-section-intro">
              Real estate deals rarely close through a single agent - most run
              through a network of brokers and channel partners. TracktCRM gives
              each partner:
            </p>
            <div className="re-mini-points">
              {BROKER_POINTS.map((point) => (
                <div className="re-mini-point" key={point.title}>
                  <span className="re-point-check" aria-hidden="true">
                    <CheckIcon size={13} />
                  </span>
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="re-section-intro">
              This turns broker relationships from a WhatsApp-group free-for-all
              into a trackable, accountable channel.
            </p>
          </div>
        </div>
      </section>

      <section className="section reveal" id="choosing">
        <p className="kicker">BUYER&apos;S GUIDE</p>
        <h2 className="h2">What to look for in a real estate CRM</h2>
        <p className="re-section-intro">
          Not every CRM is built for how property actually sells. Here&apos;s what
          matters most:
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
        <h2 className="h2">Connects with the tools you already use</h2>
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

      <section className="section reveal" id="pipeline-preview">
        <p className="kicker is-centered">SEE IT IN ACTION</p>
        <h2 className="h2 is-centered">One pipeline, from enquiry to registration</h2>
        <p className="re-section-intro is-centered">
          Every project gets its own pipeline - stages, units and deals stay
          organized from the first enquiry to the signed sale deed.
        </p>
        <figure className="re-shot re-shot-wide">
          <img
            src="/assets/real-estate/for-real-estate.jpg"
            alt="TracktCRM real estate pipeline from enquiry to registration"
            width={1386}
            height={698}
          />
        </figure>
      </section>

      <section className="section reveal" id="testimonial">
        <p className="kicker is-centered">SOCIAL PROOF</p>
        <h2 className="h2 is-centered">Teams closing property deals with TracktCRM</h2>
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
            <a className="btn-dark" href="#demo">
              Book a Demo
            </a>
            <a className="btn-ghost" href="#demo">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
