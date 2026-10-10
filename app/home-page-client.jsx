"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowIcon,
  BrandMark,
  ChannelCallIcon,
  ChannelEmailIcon,
  ChannelSnoozeIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  CloseIcon,
  DragHandleIcon,
  FieldDropdownIcon,
  FieldEmailIcon,
  FieldMessageIcon,
  FieldPhoneIcon,
  FieldTextIcon,
} from "./icons";
import HeroLottie from "./components/hero-lottie";
import { BookDemoButton } from "./components/demo-request-provider";
import useReveal from "./use-reveal";
import { APP_REGISTER_URL } from "./site";
import {
  COMPARE,
  FAQS,
  FEATURES,
  HERO_WORDS,
  INDUSTRIES,
  INTEGRATIONS,
  AI_FEATURES,
  LOGO_ROW,
  SPEED_POINTS,
  STEPS,
  TIMELINE,
} from "./home-data";

// The track scrolls by -50%, so each half must be wider than the widest screen.
const logos = [...LOGO_ROW, ...LOGO_ROW, ...LOGO_ROW, ...LOGO_ROW];

export default function HomePageClient() {
  const [wordIndex, setWordIndex] = useState(0);
  const [tab, setTab] = useState("pipeline");
  const active = FEATURES.find((item) => item.id === tab) || FEATURES[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % HERO_WORDS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  useReveal();

  return (
    <div className="home">

      <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="badge">
            <span className="pulse" />
            AI CRM software for sales teams
          </div>
          <h1 className="h1 hero-title">
            AI CRM Software for Indian Businesses That Replies to Every Lead in
            Seconds
          </h1>
          <p className="hero-made-for">
            <span className="sr-only">
              Made for real estate teams, education, automotive, insurance,
              SaaS, agencies and freelancers.
            </span>
            <span className="hero-line-rotate" aria-hidden="true">
              Made for
              <span className="hero-word-wrap">
                {HERO_WORDS.map((word) => (
                  <span className="hero-word-sizer" key={`size-${word}`}>
                    {word}
                  </span>
                ))}
                <span
                  key={wordIndex}
                  className={`hero-word hero-word-${wordIndex % 4}`}
                >
                  {HERO_WORDS[wordIndex]}
                </span>
              </span>
            </span>
          </p>
          <p className="lead">
            TracktCRM captures every enquiry, replies on WhatsApp, email and SMS
            within seconds, and keeps your whole{" "}
            <a href="/crm-software">sales pipeline</a> in one place. Setup takes
            days, not weeks, and the <a href="/pricing">pricing</a> suits small
            teams.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-primary"
              href={APP_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the CRM free
            </a>
            <BookDemoButton className="btn btn-outline">
              Book a Demo
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </BookDemoButton>
          </div>
          <div className="trust-row">
            <span className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <CheckIcon size={11} />
              </span>
              No credit card required
            </span>
            <span className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <CheckIcon size={11} />
              </span>
              Try the CRM free
            </span>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="hero-visual">
            <div className="hero-lottie-wrap">
              <HeroLottie />
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section reveal">
        <p className="marquee-kicker">TRUSTED BY GROWING SALES TEAMS</p>
        <div className="marquee">
          {logos.map((logo, index) => (
            <span className="marquee-logo" key={`${logo.name}-${index}`}>
              <img
                src={logo.src}
                alt={index < LOGO_ROW.length ? logo.name : ""}
                aria-hidden={index < LOGO_ROW.length ? undefined : true}
                width={logo.width}
                height={logo.height}
                decoding="async"
              />
            </span>
          ))}
        </div>
      </section>

      <section className="section reveal" id="product">
        <div className="section-head">
          <div>
            <p className="kicker">CRM FEATURES</p>
            <h2 className="h2">
              Lead Management Software and Sales Pipeline Tool in One CRM
            </h2>
          </div>
          <p className="section-side">
            Lead management, pipeline tracking, automation, reporting and
            integrations are all included in every plan. No add-ons to buy
            later.
          </p>
        </div>
        <div className="tabs">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              type="button"
              className={`tab${tab === feature.id ? " tab-active" : ""}`}
              onClick={(event) => {
                setTab(feature.id);
                event.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
            >
              {feature.label}
            </button>
          ))}
        </div>
        <div className={`product-grid${tab === "leads" || tab === "pipeline" || tab === "integrations" || tab === "forms" ? " is-leads" : ""}`}>
          {FEATURES.map((feature) => (
            <div
              className="product-copy"
              key={feature.id}
              hidden={feature.id !== tab}
            >
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <div className="chips">
                {feature.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="product-preview">
            {tab === "leads" ? (
              <img
                className="product-shot"
                src="/assets/dashboard.png"
                alt="TracktCRM lead management dashboard with deals, stages and customer report"
                width={1381}
                height={407}
                loading="lazy"
                decoding="async"
              />
            ) : tab === "pipeline" ? (
              <img
                className="product-shot"
                src="/assets/leadmanage.png"
                alt="TracktCRM sales pipeline board with New, Won, Lost and Junk stages"
                width={1383}
                height={695}
                loading="lazy"
                decoding="async"
              />
            ) : tab === "automation" ? (
              <div className="preview-card" key={tab}>
                <div className="preview-top">
                  <span className="dot" />
                  <strong>{active.screen}</strong>
                  <em>this week</em>
                </div>
                <div className="preview-cols">
                  {active.columns.map((column) => (
                    <div className="col-box" key={column.name}>
                      <div className="col-head">
                        <span>{column.name}</span>
                        <span>{column.count}</span>
                      </div>
                      {column.cards.map((card) => (
                        <div className="mini-card auto-mini" key={card.t}>
                          <span className={`auto-channel auto-channel-${card.channel}`}>
                            {card.channel === "call" ? (
                              <ChannelCallIcon />
                            ) : card.channel === "whatsapp" ? (
                              <ChannelWhatsAppIcon />
                            ) : card.channel === "email" ? (
                              <ChannelEmailIcon />
                            ) : (
                              <ChannelSnoozeIcon />
                            )}
                          </span>
                          <div className="auto-mini-copy">
                            <b>{card.t}</b>
                            <span>{card.v}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="metrics">
                  {active.metrics.map((metric) => (
                    <div className="metric" key={metric.k}>
                      <b>{metric.v}</b>
                      <span>{metric.k}</span>
                    </div>
                  ))}
                </div>
                <div className="bars">
                  {active.bars.map((height, index) => (
                    <i key={`${height}-${index}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            ) : tab === "forms" ? (
              <div className="preview-card forms-tab-card" key={tab}>
                <div className="preview-top">
                  <span className="dot" />
                  <strong>{active.screen}</strong>
                  <em>live preview</em>
                </div>
                <div className="forms-tab-body">
                  <div className="forms-tab-fields" aria-hidden="true">
                    <span>
                      <FieldTextIcon />
                    </span>
                    <span>
                      <FieldEmailIcon />
                    </span>
                    <span>
                      <FieldPhoneIcon />
                    </span>
                    <span>
                      <FieldDropdownIcon />
                    </span>
                    <span>
                      <FieldMessageIcon />
                    </span>
                  </div>
                  <div className="forms-tab-form" aria-hidden="true">
                    <div className="forms-tab-input">
                      <FieldTextIcon />
                      Full name
                    </div>
                    <div className="forms-tab-input">
                      <FieldEmailIcon />
                      Email address
                    </div>
                    <div className="forms-tab-input">
                      <FieldPhoneIcon />
                      Phone number
                    </div>
                    <div className="forms-tab-input is-textarea">
                      <FieldMessageIcon />
                      Message
                    </div>
                    <span className="forms-tab-submit">
                      Submit
                      <ArrowIcon size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ) : tab === "integrations" ? (
              <div className="preview-card int-preview" key={tab}>
                <div className="preview-top">
                  <span className="dot" />
                  <strong>{active.screen}</strong>
                  <em>this week</em>
                </div>
                <div className="preview-cols int-preview-cols">
                  {active.columns.map((column) => (
                    <div className="col-box" key={column.name}>
                      <div className="col-head">
                        <span>{column.name}</span>
                        <span>{column.count}</span>
                      </div>
                      <div className="int-mini-grid">
                        {column.cards.map((card) => (
                          <div className="int-mini" key={card.t} title={card.t}>
                            <BrandMark name={card.brand} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="metrics">
                  {active.metrics.map((metric) => (
                    <div className="metric" key={metric.k}>
                      <b>{metric.v}</b>
                      <span>{metric.k}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="preview-card" key={tab}>
                <div className="preview-top">
                  <span className="dot" />
                  <strong>{active.screen}</strong>
                  <em>this week</em>
                </div>
                <div className="preview-cols">
                  {active.columns.map((column) => (
                    <div className="col-box" key={column.name}>
                      <div className="col-head">
                        <span>{column.name}</span>
                        <span>{column.count}</span>
                      </div>
                      {column.cards.map((card) => (
                        <div className="mini-card" key={card.t}>
                          <b>{card.t}</b>
                          <span>{card.v}</span>
                          <div className="bar-track">
                            <div className="bar-fill" style={{ width: card.w }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="metrics">
                  {active.metrics.map((metric) => (
                    <div className="metric" key={metric.k}>
                      <b>{metric.v}</b>
                      <span>{metric.k}</span>
                    </div>
                  ))}
                </div>
                <div className="bars">
                  {active.bars.map((height, index) => (
                    <i key={`${height}-${index}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="speed reveal" id="speed">
        <div className="speed-inner">
          <div>
            <p className="kicker">AI SALES AUTOMATION</p>
            <h2 className="h2">
              AI Sales Assistant That Replies to Every Lead in Seconds
            </h2>
            <p className="speed-copy">
              Many AI CRMs only make reports look smarter. TracktCRM acts on the
              lead. The moment an enquiry arrives, it sends a WhatsApp message,
              an email and an SMS, then places a follow-up call while the buyer
              is still interested. Your rep picks up the conversation with the
              full history in front of them.
            </p>
            <div className="speed-points">
              {SPEED_POINTS.map((point) => (
                <div className="speed-point" key={point}>
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <p className="speed-more">
              <Link href="/industries/ai-crm">
                Explore TracktCRM&apos;s AI CRM
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </p>
          </div>
          <div className="timeline stagger">
            {TIMELINE.map((item) => (
              <div className="time-item" key={item.at}>
                <b>{item.at}</b>
                <span>
                  <strong>{item.title}</strong>
                  <span>{item.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-wa-section reveal" id="whatsapp">
        <div className="re-split home-wa">
          <div className="re-split-copy">
            <p className="kicker">WHATSAPP CRM</p>
            <h2 className="h2">
              WhatsApp CRM to Capture, Chat and Follow Up With Every Lead
            </h2>
            <p className="re-section-intro">
              In India, most enquiries start on WhatsApp. TracktCRM ties every
              chat to a lead record, sends automated replies, and schedules
              follow-ups. Your team works from one shared inbox instead of
              personal phones.
            </p>
            <p className="home-wa-more">
              <Link href="/features/whatsapp-crm">
                See WhatsApp CRM features
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </p>
          </div>
          <figure className="home-wa-visual">
            <img
              src="/assets/whatsapp/whatsapp-crm-hero.png"
              alt="WhatsApp chat on a phone synced to the TracktCRM inbox and the lead's contact record"
              width={1683}
              height={935}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section industries reveal" id="industries">
        <p className="kicker">INDUSTRY CRM SOLUTIONS</p>
        <h2 className="h2">
          <Link className="industries-head-link" href="/industries">
            CRM Software for Every Industry: Real Estate, Education, Agencies
            and More
          </Link>
        </h2>
        <p>
          Ready-made pipelines, fields and follow-up rules for real estate,
          education, agencies and recruitment - live from day one.
        </p>
        <div className="industry-grid stagger">
          {INDUSTRIES.map((industry) => (
            <Link
              className="industry-card"
              href={industry.href}
              key={industry.name}
            >
              <h3>{industry.name}</h3>
              <p>{industry.body}</p>
              <ul>
                {industry.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
        <div className="industries-view-all">
          <Link className="btn btn-outline" href="/industries">
            View all industries
            <span className="btn-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </section>

      <section className="section compare-section reveal" id="compare">
        <p className="kicker">WHY TEAMS SWITCH</p>
        <h2 className="h2">
          Affordable Pipedrive Alternative for Small Businesses in India
        </h2>
        <p className="compare-intro">
          Most <Link href="/crm-software">CRM tools</Link> are priced and built
          for large teams. TracktCRM gives small businesses, agencies and
          freelancers lead management, a visual pipeline, built-in WhatsApp
          automation and AI replies at a lower cost. If you are moving from
          Pipedrive or a spreadsheet, we help migrate your data.{" "}
          <Link href="/pipedrive-alternative">
            Compare TracktCRM with Pipedrive
          </Link>
          .
        </p>
        <div className="compare-board">
          <article className="compare-card compare-card-old">
            <header className="compare-card-head">
              <span className="compare-pill compare-pill-old">The old way</span>
              <h3>Spreadsheets and heavy CRMs</h3>
            </header>
            <ul>
              {COMPARE.map((row) => (
                <li key={row.old}>
                  <span className="compare-icon compare-icon-x" aria-hidden="true">
                    <CloseIcon size={13} />
                  </span>
                  {row.old}
                </li>
              ))}
            </ul>
          </article>
          <span className="compare-vs" aria-hidden="true">
            VS
          </span>
          <article className="compare-card compare-card-new">
            <header className="compare-card-head">
              <span className="compare-pill compare-pill-new">With TracktCRM</span>
              <h3>One CRM that actually runs sales</h3>
            </header>
            <ul>
              {COMPARE.map((row) => (
                <li key={row.new}>
                  <span className="compare-icon compare-icon-ok" aria-hidden="true">
                    <CheckIcon size={13} />
                  </span>
                  {row.new}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section forms-section reveal" id="forms">
        <div className="forms-layout">
          <div className="forms-copy">
            <p className="kicker">CUSTOM FORMS</p>
            <h2 className="h2">
              Custom Lead Capture Forms That Feed Your CRM Pipeline
            </h2>
            <p>
              Drag in the fields you need and map them to name, email and phone.
              Pick the pipeline, stage and owner. Copy the link or iframe onto
              any website. Each submission appears in TracktCRM already
              assigned.
            </p>
            <ol className="forms-steps">
              <li>
                <b>01</b>
                <span>Drag fields and map them to lead name, email, phone and more.</span>
              </li>
              <li>
                <b>02</b>
                <span>Choose the pipeline, stage and owner so every submission is assigned.</span>
              </li>
              <li>
                <b>03</b>
                <span>Copy the share link or iframe and publish it on any site.</span>
              </li>
              <li>
                <b>04</b>
                <span>Every lead goes straight into your pipeline the moment someone submits.</span>
              </li>
            </ol>
          </div>

          <div className="forms-visual" aria-hidden="true">
            <div className="forms-mock">
              <div className="forms-mock-top">
                <div>
                  <strong>New lead form</strong>
                  <em>Status · Active</em>
                </div>
                <span className="forms-badge">Create form</span>
              </div>

              <div className="forms-route">
                <span>
                  <small>Pipeline</small>
                  Default Pipeline
                </span>
                <span>
                  <small>Stage</small>
                  New
                </span>
                <span>
                  <small>Assign to</small>
                  James Carter
                </span>
              </div>

              <div className="forms-builder">
                <div className="forms-palette">
                  <p>Fields</p>
                  <span>
                    <FieldTextIcon /> Single line
                  </span>
                  <span>
                    <FieldEmailIcon /> Email
                  </span>
                  <span>
                    <FieldPhoneIcon /> Phone
                  </span>
                  <span>
                    <FieldDropdownIcon /> Dropdown
                  </span>
                  <span>
                    <FieldMessageIcon /> Message
                  </span>
                </div>
                <div className="forms-canvas">
                  <p>Form layout</p>
                  <div className="forms-field">
                    <span className="forms-field-grip">
                      <DragHandleIcon />
                    </span>
                    <b>Full name</b>
                    <em>→ Lead name</em>
                  </div>
                  <div className="forms-field">
                    <span className="forms-field-grip">
                      <DragHandleIcon />
                    </span>
                    <b>Email</b>
                    <em>→ Email</em>
                  </div>
                  <div className="forms-field">
                    <span className="forms-field-grip">
                      <DragHandleIcon />
                    </span>
                    <b>Phone</b>
                    <em>→ Phone</em>
                  </div>
                  <div className="forms-field is-drop">Drop a field here</div>
                  <div className="forms-drag-ghost">
                    <FieldDropdownIcon /> Dropdown
                  </div>
                </div>
              </div>

              <div className="forms-embed">
                <p>Share & embed</p>
                <code>https://app.tracktcrm.com/f/new-lead</code>
                <code>{`<iframe src="https://app.tracktcrm.com/f/new-lead"></iframe>`}</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" id="integrations">
        <div className="int-wrap">
          <div className="int-center">
            <h2>
              <span className="accent int-cap">CRM Integrations</span>:
              WhatsApp, Gmail, Meta Ads, 99acres,{" "}
              <span className="orange int-cap">Shopify</span> and More
            </h2>
            <p className="int-sub">
              Connect the tools your team already uses. If one is missing, tell
              us and we will build the integration.
            </p>
            <a
              className="int-cta"
              href={APP_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the CRM free
              <span className="int-cta-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className="int-grid">
            {INTEGRATIONS.map((name, index) => (
              <div
                className={`int-cell${name ? "" : " is-empty"}`}
                key={`${name || "empty"}-${index}`}
                aria-hidden={name ? undefined : true}
              >
                {name ? <BrandMark name={name} /> : null}
              </div>
            ))}
          </div>
        </div>
        <p className="int-note">
          <a href="/integrations">
            Browse all CRM integrations
            <span className="int-note-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
          {" · "}
          Don&apos;t see your tool?{" "}
          <a href="/contact">
            Let us know — we&apos;ll integrate it for you
            <span className="int-note-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </p>
      </section>

      <section className="ai-section reveal" id="ai">
        <div className="ai-section-inner">
          <div className="ai-features">
            <div className="ai-features-header">
              <h2>
                <span className="ai-accent">AI</span> Features Built Into
                TracktCRM
              </h2>
              <p>Smart tools that save your sales team time on every lead</p>
            </div>
            <div className="ai-features-grid">
              {AI_FEATURES.map((feature) => (
                <article className="ai-feature-card" key={feature.title}>
                  <div className="ai-card-icon">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3 className="ai-card-title">{feature.title}</h3>
                  <p className="ai-card-description">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <h2 className="h2-sm">How to Get Started With TracktCRM in 4 Steps</h2>
        <div className="step-grid stagger">
          {STEPS.map((step) => (
            <div className="step" key={step.n}>
              <b>{step.n}</b>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section faq reveal" id="faq">
        <div className="faq-layout">
          <div className="faq-aside">
            <h2 className="h2">CRM Software FAQs</h2>
            <div className="faq-art" aria-hidden="true">
              <span className="faq-bubble faq-bubble-outline">
                <i />
                <i />
                <i />
              </span>
              <span className="faq-bubble faq-bubble-solid">?</span>
            </div>
          </div>
          <div className="faq-list">
            {FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section reveal" id="demo">
        <div className="cta">
          <div>
            <h2>Try the CRM Free Today</h2>
            <p>
              Start free, or book a 30-minute walkthrough built around your
              sales process. No credit card, no lock-in.
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
            <BookDemoButton className="btn-ghost">Book a demo</BookDemoButton>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
