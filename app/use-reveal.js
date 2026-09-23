"use client";

import { useLayoutEffect } from "react";

export default function useReveal() {
  useLayoutEffect(() => {
    const all = () => document.querySelectorAll(".reveal");
    const pending = () => document.querySelectorAll(".reveal:not(.is-in)");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      all().forEach((el) => el.classList.add("is-in"));
      return;
    }

    function revealVisible() {
      pending().forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 40 && rect.bottom > 0) {
          el.classList.add("is-in");
        }
      });
    }

    // Mark first viewport immediately so navigations don't feel blank
    revealVisible();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "160px 0px -8px 0px" },
    );

    pending().forEach((el) => io.observe(el));
    const t1 = window.setTimeout(revealVisible, 50);
    const t2 = window.setTimeout(revealVisible, 200);
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("hashchange", revealVisible);

    return () => {
      io.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("hashchange", revealVisible);
    };
  }, []);
}
