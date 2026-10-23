"use client";

import { useEffect, useRef, useState } from "react";

const ANIMATION_PATH = "/assets/hero-lottie.json?v=5";
const POSTER_SRC = "/assets/hero-lottie-poster.webp";

function afterPageLoad(callback) {
  let idleId = null;
  let timeoutId = null;
  const schedule = () => {
    if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(callback, { timeout: 2000 });
    else timeoutId = window.setTimeout(callback, 200);
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });

  return () => {
    window.removeEventListener("load", schedule);
    if (idleId !== null) window.cancelIdleCallback(idleId);
    if (timeoutId !== null) window.clearTimeout(timeoutId);
  };
}

export default function HeroLottie() {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let anim = null;
    let observer = null;
    let cancelled = false;

    const start = async () => {
      // lottie_svg keeps expression support, which this animation needs.
      const { default: lottie } = await import("lottie-web/build/player/lottie_svg");
      if (cancelled) return;

      anim = lottie.loadAnimation({
        container: node,
        renderer: "svg",
        loop: !reduceMotion,
        autoplay: false,
        path: ANIMATION_PATH,
        rendererSettings: {
          progressiveLoad: true,
          preserveAspectRatio: "xMidYMid meet",
        },
      });
      anim.setSubframe(false);

      anim.addEventListener("DOMLoaded", () => {
        setReady(true);
        if (reduceMotion) {
          anim.goToAndStop(0, true);
          return;
        }
        observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) anim.play();
          else anim.pause();
        });
        observer.observe(node);
      });
      anim.addEventListener("data_failed", () => {
        console.error("[hero-lottie] failed to load animation data");
      });
    };

    const cancelSchedule = afterPageLoad(start);

    return () => {
      cancelled = true;
      cancelSchedule();
      observer?.disconnect();
      anim?.destroy();
    };
  }, []);

  return (
    <>
      {ready ? null : (
        <img
          className="hero-lottie-poster"
          src={POSTER_SRC}
          alt=""
          width={1440}
          height={890}
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
      )}
      <div ref={containerRef} className="hero-lottie" aria-hidden="true" />
    </>
  );
}
