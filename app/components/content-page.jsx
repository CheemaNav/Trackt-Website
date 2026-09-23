import Link from "next/link";
import RevealInit from "./reveal-init";
import { BreadcrumbJsonLd } from "../json-ld";

export default function ContentPage({
  badge,
  title,
  lead,
  breadcrumbs,
  children,
  schema,
}) {
  return (
    <>
      {schema}
      {breadcrumbs ? <BreadcrumbJsonLd items={breadcrumbs} /> : null}
      <RevealInit />
      <main>
        <section className="content-hero reveal" id="top">
          <div className="content-hero-inner wrap">
            {breadcrumbs ? (
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                      <li key={crumb.href}>
                        {isLast ? (
                          <span aria-current="page">{crumb.name}</span>
                        ) : (
                          <Link href={crumb.href}>{crumb.name}</Link>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            ) : null}
            {badge ? (
              <div className="badge contact-hero-badge">
                <span className="pulse" aria-hidden="true" />
                {badge}
              </div>
            ) : null}
            <h1 className="contact-title">{title}</h1>
            {lead ? <p className="contact-lead">{lead}</p> : null}
          </div>
        </section>
        <section className="content-body reveal">
          <div className="content-body-inner wrap">{children}</div>
        </section>
      </main>
    </>
  );
}
