import {
  CONTACT,
  HOME_URL,
  LEGAL_NAME,
  SAME_AS,
  SITE_NAME,
  SITE_RATING,
  SITE_URL,
} from "./site";
import { FAQS } from "./home-data";
import { PAGE_SEO, absoluteUrl } from "@/lib/seo";

// Must match the Google Business Profile address (Sector 91 office), not the registered office.
const SALES_OFFICE_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "3rd Floor, D-231, Phase 8B, Sector 91",
  addressLocality: "Sahibzada Ajit Singh Nagar",
  addressRegion: "Punjab",
  postalCode: "140307",
  addressCountry: "IN",
};

export function JsonLd({ data, id }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Global Organization schema (layout). */
export function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: HOME_URL,
    logo: `${SITE_URL}/logo.png`,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    description:
      "TracktCRM is an AI-powered CRM that captures leads, automates follow-ups and tracks sales pipelines for real estate teams, agencies, consultants and freelancers.",
    sameAs: SAME_AS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91-62395-20057",
        email: CONTACT.email,
        url: `${SITE_URL}/contact`,
        areaServed: "Worldwide",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "office",
        telephone: "+91-70872-90627",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    address: SALES_OFFICE_ADDRESS,
  };

  return <JsonLd id="schema-organization" data={organization} />;
}

/** Homepage-only WebSite + WebPage schema (+ SoftwareApplication once rated). */
export function HomeJsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: HOME_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: HOME_URL,
    },
  };

  return (
    <>
      <JsonLd id="schema-website" data={website} />
      <WebPageJsonLd route="/" />
      <SoftwareApplicationJsonLd path="/" />
    </>
  );
}

/**
 * SoftwareApplication requires aggregateRating or review for Google rich
 * results, so it is rendered only when SITE_RATING holds real totals.
 */
export function SoftwareApplicationJsonLd({ path }) {
  const { ratingValue, ratingCount } = SITE_RATING;
  if (!ratingValue || !ratingCount) return null;

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(path),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(ratingValue),
      ratingCount: String(ratingCount),
      bestRating: "5",
    },
  };

  return <JsonLd id="schema-software" data={software} />;
}

export function BreadcrumbJsonLd({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : absoluteUrl(item.href),
    })),
  };

  return <JsonLd id="schema-breadcrumb" data={data} />;
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

  return <JsonLd id="schema-home-faq" data={faqPage} />;
}

/** Real-estate page WebPage + FAQ + Service schema (+ SoftwareApplication once rated). */
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
      url: HOME_URL,
    },
    description:
      "TracktCRM is real estate CRM software that captures leads from property portals, ads and WhatsApp, books site visits, and tracks brokers, inventory and bookings.",
    url: `${SITE_URL}/industries/real-estate-crm`,
  };


  return (
    <>
      <JsonLd id="schema-re-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/real-estate-crm" />
      <JsonLd id="schema-re-service" data={service} />
      <SoftwareApplicationJsonLd path="/industries/real-estate-crm" />
    </>
  );
}

/** AI CRM page WebPage + FAQ + Service schema (+ SoftwareApplication once rated). */
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
    serviceType: "AI CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: HOME_URL,
    },
    description:
      "TracktCRM is AI CRM software with a built-in AI sales assistant that replies to every lead in seconds on WhatsApp, email and SMS, places follow-up calls and hands over to reps with full context.",
    url: `${SITE_URL}/industries/ai-crm`,
  };


  return (
    <>
      <JsonLd id="schema-ai-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/ai-crm" />
      <JsonLd id="schema-ai-service" data={service} />
      <SoftwareApplicationJsonLd path="/industries/ai-crm" />
    </>
  );
}

/** Education CRM page WebPage + FAQ + Service schema (+ SoftwareApplication once rated). */
export function EducationCrmJsonLd({ faqs }) {
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
      url: HOME_URL,
    },
    description:
      "TracktCRM is an education CRM for schools, colleges and institutes that captures enquiries from ads, portals and WhatsApp, assigns counsellors, and tracks admissions and fees.",
    url: `${SITE_URL}/industries/education-crm`,
  };


  return (
    <>
      <JsonLd id="schema-edu-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/education-crm" />
      <JsonLd id="schema-edu-service" data={service} />
      <SoftwareApplicationJsonLd path="/industries/education-crm" />
    </>
  );
}

/** Agency CRM page WebPage + FAQ + Service schema (+ SoftwareApplication once rated). */
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
      url: HOME_URL,
    },
    description:
      "Agency CRM for growing agencies: track pitches, proposals and retainer renewals, and keep client chats on WhatsApp in one pipeline.",
    url: `${SITE_URL}/industries/crm-for-agencies`,
  };


  return (
    <>
      <JsonLd id="schema-agency-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/crm-for-agencies" />
      <JsonLd id="schema-agency-service" data={service} />
      <SoftwareApplicationJsonLd path="/industries/crm-for-agencies" />
    </>
  );
}

/** Recruitment CRM page WebPage + FAQ + Service schema (+ SoftwareApplication once rated). */
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
      url: HOME_URL,
    },
    description:
      "Recruitment CRM for recruiters and staffing teams: track candidates and client roles, reach candidates on WhatsApp and get follow-up reminders.",
    url: `${SITE_URL}/industries/crm-for-recruitment`,
  };


  return (
    <>
      <JsonLd id="schema-recruitment-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/crm-for-recruitment" />
      <JsonLd id="schema-recruitment-service" data={service} />
      <SoftwareApplicationJsonLd path="/industries/crm-for-recruitment" />
    </>
  );
}

