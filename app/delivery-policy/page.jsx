import Link from "next/link";
import ContentPage from "../components/content-page";
import { APP_BASE_URL, CONTACT, LEGAL_NAME, REGISTERED_OFFICE, SITE_NAME } from "../site";
import { buildMetadata } from "@/lib/seo";

const LAST_UPDATED = "24 October 2026";

export const metadata = buildMetadata("/delivery-policy");

export default function DeliveryPolicyPage() {
  return (
    <ContentPage
      route="/delivery-policy"
      badge="LEGAL"
      title="Service Delivery Policy"
      lead={`${SITE_NAME} · Last updated: ${LAST_UPDATED}. This policy explains how TracktCRM is delivered after you subscribe.`}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Service Delivery Policy", href: "/delivery-policy" },
      ]}
    >
      <article className="prose-block">
        <h2>1. Who we are</h2>
        <p>
          {SITE_NAME} is a product of {LEGAL_NAME} (“we”, “us”).
          <br />
          Registered office: {REGISTERED_OFFICE.address}
        </p>

        <h2>2. What we deliver</h2>
        <p>
          TracktCRM is online software (a web-based CRM). You use it in your
          browser at {APP_BASE_URL}. No physical goods are shipped.
        </p>

        <h2>3. When access starts</h2>
        <p>
          Your paid plan activates instantly after a successful payment. The
          features of your plan are available in your account straight away.
        </p>

        <h2>4. If access is not activated</h2>
        <p>
          If your plan is not active within 24 hours of a successful payment,
          email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with
          your account email and payment details, and we will fix it.
        </p>

        <h2>5. Contact</h2>
        <p>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{" "}
          <Link href="/contact">Contact us</Link>
        </p>
        <p>
          See also our{" "}
          <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>{" "}
          and <Link href="/terms">Terms &amp; Conditions</Link>.
        </p>
      </article>
    </ContentPage>
  );
}
