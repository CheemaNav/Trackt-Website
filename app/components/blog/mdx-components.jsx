import Link from "next/link";
import { ArrowIcon } from "../../icons";
import { APP_REGISTER_URL } from "../../site";

export function BlogCtaBox({
  title = "Try TracktCRM free",
  text = "Free plan for 1 user, WhatsApp included, no credit card needed.",
}) {
  return (
    <aside className="blog-cta" aria-label="Start with TracktCRM">
      <div>
        <p className="blog-cta-title">{title}</p>
        <p className="blog-cta-text">{text}</p>
      </div>
      <div className="blog-cta-actions">
        <a className="btn btn-primary" href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer">
          Start free
          <span className="btn-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
        <Link className="btn btn-outline" href="/contact">
          Book a demo
        </Link>
      </div>
    </aside>
  );
}

function Callout({ title, tone = "info", children }) {
  return (
    <aside className={`blog-callout is-${tone}`}>
      {title ? <p className="blog-callout-title">{title}</p> : null}
      <div>{children}</div>
    </aside>
  );
}

function KeyTakeaway({ title = "Key takeaways", children }) {
  return (
    <aside className="blog-takeaway">
      <p className="blog-callout-title">{title}</p>
      <div>{children}</div>
    </aside>
  );
}

function Figure({ src, alt, width, height, caption }) {
  return (
    <figure className="blog-figure">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function MdxLink({ href = "", children, ...rest }) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

function MdxTable(props) {
  return (
    <div className="blog-table-wrap" role="region" aria-label="Table, scroll sideways on small screens" tabIndex={0}>
      <table {...props} />
    </div>
  );
}

function MdxImage({ alt = "", ...props }) {
  return <img alt={alt} loading="lazy" decoding="async" {...props} />;
}

export const MDX_COMPONENTS = {
  a: MdxLink,
  table: MdxTable,
  img: MdxImage,
  Callout,
  KeyTakeaway,
  Figure,
  CTA: BlogCtaBox,
};
