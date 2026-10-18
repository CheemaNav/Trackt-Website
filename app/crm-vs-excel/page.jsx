import Link from "next/link";
import CompareLayout from "../components/compare-layout";
import {
  COMPARE_CHECKED,
  COMPARE_SHOTS,
  COMPARE_TRUST,
  TRACKT_FACTS,
} from "../compare-data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/crm-vs-excel";

export const metadata = buildMetadata(ROUTE);

const FAQS = [
  {
    q: "Is a CRM better than Excel for managing leads?",
    a: "For a handful of leads handled by one person, a spreadsheet works. Once leads arrive from several channels and more than one person follows up, a CRM is better because it captures leads automatically, reminds you to follow up and shows who owns each lead.",
  },
  {
    q: "Can I use Excel as a CRM?",
    a: "You can keep a basic lead list in Excel, and many small businesses start that way. What you miss are automatic lead capture, follow-up reminders, WhatsApp history on each lead and a live pipeline view, which is why most growing teams move to a CRM.",
  },
  {
    q: "When should a small business switch from Excel to a CRM?",
    a: "Switch when leads start slipping: follow-ups are missed, two people call the same lead, enquiries from ads or portals are copied in by hand, or nobody can say how many deals are open without building a report.",
  },
  {
    q: "Can I import my Excel sheet into TracktCRM?",
    a: "Yes. Clean up your sheet so each row is one lead with the same columns, then use the Import button on the pipeline view. On paid plans our team helps you map your columns and move your data.",
  },
  {
    q: "Is there a free CRM I can use instead of Excel?",
    a: "Yes. TracktCRM has a Free plan for 1 user with a single pipeline, unlimited records, 3 automations and WhatsApp integration. No credit card is needed.",
  },
  {
    q: "Can I keep using Google Sheets with TracktCRM?",
    a: "Yes. The Pro plan and above include a Google Sheets integration, so you can keep a sheet in step with your CRM for reports or for people who still work in spreadsheets.",
  },
  {
    q: "Does a CRM replace Excel completely?",
    a: "Not always. Many teams keep Excel for one-off analysis, budgets and custom models, and use a CRM for day-to-day lead capture, follow-up and pipeline tracking.",
  },
];

