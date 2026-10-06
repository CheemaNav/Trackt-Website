import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  CheckIcon,
  ConversationIcon,
  OwnerIcon,
  ProjectPipelineIcon,
  ReportIcon,
  SiteVisitIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { AutomotiveCrmJsonLd, BreadcrumbJsonLd } from "../../json-ld";
import {
  AFTER_SALES_POINTS,
  AUTOMOTIVE_FAQS,
  CHOOSING_POINTS,
  FEATURES,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  TESTIMONIALS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  ai: AiLeadIcon,
  pipeline: ProjectPipelineIcon,
  testDrive: SiteVisitIcon,
  ownership: OwnerIcon,
  channels: ConversationIcon,
  reporting: ReportIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "Automotive CRM Software for Car Dealerships | TracktCRM",
  },
  description:
    "TracktCRM is an automotive CRM that captures enquiries, books test drives and follows up to delivery, with WhatsApp and AI replies. Free 1 month trial.",
  alternates: {
    canonical: "/industries/crm-for-automotive",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/crm-for-automotive`,
    siteName: SITE_NAME,
    title: "TracktCRM — The CRM for Car Dealerships",
    description:
      "Capture every enquiry, book test drives and follow up until delivery.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM automotive CRM for car dealerships",
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
    title: "TracktCRM — The CRM for Car Dealerships",
    description:
      "Capture every enquiry, book test drives and follow up until delivery.",
    images: [ogImage],
  },
};

export default function AutomotiveCrmPage() {
  return (
    <div className="home automotive-page">
      <AutomotiveCrmJsonLd faqs={AUTOMOTIVE_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Automotive CRM", href: "/industries/crm-for-automotive" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                AUTOMOTIVE CRM
              </div>
              <h1 className="re-banner-title">
                The CRM for Car Dealerships{" "}
                <span>That Turns Enquiries Into Test Drives</span>
              </h1>
              <p className="re-banner-sub">
                Enquiries arrive from your website, ads and WhatsApp while the
                showroom is full, and a buyer who waits a few hours is often a
                buyer who has gone elsewhere. TracktCRM is an automotive CRM
                that captures every enquiry, replies in seconds and keeps each
                buyer moving from test drive to delivery.
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
                <a className="btn btn-outline" href="/contact">
                  Book a Demo
                </a>
              </div>
              <p className="re-banner-trust">
                Built for showrooms and dealership groups · Free 1 month trial
              </p>
            </div>
            <figure className="re-banner-media agency-banner-media automotive-banner-media">
              <img
                src="/assets/automotive/automotive-crm-hero.webp"
                alt="Car salesperson with a buyer in a showroom, with TracktCRM showing a new enquiry, a booked test drive and conversion stats"
                width={1067}
                height={887}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="problem">
          <div className="re-split">
            <div className="re-split-copy">
              <p className="kicker">THE DEALERSHIP PROBLEM</p>
              <h2 className="h2">
                Buyers compare several dealers, and the first to follow up
                often wins
              </h2>
              <p className="re-section-intro">
                A car is researched across many showrooms. When enquiries are
                tracked in registers and spreadsheets, the usual results are:
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board keeping every dealership enquiry in one view"
                width={1383}
                height={695}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="re-point-grid">
            {PROBLEM_POINTS.map((point) => (
              <article className="re-point-card industry-point-card" key={point}>
                <span className="re-point-check" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="what-is">
          <div className="re-split re-split-reverse">
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/automotive/automotive-crm-follow-up.webp"
                alt="TracktCRM lead list with WhatsApp, call and email follow-up reminders and the next follow-up scheduled"
                width={1049}
                height={1024}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">AUTOMOTIVE CRM SOFTWARE</p>
              <h2 className="h2">What does an automotive CRM actually do?</h2>
              <p className="re-section-intro">
                An automotive CRM is CRM software built around how vehicles are
                sold and serviced: a long consideration period, a test drive, a
                negotiation, a delivery, then years of after-sales contact.
              </p>
              <p className="re-section-intro">
                TracktCRM is built around this cycle rather than adapted from a
                one-time-sale pipeline. Whether you need a car dealership CRM
                for one showroom, a CRM for car dealers with several locations,
                or an automotive sales CRM for a small team, the need is the
                same: dealership lead management that does not depend on a
                register. See the full <a href="/crm-software">CRM software</a>{" "}
                overview.
              </p>
            </div>
          </div>
          <div className="re-capability-row industry-capability-row">
            {WHAT_IS_POINTS.map((point) => (
              <article className="re-capability" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">What dealerships get with TracktCRM</h2>
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

        <section className="section reveal" id="after-sales">
          <div className="re-split">
            <figure className="re-photo">
              <img
                src="/assets/real-estate/broker-handshake.jpg"
                alt="Salesperson and customer shaking hands after a vehicle delivery"
                width={1152}
                height={864}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">AFTER-SALES</p>
              <h2 className="h2">Keep the relationship going after delivery</h2>
              <p className="re-section-intro">
                For a dealership, a delivered car is the start of a long
                relationship: service visits, accessories, and the next vehicle.
                TracktCRM lets you keep customers in an after-sales stage next
                to new enquiries and set follow-up reminders, so:
              </p>
              <div className="re-mini-points">
                {AFTER_SALES_POINTS.map((point) => (
                  <div className="re-mini-point" key={point}>
                    <span className="re-point-check" aria-hidden="true">
                      <CheckIcon size={13} />
                    </span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <p className="re-section-intro">
                Selling vehicle insurance too? See the{" "}
                <a href="/industries/crm-for-insurance">insurance CRM</a> for
                quotes and policy renewals.
              </p>
            </div>
          </div>
        </section>

        <section className="section re-band reveal" id="process">
          <div className="re-section-head">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">How a buyer moves through TracktCRM</h2>
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
          <p className="kicker">BUYER&apos;S GUIDE</p>
          <h2 className="h2">What to look for in a car dealership CRM</h2>
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
          <h2 className="h2">Connects with the tools dealerships already use</h2>
          <div className="re-int-list">
            {INTEGRATIONS.map((item) => (
              <article className="re-int-card" key={item.title}>
                <span className="re-int-logo">
                  <BrandMark name={item.brand} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="pipeline-preview">
          <figure className="re-shot re-shot-wide">
            <img
              src="/assets/leadmanage.png"
              alt="TracktCRM dealership pipeline with enquiry, test drive, quote, booking, delivery and after-sales stages"
              width={1383}
              height={695}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="section reveal" id="testimonial">
          <p className="kicker is-centered">SOCIAL PROOF</p>
          <h2 className="h2 is-centered">
            Dealerships keeping enquiries and test drives in TracktCRM
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

        <RelatedIndustries current="automotive" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <div className="faq-list re-faq-list">
            {AUTOMOTIVE_FAQS.map((item, index) => (
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
              <h2>See TracktCRM on your own showroom pipeline</h2>
              <p>
                Start a free 1 month trial, or book a demo and we will walk
                through your enquiries, test drives and deliveries inside
                TracktCRM.
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
    </div>
  );
}
