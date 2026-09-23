import Link from "next/link";
import ContentPage from "../components/content-page";
import { APP_BASE_URL, CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const LAST_UPDATED = "23 September 2026";

export const metadata = {
  title: {
    absolute: "Terms & Conditions | TracktCRM",
  },
  description:
    "Terms of use for TracktCRM website and AI CRM software, including accounts, subscriptions, Google integrations and acceptable use.",
  alternates: { canonical: "/terms" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    title: "Terms & Conditions | TracktCRM",
    description: "TracktCRM website and product terms of use.",
    images: [
      { url: ogImage, width: 1200, height: 630, alt: "TracktCRM terms" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <ContentPage
      badge="LEGAL"
      title="Terms & Conditions"
      lead={`${SITE_NAME} · Last updated: ${LAST_UPDATED}. These Terms & Conditions (“Terms”) govern access to and use of TracktCRM at ${APP_BASE_URL} and the website ${SITE_URL} (together, the “Service”). By creating an account, logging in, or using the Service, you agree to these Terms and to our Privacy Policy.`}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Terms & Conditions", href: "/terms" },
      ]}
    >
      <article className="prose-block">
        <p>
          If you are using TracktCRM on behalf of a company, you confirm that
          you have authority to bind that company. “You” means that company and
          its authorized users.
        </p>

        <h2>1. Who we are</h2>
        <p>
          TracktCRM is an AI CRM for managing leads, contacts, deals, pipelines,
          tasks, communications (including WhatsApp, email and SMS), files,
          meetings, reports, automations, and third-party integrations.
        </p>
        <p>
          <strong>Operator:</strong> {SITE_NAME}
          <br />
          Email:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <br />
          Phone:{" "}
          <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
          <br />
          Address: {CONTACT.address}
        </p>

        <h2>2. Eligibility and accounts</h2>
        <ul>
          <li>
            You must provide accurate registration information and keep it up
            to date.
          </li>
          <li>
            You are responsible for login credentials and for all activity under
            your account.
          </li>
          <li>
            Workspace administrators are responsible for inviting users,
            assigning roles, and managing access.
          </li>
          <li>
            Notify us immediately at{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> if you
            suspect unauthorized access.
          </li>
          <li>
            We may refuse, suspend, or close an account that is inaccurate,
            inactive, abusive, or in breach of these Terms.
          </li>
        </ul>

        <h2>3. The Service</h2>
        <p>TracktCRM may include, depending on your plan:</p>
        <ul>
          <li>lead, contact, deal, and pipeline management;</li>
          <li>tasks, notes, files, reports, and automation;</li>
          <li>
            communication tools such as email, calling, SMS, and WhatsApp-related
            features;
          </li>
          <li>
            AI-assisted response, follow-up calls, summaries, and reporting;
          </li>
          <li>
            integrations including Google Workspace (Gmail, Calendar, Meet,
            Drive, Sheets, Forms where enabled), Meta &amp; Google Ads, property
            portals, and other third-party apps you choose to connect.
          </li>
        </ul>
        <p>
          Features may vary by subscription plan, region, and configuration. We
          may add, change, or remove features with reasonable notice where
          practical. Trial access is for evaluation and may be limited or
          revoked for abuse.
        </p>

        <h2>4. Acceptable use</h2>
        <p>
          You may use the Service only for lawful business purposes. You agree
          not to:
        </p>
        <ul>
          <li>
            use the Service for unlawful, fraudulent, spam, or unauthorized
            purposes;
          </li>
          <li>
            upload malware, or attempt to hack, scrape, reverse-engineer, or
            disrupt the platform;
          </li>
          <li>
            access another customer&apos;s workspace or data without permission;
          </li>
          <li>
            use integrations in a way that violates Google, Meta, Microsoft, or
            any other provider&apos;s terms;
          </li>
          <li>
            send communications (email, WhatsApp, SMS, calls) without required
            consent or in breach of applicable law;
          </li>
          <li>
            resell, sublicense, or misuse the Service except as allowed in your
            contract with us.
          </li>
        </ul>

        <h2>5. Customer data</h2>
        <ul>
          <li>
            You retain ownership of the business data you submit to TracktCRM
            (leads, contacts, deals, files, messages, and similar records).
          </li>
          <li>
            You grant us a limited license to host, process, back up, and
            display that data solely to provide and support the Service.
          </li>
          <li>
            You are responsible for having a lawful basis to collect, store, and
            process customer/lead data, including any data imported from forms,
            sheets, ads, WhatsApp, or other tools.
          </li>
          <li>
            You are responsible for the accuracy and content of data your users
            upload or sync.
          </li>
        </ul>

        <h2>6. Google and other integrations</h2>
        <p>
          Some features require you to connect a third-party account, such as
          Google or WhatsApp Business. If you connect Google:
        </p>
        <ul>
          <li>
            you authorize TracktCRM to access only the Google user data needed
            for the feature you enable (for example Gmail, Calendar, Meet,
            Drive, Sheets, or Forms);
          </li>
          <li>
            that data is used only to provide the requested CRM feature, as
            described in our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>;
          </li>
          <li>
            our use of Google user data complies with the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including Limited Use;
          </li>
          <li>
            you can disconnect an integration at any time from TracktCRM account
            / integration settings;
          </li>
          <li>
            Google, Meta, Microsoft, and other providers remain independent
            services. Their own terms and privacy policies also apply. We are
            not responsible for outages, policy changes, or data handling by
            those providers.
          </li>
        </ul>

        <h2>7. Subscriptions, billing, and cancellation</h2>
        <ul>
          <li>
            Paid features require a subscription. Fees, user limits, and
            included features are shown at checkout, on{" "}
            <Link href="/pricing">pricing</Link>, or in your plan.
          </li>
          <li>
            Free trials are available for evaluation (for example a 1-month
            trial where offered). Trial access converts to a paid plan after the
            trial unless you cancel or we agree otherwise in writing.
          </li>
          <li>
            Prices may be billed per user and per billing period (for example
            monthly or yearly), in the currency displayed at purchase.
          </li>
          <li>
            Unless a written contract or checkout page says otherwise, fees are
            non-refundable for the current billing period.
          </li>
          <li>
            You may cancel a paid subscription from billing settings or by
            contacting us. Access typically continues until the end of the
            then-current billing period; it will not renew after that.
          </li>
          <li>
            We may change prices or plans with notice. Continued use after the
            change takes effect means you accept the new price for future
            periods.
          </li>
          <li>
            Failed payments, chargebacks, or abuse may result in suspension.
          </li>
        </ul>

        <h2>8. Intellectual property</h2>
        <p>
          TracktCRM, including software, design, logos, and documentation, is
          owned by {SITE_NAME} and protected by intellectual-property laws.
          These Terms do not transfer ownership to you. You may not copy,
          modify, or distribute the platform except as needed to use the
          Service.
        </p>
        <p>
          Feedback you send us may be used to improve the Service without
          obligation to you.
        </p>

        <h2>9. Confidentiality and security</h2>
        <p>
          We use reasonable technical and organizational measures to protect the
          Service. You must also protect your own accounts, devices, and user
          permissions. No online service is completely secure; you use the
          Service at your own risk, subject to these Terms.
        </p>

        <h2>10. Availability</h2>
        <p>
          We aim to keep TracktCRM available, but we do not guarantee
          uninterrupted or error-free operation. Maintenance, third-party
          outages (including Google, Meta, WhatsApp, or internet providers), or
          events beyond our control may cause downtime.
        </p>

        <h2>11. Suspension and termination</h2>
        <ul>
          <li>
            You may stop using the Service and request account closure by
            contacting{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </li>
          <li>
            We may suspend or terminate access if you breach these Terms, create
            risk, fail to pay, or if required by law.
          </li>
          <li>
            After termination, we may delete or anonymize workspace data in line
            with our Privacy Policy, except where we must retain records by law.
          </li>
        </ul>

        <h2>12. Disclaimer</h2>
        <p>
          The Service is provided “as is” and “as available,” without warranties
          of any kind, whether express or implied, including merchantability,
          fitness for a particular purpose, and non-infringement, to the maximum
          extent permitted by law. We do not warrant that CRM reports,
          automations, AI responses or summaries, or imported data will be
          complete or error-free.
        </p>

        <h2>13. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {SITE_NAME} is not liable for
          indirect, incidental, special, consequential, or lost-profit damages,
          or for loss of data, business, or goodwill.
        </p>
        <p>
          Our total liability for claims relating to the Service is limited to
          the subscription fees you paid to us for TracktCRM in the 6 months
          before the claim.
        </p>

        <h2>14. Indemnity</h2>
        <p>
          You will indemnify and hold harmless {SITE_NAME} and its team against
          claims, damages, and costs arising from your data, your
          communications, your use of integrations, or your breach of these
          Terms or applicable law.
        </p>

        <h2>15. Privacy</h2>
        <p>
          Personal data is handled as described in our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>. If these Terms and
          the Privacy Policy conflict on data-protection topics, the Privacy
          Policy controls for that topic.
        </p>

        <h2>16. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. The “Last updated” date
          will change, and we may notify you by email or in-app notice where the
          change is material. Continued use of the Service after the update
          means you accept the revised Terms.
        </p>

        <h2>17. Governing law</h2>
        <p>
          These Terms are governed by the laws of India, without regard to
          conflict-of-law rules. Courts in Mohali / SAS Nagar, Punjab, India
          have exclusive jurisdiction, except that we may seek injunctive relief
          in any appropriate forum.
        </p>

        <h2>18. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{" "}
          <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a> ·{" "}
          <Link href="/contact">Contact us</Link>
        </p>
        <p>{CONTACT.address}</p>
      </article>
    </ContentPage>
  );
}
