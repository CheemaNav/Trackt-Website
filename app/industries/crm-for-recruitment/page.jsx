import {
  ArrowIcon,
  BrandMark,
  BrokerIcon,
  CheckIcon,
  ClientIcon,
  ConversationIcon,
  OwnerIcon,
  ReminderIcon,
  ReportIcon,
  SiteVisitIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { BreadcrumbJsonLd, RecruitmentCrmJsonLd } from "../../json-ld";
import {
  ATS_COMPARE_ROWS,
  CHOOSING_POINTS,
  FEATURES,
  INTEGRATIONS,
  PIPELINE_POINTS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  RECRUITMENT_FAQS,
  TESTIMONIALS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  candidates: BrokerIcon,
  clients: ClientIcon,
  channels: ConversationIcon,
  reminders: ReminderIcon,
  ownership: OwnerIcon,
  calendar: SiteVisitIcon,
  reporting: ReportIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "Recruitment CRM Software for Recruiters | TracktCRM",
  },
  description:
    "TracktCRM is a recruitment CRM that tracks candidates and client roles in one pipeline, reaches candidates on WhatsApp and reminds recruiters to follow up.",
  alternates: {
    canonical: "/industries/crm-for-recruitment",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/crm-for-recruitment`,
    siteName: SITE_NAME,
    title: "TracktCRM — The CRM for Recruiters Working Candidates and Clients",
    description:
      "Track candidates and client roles in one pipeline, and never let a conversation go quiet.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM recruitment CRM for candidates and client roles",
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
    title: "TracktCRM — The CRM for Recruiters Working Candidates and Clients",
    description:
      "Track candidates and client roles in one pipeline, and never let a conversation go quiet.",
    images: [ogImage],
  },
};

export default function RecruitmentCrmPage() {
  return (
    <div className="home recruitment-page">
      <RecruitmentCrmJsonLd faqs={RECRUITMENT_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Recruitment CRM", href: "/industries/crm-for-recruitment" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                RECRUITMENT CRM
              </div>
              <h1 className="re-banner-title">
                The CRM for Recruiters Working
                <span>Candidates and Clients at Once</span>
              </h1>
              <p className="re-banner-sub">
                Candidates in one spreadsheet, client roles in another, and half
                the conversations on WhatsApp. TracktCRM is a recruitment CRM
                that keeps every candidate, every client and every conversation
                in one pipeline, with reminders so nobody goes quiet.
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
                Built for solo recruiters, in-house teams and agencies · 30-day
                free trial
              </p>
            </div>
            <figure className="re-banner-media">
              <img
                src="/assets/contact-banner.png"
                alt="Recruitment team working together in a bright modern office"
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
              <p className="kicker">THE RECRUITER&apos;S PROBLEM</p>
              <h2 className="h2">
                Recruiting runs on conversations, and conversations get lost
              </h2>
              <p className="re-section-intro">
                Recruiters juggle two relationships at once: the candidates they
                place and the clients they place them with. Without one shared
                system, the usual results are:
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board keeping candidates and clients in one view"
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
                alt="Recruitment CRM record with the full history of calls, messages and notes"
                width={1645}
                height={802}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">RECRUITMENT CRM SOFTWARE</p>
              <h2 className="h2">What does a recruitment CRM actually do?</h2>
              <p className="re-section-intro">
                A recruitment CRM is CRM software built around the relationships
                recruiting depends on. Unlike a one-time sales pipeline, a CRM
                for recruitment has to handle people you engage over months, and
                companies you serve repeatedly.
              </p>
              <p className="re-section-intro">
                TracktCRM is built around these relationships rather than
                adapted from a one-time-sale pipeline. Whether you run a
                recruitment agency, an in-house talent team or a solo desk, the
                job is the same: candidate relationship management, with a
                talent pipeline you can actually see. See the full{" "}
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

        <section className="section re-band reveal" id="crm-vs-ats">
          <div className="re-section-head is-wide">
            <p className="kicker">CRM VS ATS</p>
            <h2 className="h2">
              Recruitment CRM vs applicant tracking system: what is the
              difference?
            </h2>
            <p className="re-section-intro industry-wide-intro">
              The two are often confused. An applicant tracking system handles
              applications to specific job openings. A recruitment CRM handles
              the relationships: the candidates you are building over time, and
              the clients you recruit for.
            </p>
          </div>
          <div className="compare-table-wrap cs-compare-wrap industry-compare-wrap">
            <table className="compare-table cs-compare-table">
              <thead>
                <tr>
                  <th aria-label="Comparison" />
                  <th>Applicant tracking system</th>
                  <th>Recruitment CRM</th>
                </tr>
              </thead>
              <tbody>
                {ATS_COMPARE_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.ats}</td>
                    <td>{row.crm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">What recruiters get with TracktCRM</h2>
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

        <section className="section re-band reveal" id="two-pipelines">
          <div className="re-split">
            <figure className="re-photo">
              <img
                src="/assets/real-estate/broker-handshake.jpg"
                alt="Recruiter and client agreeing on a placement"
                width={1152}
                height={864}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">CANDIDATES AND CLIENTS</p>
              <h2 className="h2">
                Work your candidates and your clients side by side
              </h2>
              <p className="re-section-intro">
                Recruitment is a two-sided business, and most tools only cover
                one side well. With TracktCRM you can run both:
              </p>
              <div className="re-mini-points">
                {PIPELINE_POINTS.map((point) => (
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
            <h2 className="h2">How a candidate moves through TracktCRM</h2>
          </div>
          <div className="re-process-grid">
            {PROCESS_STEPS.map((step) => (
              <article className="re-process-card" key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.href ? (
                  <a className="industry-process-link" href={step.href}>
                    {step.linkLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="choosing">
          <p className="kicker">BUYER&apos;S GUIDE</p>
          <h2 className="h2">What to look for in a recruitment CRM</h2>
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
          <h2 className="h2">Connects with the tools recruiters already use</h2>
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
              alt="TracktCRM candidate pipeline with sourced, contacted, screened, interviewing, offer and placed stages beside a client pipeline"
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
            Recruiters keeping candidates and clients in TracktCRM
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

        <RelatedIndustries current="recruitment" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <div className="faq-list re-faq-list">
            {RECRUITMENT_FAQS.map((item, index) => (
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
              <h2>See TracktCRM on your own candidate pipeline</h2>
              <p>
                Start a free 30-day trial, or book a demo and we will walk
                through your candidates and clients inside TracktCRM.
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
