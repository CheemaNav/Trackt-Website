import Link from "next/link";
import { ArrowIcon } from "../../icons";
import { BreadcrumbJsonLd, FaqJsonLd, WebPageJsonLd } from "../../json-ld";
import PartnerApplicationForm from "./partner-application-form";
import { PARTNER_EMAIL } from "@/lib/partner-program";

export function PartnerSchema({ seo, route, breadcrumb, faqs, dateModified }) {
  return (
    <>
      <WebPageJsonLd
        name={seo.title}
        description={seo.description}
        path={route}
        dateModified={dateModified}
      />
      <FaqJsonLd id={`schema-faq-${route.split("/").pop()}`} faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Partners", href: "/partners" },
          { name: breadcrumb, href: route },
        ]}
      />
    </>
  );
}

/** Two-weight heading: bold first part, light second line. */
function SplitTitle({ as: Tag = "h2", strong, rest, className = "", id }) {
  return (
    <Tag className={`pp-split-title ${className}`.trim()} id={id}>
      <strong>{strong}</strong> <span>{rest}</span>
    </Tag>
  );
}

export function PartnerHero({ breadcrumb, h1, tagline, intro, primaryLabel, secondary }) {
  return (
    <section className="pp-hero" id="top">
      <nav className="breadcrumbs pp-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span>Partners</span>
          </li>
          <li>
            <span aria-current="page">{breadcrumb}</span>
          </li>
        </ol>
      </nav>
      <h1 className="pp-hero-title">
        {h1.lead} <span>{h1.highlight}</span>
      </h1>
      <p className="pp-hero-tagline">{tagline}</p>
      <p className="pp-hero-intro">{intro}</p>
      <div className="pp-hero-ctas">
        <a className="btn btn-primary pp-pill" href="#apply">
          {primaryLabel}
          <span className="btn-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
        <Link className="pp-hero-link" href={secondary.href}>
          {secondary.label}
        </Link>
      </div>
    </section>
  );
}

/** Red "What is this program?" card followed by the photo + "Why" card. */
export function PartnerStory({ what, why }) {
  return (
    <div className="pp-story">
      <section className="pp-what reveal" id={what.id}>
        <span className="pp-what-ring" aria-hidden="true" />
        <span className="pp-what-ring is-small" aria-hidden="true" />
        <SplitTitle strong={what.strong} rest={what.rest} />
        <div className="pp-what-body">{what.body}</div>
      </section>

      <section className="pp-why reveal" id={why.id}>
        <div className="pp-why-media">
          <span className="pp-why-shape" aria-hidden="true" />
          <img
            className="pp-why-photo"
            src={why.image.src}
            alt={why.image.alt}
            width={960}
            height={720}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pp-why-body">
          <SplitTitle strong={why.strong} rest={why.rest} />
          {why.body}
        </div>
      </section>
    </div>
  );
}

/** Dark brand band holding the benefit cards and the 01-02-03 timeline. */
export function PartnerDarkBand({ benefits, steps }) {
  return (
    <div className="pp-dark">
      <section className="pp-dark-section reveal" id="benefits">
        <h2 className="pp-dark-title">{benefits.title}</h2>
        <div className={`pp-benefit-grid${benefits.cards.length > 6 ? " is-four" : ""}`}>
          {benefits.cards.map(({ Icon, title, body }) => (
            <article className="pp-benefit-card" key={title}>
              <span className="pp-benefit-icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pp-dark-section reveal" id="how-it-works">
        <h2 className="pp-dark-title">{steps.title}</h2>
        <p className="pp-dark-intro">
          It&apos;s as simple as filling out the short form{" "}
          <a href="#apply">on this page</a>. {steps.intro}
        </p>
        <ol className="pp-timeline">
          {steps.items.map((step, index) => (
            <li className={`pp-timeline-step${index === 1 ? " is-active" : ""}`} key={step.title}>
              <span className="pp-timeline-dot" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="pp-dark-cta">
          <a className="btn btn-primary pp-pill" href="#apply">
            {steps.buttonLabel}
            <span className="btn-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export function PartnerChips({ strong, rest, chips, label }) {
  return (
    <section className="section pp-center-section reveal" id="who">
      <SplitTitle strong={strong} rest={rest} className="is-centered" />
      <ul className="pp-chips" aria-label={label}>
        {chips.map((chip) => (
          <li className="pp-chip" key={chip}>
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PartnerFormSection({ programType, title, intro }) {
  return (
    <section className="section pp-apply" id="apply" aria-labelledby={`${programType}-apply-title`}>
      <div className="demo-card contact-form-card pp-apply-card">
        <div className="demo-label">
          <span className="pulse" aria-hidden="true" />
          APPLY NOW
        </div>
        <h2 className="pp-apply-title" id={`${programType}-apply-title`}>
          {title}
        </h2>
        <p className="pp-apply-intro">{intro}</p>
        <PartnerApplicationForm programType={programType} partnerEmail={PARTNER_EMAIL} />
      </div>
    </section>
  );
}

export function PartnerFaq({ faqs }) {
  return (
    <section className="section faq pp-center-section reveal" id="faq">
      <SplitTitle strong="FAQs" rest="Everything you need to know" className="is-centered" />
      <div className="faq-list re-faq-list pp-faq-list">
        {faqs.map((item, index) => (
          <details className="faq-item" key={item.q} open={index === 0}>
            <summary>
              <span className="pp-faq-num">{index + 1}.</span> {item.q}
              <span className="faq-toggle" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function PartnerCta({ strong, rest, text, buttonLabel, note }) {
  return (
    <section className="pp-join reveal" id="join">
      <div className="pp-join-card">
        <SplitTitle strong={strong} rest={rest} className="is-centered" />
        <p className="pp-join-text">{text}</p>
        <a className="btn btn-primary pp-pill" href="#apply">
          {buttonLabel}
          <span className="btn-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
        <p className="pp-join-note">
          {note} <a href={`mailto:${PARTNER_EMAIL}`}>{PARTNER_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
