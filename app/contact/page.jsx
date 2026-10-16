import ContactPageClient from "./contact-page-client";
import { CONTACT_FAQS } from "./data";
import { ContactPageJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "../json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <FaqJsonLd id="schema-contact-faq" faqs={CONTACT_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <ContactPageClient />
    </>
  );
}
