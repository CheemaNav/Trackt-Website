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
      "AI-powered CRM software that captures leads across WhatsApp, email and SMS, automates follow-ups, and manages sales pipelines for real estate, education, agencies, consultants and freelancers.",
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "INR",
      price: "0",
      description: "Free 1 month trial, no credit card required. Paid plans after trial.",
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
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "TracktCRM is real estate CRM software for India that captures leads from 99acres, MagicBricks and WhatsApp, books site visits, and tracks brokers, inventory and bookings.",
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

/** AI CRM page FAQ + Service + SoftwareApplication schema. */
export function AiCrmJsonLd({ faqs, features }) {
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
    serviceType: "AI CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "TracktCRM is AI CRM software with a built-in AI sales assistant that replies to every lead in seconds on WhatsApp, email and SMS, places follow-up calls and hands over to reps with full context.",
    url: `${SITE_URL}/industries/ai-crm`,
  };

  const software = industrySoftware({
    name: "AI CRM",
    path: "/industries/ai-crm",
    features,
  });

  return (
    <>
      <SchemaScript id="schema-ai-faq" data={faqPage} />
      <SchemaScript id="schema-ai-service" data={service} />
      <SchemaScript id="schema-ai-software" data={software} />
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
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "TracktCRM is an education CRM for Indian institutes that captures enquiries from ads, portals and WhatsApp, assigns counsellors, and tracks admissions and fees.",
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
export function AgencyCrmJsonLd({ faqs, features }) {
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
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "Agency CRM for Indian agencies: track pitches, proposals and retainer renewals, and keep client chats on WhatsApp in one pipeline.",
    url: `${SITE_URL}/industries/crm-for-agencies`,
  };

  const software = industrySoftware({
    name: "Agency CRM",
    path: "/industries/crm-for-agencies",
    features,
  });

  return (
    <>
      <SchemaScript id="schema-agency-faq" data={faqPage} />
      <SchemaScript id="schema-agency-service" data={service} />
      <SchemaScript id="schema-agency-software" data={software} />
    </>
  );
}

/** Recruitment CRM page FAQ + Service schema. */
export function RecruitmentCrmJsonLd({ faqs, features }) {
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
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "Recruitment CRM for Indian recruiters: track candidates and client roles, reach candidates on WhatsApp and get follow-up reminders.",
    url: `${SITE_URL}/industries/crm-for-recruitment`,
  };

  const software = industrySoftware({
    name: "Recruitment CRM",
    path: "/industries/crm-for-recruitment",
    features,
  });

  return (
    <>
      <SchemaScript id="schema-recruitment-faq" data={faqPage} />
      <SchemaScript id="schema-recruitment-service" data={service} />
      <SchemaScript id="schema-recruitment-software" data={software} />
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
export function WhatsAppCrmJsonLd({ faqs, features }) {
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
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "WhatsApp CRM for Indian teams: capture every WhatsApp enquiry as a lead, reply from a shared inbox, automate follow-ups and track deals.",
    url: `${SITE_URL}/features/whatsapp-crm`,
  };

  const software = industrySoftware({
    name: "WhatsApp CRM",
    path: "/features/whatsapp-crm",
    features,
  });

  return (
    <>
      <SchemaScript id="schema-wa-faq" data={faqPage} />
      <SchemaScript id="schema-wa-service" data={service} />
      <SchemaScript id="schema-wa-software" data={software} />
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

export function WebPageJsonLd({ name, description, path, dateModified }) {
  const page = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    dateModified,
    inLanguage: "en-IN",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return <SchemaScript id="schema-webpage" data={page} />;
}

/** Pricing plans as SoftwareApplication offers, in USD per user per month. */
export function PricingJsonLd({ plans }) {
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM Software",
    operatingSystem: "Web",
    url: `${SITE_URL}/pricing`,
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: `${SITE_NAME} ${plan.name}`,
      description: plan.tagline,
      url: `${SITE_URL}/pricing`,
      price: String(plan.monthly),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.monthly),
        priceCurrency: "USD",
        unitText: "user per month",
        billingDuration: "P1M",
      },
    })),
  };

  return <SchemaScript id="schema-pricing" data={software} />;
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

/** CRM software pillar page FAQ schema; SoftwareApplication comes from the layout. */
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

  return <SchemaScript id="schema-cs-faq" data={faqPage} />;
}

export function IntegrationsJsonLd({ apps, name, description, dateModified }) {
  const page = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}/integrations`,
    dateModified,
    mainEntity: {
      "@type": "ItemList",
      name: "TracktCRM CRM integrations",
      numberOfItems: apps.length,
      itemListElement: apps.map((app, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: app.name,
        description: app.body,
        url: `${SITE_URL}/integrations#${app.slug}`,
      })),
    },
  };

  return <SchemaScript id="schema-integrations" data={page} />;
}
