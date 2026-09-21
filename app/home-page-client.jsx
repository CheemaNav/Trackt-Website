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
  GoogleBadge,
} from "./icons";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import HeroLottie from "./components/hero-lottie";
import useReveal from "./use-reveal";
import {
  COMPARE,
  FAQS,
  FEATURES,
  HERO_WORDS,
  INDUSTRIES,
  INTEGRATIONS,
  AI_FEATURES,
  LOGO_ROW,
  QUOTES,
  SPEED_POINTS,
  STEPS,
  TIMELINE,
} from "./home-data";

const logos = [...LOGO_ROW, ...LOGO_ROW];
const reviews = [...QUOTES, ...QUOTES];

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
      <SiteHeader />

      <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="badge">
            <span className="pulse" />
            AI CRM software for sales teams
          </div>
          <h1 className="h1">
            <span className="hero-line">The AI CRM that answers</span>
            <br className="hero-break" />
            <span className="hero-line">your leads&nbsp;–</span>
            <span className="hero-line hero-line-rotate" aria-hidden="true">
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
          </h1>
          <p className="lead">
            TracktCRM is AI-powered CRM software that captures every lead,
            responds in seconds over WhatsApp, email and SMS, and keeps your
            sales pipeline organized - built for how agencies, consultants and freelancers actually sell.{" "}
            <a href="/ai-crm">See the AI sales assistant</a> or explore our{" "}
            <a href="/real-estate-crm">real estate CRM</a>.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/contact">
              Start Free Trial
            </a>
            <a className="btn btn-outline" href="/contact">
              Book a Demo
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
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
              Free 1 month trial
            </span>
            <span className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <CheckIcon size={11} />
              </span>
              Trusted by 500+ businesses
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
        <p className="marquee-kicker">TRUSTED BY 500+ SALES TEAMS</p>
        <div className="marquee">
          {logos.map((logo, index) => (
            <span key={`${logo}-${index}`}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="section reveal" id="product">
        <div className="section-head">
          <div>
            <p className="kicker">CRM FEATURES</p>
            <h2 className="h2">
              Everything your sales CRM should do, in one place
            </h2>
          </div>
          <p className="section-side">
            Lead management, sales pipeline, automation, reporting and
            integrations - all included on every plan.
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
          <div className="product-copy" key={tab}>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
            <div className="chips">
              {active.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
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
              An AI CRM that answers every lead in seconds - not just an
              AI-powered dashboard
            </h2>
            <p className="speed-copy">
              Most &quot;AI CRM&quot; tools stop at smart reporting. TracktCRM&apos;s AI
              actually acts on your leads: the moment an enquiry lands, our AI
              sales assistant sends a WhatsApp message, an email and an SMS -
              then places an automated follow-up call while the lead is still
              warm. Your rep picks up mid-conversation with the full history
              attached, never a cold trail.
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
              <Link href="/ai-crm">
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

      <section className="section industries reveal" id="industries">
        <p className="kicker">INDUSTRY CRM SOLUTIONS</p>
        <h2 className="h2">A CRM built around how your industry sells</h2>
        <p>
          Ready-made pipelines, fields and follow-up rules for real estate,
          freelancers, agencies and education - live from day one.
        </p>
        <div className="industry-grid stagger">
          {INDUSTRIES.map((industry) => (
            <div className="industry-card" key={industry.name}>
              <h3>{industry.name}</h3>
              <p>{industry.body}</p>
              <ul>
                {industry.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              {industry.href.startsWith("/") ? (
                <Link className="industry-link" href={industry.href}>
                  Learn more <ArrowIcon size={13} />
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="section compare-section reveal" id="compare">
        <p className="kicker">WHY TEAMS SWITCH</p>
        <h2 className="h2">An easy-to-use, affordable Pipedrive alternative</h2>
        <p className="compare-intro">
        Most CRM software including tools like Pipedrive is priced and built for enterprise teams. TracktCRM gives small businesses, agencies, and freelancers powerful lead management and sales pipeline tools, plus AI-powered automation, at a fraction of the cost. See why teams choose TracktCRM as a{" "}
        <Link href="/pipedrive-alternative">Pipedrive alternative</Link>.
        </p>
        <div className="compare-board">
          <article className="compare-card compare-card-old">
            <header className="compare-card-head">
              <span className="compare-pill compare-pill-old">The old way</span>
              <h3>Spreadsheets & bloated CRMs</h3>
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
            <h2 className="h2">Build a form. Route every lead. Embed anywhere.</h2>
            <p>
              Drag fields into place, map them to your CRM, pick a pipeline and
              stage, then drop the link or iframe on any website. Submissions
              land in TracktCRM ready for your team.
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
              <span className="accent int-cap">Connects</span> with the{" "}
              <span className="orange int-cap">tools</span>
              <br />
              you already use
            </h2>
            <a className="int-cta" href="/contact">
              Start Free Trial
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
                Supercharged with <span className="ai-accent">AI</span>
              </h2>
              <p>Smart tools built into every product to save your time</p>
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

      <section className="section reviews-section reveal">
        <h2 className="h2-sm">Sales teams growing with TracktCRM</h2>
        <div className="reviews-marquee">
          <div className="reviews-track">
            {reviews.map((quote, index) => (
              <article className="review-card" key={`${quote.name}-${index}`}>
                <div className="review-top">
                  <span className="review-stars" aria-label={`${quote.stars} star rating`}>
                    {"★★★★★".slice(0, quote.stars)}
                  </span>
                  <GoogleBadge />
                </div>
                <p className="review-text">{quote.text}</p>
                <div className="review-bottom">
                  <div className="review-user">
                    <span
                      className="review-avatar"
                      style={{ backgroundColor: quote.color }}
                    >
                      {quote.initials}
                    </span>
                    <span className="review-name">{quote.name}</span>
                  </div>
                  <span className="review-verified">Verified</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <h2 className="h2-sm">How to get started with TracktCRM</h2>
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
            <h2 className="h2">Frequently asked questions</h2>
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
            <h2>Your next lead is already waiting.</h2>
            <p>
              Start free today, or get a 30-minute walkthrough tailored to your
              sales process. No credit card, no lock-in.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn-dark" href="/contact">
              Start free
            </a>
            <a className="btn-ghost" href="/contact">
              Book a demo
            </a>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
