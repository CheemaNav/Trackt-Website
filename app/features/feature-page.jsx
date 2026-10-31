import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../icons";
import RevealInit from "../components/reveal-init";
import { BookDemoButton } from "../components/demo-request-provider";
import { APP_REGISTER_URL } from "../site";
import { BreadcrumbJsonLd, FeatureSoftwareJsonLd } from "../json-ld";
import { FEATURE_ICONS, RELATED_FEATURES } from "./feature-nav";

const INTEGRATION_LOGOS = [
  { name: "WhatsApp", src: "/assets/brands/whatsapp.svg" },
  { name: "Gmail", src: "/assets/brands/gmail.svg" },
  { name: "Google Calendar", src: "/assets/brands/google-calendar.svg" },
  { name: "Meta Lead Ads", src: "/assets/brands/meta.svg" },
  { name: "Google Ads", src: "/assets/brands/google-ads.svg" },
  { name: "IndiaMART", src: "/assets/brands/indiamart.svg" },
  { name: "Justdial", src: "/assets/brands/justdial.svg" },
  { name: "99acres", src: "/assets/brands/99acres.svg" },
  { name: "Housing.com", src: "/assets/brands/housing.svg" },
  { name: "Shopify", src: "/assets/brands/shopify.svg" },
  { name: "Razorpay", src: "/assets/brands/razorpay.svg" },
  { name: "Webhooks", src: "/assets/brands/webhooks.svg" },
];

function FeatureIcon({ name, size = 22 }) {
  const Icon = FEATURE_ICONS[name] || FEATURE_ICONS.layers;
  return <Icon size={size} aria-hidden="true" />;
}

function InlineLink({ link }) {
  if (!link) return null;
  return (
    <p className="fp-more">
      <Link href={link.href}>
        {link.label}
        <ArrowIcon size={14} />
      </Link>
    </p>
  );
}

export default function FeaturePage({ route, data }) {
  const related = RELATED_FEATURES.filter((item) => item.href !== route);

  return (
    <div className="home">
      <FeatureSoftwareJsonLd id={data.schemaId} path={route} faqs={data.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: data.name, href: route },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span aria-current="page">{data.name}</span>
                  </li>
                </ol>
              </nav>
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                {data.badge}
              </div>
              <h1 className="re-banner-title">
                {data.h1[0]} <span>{data.h1[1]}</span>
              </h1>
              {data.intro.map((paragraph) => (
                <p className="re-banner-sub" key={paragraph}>
                  {paragraph}
                </p>
              ))}
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
              <p className="re-banner-trust">Free plan for 1 user · No credit card · Cancel anytime</p>
            </div>
            <figure className="re-banner-media re-banner-media-ui">
              <img
                src={data.hero.src}
                alt={data.hero.alt}
                width={1280}
                height={720}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="what-is">
          <div className="fp-what">
            <div className="re-section-head is-wide">
              <p className="kicker">{data.what.kicker}</p>
              <h2 className="h2">{data.what.title}</h2>
              {data.what.paras.map((paragraph) => (
                <p className="re-section-intro industry-wide-intro" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="fp-what-card">
              <h3>{data.what.listTitle}</h3>
              <ul className="fp-checklist">
                {data.what.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="re-point-check" aria-hidden="true">
                      <CheckIcon size={14} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">{data.features.title}</h2>
            <p className="re-section-intro industry-wide-intro">{data.features.intro}</p>
          </div>
          <div className="re-feature-grid industry-feature-grid">
            {data.features.items.map((item) => (
              <article className="re-feature-card" key={item.title}>
                <div className="re-feature-icon">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="choosing">
          <p className="kicker">BUYER&apos;S GUIDE</p>
          <h2 className="h2">{data.lookFor.title}</h2>
          <p className="re-section-intro">{data.lookFor.intro}</p>
          <div className="re-choose-grid">
            {data.lookFor.items.map((item) => (
              <article className="re-choose-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {data.sections.map((section, index) => (
          <section className="section reveal fp-deep" id={section.id} key={section.id}>
            <div className={`re-split${index % 2 ? " re-split-reverse fp-flip" : ""}`}>
              <div className="re-split-copy">
                <p className="kicker">{section.kicker}</p>
                <h2 className="h2">{section.title}</h2>
                {section.paras.map((paragraph) => (
                  <p className="re-section-intro" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <InlineLink link={section.link} />
              </div>
              <figure className="re-photo re-photo-contain">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </section>
        ))}

        {data.steps ? (
          <section className="section re-band reveal" id="setup">
            <div className="re-section-head">
              <p className="kicker">SETUP</p>
              <h2 className="h2">{data.steps.title}</h2>
              <p className="re-section-intro">{data.steps.intro}</p>
            </div>
            <div className="re-process-grid">
              {data.steps.items.map((step, index) => (
                <article className="re-process-card" key={step.title}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section reveal" id="integrations">
          <div className="re-section-head is-wide">
            <p className="kicker">INTEGRATIONS</p>
            <h2 className="h2">{data.integrations.title}</h2>
            <p className="re-section-intro industry-wide-intro">{data.integrations.intro}</p>
          </div>
          <ul className="fp-logos" aria-label="Popular TracktCRM integrations">
            {INTEGRATION_LOGOS.map((logo) => (
              <li key={logo.name}>
                <img src={logo.src} alt="" width={28} height={28} loading="lazy" decoding="async" />
                {logo.name}
              </li>
            ))}
          </ul>
          <div className="re-banner-ctas">
            <Link className="btn btn-outline" href="/integrations">
              See all integrations
            </Link>
          </div>
        </section>

        {data.pairs ? (
          <section className="section re-band reveal" id="pairs">
            <div className="re-section-head is-wide">
              <p className="kicker">WORKS WELL WITH</p>
              <h2 className="h2">{data.pairs.title}</h2>
              <p className="re-section-intro industry-wide-intro">{data.pairs.intro}</p>
            </div>
            <div className="re-choose-grid">
              {data.pairs.items.map((item) => (
                <article className="re-choose-card" key={item.title}>
                  <h3>{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">{data.faqTitle}</h2>
          <div className="faq-list re-faq-list">
            {data.faqs.map((item, index) => (
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

        <section className="section reveal" id="more-features">
          <div className="re-section-head is-wide">
            <p className="kicker">MORE FEATURES</p>
            <h2 className="h2">Everything else your sales team gets</h2>
          </div>
          <div className="related-industries-grid">
            {related.map((item) => (
              <Link className="related-industry-card" href={item.href} key={item.href}>
                <span className="related-industry-icon" aria-hidden="true">
                  <FeatureIcon name={item.icon} />
                </span>
                <span className="related-industry-copy">
                  <strong>{item.label}</strong>
                  <span>{item.desc}</span>
                </span>
                <span className="related-industry-arrow" aria-hidden="true">
                  <ArrowIcon size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="cta-section reveal" id="demo">
          <div className="cta">
            <div>
              <h2>{data.cta.title}</h2>
              <p>{data.cta.body}</p>
            </div>
            <div className="cta-actions">
              <a className="btn-dark" href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer">
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
