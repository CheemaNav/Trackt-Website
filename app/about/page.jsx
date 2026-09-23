import Link from "next/link";
import ContentPage from "../components/content-page";
import { CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: {
    absolute: "About TracktCRM | AI CRM Built in Mohali",
  },
  description:
    "TracktCRM builds AI CRM software for sales teams that need instant lead response across WhatsApp, email and SMS. Based in Mohali, Punjab.",
  alternates: { canonical: "/about" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    title: "About TracktCRM | AI CRM Built in Mohali",
    description:
      "Meet the team behind TracktCRM - AI CRM software for leads, pipeline and real estate sales teams.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "About TracktCRM" }],
  },
};

export default function AboutPage() {
  return (
    <ContentPage
      badge="ABOUT US"
      title="We build CRM software that answers leads, not just stores them"
      lead="TracktCRM is an AI CRM company based in Mohali, Punjab. We help sales teams reply faster, keep pipelines clean, and stop losing enquiries after hours."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
      ]}
    >
      <article className="prose-block">
        <h2>Our story</h2>
        <p>
          Most CRMs are dashboards for deals that already have a human watching
          them. TracktCRM started from a different problem: new leads arrive on
          WhatsApp, forms and portals around the clock, and the first response
          often decides whether a deal even starts.
        </p>
        <p>
          We built an{" "}
          <Link href="/industries/ai-crm">AI sales assistant</Link> that replies in
          seconds, places follow-up calls, and hands reps a briefed conversation
          - then wraps that automation in a practical CRM for pipelines,
          reporting and industry workflows like{" "}
          <Link href="/industries/real-estate-crm">real estate</Link>.
        </p>

        <h2>Where we work</h2>
        <p>
          Our office is at {CONTACT.address}. Support hours:{" "}
          {CONTACT.supportHours}. Reach us on{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
          <Link href="/contact">book a demo</Link>.
        </p>

        <h2>What we believe</h2>
        <ul>
          <li>Speed-to-lead is a product feature, not a training slide.</li>
          <li>WhatsApp, email and SMS should live in one pipeline.</li>
          <li>Pricing and trial terms should be clear - see our{" "}
            <Link href="/pricing">pricing page</Link>.</li>
          <li>Customer data deserves privacy controls that match real laws.</li>
        </ul>

        <p>
          Want to partner or join the team?{" "}
          <Link href="/contact">Send us a message</Link>.
        </p>
      </article>
    </ContentPage>
  );
}
