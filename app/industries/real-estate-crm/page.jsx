import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  BrokerIcon,
  CaptureIcon,
  CheckIcon,
  ConversationIcon,
  InventoryIcon,
  ProjectPipelineIcon,
  ReportIcon,
  SiteVisitIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { BreadcrumbJsonLd, RealEstateJsonLd } from "../../json-ld";
import {
  AUDIENCES,
  BROKER_POINTS,
  CHOOSING_POINTS,
  COMPARE_ROWS,
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
  whatsapp: ConversationIcon,
  reporting: ReportIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const pageTitle = "Real Estate CRM India: Leads, Site Visits | TracktCRM";
const pageDescription =
  "Real estate CRM for India: capture leads from 99acres, MagicBricks and WhatsApp, book site visits, track brokers, inventory and bookings. Free 1 month trial.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/industries/real-estate-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/real-estate-crm`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM real estate CRM for India",
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

export default function RealEstateCrmPage() {
  return (
    <div className="home">
      <RealEstateJsonLd faqs={RE_FAQS} features={FEATURES} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Real Estate CRM", href: "/industries/real-estate-crm" },
        ]}
      />
      <RevealInit />

      <main>
      <section className="re-banner reveal" id="top">
        <div className="re-banner-inner">
          <div className="re-banner-copy">
            <div className="badge re-banner-badge">
              <span className="pulse" aria-hidden="true" />
              REAL ESTATE CRM
            </div>
            <h1 className="re-banner-title">
              Real Estate CRM for India{" "}
              <span>That Handles Leads, Site Visits and Brokers</span>
            </h1>
            <p className="re-banner-sub">
              Property enquiries arrive from 99acres, MagicBricks, Housing.com,
              Meta and Google ads, WhatsApp and walk-ins, all at the same time.
              TracktCRM is real estate CRM software that captures each lead the
              moment it arrives, books the site visit, and keeps every broker,
              unit and deal in one pipeline.
            </p>
            <div className="re-banner-ctas">
              <a className="btn btn-primary" href="/contact">
                Book a Demo
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
              <a
                className="btn btn-outline"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </div>
            <p className="re-banner-trust">
              Free 1 month trial · No setup fee
            </p>
          </div>
          <figure className="re-banner-media">
            <img
              src="/assets/Property-enquiries.png"
              alt=""
              width={1552}
              height={1013}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section re-band reveal" id="problem">
        <div className="re-split">
          <div className="re-split-copy">
            <p className="kicker">THE REAL ESTATE PROBLEM</p>
            <h2 className="h2">
              Property Leads Are Scattered Across Portals. Your Pipeline
              Shouldn&apos;t Be
            </h2>
            <p className="re-section-intro">
              A generic sales CRM leaves you to build real estate workflows
              yourself: projects, towers, site visits, brokers. TracktCRM comes
              with them built in.
            </p>
          </div>
          <figure className="re-photo re-photo-contain">
            <img
              src="/assets/real-estate/for-real-estate.jpg"
              alt="TracktCRM pipeline board organising real estate leads by stage"
              width={1386}
              height={698}
              loading="lazy"
              decoding="async"
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
              alt="TracktCRM organising real estate leads from portals, WhatsApp and ads in one pipeline"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="re-split-copy">
            <p className="kicker">REAL ESTATE CRM SOFTWARE</p>
            <h2 className="h2">What Is a Real Estate CRM?</h2>
            <p className="re-section-intro">
              A real estate CRM is software that captures property leads, tracks
              each enquiry through site visit, negotiation and booking, and
              keeps buyers, brokers, inventory and paperwork in one place.
              Unlike a generic CRM, it understands projects, towers and units,
              and it gives channel partners their own access.
            </p>
            <p className="re-section-intro">
              Instead of leads living across WhatsApp chats, spreadsheets and a
              dozen portal inboxes, your whole team works from one shared view
              of every deal, from first enquiry to signed paperwork. TracktCRM
              is built around this workflow, not adapted from a generic sales
              CRM. See the full <a href="/crm-software">CRM software</a>{" "}
              overview.
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
          <h2 className="h2">
            Real Estate CRM Features for Builders, Brokers and Agents
          </h2>
        </div>
        <div className="re-feature-grid is-balanced">
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
          <h2 className="h2">
            From Enquiry to Possession: How a Deal Moves Through TracktCRM
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

      <section className="section reveal" id="audience">
        <p className="kicker">WHO IT&apos;S FOR</p>
        <h2 className="h2">
          Real Estate CRM for Builders, Developers, Brokers and Agents
        </h2>
        <div className="re-choose-grid is-three">
          {AUDIENCES.map((item) => (
            <article className="re-choose-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section re-band reveal" id="brokers">
        <div className="re-split">
          <figure className="re-photo">
            <img
              src="/assets/real-estate/broker-handshake.jpg"
              alt="Handshake closing a property partnership deal"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="re-split-copy">
            <p className="kicker">CHANNEL PARTNERS</p>
            <h2 className="h2">
              Channel Partner Management Software for Property Sales
            </h2>
            <p className="re-section-intro">
              Most property deals run through a network of brokers and channel
              partners, not a single agent. TracktCRM gives each partner:
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
              The result is a broker channel you can track and hold to account,
              instead of a WhatsApp group.
            </p>
          </div>
        </div>
      </section>

      <section className="section reveal" id="choosing">
        <p className="kicker">BUYER&apos;S GUIDE</p>
        <h2 className="h2">What to Look For in a Real Estate CRM</h2>
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

      <section className="section re-band reveal" id="comparison">
        <div className="re-section-head is-wide">
          <p className="kicker">COMPARISON</p>
          <h2 className="h2">Real Estate CRM vs a Generic Sales CRM</h2>
        </div>
        <div className="compare-table-wrap cs-compare-wrap industry-compare-wrap">
          <table className="compare-table cs-compare-table">
            <thead>
              <tr>
                <th aria-label="Comparison" />
                <th>Generic sales CRM</th>
                <th>TracktCRM</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.generic}</td>
                  <td>{row.tracktcrm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section re-int-band reveal" id="integrations">
        <p className="kicker">INTEGRATIONS</p>
        <h2 className="h2">
          Real Estate CRM Integrations: 99acres, MagicBricks, Housing.com,
          WhatsApp and Ads
        </h2>
        <p className="re-section-intro">
          Connect the tools your sales team already uses.
        </p>
        <div className="re-int-list">
          {INTEGRATIONS.map((item) => (
            <article className="re-int-card" key={item.title}>
              {item.brands.length > 1 ? (
                <span className="re-int-logo-stack">
                  {item.brands.map((brand) => (
                    <span className="re-int-logo" key={brand}>
                      <BrandMark name={brand} />
                    </span>
                  ))}
                </span>
              ) : (
                <span className="re-int-logo">
                  <BrandMark name={item.brands[0]} />
                </span>
              )}
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="re-section-intro re-int-more">
          <a href="/integrations">Browse all CRM integrations</a>
        </p>
      </section>

      <section className="section reveal" id="pipeline-preview">
        <p className="kicker is-centered">SEE IT IN ACTION</p>
        <h2 className="h2 is-centered">
          See One Pipeline From Enquiry to Registration
        </h2>
        <p className="re-section-intro is-centered">
          Every project gets its own pipeline, so stages, units and deals stay
          organised from the first enquiry to the signed sale deed.{" "}
          <a href="/contact">Book a 30-minute demo</a> to see your listings
          inside TracktCRM.
        </p>
        <figure className="re-shot re-shot-wide">
          <img
            src="/assets/leadmanage.png"
            alt="TracktCRM pipeline board with lead cards grouped by stage, each showing the owner, phone number and last activity"
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
          Real Estate Teams Closing Deals With TracktCRM
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

      <RelatedIndustries current="real-estate" />

      <section className="section faq reveal" id="faq">
        <p className="kicker is-centered">FAQ</p>
        <h2 className="h2 is-centered">Real Estate CRM FAQs</h2>
        <div className="faq-list re-faq-list">
          {RE_FAQS.map((item, index) => (
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
            <h2>See TracktCRM on Your Own Property Portfolio</h2>
            <p>
              Book a 30-minute demo and we will show how your listings and
              leads would look inside TracktCRM, or start a free 1 month trial.
              No credit card, no lock-in.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn-dark" href="/contact">
              Book a Demo
            </a>
            <a
              className="btn-ghost"
              href={APP_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
