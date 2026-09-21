import Link from "next/link";
import ContentPage from "../components/content-page";
import { CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for the TracktCRM website and AI CRM software, including trials, accounts and acceptable use.",
  alternates: { canonical: "/terms" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    title: "Terms & Conditions | TracktCRM",
    description: "TracktCRM website and product terms of use.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TracktCRM terms" }],
  },
};

export default function TermsPage() {
  return (
    <ContentPage
      badge="LEGAL"
      title="Terms & Conditions"
      lead="Last updated: 21 September 2026. By using tracktcrm.com or the TracktCRM product, you agree to these terms."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Terms", href: "/terms" },
      ]}
    >
      <article className="prose-block">
        <h2>1. Service</h2>
        <p>
          TracktCRM provides AI CRM software and related website content. Features
          may change as we improve the product. Trial access is for evaluation
          and may be limited or revoked for abuse.
        </p>

        <h2>2. Accounts</h2>
        <p>
          You must provide accurate registration details, keep credentials
          secure, and are responsible for activity under your account. You may
          not use the service for unlawful, spam or deceptive messaging.
        </p>

        <h2>3. Customer data</h2>
        <p>
          You retain rights to data you upload. You grant us a limited licence to
          host and process that data solely to provide the service. Our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> explains how we
          handle personal data.
        </p>

        <h2>4. Fees and trials</h2>
        <p>
          Free trials convert to paid plans after the trial period unless you
          cancel. Pricing is confirmed in writing before billing. See{" "}
          <Link href="/pricing">pricing</Link> for current trial terms.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          TracktCRM branding, software and site content are owned by us or our
          licensors. You may not copy, reverse engineer or resell the product
          except as allowed by law or a written agreement.
        </p>

        <h2>6. Disclaimer and liability</h2>
        <p>
          The service is provided &quot;as is&quot; within commercial
          reasonableness. To the fullest extent permitted by law, we are not
          liable for indirect or consequential losses arising from use of the
          site or product.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
          <Link href="/contact">contact us</Link>. Governing law: India, with
          courts in Punjab having jurisdiction unless a signed order states
          otherwise.
        </p>
      </article>
    </ContentPage>
  );
}
