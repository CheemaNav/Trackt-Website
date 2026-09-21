import Link from "next/link";
import ContentPage from "../components/content-page";
import { SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

const TOPICS = [
  {
    title: "How fast should you respond to a new lead?",
    href: "/ai-crm",
    blurb: "Why speed-to-lead matters and how an AI sales assistant closes the gap.",
  },
  {
    title: "WhatsApp lead follow-up for sales teams",
    href: "/whatsapp-crm",
    blurb: "Templates and workflows for the channel your leads already use.",
  },
  {
    title: "Real estate pipeline stages from enquiry to registration",
    href: "/real-estate-crm",
    blurb: "How property teams keep brokers, units and site visits in one CRM.",
  },
  {
    title: "Pipedrive vs TracktCRM for small sales teams",
    href: "/pipedrive-alternative",
    blurb: "A practical comparison for teams that need WhatsApp-native AI response.",
  },
];

export const metadata = {
  title: "Blog",
  description:
    "Guides on AI lead response, WhatsApp CRM, real estate pipelines and CRM comparisons from the TracktCRM team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title: "Blog | TracktCRM",
    description: "Sales CRM guides from TracktCRM.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TracktCRM blog" }],
  },
};

export default function BlogPage() {
  return (
    <ContentPage
      badge="BLOG"
      title="Guides for teams that live on leads"
      lead="Long-form posts are coming soon. Until then, start with these deep-dive product pages."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
      ]}
    >
      <div className="blog-topic-grid">
        {TOPICS.map((topic) => (
          <article className="blog-topic-card" key={topic.href}>
            <h2>
              <Link href={topic.href}>{topic.title}</Link>
            </h2>
            <p>{topic.blurb}</p>
            <Link className="industry-link" href={topic.href}>
              Read more →
            </Link>
          </article>
        ))}
      </div>
      <p className="prose-block">
        Want a topic covered? <Link href="/contact">Tell us what you need</Link>.
      </p>
    </ContentPage>
  );
}
