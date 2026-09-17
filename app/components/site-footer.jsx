import Link from "next/link";
import { AppleIcon, GooglePlayIcon, SOCIALS } from "../icons";
import { FOOTER_COLS } from "../home-data";

export default function SiteFooter() {
  return (
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
              <Link className="social" href="/#top" key={id} aria-label={label}>
                <Icon size={15} />
              </Link>
            ))}
          </div>
          <div className="app-label">
            <span>Mobile app</span>
            <em className="soon">COMING SOON</em>
          </div>
          <div className="app-btns">
            <Link className="app-btn" href="/#top">
              <span className="store-icon">
                <AppleIcon />
              </span>
              <span>
                <small>DOWNLOAD ON THE</small>
                <strong>App Store</strong>
              </span>
            </Link>
            <Link className="app-btn" href="/#top">
              <span className="store-icon">
                <GooglePlayIcon />
              </span>
              <span>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </Link>
          </div>
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
            <Link href="/#top">Privacy Policy</Link>
            <Link href="/#top">Terms & Conditions</Link>
            <Link href="/#top">Contact Us</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
