import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  CheckIcon,
  ConversationIcon,
  ProjectPipelineIcon,
  ReminderIcon,
  ReportIcon,
  SiteVisitIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { BreadcrumbJsonLd, InsuranceCrmJsonLd } from "../../json-ld";
import {
  CHOOSING_POINTS,
  FEATURES,
  INSURANCE_FAQS,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  RENEWAL_POINTS,
  TESTIMONIALS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  ai: AiLeadIcon,
  pipeline: ProjectPipelineIcon,
  reminders: ReminderIcon,
  channels: ConversationIcon,
  calendar: SiteVisitIcon,
  reporting: ReportIcon,
};

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;

export const metadata = {
  title: {
    absolute: "Insurance CRM Software for Agents & Brokers | TracktCRM",
  },
  description:
    "TracktCRM is an insurance CRM that captures leads, chases quotes and tracks policy renewals, with WhatsApp and instant AI replies. Free 1 month trial.",
  alternates: {
    canonical: "/industries/crm-for-insurance",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/crm-for-insurance`,
    siteName: SITE_NAME,
    title: "TracktCRM — The CRM for Insurance Agents and Brokers",
    description:
      "Capture leads, follow up on quotes and never miss a policy renewal.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM insurance CRM for agents and brokers",
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
    title: "TracktCRM — The CRM for Insurance Agents and Brokers",
    description:
      "Capture leads, follow up on quotes and never miss a policy renewal.",
    images: [ogImage],
  },
};

export default function InsuranceCrmPage() {
  return (
    <div className="home insurance-page">
      <InsuranceCrmJsonLd faqs={INSURANCE_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Insurance CRM", href: "/industries/crm-for-insurance" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                INSURANCE CRM
              </div>
              <h1 className="re-banner-title">
                The CRM for Insurance Agents{" "}
                <span>Who Can&apos;t Afford to Miss a Renewal</span>
              </h1>
              <p className="re-banner-sub">
                Leads arrive from ads, referrals and WhatsApp, quotes sit
                waiting for an answer, and renewal dates live in a diary.
                TracktCRM is an insurance CRM that captures every lead, keeps
                every quote moving and reminds you before each policy comes up
                for renewal.
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
                Built for agents, brokers and insurance agencies · Free 1 month
                trial
              </p>
            </div>
            <figure className="re-banner-media agency-banner-media insurance-banner-media">
              <img
                src="/assets/insurance/insurance-crm-hero.webp"
                alt="Insurance agent working with the TracktCRM AI assistant, with client lists, policy types and upcoming renewals in one dashboard"
                width={1280}
                height={720}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="problem">
          <div className="re-split">
            <div className="re-split-copy">
              <p className="kicker">THE INSURANCE PROBLEM</p>
              <h2 className="h2">
                Insurance is won on follow-up, and follow-up slips
              </h2>
              <p className="re-section-intro">
                Selling and keeping insurance is a long game of reminders. When
                it runs on spreadsheets and diaries, the usual results are:
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board keeping every insurance lead and quote in one view"
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
                src="/assets/AI-CRM-actually.jpg"
                alt="Insurance CRM client record with the full history of calls, messages and notes"
                width={1645}
                height={802}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">INSURANCE CRM SOFTWARE</p>
              <h2 className="h2">What does an insurance CRM actually do?</h2>
              <p className="re-section-intro">
                An insurance CRM is CRM software built around the cycle
                insurance runs on: win the client, issue the policy, then keep
                them at renewal and look for the next policy.
              </p>
              <p className="re-section-intro">
                TracktCRM is built around this cycle rather than adapted from a
                one-time-sale pipeline. Whether you need a CRM for insurance
                brokers, an insurance agency CRM or a simple tool for one agent,
                the need is the same: insurance lead management that does not
                depend on memory. See the full{" "}
                <a href="/crm-software">CRM software</a> overview.
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
            <h2 className="h2">What insurance agents get with TracktCRM</h2>
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

        <section className="section reveal" id="renewals">
          <div className="re-split">
            <figure className="re-photo">
              <img
                src="/assets/real-estate/broker-handshake.jpg"
                alt="Insurance agent and client agreeing on a policy renewal"
                width={1152}
                height={864}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">POLICY RENEWALS</p>
              <h2 className="h2">
                Work renewals on purpose, not at the last minute
              </h2>
              <p className="re-section-intro">
                For most agents, renewals are the steadiest revenue, and the
                easiest to lose. TracktCRM lets you keep policyholders in a
                renewal stage next to new business and set policy renewal
                reminders ahead of each date, so:
              </p>
              <div className="re-mini-points">
                {RENEWAL_POINTS.map((point) => (
                  <div className="re-mini-point" key={point}>
                    <span className="re-point-check" aria-hidden="true">
                      <CheckIcon size={13} />
                    </span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section re-band reveal" id="process">
          <div className="re-section-head">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">How a client moves through TracktCRM</h2>
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
          <h2 className="h2">What to look for in a CRM for insurance agents</h2>
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
          <h2 className="h2">Connects with the tools agents already use</h2>
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
              alt="TracktCRM insurance pipeline with lead, quote requested, quote sent, documents, policy issued and renewal due stages"
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
            Insurance agents keeping quotes and renewals in TracktCRM
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

        <RelatedIndustries current="insurance" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <div className="faq-list re-faq-list">
            {INSURANCE_FAQS.map((item, index) => (
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
              <h2>See TracktCRM on your own policy pipeline</h2>
              <p>
                Start a free 1 month trial, or book a demo and we will walk
                through your leads, quotes and renewals inside TracktCRM.
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
