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
      <FaWhatsapp size={28} aria-hidden="true" />
    </a>
  );
}
