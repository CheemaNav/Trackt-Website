import Link from "next/link";
import { BookDemoButton } from "./components/demo-request-provider";
import { ArrowIcon } from "./icons";

export const metadata = {
  title: {
    absolute: "Page not found | TracktCRM",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const QUICK_LINKS = [
  { label: "WhatsApp CRM", href: "/features/whatsapp-crm" },
  { label: "AI CRM", href: "/industries/ai-crm" },
  { label: "Real Estate CRM", href: "/industries/real-estate-crm" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="home not-found-page">
      <main className="not-found">
        <div className="not-found-bg" aria-hidden="true">
          <span className="not-found-orb not-found-orb-a" />
          <span className="not-found-orb not-found-orb-b" />
          <span className="not-found-grid" />
        </div>

        <div className="wrap not-found-inner">
          <p className="not-found-brand">TracktCRM</p>
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <div className="badge not-found-badge">
            <span className="pulse" aria-hidden="true" />
            PAGE NOT FOUND
          </div>
          <h1 className="h1 not-found-title">
            This page left the pipeline
          </h1>
          <p className="lead not-found-lead">
            The link may be broken, moved, or typed incorrectly. Head home or
            jump to a product page — we&apos;ll get you back on track.
          </p>

          <div className="hero-ctas not-found-ctas">
            <Link className="btn btn-primary" href="/">
              Back to home
            </Link>
            <BookDemoButton className="btn btn-outline">
              Book a Demo
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </BookDemoButton>
          </div>

          <nav className="not-found-links" aria-label="Popular pages">
            {QUICK_LINKS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}
