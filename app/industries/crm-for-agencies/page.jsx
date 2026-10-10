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
  AGENCY_TYPES,
  CHOOSING_POINTS,
  FEATURES,
  INTEGRATIONS,
  MULTI_CLIENT_POINTS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
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

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const pageTitle = "Agency CRM India: Pitches, Proposals, Retainers | TracktCRM";
const pageDescription =
  "Agency CRM for Indian agencies: track pitches, proposals and retainer renewals, and keep client chats on WhatsApp in one pipeline. Try the CRM free.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/industries/crm-for-agencies",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/crm-for-agencies`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

export default function AgencyCrmPage() {
  return (
    <div className="home agency-page">
      <AgencyCrmJsonLd faqs={AGENCY_FAQS} features={FEATURES} />
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
                Agency CRM for Pitches, Proposals,{" "}
                <span>Retainers and Client Chats</span>
              </h1>
              <p className="re-banner-sub">
                Proposals sit in one inbox, renewals in a spreadsheet, and
                client conversations in a WhatsApp group. TracktCRM is agency
                CRM software that keeps new business, active retainers and every
                client conversation in one pipeline, with reminders so a renewal
                never catches you by surprise.
              </p>
              <div className="re-banner-ctas">
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
                <a className="btn btn-outline" href="/contact">
                  Book a Demo
                </a>
              </div>
              <p className="re-banner-trust">
                Built for agencies of two people or twenty · Try the CRM free ·
                No credit card required
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
          <div className="re-section-head is-wide">
            <p className="kicker">THE AGENCY PROBLEM</p>
            <h2 className="h2">
              Your Agency&apos;s Pipeline Lives in Too Many Places
            </h2>
            <p className="re-section-intro">
              Agencies sell and serve at the same time, and a generic sales CRM
              only handles half of that. The usual result:
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
                alt="TracktCRM record with deal value, expected close date and a timeline of calls, notes and messages"
                width={1645}
                height={802}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">AGENCY CRM SOFTWARE</p>
              <h2 className="h2">What Is an Agency CRM?</h2>
              <p className="re-section-intro">
                An agency CRM is software that helps agencies win clients
                through pitches and proposals, then keep them through retainers
                and ongoing relationships. It tracks each proposal, each renewal
                date and every client conversation in one place, so the sales
                side and the client side of the agency are never separate.
              </p>
              <p className="re-section-intro">
                TracktCRM is built around this cycle, not adapted from a
                one-time-sale pipeline. See the full{" "}
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

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">Agency CRM Features for Pitches and Retainers</h2>
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

        <section className="section re-band reveal" id="agency-types">
          <p className="kicker">AGENCY TYPES</p>
          <h2 className="h2">
            Agency CRM for Digital Marketing, Creative, PR and Web Agencies
          </h2>
          <div className="re-choose-grid is-three">
            {AGENCY_TYPES.map((item) => (
              <article className="re-choose-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="industry-page-links">
            Comparing tools? See TracktCRM as a{" "}
            <a href="/pipedrive-alternative">Pipedrive alternative</a>. Hiring
            for clients instead? See the{" "}
            <a href="/industries/crm-for-recruitment">recruitment CRM</a>.
          </p>
        </section>

        <section className="section reveal" id="multi-client">
          <div className="re-split">
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board with a pipeline switcher and deals grouped by stage, each with an owner and value"
                width={1383}
                height={695}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">MULTI-CLIENT</p>
              <h2 className="h2">
                Separate Pipelines for Each Client or Service Line
              </h2>
              <p className="re-section-intro">
                Agencies rarely have just one relationship to manage. Keep
                new-business pipelines and active-client tracking side by side:
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

        <section className="section re-band reveal" id="process">
          <div className="re-section-head is-wide">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">
              From First Pitch to Renewal: How a Client Moves Through TracktCRM
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

        <section className="section reveal" id="crm-vs-project-tools">
          <div className="re-section-head is-wide">
            <p className="kicker">CRM VS PROJECT TOOLS</p>
            <h2 className="h2">Agency CRM vs Project Management Software</h2>
            <p className="re-section-intro industry-wide-intro">
              A project management tool such as Asana or ClickUp runs delivery:
              tasks, deadlines and approvals. An agency CRM runs the
              relationship: pitches, proposals, renewals and conversations. Most
              agencies need both. TracktCRM covers the sales and client side,
              next to the tools you already use for delivery.
            </p>
          </div>
        </section>

        <section className="section re-band reveal" id="choosing">
          <p className="kicker">BUYER&apos;S GUIDE</p>
          <h2 className="h2">What to Look For in the Best CRM for Agencies</h2>
          <div className="re-choose-grid is-three">
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

        <section className="section re-int-band reveal" id="integrations">
          <p className="kicker">INTEGRATIONS</p>
          <h2 className="h2">
            Agency CRM Integrations: WhatsApp, Email, Calendar and Ads
          </h2>
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
          <p className="re-section-intro re-int-more">
            <a href="/integrations">Browse all CRM integrations</a>
          </p>
        </section>

        <section className="section reveal" id="pipeline-preview">
          <p className="kicker is-centered">SEE IT IN ACTION</p>
          <h2 className="h2 is-centered">
            See an Agency Pipeline From Pitch to Retainer
          </h2>
          <figure className="re-shot re-shot-wide">
            <img
              src="/assets/dashboard.png"
              alt="TracktCRM dashboard with deals by stage, a deals trend chart and leads won and lost per owner"
              width={1381}
              height={407}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <RelatedIndustries current="agencies" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Agency CRM FAQs</h2>
          <div className="faq-list re-faq-list">
            {AGENCY_FAQS.map((item, index) => (
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
              <h2>See TracktCRM on Your Own Agency Pipeline</h2>
              <p>
                Try the CRM free, or book a demo and we will walk
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
                Try the CRM free
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
