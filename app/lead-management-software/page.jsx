import {
  AiLeadIcon,
  ArrowIcon,
  CaptureIcon,
  ChannelSnoozeIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  OwnerIcon,
  ProjectPipelineIcon,
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

const SEO = PAGE_SEO["/lead-management-software"];

const FEATURE_ICONS = {
  capture: CaptureIcon,
  assign: OwnerIcon,
  respond: AiLeadIcon,
  whatsapp: ChannelWhatsAppIcon,
  followup: ChannelSnoozeIcon,
  pipeline: ProjectPipelineIcon,
};

export const metadata = buildMetadata("/lead-management-software");

export default function LeadManagementSoftwarePage() {
  return (
    <div className="home">
      <FeatureSoftwareJsonLd
        id="schema-lead-mgmt"
        name="Lead Management Software"
        path="/lead-management-software"
        description={SEO.description}
        faqs={FAQS}
        features={FEATURES}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Lead management software", href: "/lead-management-software" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                LEAD MANAGEMENT
              </div>
              <h1 className="re-banner-title">
                Lead Management Software That Captures, Assigns and{" "}
                <span>Follows Up Every Lead</span>
              </h1>
              <p className="re-banner-sub">
                TracktCRM is lead management software for growing sales teams:
                every enquiry lands in one place, gets an owner, gets a fast
                reply and moves through your pipeline until it converts. Start
                free – no credit card needed.
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
                Free plan for 1 user · No credit card · WhatsApp and pipeline
                included
              </p>
            </div>
            <figure className="re-banner-media re-banner-media-ui">
              <img
                src="/assets/lead-management-hero.jpg"
                alt="TracktCRM AI assistant next to the lead management software pipeline with leads in New, Contacted, Qualified, Won and Lost stages"
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
              <p className="kicker">THE LEAD PROBLEM</p>
              <h2 className="h2">
                Why growing teams outgrow inbox-and-spreadsheet lead tracking
              </h2>
              <p className="re-section-intro">
                When Indian businesses and small sales teams start winning more
                enquiries, the first cracks show in the lead management process:
                missed chats, double work and no clear owner. Lead management
                software exists to stop that leak before it costs you deals.
                Spreadsheets can store names, but they cannot assign ownership,
                reply on WhatsApp or remind a rep tomorrow morning. That gap is
                where growing teams lose the easiest revenue.
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM pipeline board used as a lead management system"
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
            <h2 className="h2">
              Lead management software features that close the loop
            </h2>
            <p className="re-section-intro industry-wide-intro">
              TracktCRM combines capture, ownership, replies and pipeline so
              sales lead management software is not a separate product from your
              CRM. Each feature below maps to how your team already sells.
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
            <p className="kicker">LEAD MANAGEMENT PROCESS</p>
            <h2 className="h2">Lead management process in 5 steps</h2>
            <p className="re-section-intro">
              A clear lead management process keeps every enquiry moving:
              capture, assign, respond, follow up and convert. TracktCRM is the
              lead management system and lead management app that runs that loop
              for your team.
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
          <h2 className="h2">Who uses TracktCRM as a lead management tool</h2>
          <p className="re-section-intro">
            If your team answers enquiries on more than one channel, you need a
            shared record—not another spreadsheet tab. TracktCRM works as a
            practical lead management tool for owner-led teams and for managers
            who want CRM lead management without a long implementation project.
            Import existing contacts, connect WhatsApp and forms, then run the
            same five-step lead management process every day.
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
            Compare plans on the <a href="/pricing">CRM software pricing</a>{" "}
            page, or start free today.
          </p>
        </section>

        <section className="section re-band reveal" id="choosing">
          <p className="kicker">BUYER&apos;S GUIDE</p>
          <h2 className="h2">What to check before you pick sales lead management software</h2>
          <div className="re-choose-grid">
            <article className="re-choose-card">
              <h3>Automatic capture</h3>
              <p>
                Forms, ads and WhatsApp should create leads without manual
                entry. If your team still pastes numbers into a sheet, the tool
                is not doing CRM lead management yet.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Clear ownership</h3>
              <p>
                Every new enquiry needs an owner. Rotation and rules stop double
                chasing and silent inboxes—the basics of any serious lead
                management system.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Follow-up discipline</h3>
              <p>
                Reminders and tasks should surface quiet leads. A lead
                management app that only stores contacts will not protect your
                reply speed.
              </p>
            </article>
            <article className="re-choose-card">
              <h3>Channels your buyers use</h3>
              <p>
                If customers message on WhatsApp, the product must keep those
                threads on the lead. TracktCRM includes a shared inbox so the
                lead management process stays in one place.
              </p>
            </article>
          </div>
        </section>

        <section className="section reveal" id="why">
          <div className="re-section-head is-wide">
            <p className="kicker">WHY TRACKTCRM</p>
            <h2 className="h2">
              Why teams pick TracktCRM for CRM lead management
            </h2>
            <p className="re-section-intro industry-wide-intro">
              Most sales lead management software either stores contacts or
              automates email. TracktCRM sits in the middle of how small teams
              actually sell: forms and ads create leads, WhatsApp carries the
              conversation, AI can take the first reply, and the pipeline shows
              what still needs a human. You do not need a consultant to invent
              fields before the first lead arrives. Start free, connect the
              channels you use, and tighten
              the lead management process as volume grows. When you need more
              seats, automations or AI credits, upgrade without migrating again.
              That is the difference between a lead management app that sits
              beside your chats and a lead management system your team opens
              every morning.
            </p>
          </div>
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Lead management software FAQs</h2>
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
              <h2>Start free with lead management software that replies fast</h2>
              <p>
                Start free – no credit card needed. Or book a
                demo and we will map your lead management process inside
                TracktCRM.
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
