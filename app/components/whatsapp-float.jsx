import { FaWhatsapp } from "react-icons/fa6";
import { CONTACT } from "../site";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
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
