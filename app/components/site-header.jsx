"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CloseIcon, FieldDropdownIcon, MenuIcon } from "../icons";

const INDUSTRY_LINKS = [
  { label: "AI CRM", href: "/ai-crm" },
  { label: "Real Estate CRM", href: "/real-estate-crm" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const industriesRef = useRef(null);
  const industriesCloseTimer = useRef(null);

  function closeMenu() {
    clearTimeout(industriesCloseTimer.current);
    setMenuOpen(false);
    setIndustriesOpen(false);
  }

  function openIndustriesDesktop() {
    if (!window.matchMedia("(min-width: 981px)").matches) return;
    clearTimeout(industriesCloseTimer.current);
    setIndustriesOpen(true);
  }

  function scheduleCloseIndustriesDesktop() {
    if (!window.matchMedia("(min-width: 981px)").matches) return;
    clearTimeout(industriesCloseTimer.current);
    industriesCloseTimer.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 120);
  }

  useEffect(() => {
    return () => clearTimeout(industriesCloseTimer.current);
  }, []);

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
    const html = document.documentElement;
    const { body } = document;
    if (menuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onPointerDown(event) {
      if (
        industriesOpen &&
        !industriesRef.current?.contains(event.target)
      ) {
        setIndustriesOpen(false);
      }
      if (!menuOpen) return;
      const nav = document.getElementById("site-nav");
      const toggle = document.querySelector(".menu-toggle");
      if (nav?.contains(event.target) || toggle?.contains(event.target)) return;
      closeMenu();
    }
    function onKeyDown(event) {
      if (event.key === "Escape") {
        if (menuOpen) closeMenu();
        else setIndustriesOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, industriesOpen]);

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
            onMouseEnter={openIndustriesDesktop}
            onMouseLeave={scheduleCloseIndustriesDesktop}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
              aria-controls="industries-menu"
              onClick={() => {
                if (window.matchMedia("(max-width: 980px)").matches) {
                  setIndustriesOpen((open) => !open);
                }
              }}
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
          <Link href="/contact" onClick={closeMenu}>
            Contact Us
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
      <button
        type="button"
        className={`nav-backdrop${menuOpen ? " is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </header>
  );
}
