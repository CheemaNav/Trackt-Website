import {
  AiLeadIcon,
  ArrowIcon,
  BrandMark,
  CaptureIcon,
  ChannelCallIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  FieldMessageIcon,
  InventoryIcon,
  OwnerIcon,
  ReportIcon,
  SiteVisitIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import { APP_REGISTER_URL, SITE_NAME, SITE_URL } from "../../site";
import { AiCrmJsonLd, BreadcrumbJsonLd } from "../../json-ld";
import {
  AI_FAQS,
  CHOOSING_POINTS,
  COMPARE_ROWS,
  FEATURES,
  INDUSTRIES,
  INTEGRATIONS,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  WHAT_IS_POINTS,
} from "./data";

const FEATURE_ICONS = {
  channels: ChannelWhatsAppIcon,
  calls: ChannelCallIcon,
  summaries: FieldMessageIcon,
  routing: OwnerIcon,
  booking: SiteVisitIcon,
  reporting: ReportIcon,
  catalog: InventoryIcon,
  control: AiLeadIcon,
};

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const pageTitle = "AI CRM with AI Sales Assistant for India | TracktCRM";
const pageDescription =
  "AI CRM that replies to every lead on WhatsApp, email and SMS in seconds, calls to follow up and hands over to your rep with full context. Try the CRM free.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/industries/ai-crm",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/industries/ai-crm`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM AI CRM with an AI sales assistant answering leads",
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

export default function AiCrmPage() {
  return (
    <div className="home">
      <AiCrmJsonLd faqs={AI_FAQS} features={FEATURES} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "AI CRM", href: "/industries/ai-crm" },
        ]}
      />
      <RevealInit />

      <main>
      <section className="re-banner ai-banner reveal" id="top">
        <div className="re-banner-inner ai-banner-inner">
          <div className="re-banner-copy">
            <div className="badge re-banner-badge">
              <span className="pulse" aria-hidden="true" />
              AI CRM
            </div>
            <h1 className="re-banner-title">
              AI CRM with an AI Sales Assistant{" "}
              <span>That Replies to Leads in Seconds</span>
            </h1>
            <p className="re-banner-sub">
              TracktCRM is AI CRM software for sales teams in India. When an
              enquiry arrives from a website form, a Meta or Google ad, 99acres
              or WhatsApp, the built-in AI sales assistant sends a WhatsApp
              message and an email within seconds, follows up by SMS, and places
              a call while the lead is still warm. Your rep then picks up with
              the whole conversation in front of them.
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
              <a className="btn btn-outline" href="#proof">
                See It In Action
              </a>
            </div>
            <p className="re-banner-trust">
              No credit card required · Try the CRM free · Every response is
              logged on the lead record
            </p>
          </div>
          <figure className="re-banner-media ai-banner-media">
            <img
              src="/assets/AI-CRM.png"
              alt="TracktCRM AI CRM replying to leads across WhatsApp, email and SMS"
              width={1600}
              height={1000}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section re-band reveal" id="problem">
        <div className="re-section-head is-wide">
          <p className="kicker">SPEED TO LEAD</p>
          <h2 className="h2">Why Most AI CRMs Only Report on Leads</h2>
          <p className="re-section-intro">
            Many CRMs add a chatbot or a smart report and call it AI. That helps
            you understand what already happened, but the first few minutes
            after an enquiry are where deals are usually lost. Research on speed
            to lead keeps pointing the same way: the faster the first reply, the
            better the chance of a real conversation. TracktCRM is built for
            that window.
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
              alt="TracktCRM lead record with the full history of calls, messages and notes"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="re-split-copy">
            <p className="kicker">AI CRM SOFTWARE</p>
            <h2 className="h2">What Is an AI CRM?</h2>
            <p className="re-section-intro">
              An AI CRM is customer relationship management software that uses
              AI to act on leads, not just store them. It replies to new
              enquiries, schedules follow-ups, summarises calls and updates the
              pipeline automatically. A regular CRM waits for your team to do
              these things.
            </p>
            <p className="re-section-intro">
              A real AI CRM should do the five things below. See how this sits
              inside our <a href="/crm-software">CRM software</a>.
            </p>
          </div>
        </div>
        <div className="re-capability-row">
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
          <h2 className="h2">AI Sales Assistant Features Inside TracktCRM</h2>
        </div>
        <div className="re-feature-grid is-balanced">
          {FEATURES.map((feature) => {
            const Icon = FEATURE_ICONS[feature.icon] || CaptureIcon;
            return (
              <article className="re-feature-card" key={feature.title}>
                <div className="re-feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section re-band reveal" id="process">
        <div className="re-section-head">
          <p className="kicker">FROM ENQUIRY TO REP</p>
          <h2 className="h2">
            How Speed to Lead Works: From Enquiry to Rep Handover
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

      <section className="section re-int-band reveal" id="integrations">
        <p className="kicker">CHANNELS AND INTEGRATIONS</p>
        <h2 className="h2">AI CRM for WhatsApp, Email, SMS and Voice Calls</h2>
        <p className="re-section-intro">
          Most Indian leads start on WhatsApp, so the AI works there first. Use
          our <a href="/features/whatsapp-crm">WhatsApp CRM</a> to keep every
          chat tied to a lead record. Email and SMS run independently, so the AI
          also works for teams that do not use WhatsApp.
        </p>
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

      <section className="section reveal" id="industries">
        <p className="kicker">BY INDUSTRY</p>
        <h2 className="h2">
          AI CRM for Real Estate, Education, Automotive and Agencies
        </h2>
        <div className="re-choose-grid">
          {INDUSTRIES.map((item) => (
            <article className="re-choose-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>
                {item.body} <a href={item.href}>{item.linkLabel}</a>.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section re-band reveal" id="compare">
        <div className="re-section-head is-wide">
          <p className="kicker">HOW IT COMPARES</p>
          <h2 className="h2">TracktCRM vs Chatbots and Reporting-Only AI CRMs</h2>
        </div>
        <div className="compare-table-wrap cs-compare-wrap industry-compare-wrap">
          <table className="compare-table cs-compare-table">
            <thead>
              <tr>
                <th aria-label="Comparison" />
                <th>Chatbot on a website</th>
                <th>CRM with AI reports</th>
                <th>TracktCRM</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.chatbot}</td>
                  <td>{row.reports}</td>
                  <td>{row.tracktcrm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="re-section-intro">
          Comparing TracktCRM with a specific CRM? See the{" "}
          <a href="/pipedrive-alternative">Pipedrive alternative</a> page.
        </p>
      </section>

      <section className="section reveal" id="choosing">
        <p className="kicker">BUYER&apos;S GUIDE</p>
        <h2 className="h2">What to Look For in an AI CRM</h2>
        <div className="re-choose-grid">
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

      <section className="section re-band reveal" id="privacy">
        <div className="re-split">
          <div className="re-split-copy">
            <p className="kicker">CONSENT AND PRIVACY</p>
            <h2 className="h2">Consent, Data Privacy and Control</h2>
            <p className="re-section-intro">
              Automated messages and calls should respect consent. WhatsApp
              Business messaging needs opt-in, and India&apos;s Digital Personal
              Data Protection Act, 2023 applies to how you store lead data. You
              set the scripts and can disclose AI involvement as clearly as you
              like.
            </p>
            <p className="re-section-intro">
              Read how we handle data in our{" "}
              <a href="/privacy-policy">privacy policy</a>.
            </p>
          </div>
          <figure className="re-photo">
            <img
              src="/assets/ai/ai-crm-consent-privacy.webp"
              alt="Illustration of WhatsApp opt-in consent, AI disclosure and protected lead data around a security shield"
              width={1152}
              height={864}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section reveal" id="proof">
        <p className="kicker is-centered">SEE IT IN ACTION</p>
        <h2 className="h2 is-centered">See the AI Sales Assistant in Action</h2>
        <p className="re-section-intro is-centered">
          A lead arrives, WhatsApp and email go out, a follow-up call is placed,
          and your rep opens a summarised conversation.
        </p>
        <figure className="re-shot re-shot-wide">
          <img
            src="/assets/AI-response.png"
            alt="TracktCRM lead record showing AI reply, call transcript and summary before rep handover"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <section className="section faq reveal" id="faq">
        <p className="kicker is-centered">FAQ</p>
        <h2 className="h2 is-centered">AI CRM FAQs</h2>
        <div className="faq-list re-faq-list">
          {AI_FAQS.map((item) => (
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

      <section className="cta-section reveal" id="demo">
        <div className="cta">
          <div>
            <h2>Try TracktCRM&apos;s AI CRM Free</h2>
            <p>
              Start free or book a live demo to see instant response, follow-up
              calls and handover on your own leads. No credit card, no lock-in.
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
