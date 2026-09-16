"use client";

import { useEffect, useState } from "react";
import {
  AppleIcon,
  ArrowIcon,
  BrandMark,
  CheckIcon,
  CloseIcon,
  GoogleBadge,
  GooglePlayIcon,
  MenuIcon,
  SOCIALS,
} from "./icons";
import LeadDashboard from "./lead-dashboard";
import PipelineBoard from "./pipeline-board";
import {
  COMPARE,
  FAQS,
  FEATURES,
  FOOTER_COLS,
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
const HERO_LEADS = [
  { name: "Meera Raval", status: "NEW", tone: "new", source: "Website", owner: "PR" },
  { name: "Arjun Mehta", status: "FOLLOW-UP", tone: "follow", source: "WhatsApp", owner: "NS" },
  { name: "Priya Shah", status: "DEAD", tone: "dead", source: "Facebook", owner: "KR" },
  { name: "Rahul Iyer", status: "NEW", tone: "new", source: "IndiaMART", owner: "PR" },
  { name: "Sana Kapoor", status: "CONVERTED", tone: "won", source: "Referral", owner: "NS" },
  { name: "Vikram Joshi", status: "FOLLOW-UP", tone: "follow", source: "Google Ads", owner: "KR" },
  { name: "Ananya Desai", status: "NEW", tone: "new", source: "Justdial", owner: "PR" },
];

export default function HomePage() {
  const [tab, setTab] = useState("leads");
  const [menuOpen, setMenuOpen] = useState(false);
  const active = FEATURES.find((item) => item.id === tab) || FEATURES[0];

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const els = () => document.querySelectorAll(".reveal:not(.is-in)");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }

    function revealVisible() {
      els().forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 16 && rect.bottom > 72) {
          el.classList.add("is-in");
        }
      });
    }

    revealVisible();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "80px 0px -16px 0px" },
    );
    els().forEach((el) => io.observe(el));
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("hashchange", revealVisible);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("hashchange", revealVisible);
    };
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 980) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="home">
      <header className={`header${menuOpen ? " is-open" : ""}`}>
        <div className="header-inner">
          <a href="#top" onClick={closeMenu}>
            <img
              className="logo-img"
              src="/assets/tracktcrm-logo.png"
              alt="TracktCRM - AI CRM software"
            />
          </a>
          <nav
            className={`nav header-nav${menuOpen ? " is-open" : ""}`}
            id="site-nav"
          >
            <a href="#product" onClick={closeMenu}>
              Product
            </a>
            <a href="#speed" onClick={closeMenu}>
              Instant response
            </a>
            <a href="#industries" onClick={closeMenu}>
              Industries
            </a>
            <a href="#forms" onClick={closeMenu}>
              Forms
            </a>
            <a href="#integrations" onClick={closeMenu}>
              Integrations
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
          </nav>
          <div className="header-actions">
            <a className="link-login" href="#demo" onClick={closeMenu}>
              Login
            </a>
            <a className="btn btn-start" href="#demo" onClick={closeMenu}>
              Start free
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon size={20} /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="badge">
            <span className="pulse" />
            AI CRM software for sales teams
          </div>
          <h1 className="h1">
            The AI CRM that answers your leads - real estate, agencies,
            freelancers and more.
          </h1>
          <p className="lead">
            TracktCRM is AI-powered CRM software that captures every lead,
            responds in seconds over WhatsApp, email and SMS, and keeps your
            sales pipeline organized - built for how real estate teams,
            agencies, consultants and freelancers actually sell.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#demo">
              Start Free Trial
            </a>
            <a className="btn btn-outline" href="#demo">
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
              Free 14-day trial
            </span>
            <span className="trust-item">
              <span className="trust-check" aria-hidden="true">
                <CheckIcon size={11} />
              </span>
              Trusted by 5,000+ businesses
            </span>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="hero-visual">
            <div className="hero-mock-shell">
              <div className="hero-mock">
                <div className="hero-dash" aria-hidden="true">
                  <aside className="dash-side">
                    <div className="dash-brand">TracktCRM</div>
                    <nav>
                      <span className="is-on">Leads</span>
                      <span>Pipeline</span>
                      <span>Quotes</span>
                      <span>Activities</span>
                      <span>Reports</span>
                    </nav>
                  </aside>
                  <div className="dash-main">
                    <div className="dash-bar">
                      <b>Leads</b>
                      <input readOnly tabIndex={-1} placeholder="Search" />
                    </div>
                    <table className="dash-table">
                      <thead>
                        <tr>
                          <th>Lead name</th>
                          <th>Status</th>
                          <th>Source</th>
                          <th>Owner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {HERO_LEADS.map((lead) => (
                          <tr key={lead.name}>
                            <td>{lead.name}</td>
                            <td>
                              <span className={`dash-status dash-status-${lead.tone}`}>
                                {lead.status}
                              </span>
                            </td>
                            <td>{lead.source}</td>
                            <td>
                              <span className="dash-owner">{lead.owner}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section reveal">
        <p className="marquee-kicker">TRUSTED BY 5,000+ SALES TEAMS</p>
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
              onClick={() => setTab(feature.id)}
            >
              {feature.label}
            </button>
          ))}
        </div>
        <div className={`product-grid${tab === "leads" || tab === "pipeline" || tab === "integrations" ? " is-leads" : ""}`}>
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
              <LeadDashboard key="leads-dash" />
            ) : tab === "pipeline" ? (
              <PipelineBoard key="pipe-board" />
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
                      {column.cards.map((card) => (
                        <div className="mini-card int-mini" key={card.t}>
                          {card.brand ? (
                            <span className="int-mini-logo">
                              <BrandMark name={card.brand} />
                            </span>
                          ) : null}
                          <div className="int-mini-copy">
                            <b>{card.t}</b>
                            <span>{card.v}</span>
                          </div>
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
            <div
              className={`industry-card${industry.featured ? " industry-featured" : ""}`}
              key={industry.name}
            >
              <h3>{industry.name}</h3>
              <p>{industry.body}</p>
              <ul>
                {industry.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section compare-section reveal" id="compare">
        <p className="kicker">WHY TEAMS SWITCH</p>
        <h2 className="h2">An easy-to-use, affordable CRM alternative</h2>
        <p className="compare-intro">
          Most CRM software - including tools like Pipedrive - is priced and
          built for enterprise teams. TracktCRM gives small businesses, agencies
          and freelancers the same lead management and sales pipeline power,
          with AI-powered automation Pipedrive doesn&apos;t have, at a fraction of
          the cost.
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
                  <span>Single line</span>
                  <span>Email</span>
                  <span>Phone</span>
                  <span>Dropdown</span>
                  <span>Message</span>
                </div>
                <div className="forms-canvas">
                  <p>Form layout</p>
                  <div className="forms-field">
                    <b>Full name</b>
                    <em>→ Lead name</em>
                  </div>
                  <div className="forms-field">
                    <b>Email</b>
                    <em>→ Email</em>
                  </div>
                  <div className="forms-field">
                    <b>Phone</b>
                    <em>→ Phone</em>
                  </div>
                  <div className="forms-field is-drop">Drop a field here</div>
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
          <div className="int-grid">
            {INTEGRATIONS.map((name, index) => (
              <div className="int-cell" key={`${name}-${index}`}>
                {name ? <BrandMark name={name} /> : null}
              </div>
            ))}
          </div>
          <div className="int-center">
            <h2>
              <span className="accent">CONNECTS</span> with the{" "}
              <span className="orange">TOOLS</span>
              <br />
              you already use
            </h2>
            <a className="int-cta" href="#demo">
              Start Free Trial
              <span className="int-cta-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
        <p className="int-note">
          Don&apos;t see your tool?{" "}
          <a href="#demo">
            Ask us about the open API <ArrowIcon />
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
              <p>Smart tools built into every product to save you time</p>
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
            {FAQS.map((item, index) => (
              <details className="faq-item" key={item.q} defaultOpen={index === 0}>
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
            <a className="btn-dark" href="#top">
              Start free
            </a>
            <a className="btn-ghost" href="#top">
              Book a demo
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              className="logo-img logo-img-lg"
              src="/assets/tracktcrm-logo.png"
              alt="TracktCRM AI CRM software logo"
            />
            <p>
              TracktCRM - AI CRM Software for Sales, Leads & Pipeline
              Management.
            </p>
            <div className="socials">
              {SOCIALS.map(({ id, label, Icon }) => (
                <a className="social" href="#top" key={id} aria-label={label}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="app-label">
              <span>Mobile app</span>
              <em className="soon">COMING SOON</em>
            </div>
            <div className="app-btns">
              <a className="app-btn" href="#top">
                <span className="store-icon">
                  <AppleIcon />
                </span>
                <span>
                  <small>DOWNLOAD ON THE</small>
                  <strong>App Store</strong>
                </span>
              </a>
              <a className="app-btn" href="#top">
                <span className="store-icon">
                  <GooglePlayIcon />
                </span>
                <span>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
          </div>
          <div className="footer-cols">
            {FOOTER_COLS.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mega" aria-label="TracktCRM">
          <svg className="mega-filter" width="0" height="0" aria-hidden="true">
            <defs>
              <filter
                id="mega-grain"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                colorInterpolationFilters="sRGB"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.88 0.88"
                  numOctaves="3"
                  stitchTiles="stitch"
                  result="noise"
                  seed="2853"
                />
                <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                <feComponentTransfer in="alphaNoise" result="coloredNoise">
                  <feFuncA
                    type="discrete"
                    tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                  />
                </feComponentTransfer>
                <feComposite operator="in" in2="SourceGraphic" in="coloredNoise" result="noiseClipped" />
                <feFlood floodColor="rgba(0, 0, 0, 0.10)" result="colorFlood" />
                <feComposite operator="in" in2="noiseClipped" in="colorFlood" result="color1" />
                <feMerge>
                  <feMergeNode in="SourceGraphic" />
                  <feMergeNode in="color1" />
                </feMerge>
              </filter>
            </defs>
          </svg>
          <div className="mega-grain-overlay" aria-hidden="true" />
          <div className="mega-word" aria-hidden="true">
            {"TRACKTCRM".split("").map((letter, index) => (
              <span className="mega-letter" key={`${letter}-${index}`}>
                {letter}
              </span>
            ))}
          </div>
          <div className="mega-fade" aria-hidden="true" />
        </div>
        <div className="legal">
          <div className="legal-inner">
            <span>© 2026 TracktCRM. All rights reserved.</span>
            <span className="legal-links">
              <a href="#top">Privacy Policy</a>
              <a href="#top">Terms & Conditions</a>
              <a href="#top">Contact Us</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
