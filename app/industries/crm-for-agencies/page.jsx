import {
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  CheckIcon,
  ConversationIcon,
  ProposalIcon,
  ReminderIcon,
  RenewalIcon,
  ReportIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { AgencyCrmJsonLd, BreadcrumbJsonLd } from "../../json-ld";
import {
  AGENCY_FAQS,
  CHOOSING_POINTS,
  FEATURES,
  INTEGRATIONS,
  MULTI_CLIENT_POINTS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  TESTIMONIALS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  proposal: ProposalIcon,
  renewal: RenewalIcon,
  history: ConversationIcon,
  capture: CaptureIcon,
  automation: ReminderIcon,
  reporting: ReportIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "Agency CRM Software for Pitches & Retainers | TracktCRM",
  },
  description:
    "TracktCRM is an agency CRM that tracks proposals, retainer renewals and client conversations in one pipeline, so nothing gets lost in a WhatsApp thread.",
  alternates: {
    canonical: "/industries/crm-for-agencies",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/crm-for-agencies`,
    siteName: SITE_NAME,
    title: "TracktCRM — The CRM for Agencies Juggling Pitches and Retainers",
    description:
      "Track proposals, retainer renewals and client conversations in one dashboard.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM agency CRM for pitches, retainers and client conversations",
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
    title: "TracktCRM — The CRM for Agencies Juggling Pitches and Retainers",
    description:
      "Track proposals, retainer renewals and client conversations in one dashboard.",
    images: [ogImage],
  },
};

export default function AgencyCrmPage() {
  return (
    <div className="home agency-page">
      <AgencyCrmJsonLd faqs={AGENCY_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Agency CRM", href: "/industries/crm-for-agencies" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                AGENCY CRM
              </div>
              <h1 className="re-banner-title">
                The CRM for Agencies Juggling
                <span>Pitches, Retainers and Client Chats</span>
              </h1>
              <p className="re-banner-sub">
                Proposals sit in one inbox, retainer renewals in a spreadsheet,
                and client conversations in a WhatsApp group. TracktCRM is an
                agency CRM that keeps pitches, retainers and every client
                conversation in one pipeline.
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
                Built for agencies of two people or twenty · 30-day free trial
              </p>
            </div>
            <figure className="re-banner-media agency-banner-media">
              <img
                src="/assets/agency/agency-crm-hero.webp"
                alt="Agency owner at her laptop beside the TracktCRM dashboard tracking pitches, retainers and client chats"
                width={1717}
                height={916}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="problem">
          <div className="re-split">
            <div className="re-split-copy">
              <p className="kicker">THE AGENCY PROBLEM</p>
              <h2 className="h2">
                Your agency&apos;s pipeline lives in too many places
              </h2>
              <p className="re-section-intro">
                Agencies sell and serve at the same time, and a generic sales
                CRM only handles half of that. The usual result:
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board bringing an agency's pitches and clients into one view"
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
                alt="Agency CRM client record with full conversation history, deal value and next steps"
                width={1645}
                height={802}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">AGENCY CRM SOFTWARE</p>
              <h2 className="h2">What does an agency CRM actually do?</h2>
              <p className="re-section-intro">
                An agency CRM is CRM software shaped around how agencies work:
                winning new clients through pitches and proposals, then keeping
                them through retainers and ongoing relationships. A CRM for
                agency teams needs to cover both sides.
              </p>
              <p className="re-section-intro">
                TracktCRM is built around this cycle rather than adapted from a
                one-time-sale pipeline. Teams that search for a marketing CRM or
                client management software are usually after the same thing:
                one place where pitches, active clients and conversations all
                live. See the full <a href="/crm-software">CRM software</a>{" "}
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

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">What agencies get with TracktCRM</h2>
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

        <section className="section re-band reveal" id="multi-client">
          <div className="re-split">
            <figure className="re-photo">
              <img
                src="/assets/real-estate/broker-handshake.jpg"
                alt="Agency team closing a new client relationship"
                width={1152}
                height={864}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">MULTI-CLIENT</p>
              <h2 className="h2">Run several client relationships in parallel</h2>
              <p className="re-section-intro">
                Agencies rarely have just one relationship to manage. TracktCRM
                lets you keep new-business pipelines and active-client tracking
                side by side:
              </p>
              <div className="re-mini-points">
                {MULTI_CLIENT_POINTS.map((point) => (
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

        <section className="section reveal" id="process">
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

        <section className="section re-band reveal" id="consultants">
          <div className="re-section-head is-wide">
            <p className="kicker">FOR CONSULTANTS</p>
            <h2 className="h2">The same pipeline works for consultants</h2>
            <p className="re-section-intro industry-wide-intro">
              A consultant&apos;s cycle looks a lot like an agency&apos;s: an
              enquiry, a proposal, an engagement, then repeat work. If you are
              looking for a CRM for consultants, the same proposal pipeline,
              renewal tracking and conversation history apply, without paying
              for features built for large sales teams. Solo consultants can
              start with a single simple pipeline and grow from there.
            </p>
          </div>
        </section>

        <section className="section reveal" id="choosing">
          <p className="kicker">BUYER&apos;S GUIDE</p>
          <h2 className="h2">What to look for in the best CRM for agencies</h2>
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
          <h2 className="h2">Connects with the tools your agency already uses</h2>
          <div className="re-int-list">
            {INTEGRATIONS.map((item) => (
              <article className="re-int-card" key={item.title}>
                <span className="re-int-logo">
                  <BrandMark name={item.brand} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.body}
                    {item.href ? (
                      <>
                        {" "}
                        <a className="industry-int-link" href={item.href}>
                          {item.linkLabel}
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="pipeline-preview">
          <figure className="re-shot re-shot-wide">
            <img
              src="/assets/leadmanage.png"
              alt="TracktCRM agency pipeline with pitch, proposal sent, negotiation, won and retainer-active stages"
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
            Agencies running pitches and retainers in TracktCRM
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

        <RelatedIndustries current="agencies" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <div className="faq-list re-faq-list">
            {AGENCY_FAQS.map((item, index) => (
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
              <h2>See TracktCRM on your own agency pipeline</h2>
              <p>
                Start a free 30-day trial, or book a demo and we will walk
                through your pitches and retainers inside TracktCRM.
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
