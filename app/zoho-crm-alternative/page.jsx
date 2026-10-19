import Link from "next/link";
import CompareLayout from "../components/compare-layout";
import {
  COMPARE_CHECKED,
  COMPARE_SHOTS,
  COMPARE_TRUST,
  TRACKT_FACTS,
} from "../compare-data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/zoho-crm-alternative";

export const metadata = buildMetadata(ROUTE);

const FAQS = [
  {
    q: "Is TracktCRM a good alternative to Zoho CRM?",
    a: "Yes, for small teams that sell on WhatsApp, get leads from ads and portals and want a CRM they can set up themselves. Zoho CRM is a better fit if you need deep customisation, forecasting or other Zoho apps in the same account.",
  },
  {
    q: "Does Zoho CRM have a free plan?",
    a: "Yes. Zoho CRM's Free edition supports up to 3 users. TracktCRM's Free plan is for 1 user and includes a single pipeline, unlimited records, 3 automations and WhatsApp integration.",
  },
  {
    q: "Is TracktCRM cheaper than Zoho CRM?",
    a: "On the pricing pages we checked, TracktCRM Pro is ₹319 per user per month and Zoho CRM Standard is ₹800 per user per month, both billed yearly. The plans include different features, so compare the ones you need.",
  },
  {
    q: "Does Zoho CRM include WhatsApp?",
    a: "Zoho's help page says its WhatsApp Business integration works in the free trial and all paid editions, and its feature list says sending WhatsApp messages needs credits. On TracktCRM, WhatsApp integration is part of the Free plan.",
  },
  {
    q: "Which TracktCRM plans include AI?",
    a: "AI is on Premium and All-in-One, with 1,000 and 3,000 AI credits per month. It covers email reply suggestions, drafting, record summaries and upsell and cross-sell suggestions.",
  },
  {
    q: "How do I move from Zoho CRM to TracktCRM?",
    a: "Export your leads, contacts and deals from Zoho CRM, set up your stages in TracktCRM and use the Import button on the pipeline view. On paid plans our team helps you move your data.",
  },
  {
    q: "Can TracktCRM capture leads from portals like 99acres and IndiaMART?",
    a: "Yes. TracktCRM lists integrations for 99acres, Housing.com, MagicBricks, IndiaMART, Justdial and TradeIndia, so portal leads land in your pipeline with the source attached.",
  },
];

