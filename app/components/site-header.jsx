"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CloseIcon, FieldDropdownIcon, MenuIcon } from "../icons";
import { APP_LOGIN_URL, APP_REGISTER_URL } from "../site";

const INDUSTRY_LINKS = [
  { label: "AI CRM", href: "/industries/ai-crm" },
  { label: "Real Estate CRM", href: "/industries/real-estate-crm" },
];

const FEATURE_LINKS = [
  { label: "WhatsApp CRM", href: "/features/whatsapp-crm" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const industriesRef = useRef(null);
  const featuresRef = useRef(null);
  const dropdownCloseTimer = useRef(null);

  function closeMenu() {
    clearTimeout(dropdownCloseTimer.current);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  function openDropdownDesktop(id) {
    if (!window.matchMedia("(min-width: 981px)").matches) return;
    clearTimeout(dropdownCloseTimer.current);
    setOpenDropdown(id);
  }

  function scheduleCloseDropdownDesktop() {
    if (!window.matchMedia("(min-width: 981px)").matches) return;
    clearTimeout(dropdownCloseTimer.current);
    dropdownCloseTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  }

  function toggleDropdownMobile(id) {
    if (!window.matchMedia("(max-width: 980px)").matches) return;
    setOpenDropdown((current) => (current === id ? null : id));
  }

  useEffect(() => {
    return () => clearTimeout(dropdownCloseTimer.current);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 980) {
        setMenuOpen(false);
        setOpenDropdown(null);
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
      const inIndustries = industriesRef.current?.contains(event.target);
      const inFeatures = featuresRef.current?.contains(event.target);
      if (openDropdown && !inIndustries && !inFeatures) {
        setOpenDropdown(null);
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
        else setOpenDropdown(null);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, openDropdown]);

  const industriesOpen = openDropdown === "industries";
  const featuresOpen = openDropdown === "features";

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
          <div
            className={`nav-dropdown${industriesOpen ? " is-open" : ""}`}
            ref={industriesRef}
            onMouseEnter={() => openDropdownDesktop("industries")}
            onMouseLeave={scheduleCloseDropdownDesktop}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
              aria-controls="industries-menu"
              onClick={() => toggleDropdownMobile("industries")}
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
          <div
            className={`nav-dropdown${featuresOpen ? " is-open" : ""}`}
            ref={featuresRef}
            onMouseEnter={() => openDropdownDesktop("features")}
            onMouseLeave={scheduleCloseDropdownDesktop}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={featuresOpen}
              aria-haspopup="true"
              aria-controls="features-menu"
              onClick={() => toggleDropdownMobile("features")}
            >
              Features
              <FieldDropdownIcon size={14} />
            </button>
            <div
              className="nav-dropdown-menu"
              id="features-menu"
              role="menu"
              hidden={!featuresOpen}
            >
              {FEATURE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
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
          <a
            className="link-login"
            href={APP_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Login
          </a>
          <a
            className="btn btn-start"
            href={APP_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Start free
          </a>
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
