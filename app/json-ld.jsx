import { FAQS } from "./home-data";
import { SEO, SITE_NAME, SITE_URL } from "./site";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/tracktcrm-logo.png`,
    description: SEO.description,
    sameAs: [],
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: SITE_URL,
    description: SEO.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "14-day free trial - no credit card required",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "5000",
      bestRating: "5",
    },
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SEO.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

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

  const schemas = [organization, software, webpage, faqPage];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={schema["@type"] || index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
