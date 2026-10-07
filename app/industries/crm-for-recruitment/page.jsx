import {
  ArrowIcon,
  BrandMark,
  BrokerIcon,
  CaptureIcon,
  CheckIcon,
  ClientIcon,
  ConversationIcon,
  InventoryIcon,
  OwnerIcon,
  ProjectPipelineIcon,
  ProposalIcon,
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
  AUDIENCES,
  CHOOSING_POINTS,
  FEATURES,
  INTEGRATIONS,
  PIPELINE_POINTS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  RECRUITMENT_FAQS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  candidates: BrokerIcon,
  clients: ClientIcon,
  channels: ConversationIcon,
  reminders: ReminderIcon,
  ownership: OwnerIcon,
  calendar: SiteVisitIcon,
  source: CaptureIcon,
  files: ProposalIcon,
  labels: InventoryIcon,
  placement: ProjectPipelineIcon,
  reporting: ReportIcon,
};

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const pageTitle = "Recruitment CRM India: Candidates & Clients | TracktCRM";
const pageDescription =
  "Recruitment CRM for Indian recruiters: track candidates and client roles, reach candidates on WhatsApp and get follow-up reminders. Free 1 month trial.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/industries/crm-for-recruitment",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/crm-for-recruitment`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

export default function RecruitmentCrmPage() {
  return (
    <div className="home recruitment-page">
      <RecruitmentCrmJsonLd faqs={RECRUITMENT_FAQS} features={FEATURES} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Recruitment CRM", href: "/industries/crm-for-recruitment" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner card-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                RECRUITMENT CRM
              </div>
              <h1 className="re-banner-title">
                Recruitment CRM for Recruiters Who Work{" "}
                <span>Candidates and Clients at Once</span>
              </h1>
              <p className="re-banner-sub">
                Candidates in one spreadsheet, client roles in another, and half
                the conversations on WhatsApp. TracktCRM is recruitment CRM
                software that keeps every candidate, every client and every
                conversation in one pipeline, with reminders so nobody goes
                quiet.
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
                Built for solo recruiters, in-house teams and agencies · Free 1 month trial
              </p>
            </div>
            <figure className="re-banner-media card-banner-media">
              <img
                src="/assets/recruitment/recruitment-crm-hero.webp"
                alt="Recruiter working with the TracktCRM AI assistant, with candidate profiles, interviews and messages in one dashboard"
                width={1280}
                height={721}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="problem">
          <div className="re-section-head is-wide">
            <p className="kicker">THE RECRUITER&apos;S PROBLEM</p>
            <h2 className="h2">
              Recruiting Runs on Conversations, and Conversations Get Lost
            </h2>
            <p className="re-section-intro">
              Recruiters juggle two relationships at once: the candidates they
              place and the clients they place them with. Without one shared
              system, the usual results are:
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
                alt="TracktCRM record with a timeline of calls, notes, files, email and WhatsApp messages"
                width={1645}
                height={802}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">RECRUITMENT CRM SOFTWARE</p>
              <h2 className="h2">What Is a Recruitment CRM?</h2>
              <p className="re-section-intro">
                A recruitment CRM is software that helps recruiters manage the
                relationships their work depends on: candidates they engage over
                months, and client companies they serve again and again. It
                keeps every conversation, owner and next step in one place, and
                reminds you when a conversation has gone quiet.
              </p>
              <p className="re-section-intro">
                See the full <a href="/crm-software">CRM software</a> overview.
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
              Recruitment CRM vs Applicant Tracking System: What Is the
              Difference?
            </h2>
            <p className="re-section-intro industry-wide-intro">
              The two are often confused. An applicant tracking system (ATS)
              handles applications for specific job openings. A recruitment CRM
              handles the relationships around them.
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
            <h2 className="h2">Recruitment CRM Features for Recruiters</h2>
          </div>
          <div className="re-feature-grid industry-feature-grid is-balanced">
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

        <section className="section re-band reveal" id="who-its-for">
          <p className="kicker">WHO IT IS FOR</p>
          <h2 className="h2">
            Recruitment CRM for Agencies, Staffing Firms, Headhunters and
            In-House Teams
          </h2>
          <div className="re-choose-grid">
            {AUDIENCES.map((item) => (
              <article className="re-choose-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="industry-page-links">
            Running a marketing or consulting agency instead? See the{" "}
            <a href="/industries/crm-for-agencies">agency CRM</a>. Moving from
            Pipedrive? Compare TracktCRM as a{" "}
            <a href="/pipedrive-alternative">Pipedrive alternative</a>.
          </p>
        </section>

        <section className="section reveal" id="candidate-data">
          <div className="re-section-head is-wide">
            <p className="kicker">CONSENT AND PRIVACY</p>
            <h2 className="h2">Candidate Data, Consent and Privacy</h2>
            <p className="re-section-intro">
              Candidate details such as CVs, phone numbers and conversation
              history are personal data. India&apos;s Digital Personal Data
              Protection Act, 2023 expects you to collect and keep it with
              consent and for a clear purpose. WhatsApp also expects candidates
              to have agreed to hear from you, and limits free-form replies to
              24 hours after their last message. TracktCRM keeps a full record
              of each conversation and who owns it, which helps you show what
              was sent and when.
            </p>
          </div>
        </section>

        <section className="section re-band reveal" id="two-pipelines">
          <div className="re-split">
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board with a pipeline switcher and records grouped by stage, each with an owner"
                width={1383}
                height={695}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">CANDIDATES AND CLIENTS</p>
              <h2 className="h2">
                Work Your Candidates and Your Clients Side by Side
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
            <h2 className="h2">How a Candidate Moves Through TracktCRM</h2>
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
          <h2 className="h2">What to Look For in a Recruitment CRM</h2>
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
            Recruitment CRM Integrations: WhatsApp, Email, Calendar and Ads
          </h2>
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
          <p className="re-section-intro re-int-more">
            <a href="/integrations">Browse all CRM integrations</a>
          </p>
        </section>

        <section className="section reveal" id="pipeline-preview">
          <p className="kicker is-centered">SEE IT IN ACTION</p>
          <h2 className="h2 is-centered">
            See Candidate and Client Pipelines in One View
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

        <RelatedIndustries current="recruitment" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Recruitment CRM FAQs</h2>
          <div className="faq-list re-faq-list">
            {RECRUITMENT_FAQS.map((item, index) => (
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
              <h2>See TracktCRM on Your Own Candidate Pipeline</h2>
              <p>
                Start a free 1 month trial, or book a demo and we will walk
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
