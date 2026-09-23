import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_PROFILES } from "./site";
import { FAQS } from "./home-data";

function SchemaScript({ data, id }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Global Organization + WebSite + SoftwareApplication (layout). */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "TracktCRM is an AI-powered CRM that captures leads, automates follow-ups and tracks sales pipelines for real estate teams, agencies, consultants and freelancers.",
    sameAs: Object.values(SOCIAL_PROFILES),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: CONTACT.phoneTel,
      email: CONTACT.email,
      url: `${SITE_URL}/contact`,
      areaServed: "Worldwide",
      availableLanguage: ["en", "hi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, D-231, Phase 8B, Sector 91",
      addressLocality: "Sahibzada Ajit Singh Nagar",
      addressRegion: "Punjab",
      postalCode: "140308",
      addressCountry: "IN",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM Software",
    operatingSystem: "Web",
    description:
      "AI-powered CRM software that captures leads across WhatsApp, email and SMS, automates follow-ups, and manages sales pipelines - built for real estate, agencies, consultants and freelancers.",
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "INR",
      price: "0",
      description: "1-month free trial - no credit card required. Paid plans after trial.",
      category: "FreeTrial",
    },
    url: SITE_URL,
  };

  return (
    <>
      <SchemaScript id="schema-organization" data={organization} />
      <SchemaScript id="schema-website" data={website} />
      <SchemaScript id="schema-software" data={software} />
    </>
  );
}

export function BreadcrumbJsonLd({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http")
        ? item.href
        : `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return <SchemaScript id="schema-breadcrumb" data={data} />;
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
    areaServed: "Worldwide",
    description:
      "TracktCRM is a real estate CRM that captures enquiries from every portal and WhatsApp, books site visits instantly, and tracks every broker, unit and deal.",
    url: `${SITE_URL}/industries/real-estate-crm`,
  };

  return (
    <>
      <SchemaScript id="schema-re-faq" data={faqPage} />
      <SchemaScript id="schema-re-service" data={service} />
    </>
  );
}

/** AI CRM page FAQ + Service schema. */
export function AiCrmJsonLd({ faqs }) {
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
    serviceType: "AI Sales Assistant",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM's AI sales assistant answers every lead in seconds across WhatsApp, email and SMS, then automates follow-ups and reporting.",
    url: `${SITE_URL}/industries/ai-crm`,
  };

  return (
    <>
      <SchemaScript id="schema-ai-faq" data={faqPage} />
      <SchemaScript id="schema-ai-service" data={service} />
    </>
  );
}

/** WhatsApp CRM page FAQ + Service schema. */
export function WhatsAppCrmJsonLd({ faqs }) {
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
    serviceType: "WhatsApp CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is a WhatsApp CRM that captures leads, automates replies and tracks every deal — right inside the WhatsApp chats your customers already use.",
    url: `${SITE_URL}/features/whatsapp-crm`,
  };

  return (
    <>
      <SchemaScript id="schema-wa-faq" data={faqPage} />
      <SchemaScript id="schema-wa-service" data={service} />
    </>
  );
}

export function ContactPageJsonLd() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT.email,
      telephone: CONTACT.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, D-231, Phase 8B, Sector 91",
        addressLocality: "Sahibzada Ajit Singh Nagar",
        addressRegion: "Punjab",
        postalCode: "140308",
        addressCountry: "IN",
      },
    },
  };

  return <SchemaScript id="schema-contact" data={contactPage} />;
}

export function FaqJsonLd({ id = "schema-faq", faqs }) {
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

  return <SchemaScript id={id} data={faqPage} />;
}
