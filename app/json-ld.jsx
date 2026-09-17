import { FAQS } from "./home-data";
import { SITE_NAME, SITE_URL } from "./site";

function SchemaScript({ data, id }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Global Organization + SoftwareApplication (all pages via layout). */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "TracktCRM is an AI-powered CRM that captures leads, automates follow-ups and tracks sales pipelines for real estate teams, agencies, consultants and freelancers.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${SITE_URL}/#demo`,
    },
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM Software",
    operatingSystem: "Web, iOS, Android",
    description:
      "AI-powered CRM software that captures leads across WhatsApp, email and SMS, automates follow-ups, and manages sales pipelines - built for real estate, agencies, consultants and freelancers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free trial available - no credit card required",
    },
    url: SITE_URL,
  };

  return (
    <>
      <SchemaScript id="schema-organization" data={organization} />
      <SchemaScript id="schema-software" data={software} />
    </>
  );
}

/** Homepage FAQ schema - only the FAQs visible on `/`. */
export function HomeFaqJsonLd() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <SchemaScript id="schema-home-faq" data={faqPage} />;
}

/** Real-estate page FAQ + Service schema. */
export function RealEstateJsonLd({ faqs }) {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real Estate CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "India",
    description:
      "TracktCRM is a real estate CRM that captures enquiries from every portal and WhatsApp, books site visits instantly, and tracks every broker, unit and deal.",
    url: `${SITE_URL}/real-estate-crm`,
  };

  return (
    <>
      <SchemaScript id="schema-re-faq" data={faqPage} />
      <SchemaScript id="schema-re-service" data={service} />
    </>
  );
}
