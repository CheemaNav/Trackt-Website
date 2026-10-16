import {
  AiLeadIcon,
  ArrowIcon,
  CaptureIcon,
  CheckIcon,
  ReportIcon,
  ReminderIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import { APP_REGISTER_URL } from "../../site";
import { BreadcrumbJsonLd, FeatureSoftwareJsonLd } from "../../json-ld";
import {
  AUDIENCE,
  FAQS,
  FEATURES,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  SHOW_DEAL_VALUE,
} from "./data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const SEO = PAGE_SEO["/features/sales-dashboard"];

const FEATURE_ICONS = {
  pipeline: ReportIcon,
  scorecard: ReportIcon,
  roi: CaptureIcon,
  ai: AiLeadIcon,
  followup: ReminderIcon,
  mobile: CaptureIcon,
};

export const metadata = buildMetadata("/features/sales-dashboard");

export default function SalesDashboardPage() {
  return (
    <div className="home">
      <FeatureSoftwareJsonLd
        id="schema-sales-dash"
        name="Sales Dashboard"
        path="/features/sales-dashboard"
        description={SEO.description}
        faqs={FAQS}
        features={FEATURES}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Sales dashboard", href: "/features/sales-dashboard" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                SALES DASHBOARD
              </div>
              <h1 className="re-banner-title">
                Sales Dashboard That Shows Every Lead, Deal and{" "}
                <span>Rep in Real Time</span>
              </h1>
              <p className="re-banner-sub">
                TracktCRM gives managers a live view of pipeline, follow-ups,
                rep scorecards and source-wise ROI—without rebuilding a sales
                report in a spreadsheet. Start free – no credit
                card needed.
              </p>
              <div className="re-banner-ctas">
                <a
                  className="btn btn-primary"
                  href={APP_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start free
                  <span className="btn-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
                <a className="btn btn-outline" href="/contact">
                  Book a demo
                </a>
              </div>
              <p className="re-banner-trust">
                Pipeline · Scorecards · Source ROI · Free plan available
              </p>
            </div>
            <figure className="re-banner-media">
              <img
                src="/assets/dashboard.png"
                alt="TracktCRM sales dashboard with deals, stages and customer report"
                width={1381}
                height={407}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="problem">
          <div className="re-split">
            <div className="re-split-copy">
              <p className="kicker">THE REPORTING GAP</p>
              <h2 className="h2">
                Why spreadsheet sales reports lag behind the real pipeline
              </h2>
              <p className="re-section-intro">
                Growing teams in India and worldwide still paste weekly numbers
                into sheets while deals move in WhatsApp. A live sales dashboard
                fixes that by reading the same CRM data your reps already use.
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline report view used as a sales performance dashboard"
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

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">What your sales dashboard shows</h2>
            <p className="re-section-intro industry-wide-intro">
              TracktCRM packs pipeline overview, sales reporting software and
              scorecards into the same product your team uses to sell—so the CRM
              dashboard never drifts from reality.
            </p>
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
            <h2 className="h2">How a sales report stays accurate in TracktCRM</h2>
            <p className="re-section-intro">
              Accuracy comes from one system of record. When reps capture leads,
              reply on WhatsApp and move stages in TracktCRM, managers inherit
              those updates automatically. No paste step, no version conflicts,
              and no waiting until Friday for someone to rebuild the sheet.
            </p>
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

        <section className="section reveal" id="who">
          <p className="kicker">WHO IT&apos;S FOR</p>
          <h2 className="h2">Who needs live pipeline reporting</h2>
          <p className="re-section-intro">
            If you still rebuild Monday numbers by hand, you need reporting that
            reads the same deals your reps move every hour. TracktCRM keeps the
            pipeline report, activity views and source ROI next to the records
            themselves, so coaching happens while deals are still open—not after
            the month closes.
          </p>
          <div className="re-choose-grid is-three">
            {AUDIENCE.map((item) => (
              <article className="re-choose-card" key={item.name}>
                <h3>
                  <a href={item.href}>{item.name}</a>
                </h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="industry-page-links">
            See <a href="/pricing">CRM software pricing</a> or start free today.
          </p>
        </section>

        <section className="section re-band reveal" id="choosing">
          <p className="kicker">BUYER&apos;S GUIDE</p>
          <h2 className="h2">What to look for in sales reporting software</h2>
          <div className="re-choose-grid">
            <article className="re-choose-card">
              <h3>Live pipeline</h3>
              <p>
                {SHOW_DEAL_VALUE ? "Stages and values" : "Stages"} should
                update when reps move deals. A static
                export is not a sales performance dashboard.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Source clarity</h3>
              <p>
                You should see which ads, portals and forms win deals—not only
                how many leads arrived. That is the job of serious sales
                reporting software.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Rep visibility</h3>
              <p>
                Activity and outcomes per person turn a CRM dashboard into a
                coaching tool. Guesswork from chat screenshots is not enough.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Follow-ups in view</h3>
              <p>
                Quiet leads and open tasks should appear before they go cold.
                Pair reporting with{" "}
                <a href="/lead-management-software">lead management software</a>{" "}
                so the next step is always clear.
              </p>
            </article>
          </div>
        </section>

        <section className="section reveal" id="why">
          <div className="re-section-head is-wide">
            <p className="kicker">WHY TRACKTCRM</p>
            <h2 className="h2">Why managers trust TracktCRM reporting</h2>
            <p className="re-section-intro industry-wide-intro">
              Spreadsheet sales reports lag because they are a second system.
              TracktCRM keeps the pipeline report, scorecards and source views on
              the same records reps update when they reply on WhatsApp or move a
              deal. Sales reporting software that lives elsewhere always drifts.
              A sales performance dashboard should answer three questions before
              lunch: which stage is stuck, which source is worth more budget, and
              which rep needs coaching. Open the CRM dashboard from any browser,
              act on quiet leads the same day, and stop rebuilding Monday numbers
              by hand. Start free when you want to test that
              loop on live deals.
            </p>
          </div>
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Sales dashboard FAQs</h2>
          <div className="faq-list re-faq-list">
            {FAQS.map((item, index) => (
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
              <h2>See your sales dashboard on live deals</h2>
              <p>
                Start free – no credit card needed. Or book a
                demo and we will walk through your pipeline report in TracktCRM.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="btn-dark"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free
              </a>
              <a className="btn-ghost" href="/contact">
                Book a demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
