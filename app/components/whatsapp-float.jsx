"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { CONTACT, openExternal } from "../site";

// Pages that already show their own WhatsApp contact button.
const HIDDEN_ON = new Set(["/contact"]);

export default function WhatsAppFloat() {
  const pathname = usePathname();
  if (HIDDEN_ON.has(pathname)) return null;

  return (
    <button
      type="button"
      className="whatsapp-float"
      onClick={() => openExternal(CONTACT.whatsappUrl)}
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-ring" aria-hidden="true" />
      <span className="whatsapp-ring whatsapp-ring-delay" aria-hidden="true" />
      <span className="whatsapp-btn">
        <FaWhatsapp size={30} aria-hidden="true" />
      </span>
    </button>
  );
}
