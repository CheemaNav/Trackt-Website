import Link from "next/link";
import {
  AiLeadIcon,
  ArrowIcon,
  CaptureIcon,
  CheckIcon,
  MobileIcon,
  ProjectPipelineIcon,
  ReminderIcon,
  ReportIcon,
} from "../icons";
import RevealInit from "../components/reveal-init";
import { INDUSTRY_ICONS } from "../components/related-industries";
import { BookDemoButton } from "../components/demo-request-provider";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../site";
import { BreadcrumbJsonLd, IndustriesHubJsonLd } from "../json-ld";
import {
  COMING_SOON,
  CORE_FEATURES,
  HUB_FAQS,
  LIVE_INDUSTRIES,
  STEPS,
  WHY_POINTS,
} from "./data";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  pipeline: ProjectPipelineIcon,
  ai: AiLeadIcon,
  reminders: ReminderIcon,
  reporting: ReportIcon,
  mobile: MobileIcon,
};

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const ogTitle = "TracktCRM - A CRM Built for Your Industry";
const ogDescription =
  "Real estate, education, agencies, recruitment, insurance, automotive and healthcare, each with its own pipeline, AI replies and WhatsApp.";

export const metadata = {
  title: {
    absolute: "CRM by Industry: Real Estate, Education & More | TracktCRM",
  },
  description:
    "Find the TracktCRM built for your industry: real estate, education, agencies, recruitment, insurance, automotive and healthcare, each with its own pipeline, AI replies and WhatsApp.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries`,
    siteName: SITE_NAME,
    title: ogTitle,
    description: ogDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM industry CRM for real estate, education, agencies, recruitment, insurance, automotive and healthcare",
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
    title: ogTitle,
    description: ogDescription,
    images: [ogImage],
  },
};

export default function IndustriesHubPage() {
  return (
    <div className="home industries-hub">
      <IndustriesHubJsonLd industries={LIVE_INDUSTRIES} faqs={HUB_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="hub-hero reveal" id="top">
          <div className="badge">
            <span className="pulse" aria-hidden="true" />
            INDUSTRIES
          </div>
          <h1 className="hub-hero-title">
            CRM Software Built for the Way{" "}
            <span>Your Industry Sells</span>
          </h1>
          <p className="hub-hero-sub">
            Every industry has its own stages, its own conversations and its own
            definition of a won deal. TracktCRM gives you an industry CRM with
            the pipeline, workflows and channels your team already works with,
            ready to start using.
          </p>
          <div className="hub-hero-ctas">
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
            <BookDemoButton className="btn btn-outline">Book a Demo</BookDemoButton>
          </div>
          <p className="hub-hero-trust">
            Free 1 month trial · AI replies and WhatsApp included in every
            industry setup
          </p>
          <ul className="hub-hero-jump" aria-label="Jump to an industry">
            {LIVE_INDUSTRIES.map((item) => {
              const Icon = INDUSTRY_ICONS[item.icon];
              return (
                <li key={item.id}>
                  <Link href={item.href}>
                    <Icon size={16} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section re-band reveal" id="why">
          <div className="re-section-head is-wide">
            <p className="kicker">WHY IT MATTERS</p>
            <h2 className="h2">
              A generic CRM makes you build your industry from scratch
            </h2>
            <p className="re-section-intro industry-wide-intro">
              Most <Link href="/crm-software">CRM software</Link> gives you a
              list of contacts and a blank pipeline. An industry-specific CRM
              starts further along, with the stages and workflows your team
              already uses:
            </p>
          </div>
          <div className="re-point-grid">
            {WHY_POINTS.map((point) => (
              <article className="re-point-card industry-point-card" key={point}>
                <span className="re-point-check" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <p>{point}</p>
              </article>
            ))}
          </div>
          <p className="hub-why-next">
            Pick your industry below to see how TracktCRM handles it.
          </p>
        </section>

        <section className="section reveal" id="choose">
          <div className="re-section-head">
            <p className="kicker">CHOOSE YOUR INDUSTRY</p>
            <h2 className="h2">Find the CRM for your industry</h2>
          </div>
          <div className="hub-industry-grid">
            {LIVE_INDUSTRIES.map((item) => {
              const Icon = INDUSTRY_ICONS[item.icon];
              return (
                <Link className="hub-industry-card" href={item.href} key={item.id}>
                  <span className="hub-industry-icon" aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <h3>{item.name}</h3>
                  <p>{item.body}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <span className="re-point-check" aria-hidden="true">
                          <CheckIcon size={12} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="hub-industry-cta">
                    {item.cta}
                    <ArrowIcon size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section re-band reveal" id="coming-soon">
          <div className="re-section-head is-wide">
            <p className="kicker">COMING SOON</p>
            <h2 className="h2">More industry setups are in progress</h2>
            <p className="re-section-intro industry-wide-intro">
              We are building dedicated pages for more industries. In the
              meantime, TracktCRM&apos;s customizable pipeline already works for
              them:
            </p>
          </div>
          <ul className="hub-soon-list">
            {COMING_SOON.map((name) => (
              <li className="hub-soon-chip" key={name}>
                {name}
                <span>Coming soon</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section reveal" id="core-features">
          <div className="re-section-head is-wide">
            <p className="kicker">CORE FEATURES</p>
            <h2 className="h2">
              The same core platform behind every industry setup
            </h2>
          </div>
          <div className="re-feature-grid">
            {CORE_FEATURES.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <article className="re-feature-card" key={feature.title}>
                  <div className="re-feature-icon">
                    <Icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              );
            })}
          </div>
          <p className="hub-feature-links">
            Learn more about the <Link href="/industries/ai-crm">AI CRM</Link>{" "}
            and the <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> that
            power every setup.
          </p>
        </section>

        <section className="section re-band reveal" id="other-industries">
          <div className="hub-other">
            <div>
              <p className="kicker">OTHER INDUSTRIES</p>
              <h2 className="h2">
                Your industry is not listed? You can still use TracktCRM
              </h2>
              <p className="re-section-intro">
                TracktCRM pipelines use stages you define, so the same platform
                fits businesses beyond the ones listed above. Set up the steps
                you actually follow, from enquiry to won, and change them as you
                grow. If you would like help shaping a pipeline for your
                business, book a demo and we will walk through it with you.
              </p>
            </div>
            <BookDemoButton className="btn btn-primary hub-other-cta">
              Book a Demo
            </BookDemoButton>
          </div>
        </section>

        <section className="section reveal" id="get-started">
          <div className="re-section-head">
            <p className="kicker">GETTING STARTED</p>
            <h2 className="h2">Get started in three steps</h2>
          </div>
          <div className="re-process-grid">
            {STEPS.map((step) => (
              <article className="re-process-card" key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.href ? (
                  <Link className="industry-process-link" href={step.href}>
                    {step.linkLabel}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Frequently asked questions</h2>
          <div className="faq-list re-faq-list">
            {HUB_FAQS.map((item, index) => (
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
              <h2>Find the CRM that fits your industry</h2>
              <p>
                Start a free 1 month trial, or book a demo and we will set up the
                pipeline for your industry with you.
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
              <BookDemoButton className="btn-ghost">Book a Demo</BookDemoButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
