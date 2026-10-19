"use client";

import { useEffect, useRef, useState } from "react";

export default function BlogToc({ headings }) {
  const detailsRef = useRef(null);
  const [activeId, setActiveId] = useState(headings[0]?.id ?? null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1081px)");
    const sync = () => {
      if (detailsRef.current) detailsRef.current.open = desktop.matches;
    };
    sync();
    desktop.addEventListener("change", sync);
    return () => desktop.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const targets = headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [headings]);

  function onNavigate() {
    if (!window.matchMedia("(min-width: 1081px)").matches && detailsRef.current) {
      detailsRef.current.open = false;
    }
  }

  if (!headings.length) return null;

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <details ref={detailsRef}>
        <summary>Topics</summary>
        <ol>
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={activeId === heading.id ? "true" : undefined}
                onClick={onNavigate}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}
