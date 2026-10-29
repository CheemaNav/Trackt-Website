"use client";

import { useState } from "react";
import { openExternal } from "../../site";

export default function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const links = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="blog-share">
      <span className="blog-share-label">Share</span>
      {links.map((link) => (
        <button
          key={link.label}
          type="button"
          onClick={() => openExternal(link.href)}
          aria-label={`Share on ${link.label}`}
        >
          {link.label}
        </button>
      ))}
      <button type="button" onClick={copyLink} aria-live="polite">
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