/** Insurance CRM page WebPage + FAQ + Service schema. */
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
      url: HOME_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is an insurance CRM that captures leads, chases quotes and tracks policy renewals, with WhatsApp and instant AI replies.",
    url: `${SITE_URL}/industries/crm-for-insurance`,
  };

  return (
    <>
      <JsonLd id="schema-insurance-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/crm-for-insurance" />
      <JsonLd id="schema-insurance-service" data={service} />
    </>
  );
}

/** Automotive CRM page WebPage + FAQ + Service schema. */
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
      url: HOME_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is an automotive CRM that captures enquiries, books test drives and follows up to delivery, with WhatsApp and AI replies.",
    url: `${SITE_URL}/industries/crm-for-automotive`,
  };

  return (
    <>
      <JsonLd id="schema-automotive-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/crm-for-automotive" />
      <JsonLd id="schema-automotive-service" data={service} />
    </>
  );
}

/** Healthcare CRM page WebPage + FAQ + Service schema. */
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
      url: HOME_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is a healthcare CRM that captures patient enquiries, books appointments and follows up, with WhatsApp and AI replies.",
    url: `${SITE_URL}/industries/crm-for-healthcare`,
  };

  return (
    <>
      <JsonLd id="schema-healthcare-faq" data={faqPage} />
      <WebPageJsonLd route="/industries/crm-for-healthcare" />
      <JsonLd id="schema-healthcare-service" data={service} />
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
      "Find the TracktCRM built for your industry: real estate, education, agencies, recruitment, insurance, automotive, healthcare and travel.",
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
      <JsonLd id="schema-industries-collection" data={collection} />
      <FaqJsonLd id="schema-industries-faq" faqs={faqs} />
    </>
  );
}

/** WhatsApp CRM page WebPage + FAQ + Service schema (+ SoftwareApplication once rated). */
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
      url: HOME_URL,
    },
    description:
      "WhatsApp CRM for growing teams: capture every WhatsApp enquiry as a lead, reply from a shared inbox, automate follow-ups and track deals.",
    url: `${SITE_URL}/features/whatsapp-crm`,
  };


  return (
    <>
      <JsonLd id="schema-wa-faq" data={faqPage} />
      <WebPageJsonLd route="/features/whatsapp-crm" />
      <JsonLd id="schema-wa-service" data={service} />
      <SoftwareApplicationJsonLd path="/features/whatsapp-crm" />
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
      url: HOME_URL,
      legalName: LEGAL_NAME,
      email: CONTACT.email,
      telephone: CONTACT.phoneTel,
      address: SALES_OFFICE_ADDRESS,
    },
  };

  return <JsonLd id="schema-contact" data={contactPage} />;
}

/** WebPage schema; pass `route` to read name/description from PAGE_SEO. */
export function WebPageJsonLd({ route, name, description, path, dateModified }) {
  const seo = route ? PAGE_SEO[route] : null;
  const page = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo?.title ?? name,
    description: seo?.description ?? description,
    url: absoluteUrl(route ?? path),
    ...(dateModified && { dateModified }),
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: HOME_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: HOME_URL,
    },
  };

  return <JsonLd id="schema-webpage" data={page} />;
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

  return <JsonLd id={id} data={faqPage} />;
}

/** CRM software pillar page WebPage + FAQ schema. */
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

  return (
    <>
      <WebPageJsonLd route="/crm-software" />
      <JsonLd id="schema-cs-faq" data={faqPage} />
    </>
  );
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

  return <JsonLd id="schema-integrations" data={page} />;
}

/** Feature landing page: WebPage + FAQPage (+ SoftwareApplication once rated). */
export function FeatureSoftwareJsonLd({ id, path, faqs }) {
  return (
    <>
      <WebPageJsonLd route={path} />
      <FaqJsonLd id={`${id}-faq`} faqs={faqs} />
      <SoftwareApplicationJsonLd path={path} />
    </>
  );
}

const BLOG_ORGANIZATION = {
  "@type": "Organization",
  name: SITE_NAME,
  url: HOME_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
};

export function BlogPostingJsonLd({ post }) {
  const url = `${SITE_URL}${post.href}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: post.heroImage ? [`${SITE_URL}${post.heroImage}`] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "en-US",
    articleSection: post.category.label,
    keywords: post.primaryKeyword || undefined,
    wordCount: post.words,
    author: post.author ? { "@type": "Person", name: post.author } : BLOG_ORGANIZATION,
    publisher: BLOG_ORGANIZATION,
  };

  return <JsonLd id="schema-blogposting" data={data} />;
}

export function BlogCollectionJsonLd({ name, description, path, posts }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "en-US",
    publisher: BLOG_ORGANIZATION,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${SITE_URL}${post.href}`,
      })),
    },
  };

  return <JsonLd id="schema-blog-collection" data={data} />;
}

/** Travel CRM page WebPage + FAQ + Service schema. */
export function TravelCrmJsonLd({ faqs }) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Travel CRM Software",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: HOME_URL,
    },
    areaServed: "Worldwide",
    description:
      "TracktCRM is a travel CRM that captures trip enquiries from ads, WhatsApp and forms, follows up quotes and keeps package pipelines and repeat travellers in one place.",
    url: `${SITE_URL}/industries/crm-for-travel`,
  };

  return (
    <>
      <FaqJsonLd id="schema-travel-faq" faqs={faqs} />
      <WebPageJsonLd route="/industries/crm-for-travel" />
      <JsonLd id="schema-travel-service" data={service} />
    </>
  );
}