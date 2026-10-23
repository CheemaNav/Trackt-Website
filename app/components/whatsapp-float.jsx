"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { CONTACT } from "../site";

// Pages that already show their own WhatsApp contact link; one wa.me link per page.
const HIDDEN_ON = new Set(["/contact"]);

export default function WhatsAppFloat() {
  const pathname = usePathname();
  if (HIDDEN_ON.has(pathname)) return null;

  return (
    <a
      className="whatsapp-float"
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel={CONTACT.whatsappRel}
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-ring" aria-hidden="true" />
      <span className="whatsapp-ring whatsapp-ring-delay" aria-hidden="true" />
      <span className="whatsapp-btn">
        <FaWhatsapp size={30} aria-hidden="true" />
      </span>
    </a>
  );
}
