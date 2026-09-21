import Link from "next/link";
import ContentPage from "../components/content-page";
import { CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: "Privacy Policy",
  description:
    "How TracktCRM collects, uses and protects personal data for our AI CRM software, website and customer accounts.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    title: "Privacy Policy | TracktCRM",
    description:
      "TracktCRM privacy practices for website visitors and CRM customers.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TracktCRM privacy" }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <ContentPage
      badge="LEGAL"
      title="Privacy Policy"
      lead="Last updated: 21 September 2026. This policy explains what data TracktCRM collects and how we use it."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ]}
    >
      <article className="prose-block">
        <h2>Who we are</h2>
        <p>
          TracktCRM (&quot;we&quot;, &quot;us&quot;) provides AI CRM software
          from {CONTACT.address}. Contact:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>,{" "}
          <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>.
        </p>

        <h2>Data we collect</h2>
        <ul>
          <li>
            <strong>Website forms:</strong> name, email, phone, company and
            message when you contact us.
          </li>
          <li>
            <strong>Product accounts:</strong> account details, CRM records and
            messages you or your team store in TracktCRM.
          </li>
          <li>
            <strong>Usage:</strong> basic analytics (for example page views via
            Google Analytics) to improve the site.
          </li>
        </ul>

        <h2>How we use data</h2>
        <p>
          We use personal data to respond to enquiries, provide the CRM service,
          send service messages, improve reliability and security, and meet
          legal obligations (including India&apos;s Digital Personal Data
          Protection Act where applicable).
        </p>

        <h2>Sharing</h2>
        <p>
          We do not sell personal data. We may use processors (hosting, email
          delivery, analytics) under contracts that limit how they use the
          data. We may disclose information if required by law.
        </p>

        <h2>Retention and security</h2>
        <p>
          We keep data only as long as needed for the purposes above or as
          required by law. We apply access controls and industry-standard
          safeguards; no method of transmission is perfectly secure.
        </p>

        <h2>Your choices</h2>
        <p>
          You may request access, correction or deletion of personal data we
          hold about you by emailing{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Customers
          control CRM data inside their own workspaces.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy and will revise the date above. Continued
          use of the site or product after changes means you accept the updated
          policy. See also our <Link href="/terms">Terms &amp; Conditions</Link>
          .
        </p>
      </article>
    </ContentPage>
  );
}
