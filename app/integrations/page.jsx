import IntegrationsPageClient from "./integrations-page-client";
import { BreadcrumbJsonLd, FaqJsonLd, IntegrationsJsonLd } from "../json-ld";
import { SITE_NAME, SITE_URL } from "../site";
import { INTEGRATION_APPS, INTEGRATION_FAQS } from "./data";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "TracktCRM Integrations | WhatsApp, Ads, Portals & More",
  },
  description:
    "Connect TracktCRM to WhatsApp, 99acres, Gmail, Meta ads, Shopify, Razorpay and more. Search the catalogue and plug your stack into one CRM.",
  alternates: {
    canonical: "/integrations",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/integrations`,
    siteName: SITE_NAME,
    title: "TracktCRM Integrations | Connect Your Sales Stack",
    description:
      "WhatsApp, lead portals, ads, Gmail, payments and shipping — see every TracktCRM integration in one place.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM CRM integrations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TracktCRM Integrations | Connect Your Sales Stack",
    description:
      "WhatsApp, lead portals, ads, Gmail, payments and shipping — see every TracktCRM integration in one place.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function IntegrationsPage() {
  return (
    <div className="home int-page">
      <IntegrationsJsonLd apps={INTEGRATION_APPS} />
      <FaqJsonLd id="schema-integrations-faq" faqs={INTEGRATION_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Integrations", href: "/integrations" },
        ]}
      />
      <IntegrationsPageClient />
    </div>
  );
}
