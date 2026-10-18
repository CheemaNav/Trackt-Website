import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../icons";
import RevealInit from "./reveal-init";
import { BookDemoButton } from "./demo-request-provider";
import { APP_REGISTER_URL } from "../site";
import { COMPARE_PAGES } from "../compare-data";
import { BreadcrumbJsonLd, FaqJsonLd, WebPageJsonLd } from "../json-ld";

function Shot({ shot }) {
  return (
    <figure className="re-photo re-photo-contain cmp-shot">
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        loading="lazy"
        decoding="async"
      />
      {shot.caption ? <figcaption>{shot.caption}</figcaption> : null}
    </figure>
  );
}

/**
 * Full-width comparison page. `page.left` / `page.brand` label the two table
 * columns; TracktCRM is always the last (highlighted) column.
 */
export default function CompareLayout({ page, seo }) {
  const {
    route,
    breadcrumb,
    brand,
    left = "TracktCRM",
    badge = "COMPARE",
    h1,
    intro,
    trust,
    hero,
    meta,
    glance,
    fit,
    differ,
    extra,
    migration,
    faqTitle,
    faqs,
    sources,
    checked,
    related,
    cta,
  } = page;
  const shotItems = differ.items.filter((item) => item.shot);
  const cardItems = differ.items.filter((item) => !item.shot);

  return (
    <div className="home">
      <WebPageJsonLd
        name={seo.title}
        description={seo.description}
        path={route}
        dateModified={checked.iso}
      />
      <FaqJsonLd id={`schema-faq-${route.slice(1)}`} faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: breadcrumb, href: route },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <nav className="breadcrumbs cmp-breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span aria-current="page">{breadcrumb}</span>
                  </li>
                </ol>
              </nav>
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                {badge}
              </div>
              <h1 className="re-banner-title">
                {h1.lead} <span>{h1.highlight}</span>
              </h1>
              <p className="re-banner-sub">{intro}</p>
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
                <BookDemoButton className="btn btn-outline">Book a demo</BookDemoButton>
              </div>
              <p className="re-banner-trust">{trust}</p>
            </div>
            <figure className="re-banner-media re-banner-media-ui">
              <img
                src={hero.src}
                alt={hero.alt}
                width={1280}
                height={720}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="glance">
          <div className="re-section-head is-wide">
            <p className="kicker">AT A GLANCE</p>
            <h2 className="h2">{glance.title}</h2>
            <p className="re-section-intro">{glance.intro}</p>
          </div>
          <div className="compare-table-wrap cs-compare-wrap industry-compare-wrap">
            <table className="compare-table cs-compare-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Comparison point</span>
                  </th>
                  <th scope="col">{brand}</th>
                  <th scope="col">{left}</th>
                </tr>
              </thead>
              <tbody>
                {glance.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.other}</td>
                    <td>{row.trackt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cmp-note">
            {glance.note} {meta}{" "}
            <a href="#sources">See sources</a>.
          </p>
        </section>

        <section className="section reveal" id="fit">
          <div className="cmp-fit-grid">
            <article className="cmp-fit-card is-switch">
              <p className="kicker">{fit.switchKicker ?? "GOOD FIT"}</p>
              <h2 className="h2">{fit.switchTitle}</h2>
              <ul>
                {fit.switch.map((point) => (
                  <li key={point}>
                    <span className="re-point-check" aria-hidden="true">
                      <CheckIcon size={13} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="cmp-fit-card is-stay">
              <p className="kicker">{fit.stayKicker ?? "BE HONEST"}</p>
              <h2 className="h2">{fit.stayTitle}</h2>
              <ul>
                {fit.stay.map((point) => (
                  <li key={point}>
                    <span className="cmp-dot" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {fit.stayNote ? <p className="cmp-fit-note">{fit.stayNote}</p> : null}
            </article>
          </div>
        </section>

        <section className="section re-band reveal" id="differences">
          <div className="re-section-head is-wide">
            <p className="kicker">{differ.kicker ?? "KEY DIFFERENCES"}</p>
            <h2 className="h2">{differ.title}</h2>
            {differ.intro ? <p className="re-section-intro">{differ.intro}</p> : null}
          </div>
          {shotItems.map((item, index) => (
            <div
              className={`re-split cmp-split${index % 2 ? " re-split-reverse" : ""}`}
              key={item.title}
            >
              {index % 2 ? <Shot shot={item.shot} /> : null}
              <div className="re-split-copy">
                <h3 className="cmp-h3">{item.title}</h3>
                <p className="re-section-intro">{item.body}</p>
              </div>
              {index % 2 ? null : <Shot shot={item.shot} />}
            </div>
          ))}
          {cardItems.length ? (
            <div className="re-choose-grid cmp-diff-grid">
              {cardItems.map((item) => (
                <article className="re-choose-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          ) : null}
        </section>

        {extra}

        <section className="section reveal" id="migration">
          <div className="re-section-head is-wide">
            <p className="kicker">SWITCHING</p>
            <h2 className="h2">{migration.title}</h2>
            {migration.intro ? (
              <p className="re-section-intro">{migration.intro}</p>
            ) : null}
          </div>
          <ol className="re-process-grid cmp-steps">
            {migration.steps.map((step, index) => (
              <li className="re-process-card" key={step.title}>
                <b>STEP {String(index + 1).padStart(2, "0")}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          {migration.note ? <p className="industry-page-links">{migration.note}</p> : null}
        </section>

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">{faqTitle}</h2>
          <div className="faq-list re-faq-list">
            {faqs.map((item, index) => (
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

        <section className="section re-band reveal" id="sources">
          <div className="cmp-bottom-grid">
            <div>
              <p className="kicker">SOURCES</p>
              <h2 className="h2">Sources</h2>
              <p className="re-section-intro">
                {sources.intro ?? (
                  <>
                    {brand} details checked on{" "}
                    <time dateTime={checked.iso}>{checked.label}</time> from{" "}
                    {brand}&apos;s own pricing and help pages. Plans and prices
                    change, so confirm current details on these links.
                  </>
                )}
              </p>
              <ul className="cmp-sources">
                {sources.links.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noopener noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker">COMPARE</p>
              <h2 className="h2">Compare TracktCRM With Other CRMs</h2>
              <ul className="cmp-links">
                {COMPARE_PAGES.map((item) => (
                  <li key={item.href}>
                    {item.href === route ? (
                      <span aria-current="page">{item.label}</span>
                    ) : (
                      <Link href={item.href}>
                        {item.label}
                        <ArrowIcon />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <p className="industry-page-links">{related}</p>
            </div>
          </div>
        </section>

        <section className="cta-section reveal" id="demo">
          <div className="cta">
            <div>
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
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
