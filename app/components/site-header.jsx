"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CloseIcon, FieldDropdownIcon, MenuIcon } from "../icons";

const INDUSTRY_LINKS = [
  { label: "Real Estate CRM", href: "/real-estate-crm" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const industriesRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
    setIndustriesOpen(false);
  }

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 980) {
        setMenuOpen(false);
        setIndustriesOpen(false);
      }
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

  useEffect(() => {
    function onPointerDown(event) {
      if (!industriesRef.current?.contains(event.target)) {
        setIndustriesOpen(false);
      }
    }
    function onKeyDown(event) {
      if (event.key === "Escape") setIndustriesOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

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
          <div
            className={`nav-dropdown${industriesOpen ? " is-open" : ""}`}
            ref={industriesRef}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
              aria-controls="industries-menu"
              onClick={() => setIndustriesOpen((open) => !open)}
            >
              Industries
              <FieldDropdownIcon size={14} />
            </button>
            <div
              className="nav-dropdown-menu"
              id="industries-menu"
              role="menu"
              hidden={!industriesOpen}
            >
              {INDUSTRY_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/#industries" role="menuitem" onClick={closeMenu}>
                All industries
              </Link>
            </div>
          </div>
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
