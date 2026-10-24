import Link from "next/link";
import ContentPage from "../components/content-page";
import { CONTACT, LEGAL_NAME, REGISTERED_OFFICE, SITE_NAME } from "../site";
import { buildMetadata } from "@/lib/seo";

const LAST_UPDATED = "24 October 2026";

export const metadata = buildMetadata("/refund-policy");

export default function RefundPolicyPage() {
  return (
    <ContentPage
      route="/refund-policy"
      badge="LEGAL"
      title="Refund & Cancellation Policy"
      lead={`${SITE_NAME} · Last updated: ${LAST_UPDATED}. This policy explains how cancellations and refunds work for TracktCRM subscriptions.`}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Refund & Cancellation Policy", href: "/refund-policy" },
      ]}
    >
      <article className="prose-block">
        <h2>1. Who we are</h2>
        <p>
          {SITE_NAME} is a product of {LEGAL_NAME} (“we”, “us”).
          <br />
          Registered office: {REGISTERED_OFFICE.address}
        </p>

        <h2>2. Free plan</h2>
        <p>
          The Free plan is free forever for 1 user. There is no charge, so
          there is nothing to refund.
        </p>

        <h2>3. Paid plans</h2>
        <p>
          Paid plans are monthly or yearly subscriptions, billed per user.
          Current plans and prices are listed on our{" "}
          <Link href="/pricing">pricing page</Link>.
        </p>

        <h2>4. Cancellation</h2>
        <ul>
          <li>
            You can cancel anytime from <strong>Settings → Billing</strong> in
            your TracktCRM account.
          </li>
          <li>
            After you cancel, you keep access until the end of the period you
            have already paid for.
          </li>
          <li>Your subscription will not renew and no further charges are made.</li>
        </ul>

        <h2>5. Refunds</h2>
        <ul>
          <li>
            You get a full refund if you request it within 7 days of the{" "}
            <strong>first payment</strong> of a new subscription.
          </li>
          <li>
            Renewal payments, and requests made more than 7 days after the first
            payment, are not refunded.
          </li>
          <li>
            To request a refund, email{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> from your
            account email address with your workspace name and payment date.
          </li>
        </ul>

        <h2>6. Failed or duplicate payments</h2>
        <p>
          If a payment fails but money is debited, or you are charged twice for
          the same period, we refund the amount to the original payment method
          within 5–7 working days.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions about cancellations or refunds:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{" "}
          <Link href="/contact">Contact us</Link>
        </p>
        <p>
          See also our <Link href="/terms">Terms &amp; Conditions</Link> and{" "}
          <Link href="/delivery-policy">Service Delivery Policy</Link>.
        </p>
      </article>
    </ContentPage>
  );
}
