"use client";

import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const els = () => document.querySelectorAll(".reveal:not(.is-in)");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }

    function revealVisible() {
      els().forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 16 && rect.bottom > 72) {
          el.classList.add("is-in");
        }
      });
    }

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
      { threshold: 0.01, rootMargin: "80px 0px -16px 0px" },
    );
    els().forEach((el) => io.observe(el));
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("hashchange", revealVisible);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("hashchange", revealVisible);
    };
  }, []);
}
