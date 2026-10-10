import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  BrokerIcon,
  CaptureIcon,
  FieldMessageIcon,
  InventoryIcon,
  ProjectPipelineIcon,
  ReminderIcon,
  ReportIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { BreadcrumbJsonLd, EducationCrmJsonLd } from "../../json-ld";
import {
  AUDIENCES,
  CHOOSING_POINTS,
  EDU_FAQS,
  FEATURES,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  assignment: BrokerIcon,
  pipeline: ProjectPipelineIcon,
  reminders: ReminderIcon,
  ai: AiLeadIcon,
  fee: InventoryIcon,
  history: FieldMessageIcon,
  reporting: ReportIcon,
};

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const pageTitle = "Education CRM Software India for Admissions | TracktCRM";
const pageDescription =
  "Education CRM for Indian institutes: capture enquiries from ads, portals and WhatsApp, assign counsellors, track admissions and fees. Try the CRM free.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/industries/education-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/education-crm`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM education CRM for admissions teams in India",
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

export default function EducationCrmPage() {
  return (
    <div className="home edu-layout">
      <EducationCrmJsonLd faqs={EDU_FAQS} features={FEATURES} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Education CRM", href: "/industries/education-crm" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                EDUCATION CRM
              </div>
              <h1 className="re-banner-title">
                Education CRM for Indian Institutes{" "}
                <span>That Takes Every Enquiry to Enrolment</span>
              </h1>
              <p className="re-banner-sub">
                Enquiries reach an admissions team from ad campaigns, education
                portals, walk-ins, calls and WhatsApp, often all at once during
                admission season. TracktCRM is education CRM software that
                captures every enquiry, assigns it to a counsellor, and tracks
                each applicant from first contact to enrolment.
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
                  Try the CRM free
                </a>
              </div>
              <p className="re-banner-trust">
                Try the CRM free · No credit card required
              </p>
            </div>
            <figure className="re-banner-media edu-banner-media">
              <img
                src="/assets/education/education-crm-hero.webp"
                alt="TracktCRM education CRM dashboard on a laptop and phone showing enquiries, applications and enrolled students"
                width={1774}
                height={887}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="edu-why reveal" id="problem">
          <h2>Admission Enquiries Are Scattered and Follow-Ups Depend on Memory</h2>
          <p>
            In peak admission season, enquiries arrive faster than a spreadsheet
            or a shared inbox can track. A generic sales CRM does not fix that
            on its own. TracktCRM comes with the admissions workflow already
            built in.
          </p>
          <div className="edu-why-points">
            {PROBLEM_POINTS.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="edu-canvas reveal" id="what-is">
          <div className="edu-card">
            <h2>What Is an Education CRM?</h2>
            <p>
              An education CRM is software that helps schools, colleges,
              universities and coaching institutes manage admission enquiries.
              It captures leads from every channel, assigns each one to a
              counsellor, tracks follow-ups, and follows every applicant from
              first enquiry to enrolment.
            </p>
            <p>
              A generic sales CRM treats a student like a deal. An education CRM
              treats them as an applicant moving through admission stages, with
              fees and documents attached. Three things set it apart:
            </p>
          </div>

          <div className="edu-capabilities">
            {WHAT_IS_POINTS.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>

          <p className="edu-lede edu-what-note">
            TracktCRM is built around this workflow, not adapted from a generic
            sales CRM. See the full <a href="/crm-software">CRM software</a>{" "}
            overview.
          </p>

          <figure className="edu-product">
            <img
              src="/assets/dashboard.png"
              alt="Education CRM software capturing enquiries from ads, portals, website and WhatsApp"
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="edu-card edu-card-tight" id="features">
            <p className="kicker is-centered">FEATURES</p>
            <h2>Education CRM Features for Admissions Teams</h2>
          </div>

          <div className="edu-mods">
            {FEATURES.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <article className="edu-mod" key={feature.title}>
                  <div className="edu-mod-icon" aria-hidden="true">
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

        <section className="edu-pipe reveal" id="process">
          <p className="kicker is-centered">HOW IT WORKS</p>
          <h2 className="h2 is-centered">
            From Enquiry to Enrolment: How an Admission Moves Through TracktCRM
          </h2>
          <figure className="edu-pipe-shot">
            <img
              src="/assets/leadmanage.png"
              alt="TracktCRM pipeline board with lead cards grouped by stage, each showing the owner, phone number and last activity"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="edu-steps">
            {PROCESS_STEPS.map((step) => (
              <article key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="edu-more edu-plain reveal" id="audience">
          <p className="kicker is-centered">WHO IT&apos;S FOR</p>
          <h2 className="h2 is-centered">
            Education CRM for Schools, Colleges, Universities and Coaching
            Institutes
          </h2>
          <div className="edu-more-grid">
            {AUDIENCES.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="edu-more reveal" id="crm-vs-erp">
          <p className="kicker is-centered">CRM VS ERP</p>
          <h2 className="h2 is-centered">
            Education CRM vs ERP, LMS and Student Information Systems
          </h2>
          <p className="edu-lede">
            A CRM manages the journey up to and around admission: enquiry,
            follow-up, application and fees. An ERP or student information
            system runs academics after enrolment, such as timetables,
            attendance and exams. An LMS delivers the courses. TracktCRM is
            built for the enquiry-to-enrolment side and can connect to your
            other systems through its API and webhooks.
          </p>
        </section>

        <section className="edu-more edu-plain reveal" id="choosing">
          <p className="kicker is-centered">BUYER&apos;S GUIDE</p>
          <h2 className="h2 is-centered">
            What to Look For in a CRM for Educational Institutions
          </h2>
          <div className="edu-more-grid">
            {CHOOSING_POINTS.map((item) => (
              <article key={item.title}>
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

        <section className="edu-int reveal" id="integrations">
          <p className="kicker is-centered">INTEGRATIONS</p>
          <h2 className="h2 is-centered">
            Education CRM Integrations: WhatsApp, Meta Ads, Google Ads,
            Calendar and Payments
          </h2>
          <p className="edu-lede">
            Connect the tools your admissions team already uses.
          </p>
          <div className="edu-int-list">
            {INTEGRATIONS.map((item) => (
              <article key={item.title}>
                <span className="edu-int-logo">
                  <BrandMark name={item.brand} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="edu-lede">
            <a href="/integrations">Browse all CRM integrations</a>
          </p>
        </section>

        <section className="edu-more edu-plain reveal" id="privacy">
          <p className="kicker is-centered">STUDENT DATA</p>
          <h2 className="h2 is-centered">
            Student Data, Parent Consent and Privacy
          </h2>
          <p className="edu-lede">
            Admission data often belongs to minors. India&apos;s Digital
            Personal Data Protection Act, 2023 treats anyone under 18 as a child
            and expects verifiable parental consent before their data is
            processed. WhatsApp messaging also needs opt-in. With TracktCRM, you
            decide the scripts and messages that go out.
          </p>
        </section>

        <RelatedIndustries current="education" />

        <section className="edu-faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Education CRM FAQs</h2>
          <p className="edu-lede">
            Answers to common questions about admissions CRM software for
            Indian institutes.
          </p>
          <div className="faq-list edu-faq-list">
            {EDU_FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="edu-close reveal" id="demo">
          <h2>See TracktCRM on Your Own Admissions Pipeline</h2>
          <p>
            Book a demo and we will show how your enquiries and courses would
            look inside TracktCRM, or try the CRM free. No credit
            card, no lock-in.
          </p>
          <div className="edu-close-actions">
            <a className="btn btn-primary edu-hero-cta" href="/contact">
              Book a Demo
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a
              className="btn edu-close-ghost"
              href={APP_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the CRM free
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
