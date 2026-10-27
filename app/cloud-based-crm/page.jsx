import Link from "next/link";
import {
  ArrowIcon,
  CaptureIcon,
  CheckIcon,
  ClientIcon,
  ReportIcon,
  ReminderIcon,
} from "../icons";
import RevealInit from "../components/reveal-init";
import { APP_REGISTER_URL } from "../site";
import { BreadcrumbJsonLd, FeatureSoftwareJsonLd } from "../json-ld";
import {
  AUDIENCE,
  FAQS,
  FEATURES,
  PROBLEM_POINTS,
  PROCESS_STEPS,
} from "./data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const SEO = PAGE_SEO["/cloud-based-crm"];

const FEATURE_ICONS = {
  browser: CaptureIcon,
  team: ClientIcon,
  updates: ReminderIcon,
  leads: CaptureIcon,
  reports: ReportIcon,
  secure: ReminderIcon,
};

export const metadata = buildMetadata("/cloud-based-crm");

export default function CloudBasedCrmPage() {
  return (
    <div className="home">
      <FeatureSoftwareJsonLd
        id="schema-cloud-crm"
        name="Cloud-Based CRM"
        path="/cloud-based-crm"
        description={SEO.description}
        faqs={FAQS}
        features={FEATURES}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Cloud-based CRM", href: "/cloud-based-crm" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                CLOUD CRM
              </div>
              <h1 className="re-banner-title">
                Cloud-Based CRM to Manage Leads and{" "}
                <span>Sales From Anywhere</span>
              </h1>
              <p className="re-banner-sub">
                TracktCRM is a cloud-based CRM for small businesses: open it in
                any browser on desktop or mobile, share one pipeline with your
                team and keep WhatsApp, forms and ads in sync. Start free – no credit card needed.
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
                No install · Works in your browser · Free plan available
              </p>
            </div>
            <figure className="re-banner-media re-banner-media-ui">
              <img
                src="/assets/cloud-crm-hero.webp"
                alt="TracktCRM AI assistant on a cloud with the same CRM dashboard, pipeline and leads open on a desktop, laptop and phone"
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
              <p className="kicker">WHY CLOUD</p>
              <h2 className="h2">
                Why teams switch from desktop tools to a cloud-based CRM
              </h2>
              <p className="re-section-intro">
                Indian businesses with hybrid and field teams need the same lead
                list in the office and on the road. A cloud-based CRM removes
                installs and keeps one shared view, so online CRM access is not
                limited to a single laptop. Cloud CRM software also means
                automatic updates: your web-based CRM gains WhatsApp, forms and
                reporting improvements without another install cycle for IT.
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/dashboard.png"
                alt="TracktCRM online CRM dashboard with deals and reports"
                width={1381}
                height={407}
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
            <h2 className="h2">Cloud CRM software features for small teams</h2>
            <p className="re-section-intro industry-wide-intro">
              TracktCRM is cloud CRM software and a full CRM platform: leads,
              WhatsApp, pipeline and reports in one web-based CRM you open from
              anywhere.
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
            <h2 className="h2">How to get a cloud-based CRM live in four steps</h2>
            <p className="re-section-intro">
              Most teams are productive the same week they sign up. You do not
              need a long migration project before the first live enquiry can
              enter the pipeline. Connect the channels you already buy, invite
              the people who answer customers, and keep selling while you refine
              stages.
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
          <h2 className="h2">Who a cloud-based CRM is for</h2>
          <p className="re-section-intro">
            Choose a cloud-based CRM when your sellers are not always at one
            desk. TracktCRM is online CRM and web-based CRM access in one CRM
            platform: the same leads, notes and WhatsApp history whether you are
            in the office or on a phone browser. Cloud CRM software updates on
            our side, so your team is not waiting on installers.
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
          <h2 className="h2">What to look for in cloud CRM software</h2>
          <div className="re-choose-grid">
            <article className="re-choose-card">
              <h3>Browser access</h3>
              <p>
                A cloud-based CRM should work in a normal browser on desktop and
                mobile. If you need a heavy desktop install for daily selling,
                it is not built for remote sales teams.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Shared data</h3>
              <p>
                Your online CRM must show the same pipeline to every user. Notes
                and chats belong on the lead, not in private folders.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Channels included</h3>
              <p>
                A web-based CRM that ignores WhatsApp or forms forces people
                back into side tools. TracktCRM keeps those channels inside the
                CRM platform.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Clear pricing</h3>
              <p>
                Start free, then pay per user when you need
                more seats or AI. You should not need a long contract to try a
                cloud-based CRM on live leads.
              </p>
            </article>
          </div>
          <p className="industry-page-links">
            Related reading:{" "}
            <Link href="/blog/cloud-based-crm-guide">
              What is a cloud-based CRM? A plain-English guide with a 10-question checklist
            </Link>
            .
          </p>
        </section>

        <section className="section reveal" id="why">
          <div className="re-section-head is-wide">
            <p className="kicker">WHY TRACKTCRM</p>
            <h2 className="h2">Why TracktCRM works as cloud CRM software</h2>
            <p className="re-section-intro industry-wide-intro">
              A cloud-based CRM is only useful if people actually open it. TracktCRM
              is online CRM access with WhatsApp, forms, ads and pipeline in the
              same CRM platform, so reps are not bouncing between tabs. Cloud CRM
              software updates happen on our side; your web-based CRM simply
              shows the new capabilities when you log in. Managers reviewing a
              remote sales team see the same stages and notes as the person in
              the field. Data stays in your account for selling—not for ads. Start
              free, invite teammates when you need them, and keep
              one shared view whether you are on a laptop or a phone browser.
            </p>
          </div>
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Cloud-based CRM FAQs</h2>
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
              <h2>Run your cloud-based CRM from any browser</h2>
              <p>
                Start free – no credit card needed. Or book a
                demo and we will show TracktCRM on your lead flow.
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
