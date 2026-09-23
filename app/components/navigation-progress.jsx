"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const hideRef = useRef(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    function onClick(event) {
      const anchor = event.target.closest("a[href]");
      if (!anchor) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      let url;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      window.clearTimeout(hideRef.current);
      setDone(false);
      setActive(true);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    setDone(true);
    window.clearTimeout(hideRef.current);
    hideRef.current = window.setTimeout(() => {
      setActive(false);
      setDone(false);
    }, 280);
  }, [pathname]);

  if (!active && !done) return null;

  return (
    <div
      className={`nav-progress${done ? " is-done" : " is-active"}`}
      aria-hidden="true"
    />
  );
}
