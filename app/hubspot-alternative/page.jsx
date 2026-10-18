import Link from "next/link";
import CompareLayout from "../components/compare-layout";
import {
  COMPARE_CHECKED,
  COMPARE_SHOTS,
  COMPARE_TRUST,
  TRACKT_FACTS,
} from "../compare-data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/hubspot-alternative";

export const metadata = buildMetadata(ROUTE);

const FAQS = [
  {
    q: "Is TracktCRM a good HubSpot alternative?",
    a: "Yes, for small sales teams that sell on WhatsApp, get leads from ads and website forms and want simple per-user pricing. HubSpot is the better choice if you want marketing, sales and service on one platform with a very large app ecosystem.",
  },
  {
    q: "Does HubSpot have a free CRM?",
    a: "Yes. HubSpot offers free tools for up to 2 users with no credit card. TracktCRM's Free plan is for 1 user and includes a single pipeline, unlimited records, 3 automations and WhatsApp integration.",
  },
  {
    q: "Can I use WhatsApp with HubSpot?",
    a: "HubSpot's help page says connecting WhatsApp to the conversations inbox needs Marketing Hub or Service Hub Professional or Enterprise, with a limit of 1,000 template messages a month. On TracktCRM, WhatsApp integration is part of the Free plan.",
  },
  {
    q: "Does HubSpot charge an onboarding fee?",
    a: "On the pricing page we checked, Sales Hub Professional lists a required one-time onboarding fee of ₹1,25,000, and Enterprise lists ₹2,92,000. TracktCRM includes a dedicated onboarding specialist from the Pro plan.",
  },
  {
    q: "Which TracktCRM plans include AI?",
    a: "AI is on Premium and All-in-One, with 1,000 and 3,000 AI credits per month, covering email reply suggestions, drafting, record summaries and upsell suggestions. HubSpot lists 500, 3,000 and 5,000 credits a month on Starter, Professional and Enterprise.",
  },
  {
    q: "How do I move from HubSpot to TracktCRM?",
    a: "Export your contacts, companies and deals from HubSpot, set up your stages in TracktCRM and use the Import button on the pipeline view. On paid plans our team helps you move your data.",
  },
  {
    q: "Does TracktCRM capture Meta and Google lead ads?",
    a: "Yes. Meta Ads and Google Ads integrations are included from Pro, and LinkedIn and TikTok lead ads from Premium. HubSpot's ads tool can sync Facebook, LinkedIn, TikTok and Google lead ads on all plans.",
  },
];

