"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AgencyIcon,
  AiLeadIcon,
  AutomotiveIcon,
  CloseIcon,
  EducationIcon,
  FieldDropdownIcon,
  HealthcareIcon,
  InsuranceIcon,
  MenuIcon,
  RealEstateIcon,
  RecruitmentIcon,
  TravelIcon,
} from "../icons";
import { APP_LOGIN_URL, APP_REGISTER_URL } from "../site";

const INDUSTRY_LINKS = [
  {
    label: "AI CRM",
    href: "/industries/ai-crm",
    Icon: AiLeadIcon,
    desc: "Reply to every lead in seconds with an AI sales assistant.",
  },
  {
    label: "Real Estate",
    href: "/industries/real-estate-crm",
    Icon: RealEstateIcon,
    desc: "Capture portal leads, book site visits and track every deal.",
  },
  {
    label: "Education",
    href: "/industries/education-crm",
    Icon: EducationIcon,
    desc: "Track student enquiries from first contact through to enrolment.",
  },
  {
    label: "Agencies",
    href: "/industries/crm-for-agencies",
    Icon: AgencyIcon,
    desc: "Manage pitches, proposals, retainers and client chats in one place.",
  },
  {
    label: "Recruitment",
    href: "/industries/crm-for-recruitment",
    Icon: RecruitmentIcon,
    desc: "Track candidates and client roles side by side, with follow-ups.",
  },
  {
    label: "Insurance",
    href: "/industries/crm-for-insurance",
    Icon: InsuranceIcon,
    desc: "Capture leads, chase quotes and never miss a policy renewal.",
  },
  {
    label: "Automotive",
    href: "/industries/crm-for-automotive",
    Icon: AutomotiveIcon,
    desc: "Book test drives and follow buyers through delivery and service.",
  },
  {
    label: "Healthcare",
    href: "/industries/crm-for-healthcare",
    Icon: HealthcareIcon,
    desc: "Answer patient enquiries fast and keep appointments on track.",
  },
  {
    label: "Travel",
    href: "/industries/crm-for-travel",
    Icon: TravelIcon,
    desc: "Follow up every trip quote and bring travellers back next season.",
  },
];

const FEATURE_LINKS = [
  { label: "AI CRM", href: "/industries/ai-crm" },
  { label: "WhatsApp CRM", href: "/features/whatsapp-crm" },
  { label: "Lead Management", href: "/lead-management-software" },
  { label: "Sales Dashboard", href: "/features/sales-dashboard" },
  { label: "Cloud CRM", href: "/cloud-based-crm" },
  { label: "Forms", href: "/#forms" },
  { label: "CRM Software", href: "/crm-software" },
];

export default function SiteHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const industriesRef = useRef(null);
  const featuresRef = useRef(null);
  const dropdownCloseTimer = useRef(null);

  function prefetchLinks(links) {
    links.forEach((item) => router.prefetch(item.href));
  }

  function closeMenu() {
    clearTimeout(dropdownCloseTimer.current);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  function openDropdownDesktop(id) {
    if (!window.matchMedia("(min-width: 981px)").matches) return;
    clearTimeout(dropdownCloseTimer.current);
    setOpenDropdown(id);
    if (id === "industries") prefetchLinks(INDUSTRY_LINKS);
    if (id === "features") prefetchLinks(FEATURE_LINKS);
  }

  function scheduleCloseDropdownDesktop() {
    if (!window.matchMedia("(min-width: 981px)").matches) return;
    clearTimeout(dropdownCloseTimer.current);
    dropdownCloseTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  }

  function toggleDropdownCaret(id) {
    const isMobile = window.matchMedia("(max-width: 980px)").matches;
    clearTimeout(dropdownCloseTimer.current);
    setOpenDropdown((current) => (current === id && isMobile ? null : id));
    if (id === "industries") prefetchLinks(INDUSTRY_LINKS);
    if (id === "features") prefetchLinks(FEATURE_LINKS);
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
            src="/assets/tracktcrm-logo.webp"
            alt="TracktCRM - AI CRM software"
            width={145}
            height={30}
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
            <div className="nav-dropdown-head">
              <Link
                href="/industries"
                className="nav-dropdown-trigger nav-dropdown-label"
                onClick={closeMenu}
              >
                Industries
              </Link>
              <button
                type="button"
                className="nav-dropdown-trigger nav-dropdown-caret"
                aria-label="Show industry pages"
                aria-expanded={industriesOpen}
                aria-haspopup="true"
                aria-controls="industries-menu"
                onClick={() => toggleDropdownCaret("industries")}
              >
                <FieldDropdownIcon size={14} />
              </button>
            </div>
            <div
              className="nav-dropdown-menu nav-mega"
              id="industries-menu"
              role="menu"
              hidden={!industriesOpen}
            >
              <div className="nav-mega-grid">
                {INDUSTRY_LINKS.map((item) => {
                  const Icon = item.Icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-mega-item"
                      role="menuitem"
                      onClick={closeMenu}
                    >
                      <span className="nav-mega-icon" aria-hidden="true">
                        <Icon size={22} />
                      </span>
                      <span className="nav-mega-copy">
                        <strong>{item.label}</strong>
                        <span>{item.desc}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
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
              onClick={() => toggleDropdownCaret("features")}
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
          <Link href="/integrations" onClick={closeMenu}>
            Integrations
          </Link>
          <Link href="/pricing" onClick={closeMenu}>
            Pricing
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
