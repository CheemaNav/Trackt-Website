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
      description: "Free 1 month trial - no credit card required. Paid plans after trial.",
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

function industrySoftware({ name, path, features }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE_NAME} ${name}`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: `${name} Software`,
    operatingSystem: "Web",
    url: `${SITE_URL}${path}`,
    featureList: features.map((item) => item.title),
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "INR",
      price: "0",
      description: "Free 1 month trial, no credit card required.",
      category: "FreeTrial",
    },
  };
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

/** Real-estate page FAQ + Service + SoftwareApplication schema. */
export function RealEstateJsonLd({ faqs, features }) {
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
      "TracktCRM is real estate CRM software that captures leads from 99acres, MagicBricks and WhatsApp, books site visits, and tracks brokers, inventory and bookings.",
    url: `${SITE_URL}/industries/real-estate-crm`,
  };

  const software = industrySoftware({
    name: "Real Estate CRM",
    path: "/industries/real-estate-crm",
    features,
  });

  return (
    <>
      <SchemaScript id="schema-re-faq" data={faqPage} />
      <SchemaScript id="schema-re-service" data={service} />
      <SchemaScript id="schema-re-software" data={software} />
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

/** Education CRM page FAQ + Service + SoftwareApplication schema. */
export function EducationCrmJsonLd({ faqs, features }) {
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
    serviceType: "Education CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is an education CRM for schools, colleges and coaching institutes that captures enquiries from ads, portals and WhatsApp, assigns counsellors, and tracks admissions and fees.",
    url: `${SITE_URL}/industries/education-crm`,
  };

  const software = industrySoftware({
    name: "Education CRM",
    path: "/industries/education-crm",
    features,
  });

  return (
    <>
      <SchemaScript id="schema-edu-faq" data={faqPage} />
      <SchemaScript id="schema-edu-service" data={service} />
      <SchemaScript id="schema-edu-software" data={software} />
    </>
  );
}

/** Agency CRM page FAQ + Service schema. */
export function AgencyCrmJsonLd({ faqs }) {
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
    serviceType: "Agency CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is an agency CRM that tracks proposals, retainer renewals and client conversations in one pipeline.",
    url: `${SITE_URL}/industries/crm-for-agencies`,
  };

  return (
    <>
      <SchemaScript id="schema-agency-faq" data={faqPage} />
      <SchemaScript id="schema-agency-service" data={service} />
    </>
  );
}

/** Recruitment CRM page FAQ + Service schema. */
export function RecruitmentCrmJsonLd({ faqs }) {
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
    serviceType: "Recruitment CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is a recruitment CRM that tracks candidates and client roles in one pipeline, reaches candidates on WhatsApp and reminds recruiters to follow up.",
    url: `${SITE_URL}/industries/crm-for-recruitment`,
  };

  return (
    <>
      <SchemaScript id="schema-recruitment-faq" data={faqPage} />
      <SchemaScript id="schema-recruitment-service" data={service} />
    </>
  );
}

/** Insurance CRM page FAQ + Service schema. */
export function InsuranceCrmJsonLd({ faqs }) {
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
    serviceType: "Insurance CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is an insurance CRM that captures leads, chases quotes and tracks policy renewals, with WhatsApp and instant AI replies.",
    url: `${SITE_URL}/industries/crm-for-insurance`,
  };

  return (
    <>
      <SchemaScript id="schema-insurance-faq" data={faqPage} />
      <SchemaScript id="schema-insurance-service" data={service} />
    </>
  );
}

/** Automotive CRM page FAQ + Service schema. */
export function AutomotiveCrmJsonLd({ faqs }) {
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
    serviceType: "Automotive CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is an automotive CRM that captures enquiries, books test drives and follows up to delivery, with WhatsApp and AI replies.",
    url: `${SITE_URL}/industries/crm-for-automotive`,
  };

  return (
    <>
      <SchemaScript id="schema-automotive-faq" data={faqPage} />
      <SchemaScript id="schema-automotive-service" data={service} />
    </>
  );
}

/** Healthcare CRM page FAQ + Service schema. */
export function HealthcareCrmJsonLd({ faqs }) {
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
    serviceType: "Healthcare CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is a healthcare CRM that captures patient enquiries, books appointments and follows up, with WhatsApp and AI replies.",
    url: `${SITE_URL}/industries/crm-for-healthcare`,
  };

  return (
    <>
      <SchemaScript id="schema-healthcare-faq" data={faqPage} />
      <SchemaScript id="schema-healthcare-service" data={service} />
    </>
  );
}

/** Industries hub: CollectionPage with an ItemList of live industry pages, plus FAQ. */
export function IndustriesHubJsonLd({ industries, faqs }) {
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CRM by Industry",
    description:
      "Find the TracktCRM built for your industry: real estate, education, agencies, recruitment, insurance, automotive and healthcare.",
    url: `${SITE_URL}/industries`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: industries.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.body,
        url: `${SITE_URL}${item.href}`,
      })),
    },
  };

  return (
    <>
      <SchemaScript id="schema-industries-collection" data={collection} />
      <FaqJsonLd id="schema-industries-faq" faqs={faqs} />
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

/** CRM software pillar page FAQ + SoftwareApplication schema. */
export function CrmSoftwareJsonLd({ faqs }) {
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

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM Software",
    operatingSystem: "Web, iOS, Android",
    description:
      "AI-powered CRM software that captures leads, replies in seconds across WhatsApp, email and SMS, and tracks every deal in one pipeline.",
    url: `${SITE_URL}/crm-software`,
  };

  return (
    <>
      <SchemaScript id="schema-cs-faq" data={faqPage} />
      <SchemaScript id="schema-cs-software" data={software} />
    </>
  );
}

export function IntegrationsJsonLd({ apps }) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TracktCRM CRM integrations",
    itemListElement: apps.map((app, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: app.name,
      description: app.body,
      url: app.href ? `${SITE_URL}${app.href}` : `${SITE_URL}/integrations`,
    })),
  };

  return <SchemaScript id="schema-integrations" data={itemList} />;
}