const PAGE = {
  route: ROUTE,
  breadcrumb: "HubSpot alternative",
  brand: "HubSpot",
  h1: { lead: "HubSpot Alternative for Small Teams", highlight: "That Sell on WhatsApp" },
  intro:
    "Need a HubSpot alternative that fits a small sales team? HubSpot is a complete customer platform with marketing, sales and service tools and a huge ecosystem. TracktCRM is a focused CRM for teams whose leads arrive on WhatsApp, ads and website forms, with WhatsApp on the free plan. Here is a fair comparison.",
  trust: COMPARE_TRUST,
  hero: {
    src: "/assets/compare/hubspot-alternative-hero.webp",
    alt: "TracktCRM vs HubSpot comparison of free plan, pricing, WhatsApp, lead ads, onboarding and AI",
  },
  meta: "We are not affiliated with HubSpot.",
  glance: {
    title: "TracktCRM vs HubSpot at a Glance",
    intro:
      "Free plans, entry prices, WhatsApp and onboarding costs are where small teams feel the difference most.",
    rows: [
      {
        label: "Free plan",
        other: "Yes. Free tools for up to 2 users, no credit card",
        trackt: TRACKT_FACTS.free,
      },
      {
        label: "Starting paid price",
        other: "Sales Hub Starter list price ₹1,670 per seat/month. A lower promotional price was shown when we checked",
        trackt: TRACKT_FACTS.price,
      },
      {
        label: "WhatsApp",
        other: "Inbox connection needs Marketing Hub or Service Hub Professional or Enterprise, with 1,000 template messages a month",
        trackt: TRACKT_FACTS.whatsapp,
      },
      {
        label: "Meta and Google lead ads",
        other: "Ads tool on all plans can sync Facebook, LinkedIn, TikTok and Google lead ads",
        trackt: "Meta Ads and Google Ads integrations from Pro, LinkedIn and TikTok lead ads from Premium",
      },
      { label: "Lead portals", other: "Not listed. Check the HubSpot App Marketplace", trackt: TRACKT_FACTS.portals },
      {
        label: "AI features",
        other: "HubSpot credits on paid plans: 500 on Starter, 3,000 on Professional, 5,000 on Enterprise a month",
        trackt: TRACKT_FACTS.ai,
      },
      {
        label: "Onboarding and migration",
        other: "Required one-time onboarding: ₹1,25,000 on Professional and ₹2,92,000 on Enterprise",
        trackt: TRACKT_FACTS.onboarding,
      },
      {
        label: "Best for",
        other: "Companies that want marketing, sales and service on one platform with a very large app ecosystem",
        trackt: TRACKT_FACTS.bestFor,
      },
    ],
    note: (
      <>
        Prices are per seat or per user per month as shown on each pricing page.
        TracktCRM bills at company level. See{" "}
        <Link href="/pricing">TracktCRM pricing</Link> for every plan.
      </>
    ),
  },
  fit: {
    switchTitle: "Who Should Switch to a HubSpot Alternative",
    switch: [
      "Your customers reply on WhatsApp and you want those chats in the CRM without buying a Professional hub",
      "You are a small team and the jump from Starter to Professional, plus its onboarding fee, is hard to justify",
      "You want Google Ads and website form leads in the pipeline automatically, with the source on every lead",
      "You want one clear per-user price instead of separate hubs, seats and credits",
      "You want a named person to help set up your pipeline and move your data",
    ],
    stayTitle: "Who Should Stay With HubSpot",
    stay: [
      "You run marketing, sales and service from HubSpot and want them on one platform",
      "You need a free CRM for 2 users. HubSpot's free tools cover 2 users, while TracktCRM's Free plan covers 1",
      "You rely on apps from HubSpot's very large ecosystem that TracktCRM does not offer",
      "You want lead ads from Facebook, LinkedIn, TikTok and Google on a free plan",
    ],
    stayNote:
      "HubSpot is an excellent platform. TracktCRM is the better fit when WhatsApp, fast follow-up and a small budget matter more than an all-in-one suite.",
  },
  differ: {
    title: "HubSpot vs TracktCRM: Where They Differ",
    items: [
      {
        title: "WhatsApp without a Professional hub",
        body: (
          <>
            HubSpot&apos;s help page says connecting WhatsApp to the
            conversations inbox needs Marketing Hub or Service Hub Professional
            or Enterprise, with a limit of 1,000 template messages a month.
            TracktCRM includes WhatsApp integration on the Free plan, with chat
            history on each lead. See the{" "}
            <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> page.
          </>
        ),
        shot: COMPARE_SHOTS.whatsapp,
      },
      {
        title: "A pipeline built around follow-up",
        body: "HubSpot covers marketing, sales and service, so there is a lot to learn and configure. TracktCRM keeps the focus on one job: capture each lead, reply fast and follow up until it is won or lost. The pipeline board has Import and Export built in, and Pro adds 5 pipelines and 30 automations.",
        shot: COMPARE_SHOTS.pipeline,
      },
      {
        title: "Lead capture from ads and forms",
        body: (
          <>
            HubSpot is strong here: its ads tool can sync Facebook, LinkedIn,
            TikTok and Google lead ads on all plans. TracktCRM includes Meta
            Ads and Google Ads from Pro, LinkedIn and TikTok from Premium, and
            a custom website form from Pro. Our{" "}
            <Link href="/lead-management-software">lead management software</Link>{" "}
            page shows the follow-up flow.
          </>
        ),
      },
      {
        title: "Pricing and onboarding fees",
        body: "On the pricing page we checked, Sales Hub Starter lists ₹1,670 per seat a month and Professional ₹8,330 per seat a month plus a required ₹1,25,000 onboarding fee. TracktCRM Pro is ₹319, Premium ₹559 and All-in-One ₹799 per user a month billed yearly, and Pro includes a dedicated onboarding specialist.",
      },
      {
        title: "AI and credits",
        body: "Both products meter AI with credits. HubSpot lists 500 credits on Starter, 3,000 on Professional and 5,000 on Enterprise each month. TracktCRM keeps AI on Premium and All-in-One, with 1,000 or 3,000 credits for reply suggestions, drafting, record summaries and upsell ideas.",
      },
      {
        title: "Platform breadth",
        body: "HubSpot brings marketing, sales and service together with a very large app ecosystem, which suits companies that want one platform for everything. TracktCRM is deliberately narrower, focused on WhatsApp, Gmail, Google Calendar, Google Ads, Google Sheets and a custom website form.",
      },
    ],
  },
  migration: {
    title: "How to Move From HubSpot to TracktCRM",
    intro: "Keep HubSpot running while you test TracktCRM on new enquiries, then switch when your team is ready.",
    steps: [
      { title: "Export from HubSpot", body: "Export your contacts, companies and open deals from HubSpot." },
      {
        title: "Set up your stages",
        body: "Create a free TracktCRM account and set up stages that match your HubSpot deal pipeline.",
      },
      { title: "Import your data", body: "Use the Import button on the pipeline view to bring your records in." },
      {
        title: "Connect your channels",
        body: "Connect WhatsApp, and on Pro or above, your Meta and Google ad accounts.",
      },
      { title: "Move your team", body: "Run both tools on live enquiries for a week, then move everyone over." },
    ],
    note: "On paid plans, our team in Mohali, Punjab helps you map stages and fields so nothing gets lost in the move.",
  },
  faqTitle: "Questions About Switching From HubSpot",
  faqs: FAQS,
  checked: COMPARE_CHECKED,
  sources: {
    links: [
      { label: "HubSpot Sales Hub pricing", href: "https://www.hubspot.com/pricing/sales" },
      {
        label: "HubSpot: connect WhatsApp to the conversations inbox",
        href: "https://knowledge.hubspot.com/inbox/connect-whatsapp-to-the-conversations-inbox",
      },
      {
        label: "HubSpot: connect and set up your ad accounts",
        href: "https://knowledge.hubspot.com/ads/connect-and-set-up-your-ad-accounts-in-hubspot",
      },
      {
        label: "HubSpot: sync leads from Facebook and LinkedIn ads",
        href: "https://knowledge.hubspot.com/ads/sync-leads-from-your-facebook-page-or-linkedin-ads-account-to-hubspot",
      },
    ],
  },
  related: (
    <>
      Weighing up your options? Our guide to{" "}
      <Link href="/crm-software">CRM software</Link> explains what a growing
      team needs.
    </>
  ),
  cta: {
    title: "Try TracktCRM Free Alongside HubSpot",
    text: "Start on the Free plan with WhatsApp included and test it on real enquiries, or book a demo and we will walk you through your pipeline. No credit card needed.",
  },
};

export default function HubspotAlternativePage() {
  return <CompareLayout page={PAGE} seo={PAGE_SEO[ROUTE]} />;
}
