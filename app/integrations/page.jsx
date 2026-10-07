import IntegrationsPageClient from "./integrations-page-client";
import { BreadcrumbJsonLd, FaqJsonLd, IntegrationsJsonLd } from "../json-ld";
import { SITE_NAME, SITE_URL } from "../site";
import {
  INTEGRATION_APPS,
  INTEGRATION_FAQS,
  LAST_UPDATED,
  integrationSlug,
} from "./data";

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const pageTitle = "CRM Integrations India: WhatsApp, 99acres, Ads | TracktCRM";
const pageDescription = `Connect TracktCRM to WhatsApp, 99acres, IndiaMART, Justdial, Meta and Google Ads, Gmail, Shopify and Razorpay. ${INTEGRATION_APPS.length} integrations, no code needed.`;

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/integrations",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/integrations`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM CRM integrations with WhatsApp, lead portals, ads and payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
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
      <IntegrationsJsonLd
        apps={INTEGRATION_APPS.map((app) => ({
          ...app,
          slug: integrationSlug(app.name),
        }))}
        name={pageTitle}
        description={pageDescription}
        dateModified={LAST_UPDATED.iso}
      />
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
