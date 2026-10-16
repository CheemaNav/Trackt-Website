import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  CheckIcon,
  OwnerIcon,
  ProjectPipelineIcon,
  ReminderIcon,
  ReportIcon,
  SiteVisitIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL } from "../../site";
import { BreadcrumbJsonLd, HealthcareCrmJsonLd } from "../../json-ld";
import {
  CHOOSING_POINTS,
  EHR_COMPARE_ROWS,
  FEATURES,
  HEALTHCARE_FAQS,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  WHAT_IS_POINTS,
} from "./data";
import { buildMetadata } from "@/lib/seo";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  ai: AiLeadIcon,
  pipeline: ProjectPipelineIcon,
  appointment: SiteVisitIcon,
  reminders: ReminderIcon,
  ownership: OwnerIcon,
  reporting: ReportIcon,
};

export const metadata = buildMetadata("/industries/crm-for-healthcare");

export default function HealthcareCrmPage() {
  return (
    <div className="home healthcare-page">
      <HealthcareCrmJsonLd faqs={HEALTHCARE_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Healthcare CRM", href: "/industries/crm-for-healthcare" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                HEALTHCARE CRM
              </div>
              <h1 className="re-banner-title">
                Healthcare CRM Software for Clinics{" "}
                <span>That Answers Every Patient Enquiry</span>
              </h1>
              <p className="re-banner-sub">
                Patients enquire on WhatsApp, by phone and through your website,
                often while the front desk is already busy. TracktCRM is
                healthcare CRM software that captures every enquiry, replies in seconds
                and keeps each patient moving from first message to appointment
                to follow-up.
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
                Built for clinics, diagnostic centres and care teams · Free plan
                available
              </p>
            </div>
            <figure className="re-banner-media re-banner-media-ui">
              <img
                src="/assets/healthcare-crm-hero.jpg"
                alt="TracktCRM AI assistant at a clinic front desk with healthcare CRM software showing a patient enquiry booked into an appointment"
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
              <p className="kicker">THE FRONT-DESK PROBLEM</p>
              <h2 className="h2">
                A patient who waits for a reply often books somewhere else
              </h2>
              <p className="re-section-intro">
                People choose a provider quickly and compare several. When
                enquiries are tracked in registers, phone diaries and chat
                threads, the usual results are:
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board keeping every patient enquiry in one view"
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
                alt="Healthcare CRM patient record with the full history of calls, messages and notes"
                width={1645}
                height={802}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="re-split-copy">
              <p className="kicker">HEALTHCARE CRM SOFTWARE</p>
              <h2 className="h2">What does a healthcare CRM actually do?</h2>
              <p className="re-section-intro">
                Healthcare CRM software is built around the relationship
                between a provider and the people it serves: the enquiry, the
                appointment, the visit and the follow-up. It is not a clinical
                system.
              </p>
              <p className="re-section-intro">
                TracktCRM is healthcare CRM software built around this cycle rather than adapted from a
                one-time-sale pipeline. Whether you need a clinic CRM for one
                practice, a CRM for hospitals with several departments, or
                patient relationship management for a diagnostic chain, the
                need is the same: patient enquiry management that does not
                depend on a front-desk register. See the full{" "}
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

        <section className="section re-band reveal" id="crm-vs-ehr">
          <div className="re-section-head is-wide">
            <p className="kicker">CRM VS EHR</p>
            <h2 className="h2">
              Healthcare CRM vs electronic health record: what is the
              difference?
            </h2>
            <p className="re-section-intro industry-wide-intro">
              The two are often confused. An electronic health record holds
              clinical information. Healthcare CRM software manages communication and
              follow-up around it. Most providers use both.
            </p>
          </div>
          <div className="compare-table-wrap cs-compare-wrap industry-compare-wrap">
            <table className="compare-table cs-compare-table">
              <thead>
                <tr>
                  <th aria-label="Comparison" />
                  <th>Electronic health record (EHR)</th>
                  <th>Healthcare CRM</th>
                </tr>
              </thead>
              <tbody>
                {EHR_COMPARE_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.ehr}</td>
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
            <h2 className="h2">What healthcare teams get with TracktCRM</h2>
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

        <section className="section re-band reveal" id="process">
          <div className="re-section-head">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">How an enquiry moves through TracktCRM</h2>
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
          <h2 className="h2">What to look for in a CRM for clinics</h2>
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
          <h2 className="h2">
            Connects with the tools healthcare teams already use
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
        </section>

        <section className="section reveal" id="pipeline-preview">
          <figure className="re-shot re-shot-wide">
            <img
              src="/assets/leadmanage.png"
              alt="TracktCRM clinic pipeline with enquiry, appointment booked, visited and follow-up due stages"
              width={1383}
              height={695}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <RelatedIndustries current="healthcare" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <div className="faq-list re-faq-list">
            {HEALTHCARE_FAQS.map((item, index) => (
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
              <h2>See TracktCRM on your own enquiry pipeline</h2>
              <p>
                Try our healthcare CRM software free, or book a demo and we will walk
                through your enquiries, appointments and follow-ups inside
                TracktCRM. Compare plans on the{" "}
                <a href="/pricing">CRM software pricing</a> page.
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