const PAGE = {
  route: ROUTE,
  breadcrumb: "Zoho CRM alternative",
  brand: "Zoho CRM",
  h1: { lead: "Zoho CRM Alternative for Small Teams", highlight: "That Want Less Set-Up" },
  intro:
    "Searching for a Zoho CRM alternative? Zoho CRM is a powerful, highly customisable CRM with a large app suite behind it. TracktCRM is a simpler CRM for small teams whose leads arrive on WhatsApp, ads and lead portals, with WhatsApp included on the free plan. Here is a fair comparison.",
  trust: COMPARE_TRUST,
  hero: {
    src: "/assets/compare/zoho-crm-alternative-hero.webp",
    alt: "TracktCRM vs Zoho CRM comparison of free plan, pricing, WhatsApp, lead ads, lead portals and AI",
  },
  meta: "We are not affiliated with Zoho.",
  glance: {
    title: "TracktCRM vs Zoho CRM at a Glance",
    intro:
      "Free plans, entry prices and the features that matter most to small sales teams, side by side.",
    rows: [
      {
        label: "Free plan",
        other: "Yes. Free edition for up to 3 users. Standard, Professional and Enterprise have a 15-day trial.",
        trackt: TRACKT_FACTS.free,
      },
      { label: "Starting paid price", other: "Standard at ₹800 per user/month, billed annually", trackt: TRACKT_FACTS.price },
      {
        label: "WhatsApp",
        other: "WhatsApp Business integration in the trial and all paid editions. Sending messages uses credits",
        trackt: TRACKT_FACTS.whatsapp,
      },
      {
        label: "Meta and Google lead ads",
        other: "Facebook lead ads through the LeadChain extension, billed separately. Google Ads integration from Professional",
        trackt: TRACKT_FACTS.ads,
      },
      { label: "Lead portals", other: "Not listed on the pricing page. Check Zoho Marketplace", trackt: TRACKT_FACTS.portals },
      { label: "AI features", other: "AI agents listed from Standard, with more AI on higher editions", trackt: TRACKT_FACTS.ai },
      { label: "Onboarding and migration", other: "Migration assistance listed on the Ultimate edition", trackt: TRACKT_FACTS.onboarding },
      {
        label: "Best for",
        other: "Growing and mid-size companies that want deep customisation, forecasting and the wider Zoho suite",
        trackt: TRACKT_FACTS.bestFor,
      },
    ],
    note: (
      <>
        Prices are per user per month as shown on each pricing page. TracktCRM
        bills at company level. See <Link href="/pricing">TracktCRM pricing</Link>{" "}
        for the full plan list.
      </>
    ),
  },
  fit: {
    switchTitle: "Who Should Look for a Zoho CRM Alternative",
    switch: [
      "You are a small team and want a CRM you can set up yourself, without an admin or a long project",
      "Your leads start on WhatsApp and you want those chats in the CRM on the free plan",
      "You run Meta or Google lead ads and want those integrations on your first paid plan",
      "You get enquiries from 99acres, MagicBricks, IndiaMART or Justdial and want them captured automatically",
      "You want a person to help you set up stages and move your data",
    ],
    stayTitle: "Who Should Stay With Zoho CRM",
    stay: [
      "You need a free plan for more than one person. Zoho CRM's Free edition covers up to 3 users, while TracktCRM's covers 1",
      "You depend on deep customisation, forecasting or advanced workflows that an admin manages",
      "You already use Zoho Books, Desk or other Zoho apps and value having them connected",
      "You want AI on the entry paid edition",
    ],
    stayNote:
      "Zoho CRM does a lot. Choose TracktCRM when you want fewer settings and faster lead response, not when you need an enterprise toolkit.",
  },
  differ: {
    title: "Zoho CRM vs TracktCRM: Where They Differ",
    items: [
      {
        title: "Set-up and day-to-day use",
        body: "Zoho CRM is built to be shaped around complex sales processes, with many modules and settings to configure. TracktCRM starts from a ready pipeline with stages you can rename, and focuses on capturing leads, replying fast and following up, so a small team can start without a long set-up project.",
        shot: COMPARE_SHOTS.pipeline,
      },
      {
        title: "WhatsApp included vs credits",
        body: (
          <>
            Zoho&apos;s help page says its WhatsApp Business integration works in
            the trial and all paid editions, and its feature list notes that
            sending WhatsApp messages requires credits. TracktCRM includes
            WhatsApp integration on the Free plan, with two-way chats and
            history on the lead. See how it works on the{" "}
            <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> page.
          </>
        ),
        shot: COMPARE_SHOTS.whatsapp,
      },
      {
        title: "Reports you can read at a glance",
        body: "Zoho CRM offers deep reporting and analytics on its higher editions. TracktCRM keeps a standard sales dashboard on every plan, showing total deals, deals by stage, a deals trend and a customer report, so owners can check the pipeline without building reports first.",
        shot: COMPARE_SHOTS.dashboard,
      },
      {
        title: "Lead capture from ads and portals",
        body: (
          <>
            Zoho CRM connects Facebook lead ads through LeadChain, which needs a
            separate subscription and a paid CRM edition, and lists Google Ads
            integration from Professional. TracktCRM includes Meta Ads and
            Google Ads integrations from Pro, and lists integrations for
            property portals and B2B marketplaces. Our{" "}
            <Link href="/lead-management-software">lead management software</Link>{" "}
            page explains the follow-up flow.
          </>
        ),
      },
      {
        title: "Pricing",
        body: "On the pricing pages we checked, Zoho CRM Standard is ₹800, Professional ₹1,400, Enterprise ₹2,400 and Ultimate ₹2,600 per user per month, billed annually. TracktCRM Pro is ₹319, Premium ₹559 and All-in-One ₹799 per user per month, billed yearly, with savings of up to 20%. Each plan includes different limits, so compare like for like.",
      },
      {
        title: "AI",
        body: "Zoho CRM lists AI agents from Standard. TracktCRM keeps AI on Premium and All-in-One, where it drafts and suggests email replies, summarises records and suggests upsells, with 1,000 or 3,000 AI credits a month.",
      },
    ],
  },
  migration: {
    title: "How to Move From Zoho CRM to TracktCRM",
    intro: "A short overlap keeps new enquiries safe while your team gets used to the new pipeline.",
    steps: [
      { title: "Export from Zoho CRM", body: "Export your leads, contacts, accounts and open deals from Zoho CRM." },
      {
        title: "Set up your stages",
        body: "Create a free TracktCRM account and set up stages that match your Zoho CRM pipeline.",
      },
      { title: "Import your records", body: "Use the Import button on the pipeline view to bring your records in." },
      {
        title: "Connect your channels",
        body: "Connect WhatsApp, and on Pro or above, your Meta and Google ad accounts.",
      },
      { title: "Switch your team", body: "Run both systems on new enquiries for a week, then move everyone over." },
    ],
    note: "On paid plans, our team in Mohali, Punjab helps you map fields and stages so the move is quick.",
  },
  faqTitle: "Questions About Switching From Zoho CRM",
  faqs: FAQS,
  checked: COMPARE_CHECKED,
  sources: {
    links: [
      { label: "Zoho CRM pricing and editions", href: "https://www.zoho.com/crm/zohocrm-pricing.html" },
      {
        label: "Zoho CRM specifications (free edition and 15-day trial)",
        href: "https://help.zoho.com/portal/en/kb/crm/crm-reference/introduction-to-zoho-crm/articles/specifications-zoho-crm",
      },
      {
        label: "Zoho CRM: WhatsApp Business integration",
        href: "https://help.zoho.com/portal/en/kb/crm/connect-with-customers/business-messaging/articles/business-messaging-using-whatsapp-for-business-integration-with-zoho-crm",
      },
      { label: "Zoho CRM feature comparison by edition", href: "https://www.zoho.com/crm/complete-feature-list.html" },
      {
        label: "Zoho LeadChain overview (lead ads extension)",
        href: "https://help.zoho.com/portal/en/kb/zoho-lead-chain/getting-started/articles/lead-chain-an-overview",
      },
    ],
  },
  related: (
    <>
      Still comparing options? Our guide to{" "}
      <Link href="/crm-software">CRM software</Link> covers what to look for in
      any CRM.
    </>
  ),
  cta: {
    title: "Try TracktCRM Free Before You Commit",
    text: "Start on the Free plan with WhatsApp included and test it on real enquiries, or book a demo and we will walk you through your pipeline. No credit card needed.",
  },
};

export default function ZohoCrmAlternativePage() {
  return <CompareLayout page={PAGE} seo={PAGE_SEO[ROUTE]} />;
}
