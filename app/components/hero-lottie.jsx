"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function HeroLottie() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const anim = lottie.loadAnimation({
      container: node,
      renderer: "svg",
      loop: !reduceMotion,
      autoplay: !reduceMotion,
      path: "/assets/hero-lottie.json?v=4",
      rendererSettings: {
        progressiveLoad: true,
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    const onDomLoaded = () => {
      if (reduceMotion) anim.goToAndStop(0, true);
    };
    anim.addEventListener("DOMLoaded", onDomLoaded);
    anim.addEventListener("data_failed", () => {
      console.error("[hero-lottie] failed to load animation data");
    });

    return () => {
      anim.removeEventListener("DOMLoaded", onDomLoaded);
      anim.destroy();
    };
  }, []);

  return <div ref={containerRef} className="hero-lottie" aria-hidden="true" />;
}
