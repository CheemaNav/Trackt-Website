import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  BrokerIcon,
  CaptureIcon,
  FieldMessageIcon,
  InventoryIcon,
  ProjectPipelineIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { BreadcrumbJsonLd, EducationCrmJsonLd } from "../../json-ld";
import {
  CHOOSING_POINTS,
  EDU_FAQS,
  FEATURES,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  TESTIMONIALS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  assignment: BrokerIcon,
  pipeline: ProjectPipelineIcon,
  fee: InventoryIcon,
  history: FieldMessageIcon,
  reporting: AiLeadIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "Education CRM Software for Admissions | TracktCRM",
  },
  description:
    "TracktCRM is an education CRM that captures student enquiries from every channel, assigns them to counsellors, and tracks each applicant to enrolment.",
  alternates: {
    canonical: "/industries/education-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/education-crm`,
    siteName: SITE_NAME,
    title: "TracktCRM — The CRM Built for How Admissions Teams Work",
    description:
      "Capture enquiries from every channel, assign them to counsellors, and track every applicant to enrolment.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM education CRM for admissions teams",
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
    title: "TracktCRM — The CRM Built for How Admissions Teams Work",
    description:
      "Capture enquiries from every channel, assign them to counsellors, and track every applicant to enrolment.",
    images: [ogImage],
  },
};

export default function EducationCrmPage() {
  return (
    <div className="home edu-layout">
      <EducationCrmJsonLd faqs={EDU_FAQS} />
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
                The CRM Built for How Admissions Teams
                <span>Actually Work</span>
              </h1>
              <p className="re-banner-sub">
                Enquiries arrive from ad campaigns, portals, walk-ins and
                WhatsApp — often all at once during admission season. TracktCRM
                is an education CRM that captures every enquiry, assigns it to a
                counsellor, and tracks each applicant from first contact to
                enrolment.
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
                No credit card required · Free 1 month trial · No setup fee
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
          <h2>Enquiries are scattered, and follow-ups depend on memory</h2>
          <p>
            During peak admission season, enquiries come in faster than any
            spreadsheet or shared inbox can track. A generic CRM does not
            solve this on its own — TracktCRM comes with the admissions
            workflow built in.
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
            <h2>What does an education CRM actually do?</h2>
            <p>
              An education CRM is CRM software built specifically for
              admissions and enquiry management, rather than general sales. A
              CRM for education is different from a generic CRM because of a
              few specific things a CRM for educational institutions needs to
              handle.
            </p>
            <p>
              TracktCRM is built around this workflow directly, rather than
              adapted from a generic sales CRM. Whether your team searches for
              an education CRM, crm education software, or admissions
              software, the requirement is the same one this page addresses. See
              the full <a href="/crm-software">CRM software</a> overview.
            </p>
          </div>

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

          <div className="edu-capabilities">
            {WHAT_IS_POINTS.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>

          <div className="edu-card edu-card-tight" id="features">
            <p className="kicker is-centered">FEATURES</p>
            <h2>Everything an admissions team needs</h2>
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
                  <p>{feature.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="edu-pipe reveal" id="process">
          <p className="kicker is-centered">HOW IT WORKS</p>
          <h2 className="h2 is-centered">
            How an enquiry becomes an enrolled student
          </h2>
          <p className="edu-lede">
            See applicants moving from enquiry through campus visit,
            application, admitted and enrolled, with counsellor names and fee
            status visible.
          </p>
          <figure className="edu-pipe-shot">
            <img
              src="/assets/leadmanage.png"
              alt="TracktCRM admission-stage pipeline showing applicants from enquiry to enrolled"
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

        <section className="edu-more reveal" id="choosing">
          <p className="kicker is-centered">WHAT&apos;S MORE</p>
          <h2 className="h2 is-centered">
            What to look for in a CRM for educational institutions
          </h2>
          <p className="edu-lede">
            Choosing a CRM for education is less about generic sales features
            and more about whether admissions work is built in. Here is what
            matters most:
          </p>
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
            Connects with the tools admissions teams already use
          </h2>
          <div className="edu-int-list">
            {INTEGRATIONS.map((item) => (
              <article key={item.title}>
                {item.brand ? (
                  <span className="edu-int-logo">
                    <BrandMark name={item.brand} />
                  </span>
                ) : (
                  <span className="edu-int-fallback" aria-hidden="true">
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

        <section className="edu-quotes reveal" id="testimonial">
          <p className="kicker is-centered">SOCIAL PROOF</p>
          <h2 className="h2 is-centered">
            Admissions teams replacing spreadsheets with one pipeline
          </h2>
          <div className="edu-quote-grid">
            {TESTIMONIALS.map((item) => (
              <blockquote key={item.quote}>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <cite>- {item.attribution}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <RelatedIndustries current="education" />

        <section className="edu-faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <p className="edu-lede">
            Common questions about a CRM for education, student management CRM
            and how TracktCRM fits admissions teams.
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
          <h2>See TracktCRM on your own admissions pipeline</h2>
          <p>
            Book a 20-minute demo and we&apos;ll show you how your current
            enquiries and courses would look inside TracktCRM.
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
              Start Free Trial
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
