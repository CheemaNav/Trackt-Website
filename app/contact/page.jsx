import ContactPageClient from "./contact-page-client";
import { ContactPageJsonLd, BreadcrumbJsonLd } from "../json-ld";
import { SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "Contact TracktCRM | Book a Demo or Talk to Sales",
  },
  description:
    "Call, WhatsApp or message the TracktCRM team to book a demo of our AI CRM. We support teams worldwide and reply within one business day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    title: "Contact TracktCRM | Book a Demo or Talk to Sales",
    description:
      "Call, WhatsApp, or message the TracktCRM team. We reply within one business day.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Contact TracktCRM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TracktCRM | Book a Demo or Talk to Sales",
    description:
      "Call, WhatsApp, or message the TracktCRM team. We reply within one business day.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
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
