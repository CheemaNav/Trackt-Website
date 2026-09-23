import Link from "next/link";
import ContentPage from "../components/content-page";
import { APP_BASE_URL, CONTACT, SITE_NAME, SITE_URL } from "../site";

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;
const LAST_UPDATED = "23 September 2026";

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
          When a user connects a Google account from TracktCRM, we access only
          the data the user authorizes for that integration:
        </p>
        <ul>
          <li>
            <strong>Google account profile:</strong> name, email address, and
            profile identifier, to show which Google account is connected.
          </li>
          <li>
            <strong>Gmail:</strong> send and receive email, and sync threads
            linked to CRM leads or deals, when the user enables email from
            TracktCRM.
          </li>
          <li>
            <strong>Google Calendar:</strong> create and update calendar events
            linked to CRM meetings, site visits, or follow-ups.
          </li>
          <li>
            <strong>Google Meet (when enabled):</strong> create and read meeting
            spaces, meeting links, and meeting metadata tied to CRM records.
          </li>
          <li>
            <strong>Google Drive (when enabled):</strong> list metadata for
            files or folders the user selects, and upload or attach files the
            user chooses for a CRM record. We do not request access to the
            user&apos;s entire Drive.
          </li>
          <li>
            <strong>Google Sheets / Forms (when enabled):</strong> read or write
            spreadsheet data or form responses the user selects, to export CRM
            records or import leads/contacts.
          </li>
        </ul>
        <p>
          We do not access Google data unrelated to these CRM features. Scope
          is limited to the permissions the user grants in Google&apos;s OAuth
          consent screen.
        </p>

        <h2>2. How we use Google user data</h2>
        <p>
          Google user data is used only to provide or improve user-facing
          TracktCRM features requested by that user:
        </p>
        <ul>
          <li>Connect the user&apos;s Google account and display connection status.</li>
          <li>
            Send or sync Gmail and schedule Calendar / Meet events from leads
            and deals.
          </li>
          <li>Attach selected Drive files to CRM records.</li>
          <li>Export or sync selected CRM data with Google Sheets.</li>
          <li>Import selected Google Form responses as leads.</li>
          <li>
            Show meeting links, metadata, and optional AI summaries inside the
            user&apos;s own CRM workspace.
          </li>
        </ul>
        <p>
          <strong>Limited Use:</strong> TracktCRM&apos;s use and transfer of
          information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <li>use Google user data to determine credit-worthiness;</li>
          <li>
            use Google Workspace APIs to develop, improve, or train generalized
            or non-personalized AI / ML models;
          </li>
          <li>
            transfer Google user data to data brokers or information resellers.
          </li>
        </ul>
        <p>
          Any AI summary of a meeting or conversation is generated only to
          provide that feature to the same customer workspace. It is not used to
          train models.
        </p>

        <h2>3. How we store Google user data</h2>
        <ul>
          <li>
            OAuth access and refresh tokens are stored on TracktCRM&apos;s
            servers so the integration can keep working until the user
            disconnects it.
          </li>
          <li>
            We store connection metadata (Google account name/email, token
            expiry) and IDs needed for the feature (calendar event IDs, Meet
            space IDs, selected Drive file/folder IDs, spreadsheet IDs, form
            IDs).
          </li>
          <li>
            Imported Form responses and selected Sheet rows are stored as CRM
            lead/contact records.
          </li>
          <li>
            Meeting titles, times, links, and optional recording/transcript
            references may be stored on the related CRM deal.
          </li>
          <li>
            Data is stored on our cloud hosting infrastructure and transmitted
            over HTTPS/TLS.
          </li>
        </ul>

        <h2>4. How we share, transfer, or disclose Google user data</h2>
        <p>
          We do not sell Google user data. We do not share it with advertisers.
          Google user data may be disclosed only:
        </p>
        <ul>
          <li>to Google, to provide the requested API feature;</li>
          <li>
            to cloud hosting and infrastructure providers who process data
            solely to operate TracktCRM, under confidentiality obligations;
          </li>
          <li>
            to other users inside the same customer&apos;s TracktCRM workspace,
            according to that workspace&apos;s roles and permissions;
          </li>
          <li>
            if required by law, or to protect security and prevent abuse.
          </li>
        </ul>
        <p>
          We do not transfer Google user data to third parties for advertising,
          data brokerage, lending, or AI model training.
        </p>

        <h2>5. Data protection</h2>
        <ul>
          <li>HTTPS/TLS encryption in transit.</li>
          <li>
            Access controls so only authorized workspace users and systems can
            use connected Google data.
          </li>
          <li>
            OAuth tokens are stored with restricted access on our servers.
          </li>
          <li>
            Human access to Google user data is limited to cases needed to
            provide the service the user requested, fix issues, meet legal
            obligations, or protect against security threats.
          </li>
        </ul>

        <h2>6. Retention and deletion</h2>
        <ul>
          <li>
            Google connection data is kept while the integration stays connected
            and the TracktCRM account is active.
          </li>
          <li>
            The user can disconnect Google (Gmail, Calendar, Meet, Drive,
            Sheets, or Forms) at any time from TracktCRM → Account Setup /
            Integrations. Disconnecting revokes TracktCRM&apos;s access.
          </li>
          <li>
            After disconnect or a deletion request, we delete or anonymize
            stored Google tokens and Google connection records within 30 days,
            unless a longer period is required by law.
          </li>
          <li>
            CRM records created from imported Form/Sheet data remain in the
            workspace until the customer deletes those leads or closes the
            account, because they have become business records of that customer.
          </li>
          <li>
            To request deletion, email{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </li>
        </ul>

        <h2>7. Other information we collect</h2>
        <p>
          Independent of Google, TracktCRM may process:
        </p>
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
            metadata and message content synced into your workspace; Meta /
            Google Ads lead form data you authorize.
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
          Email:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <br />
          Phone:{" "}
          <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
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