const PAGE = {
  route: ROUTE,
  breadcrumb: "CRM vs Excel",
  brand: "Excel spreadsheet",
  badge: "COMPARE",
  h1: { lead: "CRM vs Excel:", highlight: "When Your Team Should Switch From Spreadsheets" },
  intro:
    "CRM vs Excel is a question most small teams face once leads start piling up. A spreadsheet is free, flexible and familiar. A CRM captures leads for you, reminds you to follow up and shows the whole pipeline at a glance. Here is how they compare, and the signs it is time to switch.",
  trust: COMPARE_TRUST,
  hero: {
    src: "/assets/compare/crm-vs-excel-hero.webp",
    alt: "TracktCRM vs spreadsheets comparison of lead capture, follow-up reminders, WhatsApp and reporting",
  },
  meta: "Microsoft and Excel are trademarks of Microsoft. We are not affiliated with Microsoft.",
  glance: {
    title: "CRM vs Excel at a Glance",
    intro:
      "The table compares a typical sales spreadsheet with TracktCRM on the jobs a sales team does every day.",
    rows: [
      {
        label: "Lead capture",
        other: "Leads are typed or pasted in by hand, often from emails, chats and portal downloads",
        trackt: "Leads arrive from WhatsApp, website forms and portals such as 99acres and IndiaMART, plus Meta and Google ads from Pro",
      },
      {
        label: "Follow-up reminders",
        other: "No reminders unless someone builds them. Follow-ups depend on memory",
        trackt: "Follow-up reminders and tasks, with automations: 3 on Free and 30 on Pro",
      },
      {
        label: "Team access",
        other: "Co-authoring needs Microsoft 365 and a file on OneDrive or SharePoint. Anyone with edit access can change any row",
        trackt: "Each person has their own login and every lead has an owner. Free covers 1 user and paid plans add users",
      },
      {
        label: "WhatsApp",
        other: "Chats stay on each person's phone and are summarised by hand, if at all",
        trackt: TRACKT_FACTS.whatsapp,
      },
      {
        label: "Reporting",
        other: "Charts and pivot tables you build and update yourself",
        trackt: "A standard sales dashboard with deals by stage, trends and a customer report",
      },
      {
        label: "Data safety",
        other: "Copies get emailed and downloaded. Version history depends on where the file is stored",
        trackt: "One shared record for the whole team, with Import and Export when you need a file",
      },
      {
        label: "Cost",
        other: "Often already paid for as part of Microsoft 365",
        trackt: "Free plan for 1 user. Pro at ₹319 per user/month billed yearly",
      },
    ],
    note: (
      <>
        TracktCRM prices are per user per month and shown in your local
        currency. See <Link href="/pricing">TracktCRM pricing</Link> for every
        plan.
      </>
    ),
  },
  fit: {
    switchKicker: "CHECKLIST",
    switchTitle: "Signs You've Outgrown Excel",
    switch: [
      "A lead went cold because nobody remembered to follow up",
      "Two people called or messaged the same lead without knowing",
      "You copy leads from ads, portals or WhatsApp into the sheet by hand",
      "There are several versions of the sheet and nobody is sure which is current",
      "You cannot see how many deals are open, or at which stage, without building a report",
      "A salesperson left and their leads and chat history went with them",
    ],
    stayKicker: "FAIR POINT",
    stayTitle: "What Excel Still Does Well",
    stay: [
      "One-off analysis, budgets and custom financial models",
      "Very small lists that one person updates now and then",
      "Ad hoc calculations and pivot tables on exported data",
      "Sharing a quick table with someone outside your team",
    ],
    stayNote:
      "You do not have to give up spreadsheets. Keep Excel for analysis and use a CRM for the daily work of capturing and following up leads.",
  },
  differ: {
    title: "Spreadsheet vs CRM: Where They Differ",
    intro:
      "A spreadsheet stores rows. A CRM runs the process around them: capturing each lead, prompting the next step and keeping every conversation in one place.",
    items: [
      {
        title: "A live pipeline instead of rows",
        body: "In a sheet, the stage of a deal is just another column that someone has to update. In TracktCRM, every lead is a card on a pipeline board that you drag from stage to stage, so the whole team sees what is new, won or lost at a glance. Import and Export sit on the board when you need a file.",
        shot: COMPARE_SHOTS.pipeline,
      },
      {
        title: "Conversations saved on the lead",
        body: (
          <>
            In a spreadsheet, WhatsApp chats live on someone&apos;s phone. In
            TracktCRM, WhatsApp integration is part of the Free plan, so every
            message is saved on the lead and anyone who picks it up sees the full
            history. See the <Link href="/features/whatsapp-crm">WhatsApp CRM</Link>{" "}
            page.
          </>
        ),
        shot: COMPARE_SHOTS.whatsapp,
      },
      {
        title: "Reports that update themselves",
        body: "Excel charts are only as current as the last person who updated the sheet. TracktCRM's sales dashboard shows total deals, deals by stage and a deals trend from the same data your team works in every day, so there is nothing to rebuild before a review.",
        shot: COMPARE_SHOTS.dashboard,
      },
      {
        title: "Leads captured automatically",
        body: (
          <>
            Instead of copying leads in, TracktCRM pulls them from WhatsApp,
            custom website forms and portals such as 99acres, MagicBricks,
            IndiaMART and Justdial, with Meta and Google ads from Pro. Our{" "}
            <Link href="/lead-management-software">lead management software</Link>{" "}
            page shows the full flow.
          </>
        ),
      },
      {
        title: "Follow-ups that do not rely on memory",
        body: "Reminders and tasks prompt the lead owner when a follow-up is due, and automations handle routine steps. The Free plan has 3 automations, Pro has 30 and Premium has 50.",
      },
    ],
  },
  migration: {
    title: "How to Move From Excel to TracktCRM",
    intro: "The move is much easier when your sheet has clean, consistent columns before you import.",
    steps: [
      {
        title: "Clean your sheet",
        body: "Make each row one lead, use the same columns throughout and remove duplicates.",
      },
      {
        title: "Set up your stages",
        body: "Create a free TracktCRM account and set up stages that match the status column in your sheet.",
      },
      { title: "Import your leads", body: "Use the Import button on the pipeline view to bring your rows in." },
      {
        title: "Connect your sources",
        body: "Connect WhatsApp and your portals, and on Pro or above, your Meta and Google ad accounts.",
      },
      {
        title: "Retire the sheet",
        body: "Add new leads only in TracktCRM for a week, then keep the old sheet as a read-only archive.",
      },
    ],
    note: "On paid plans, our team in Mohali, Punjab helps you map your columns so your history comes across cleanly.",
  },
  faqTitle: "Questions About Moving From Excel to a CRM",
  faqs: FAQS,
  checked: COMPARE_CHECKED,
  sources: {
    intro: (
      <>
        Excel co-authoring and version history details checked on{" "}
        <time dateTime={COMPARE_CHECKED.iso}>{COMPARE_CHECKED.label}</time> from
        Microsoft Support.
      </>
    ),
    links: [
      {
        label: "Microsoft Support: collaborate on Excel workbooks at the same time with co-authoring",
        href: "https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104",
      },
    ],
  },
  related: (
    <>
      New to CRMs? Our guide to <Link href="/crm-software">CRM software</Link>{" "}
      explains what to look for.
    </>
  ),
  cta: {
    title: "Move Your Lead Sheet Into TracktCRM",
    text: "Start on the Free plan with WhatsApp included and import your spreadsheet, or book a demo and we will help you plan the move. No credit card needed.",
  },
};

export default function CrmVsExcelPage() {
  return <CompareLayout page={PAGE} seo={PAGE_SEO[ROUTE]} />;
}
