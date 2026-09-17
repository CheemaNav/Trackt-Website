"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "../icons";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

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
    <header className={`header${menuOpen ? " is-open" : ""}`}>
      <div className="header-inner">
        <Link href="/" onClick={closeMenu}>
          <img
            className="logo-img"
            src="/assets/tracktcrm-logo.png"
            alt="TracktCRM - AI CRM software"
          />
        </Link>
        <nav
          className={`nav header-nav${menuOpen ? " is-open" : ""}`}
          id="site-nav"
        >
          <Link href="/#product" onClick={closeMenu}>
            Product
          </Link>
          <Link href="/#speed" onClick={closeMenu}>
            Instant response
          </Link>
          <Link href="/#industries" onClick={closeMenu}>
            Industries
          </Link>
          <Link href="/#forms" onClick={closeMenu}>
            Forms
          </Link>
          <Link href="/#integrations" onClick={closeMenu}>
            Integrations
          </Link>
          <Link href="/#faq" onClick={closeMenu}>
            FAQ
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="link-login" href="/#demo" onClick={closeMenu}>
            Login
          </Link>
          <Link className="btn btn-start" href="/#demo" onClick={closeMenu}>
            Start free
          </Link>
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
  );
}
