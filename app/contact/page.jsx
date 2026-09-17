import ContactPageClient from "./contact-page-client";
import { CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const siteLogo = `${SITE_URL}/logo.png`;

export const metadata = {
  title: "Contact Us - Talk to the TracktCRM Team",
  description:
    "Get in touch with TracktCRM. Call or WhatsApp us, or send a message to book a demo of our AI CRM - we support teams worldwide.",
  keywords: [
    "tracktcrm contact",
    "crm support",
    "book crm demo",
    "contact tracktcrm",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    title: "Contact TracktCRM",
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
    title: "Contact TracktCRM",
    description:
      "Call, WhatsApp, or message the TracktCRM team. We reply within one business day.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "og:logo": siteLogo,
  },
};

export default function ContactPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: `${SITE_URL}/contact`,
    telephone: CONTACT.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, D-231, Phase 8B, Sector 91",
      addressLocality: "Sahibzada Ajit Singh Nagar",
      addressRegion: "Punjab",
      postalCode: "140308",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <ContactPageClient />
    </>
  );
}
