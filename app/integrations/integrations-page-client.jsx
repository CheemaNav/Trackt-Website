"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { ArrowIcon, BrandMark, CheckIcon } from "../icons";
import { BookDemoButton } from "../components/demo-request-provider";
import useReveal from "../use-reveal";
import { APP_REGISTER_URL } from "../site";
import {
  CUSTOM_WORK,
  INTEGRATION_APPS,
  INTEGRATION_CATEGORIES,
  INTEGRATION_FAQS,
  INTEGRATION_POPULAR,
  INTEGRATION_STEPS,
  LAST_UPDATED,
  integrationSlug,
} from "./data";

function matchesQuery(app, query) {
  if (!query) return true;
  const haystack = [app.name, app.body, ...(app.tags || [])]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export default function IntegrationsPageClient() {
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useReveal();

  const normalisedQuery = query.trim().toLowerCase();

  function runSearch(value = draft) {
    const next = value.trim();
    setDraft(next);
    setQuery(next);
    setActiveCategory("all");
  }

  function onSearchSubmit(event) {
    event.preventDefault();
    runSearch();
  }

  useEffect(() => {
    if (activeCategory === "all" && !normalisedQuery) return;
    document
      .querySelector(".int-page-catalog")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategory, normalisedQuery]);

  const visibleCategories = useMemo(() => {
    return INTEGRATION_CATEGORIES.map((category) => ({
      ...category,
      apps: INTEGRATION_APPS.filter(
        (app) =>
          app.category === category.id &&
          matchesQuery(app, normalisedQuery) &&
          (activeCategory === "all" || app.category === activeCategory),
      ),
    })).filter((category) => category.apps.length > 0);
  }, [normalisedQuery, activeCategory]);

  const visibleCount = visibleCategories.reduce(
    (sum, category) => sum + category.apps.length,
    0,
  );

  return (
    <main>
      <section className="int-page-hero reveal" id="top">
        <div className="wrap int-page-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">Integrations</span>
              </li>
            </ol>
          </nav>
          <div className="badge">
            <span className="pulse" aria-hidden="true" />
            {INTEGRATION_APPS.length} integrations · No code required
          </div>
          <h1 className="h1">
            Connect TracktCRM to WhatsApp, Lead Portals, Ads and the Tools You
            Already Use
          </h1>
          <p className="lead">
            TracktCRM connects to {INTEGRATION_APPS.length} apps, from WhatsApp
            and Meta ads to 99acres, IndiaMART, Gmail and Razorpay, so every
            lead lands in one pipeline. Search your tools below. If yours is not
            listed, we can build the integration for you.
          </p>
          <p className="int-page-updated">
            Last updated:{" "}
            <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.label}</time>
          </p>

          <form className="int-page-search" onSubmit={onSearchSubmit}>
            <LuSearch size={18} aria-hidden="true" />
            <label className="sr-only" htmlFor="int-search">
              Search integrations
            </label>
            <input
              id="int-search"
              className="input"
              type="search"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Search WhatsApp, Gmail…"
              autoComplete="off"
            />
            <button className="int-page-search-btn" type="submit">
              Search
            </button>
          </form>

          <p className="int-page-popular">
            Popular:
            {INTEGRATION_POPULAR.map((name) => (
              <button
                type="button"
                key={name}
                onClick={() => runSearch(name)}
              >
                {name}
              </button>
            ))}
          </p>
        </div>
      </section>

      <nav className="int-page-tabs" aria-label="Integration categories">
        <div className="wrap int-page-tabs-inner">
          <button
            type="button"
            className={activeCategory === "all" ? "is-active" : ""}
            onClick={() => setActiveCategory("all")}
          >
            All apps
            <em>{INTEGRATION_APPS.length}</em>
          </button>
          {INTEGRATION_CATEGORIES.map((category) => {
            const count = INTEGRATION_APPS.filter(
              (app) => app.category === category.id,
            ).length;
            return (
              <button
                type="button"
                key={category.id}
                className={activeCategory === category.id ? "is-active" : ""}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
                <em>{count}</em>
              </button>
            );
          })}
        </div>
      </nav>

      <section className="int-page-catalog">
        <div className="wrap">
          {visibleCount === 0 ? (
            <div className="int-page-empty reveal">
              <h2>No integrations match that search.</h2>
              <p>
                Try another keyword, or ask us for a custom integration. If
                your tool is not listed, we can still connect it.
              </p>
              <Link className="btn btn-primary" href="/contact">
                Request custom work
              </Link>
            </div>
          ) : (
            visibleCategories.map((category) => (
              <section
                className="int-page-group reveal"
                key={category.id}
                id={category.id}
              >
                <header className="int-page-group-head">
                  <p className="kicker">
                    {category.label}
                    <span>{category.apps.length} apps</span>
                  </p>
                  <h2 className="h2">{category.title}</h2>
                  <p className="lead">{category.body}</p>
                </header>
                <div className="int-page-grid">
                  {category.apps.map((app) => {
                    const CardTag = app.href ? Link : "article";
                    const cardProps = app.href
                      ? { href: app.href }
                      : {};
                    return (
                      <CardTag
                        className="int-page-card"
                        key={app.name}
                        id={integrationSlug(app.name)}
                        {...cardProps}
                      >
                        <span className="int-page-logo" aria-hidden="true">
                          <BrandMark name={app.name} />
                        </span>
                        <h3>{app.name}</h3>
                        <p>{app.body}</p>
                        {app.href ? (
                          <span className="int-page-more">
                            Learn more
                            <ArrowIcon />
                          </span>
                        ) : null}
                      </CardTag>
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </div>
      </section>

      <section className="section reveal" id="how">
        <h2 className="h2-sm">How CRM Integrations Work in Three Steps</h2>
        <p className="int-page-section-lead">
          Connect your tools in three steps and leads start flowing into your
          pipeline.
        </p>
        <div className="step-grid stagger">
          {INTEGRATION_STEPS.map((step) => (
            <div className="step" key={step.n}>
              <b>{step.n}</b>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <p className="int-page-links">
          Every connected source feeds the same pipeline in our{" "}
          <Link href="/crm-software">CRM software</Link>, and new leads can get
          an instant reply from the{" "}
          <Link href="/industries/ai-crm">AI sales assistant</Link>. Agencies
          use ad and form integrations in the{" "}
          <Link href="/industries/crm-for-agencies">agency CRM</Link>, and
          recruiters bring website applications into the{" "}
          <Link href="/industries/crm-for-recruitment">recruitment CRM</Link>.
          See <Link href="/pricing">pricing</Link> for plans after the free
          trial.
        </p>
      </section>

      <section className="section int-page-custom reveal" id="custom">
        <p className="kicker is-centered">CUSTOM WORK</p>
        <h2 className="h2-sm is-centered">
          Need a Custom Integration? We Can Build It
        </h2>
        <p className="int-page-section-lead is-centered">
          If your tool is not in the catalogue, tell us what you use. We can
          connect it, build a one-off workflow or map custom forms and webhooks
          to your pipeline. Contact us with your requirements and we will send
          a quote and a timeline.
        </p>
        <div className="int-page-custom-grid">
          {CUSTOM_WORK.map((item) => (
            <article className="int-page-custom-card" key={item.title}>
              <span className="re-point-check" aria-hidden="true">
                <CheckIcon size={14} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="hero-ctas int-page-custom-ctas">
          <Link className="btn btn-primary" href="/contact">
            Request custom work
          </Link>
          <BookDemoButton className="btn btn-outline">
            Book a demo
            <span className="btn-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </BookDemoButton>
        </div>
      </section>

      <section className="section int-page-suggest reveal" id="suggest">
        <div className="int-page-suggest-grid">
          <article>
            <p className="kicker">CAN&apos;T FIND YOUR APP?</p>
            <h2 className="h2">Ask us to connect it</h2>
            <p>
              Don&apos;t see your tool? We build custom integrations and other
              custom work for teams that need a source that is not listed yet.
              Tell us the app and we will map how it should land in TracktCRM.
            </p>
            <div className="hero-ctas int-page-suggest-ctas">
              <Link className="btn btn-primary" href="/contact">
                Request custom work
              </Link>
              <BookDemoButton className="btn btn-outline">
                Book a demo
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </BookDemoButton>
            </div>
          </article>
          <article>
            <p className="kicker">BUILD YOUR OWN</p>
            <h2 className="h2">Webhooks and custom forms</h2>
            <p>
              Generate a webhook, map fields, or embed a TracktCRM form on any
              site. Submissions land in the right pipeline and owner
              automatically.
            </p>
            <Link className="int-page-more" href="/#forms">
              See custom forms
              <ArrowIcon />
            </Link>
          </article>
        </div>
      </section>

      <section className="section faq reveal" id="faq">
        <div className="faq-layout">
          <div className="faq-aside">
            <h2 className="h2">CRM Integration FAQs</h2>
          </div>
          <div className="faq-list">
            {INTEGRATION_FAQS.map((item) => (
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
            <h2>Connect Your Tools and Start Free</h2>
            <p>
              Start a free 1 month trial, or book a 30-minute walkthrough of the
              integrations your team uses. No credit card, no lock-in.
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
  );
}
