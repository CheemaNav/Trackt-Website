import IntegrationsPageClient from "./integrations-page-client";
import { BreadcrumbJsonLd, FaqJsonLd, IntegrationsJsonLd } from "../json-ld";
import {
  INTEGRATION_APPS,
  INTEGRATION_FAQS,
  LAST_UPDATED,
  integrationSlug,
} from "./data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const SEO = PAGE_SEO["/integrations"];

export const metadata = buildMetadata("/integrations");

export default function IntegrationsPage() {
  return (
    <div className="home int-page">
      <IntegrationsJsonLd
        apps={INTEGRATION_APPS.map((app) => ({
          ...app,
          slug: integrationSlug(app.name),
        }))}
        name={SEO.title}
        description={SEO.description}
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
