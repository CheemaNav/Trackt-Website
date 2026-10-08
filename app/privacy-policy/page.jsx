import Link from "next/link";
import ContentPage from "../components/content-page";
import { APP_BASE_URL, CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/tracktcrm-og-image.jpg`;
const LAST_UPDATED = "8 October 2026";

/*
 * Compliance switches — only set to true once the feature is live in production.
 * Google reviewers compare this page with the app, so every sentence must be true.
 */
const TOKENS_ENCRYPTED_AT_REST = false; // true after Gmail + Calendar tokens are encrypted (Cursor Parts 2–3)
const GMAIL_DELETION_ON_DISCONNECT = false; // true after disconnect deletes synced Gmail data within 30 days (Part 3)
const AI_PROVIDER = null; // e.g. "OpenAI" if any Gmail/Calendar content is sent to an AI model; keep null if none

const GOOGLE_POLICY_URL =
  "https://developers.google.com/terms/api-services-user-data-policy";

export const metadata = {
  title: {
    absolute: "Privacy Policy | TracktCRM",
  },
  description:
    "How TracktCRM collects, uses, stores, shares and deletes information for our website and CRM — including Google user data.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    locale: "en_IN",
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    title: "Privacy Policy | TracktCRM",
    description:
      "TracktCRM privacy practices for website visitors, CRM customers, and Google integrations.",
    images: [
      { url: ogImage, width: 1200, height: 630, alt: "TracktCRM privacy" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <ContentPage
      badge="LEGAL"
      title="Privacy Policy"
      lead={`${SITE_NAME} · Last updated: ${LAST_UPDATED}. This Privacy Policy applies to the TracktCRM application at ${APP_BASE_URL} and the website ${SITE_URL}. It explains how we collect, use, store, share, and delete information, including Google user data.`}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ]}
    >
      <article className="prose-block">
        <h2>1. Google user data we access</h2>
        <p>
          Each TracktCRM user can connect their own Google account. We request
          only the access needed for the features that user turns on:
        </p>
        <ul>
          <li>
            <strong>Basic profile (openid, email, profile):</strong> to identify
            the connected Google account and show the user which email address
            is connected.
          </li>
          <li>
            <strong>Read Gmail (gmail.readonly):</strong> to show the
            user&apos;s email conversations with their leads and contacts in
            Sales Inbox and on each lead&apos;s Email tab, and to link them to
            the right CRM record. We do not modify or delete emails in Gmail.
          </li>
          <li>
            <strong>Send Gmail (gmail.send):</strong> to send emails the user
            writes in TracktCRM from the user&apos;s own Gmail address, only
            when the user clicks Send or when an automation the user created
            sends it.
          </li>
          <li>
            <strong>Google Calendar events (calendar.events):</strong> to
            create, update and show meetings the user schedules from TracktCRM
            on their primary calendar, including Google Meet links and
            invitations to the lead.
          </li>
        </ul>
        <p>
          We do not access Google data unrelated to these features. Access is
          limited to the permissions the user grants on Google&apos;s OAuth
          consent screen, and the user can disconnect at any time.
        </p>

        <h2>2. How we use Google user data</h2>
        <p>
          Google user data is used only to provide or improve user-facing
          TracktCRM features requested by that user:
        </p>
        <ul>
          <li>Show the connection status of the user&apos;s Google account.</li>
          <li>
            Show, sync and link email threads with leads, contacts and deals.
          </li>
          <li>Send emails the user writes in TracktCRM.</li>
          <li>
            Create and show calendar events and Google Meet links for leads and
            deals.
          </li>
        </ul>
        <p>
          <strong>Limited Use:</strong> TracktCRM&apos;s use and transfer to
          any other app of information received from Google APIs will adhere
          to the{" "}
          <a href={GOOGLE_POLICY_URL} target="_blank" rel="noopener noreferrer">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. We do not:
        </p>
        <ul>
          <li>sell Google user data;</li>
          <li>
            use Google user data for advertising, retargeting, or personalized
            ads;
          </li>
          <li>
            use Google user data to determine credit-worthiness or for lending
            purposes;
          </li>
          <li>
            use Google user data to develop, improve, or train generalized or
            non-personalized AI / ML models;
          </li>
          <li>
            transfer Google user data to data brokers or information resellers.
          </li>
        </ul>
        {AI_PROVIDER ? (
          <p>
            If a user chooses an AI feature (for example, an AI reply
            suggestion), only the content needed for that request is sent to
            our AI provider, {AI_PROVIDER}, to generate the result for that
            user. The provider processes it under a contract that does not
            allow it to use this data to train its models.
          </p>
        ) : (
          <p>Gmail and Google Calendar content is not sent to any AI model.</p>
        )}

        <h2>3. How we store Google user data</h2>
        <ul>
          <li>
            OAuth access and refresh tokens are stored on TracktCRM&apos;s
            servers so the integration keeps working until the user disconnects
            it.
            {TOKENS_ENCRYPTED_AT_REST ? " Tokens are encrypted at rest." : ""}
          </li>
          <li>
            We store connection details (connected Google email, token expiry)
            and IDs needed for the feature, such as Gmail thread and message IDs
            and calendar event IDs.
          </li>
          <li>
            Email messages synced to show the Sales Inbox and lead email history
            are stored in the customer&apos;s TracktCRM workspace.
          </li>
          <li>
            Meeting titles, times, attendees and Google Meet links are stored on
            the related CRM record.
          </li>
          <li>
            Data is stored on our cloud hosting infrastructure and transmitted
            only over HTTPS/TLS.
          </li>
        </ul>

        <h2>4. How we share, transfer, or disclose Google user data</h2>
        <p>
          We do not sell Google user data. We do not share it with advertisers.
          Google user data may be disclosed only:
        </p>
        <ul>
          <li>to Google, to provide the requested feature;</li>
          <li>
            to cloud hosting and infrastructure providers who process data
            solely to operate TracktCRM, under confidentiality obligations;
          </li>
          {AI_PROVIDER ? (
            <li>
              to our AI provider, {AI_PROVIDER}, only when a user chooses an AI
              feature, as described in section 2;
            </li>
          ) : null}
          <li>
            to other users inside the same customer&apos;s TracktCRM workspace,
            according to that workspace&apos;s roles and permissions;
          </li>
          <li>if required by law, or to protect security and prevent abuse.</li>
        </ul>
        <p>
          We do not transfer Google user data to third parties for advertising,
          data brokerage, lending, or AI model training.
        </p>

        <h2>5. Data protection</h2>
        <ul>
          <li>HTTPS/TLS encryption in transit.</li>
          <li>
            Access controls, so only authorized users of the same workspace can
            see that workspace&apos;s data.
          </li>
          <li>
            {TOKENS_ENCRYPTED_AT_REST
              ? "OAuth tokens are encrypted at rest and stored with restricted access on our servers."
              : "OAuth tokens are stored with restricted access on our servers."}
          </li>
          <li>
            People at TracktCRM do not read a user&apos;s emails unless the user
            asks us for support and gives permission, it is needed for security
            or abuse investigation, or the law requires it.
          </li>
        </ul>

        <h2>6. Retention and deletion</h2>
        <ul>
          <li>
            Google connection data is kept while the integration stays connected
            and the TracktCRM account is active.
          </li>
          <li>
            A user can disconnect Gmail or Google Calendar at any time from
            TracktCRM → Integrations. Disconnecting revokes TracktCRM&apos;s
            access.
          </li>
          <li>
            {GMAIL_DELETION_ON_DISCONNECT
              ? "After a disconnect or a deletion request, we delete stored Google tokens, connection records and synced Gmail message data within 30 days, unless a longer period is required by law."
              : "After a disconnect or a deletion request, we delete or anonymize stored Google tokens and Google connection records within 30 days, unless a longer period is required by law."}
          </li>
          <li>
            Users can also remove TracktCRM&apos;s access at any time at{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              myaccount.google.com/permissions
            </a>
            .
          </li>
          <li>
            Leads, contacts and deals a user created in TracktCRM remain in the
            workspace until the customer deletes them or closes the account,
            because they are business records of that customer.
          </li>
          <li>
            To request deletion, email{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </li>
        </ul>

        <h2>7. Other information we collect</h2>
        <p>Independent of Google, TracktCRM may process:</p>
        <ul>
          <li>
            <strong>Account details:</strong> name, email, phone, company.
          </li>
          <li>
            <strong>CRM data:</strong> leads, deals, pipeline stages, tasks,
            notes, files, and communications you store in the product.
          </li>
          <li>
            <strong>Channels you connect:</strong> WhatsApp Business messaging
            metadata and message content synced into your workspace; Meta and
            Google Ads lead form data you authorize; spreadsheet rows you choose
            to import.
          </li>
          <li>
            <strong>Website forms:</strong> name, email, phone, company and
            message when you contact us or book a demo.
          </li>
          <li>
            <strong>Technical data:</strong> IP address, browser, device, and
            basic analytics (for example page views) to operate and improve the
            service.
          </li>
        </ul>
        <p>
          We use this information to provide the CRM, respond to enquiries, send
          service messages, improve reliability and security, and meet legal
          obligations (including India&apos;s Digital Personal Data Protection
          Act where applicable). We do not sell personal data.
        </p>

        <h2>8. Changes</h2>
        <p>
          If we change how we use Google user data or other personal data, we
          will update this page and notify users by email or in-app notice
          before the change takes effect where required. Continued use after
          changes means you accept the updated policy. See also our{" "}
          <Link href="/terms">Terms &amp; Conditions</Link>.
        </p>

        <h2>9. Contact</h2>
        <p>
          <strong>{SITE_NAME}</strong>
          <br />
          Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <br />
          Phone: <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
          <br />
          Address: {CONTACT.address}
          <br />
          Support hours: {CONTACT.supportHours}
        </p>
        <p>
          Questions? <Link href="/contact">Contact us</Link> or{" "}
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            chat on WhatsApp
          </a>
          .
        </p>
      </article>
    </ContentPage>
  );
}
