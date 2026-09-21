import Link from "next/link";
import { SOCIALS } from "../icons";
import { FOOTER_COLS } from "../home-data";
import { SOCIAL_PROFILES } from "../site";

const SOCIAL_HREFS = {
  youtube: SOCIAL_PROFILES.youtube,
  facebook: SOCIAL_PROFILES.facebook,
  instagram: SOCIAL_PROFILES.instagram,
  linkedin: SOCIAL_PROFILES.linkedin,
};

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            className="logo-img logo-img-lg"
            src="/assets/tracktcrm-logo.png"
            alt="TracktCRM AI CRM software logo"
            width={160}
            height={40}
          />
          <p>
            TracktCRM - AI CRM Software for Sales, Leads & Pipeline
            Management.
          </p>
          <div className="socials">
            {SOCIALS.map(({ id, label, Icon }) => (
              <a
                className="social"
                href={SOCIAL_HREFS[id] || "/contact"}
                key={id}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div className="app-label">
            <span>Mobile app</span>
            <em className="soon">COMING SOON</em>
          </div>
          <p className="app-waitlist">
            Native iOS and Android apps are on the way.{" "}
            <Link href="/contact">Join the waitlist</Link> and we&apos;ll notify
            you at launch.
          </p>
        </div>
        <div className="footer-cols">
          {FOOTER_COLS.map((column) => (
            <div key={column.title}>
              <p className="footer-col-title">{column.title}</p>
              {column.links.map((link) => (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mega" role="img" aria-label="TracktCRM">
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
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/contact">Contact Us</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
