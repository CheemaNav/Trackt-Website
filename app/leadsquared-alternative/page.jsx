import Link from "next/link";
import CompareLayout from "../components/compare-layout";
import {
  COMPARE_CHECKED,
  COMPARE_SHOTS,
  COMPARE_TRUST,
  TRACKT_FACTS,
} from "../compare-data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/leadsquared-alternative";

export const metadata = buildMetadata(ROUTE);

const FAQS = [
  {
    q: "Is TracktCRM a good LeadSquared alternative?",
    a: "Yes, for small and growing teams that want to sign up themselves, start on a free plan and work leads from WhatsApp, ads and portals. LeadSquared suits larger, high-volume sales teams that want deep process customisation and a guided rollout.",
  },
  {
    q: "Does LeadSquared have a free plan?",
    a: "No free plan was shown on LeadSquared's Sales CRM pricing page when we checked. Its Sales Pro and Sales Super plans are bought through its sales team. TracktCRM has a Free plan for 1 user and self-serve sign-up.",
  },
  {
    q: "How much does LeadSquared cost compared with TracktCRM?",
    a: "On the pricing pages we checked, LeadSquared Sales Pro is ₹2,500 and Sales Super ₹5,000 per user per month. TracktCRM Pro is ₹319, Premium ₹559 and All-in-One ₹799 per user per month, billed yearly.",
  },
  {
    q: "Does LeadSquared support WhatsApp?",
    a: "Yes. LeadSquared offers a WhatsApp Business Messaging Connector that works with a solution provider or the WhatsApp Cloud API. On TracktCRM, WhatsApp integration is part of the Free plan.",
  },
  {
    q: "Can TracktCRM capture IndiaMART and Justdial leads?",
    a: "Yes. TracktCRM lists integrations for IndiaMART and Justdial, along with 99acres, Housing.com, MagicBricks and TradeIndia. LeadSquared has an IndiaMART connector and a Justdial connector that its help page describes as a paid feature.",
  },
  {
    q: "How do I move from LeadSquared to TracktCRM?",
    a: "Export your leads and opportunities from LeadSquared, set up your stages in TracktCRM and use the Import button on the pipeline view. On paid plans our team helps you move your data.",
  },
  {
    q: "Which TracktCRM plans include AI?",
    a: "AI is on Premium and All-in-One, with 1,000 and 3,000 AI credits per month, covering email reply suggestions, drafting, record summaries and upsell suggestions.",
  },
];

const PAGE = {
  route: ROUTE,
  breadcrumb: "LeadSquared alternative",
  brand: "LeadSquared",
  h1: { lead: "LeadSquared Alternative for Small Teams", highlight: "That Want to Start Today" },
  intro:
    "Looking for a LeadSquared alternative you can set up yourself? LeadSquared is a powerful sales platform for large, high-volume teams, usually rolled out with its sales team. TracktCRM is a self-serve CRM for small and growing teams, with a free plan and WhatsApp included. Here is a fair comparison.",
  trust: COMPARE_TRUST,
  hero: {
    src: "/assets/compare/leadsquared-alternative-hero.webp",
    alt: "TracktCRM vs LeadSquared comparison of free plan, pricing, WhatsApp, lead ads, lead portals and onboarding",
  },
  meta: "We are not affiliated with LeadSquared.",
  glance: {
    title: "TracktCRM vs LeadSquared at a Glance",
    intro:
      "The biggest gaps are how you buy, what it costs per user and how quickly a small team can get started.",
    rows: [
      { label: "Free plan", other: "No free plan shown on the Sales CRM pricing page", trackt: TRACKT_FACTS.free },
      {
        label: "Starting paid price",
        other: "Sales Pro at ₹2,500 per user/month, bought through the sales team",
        trackt: TRACKT_FACTS.price,
      },
      {
        label: "WhatsApp",
        other: "WhatsApp Business Messaging Connector, used with a solution provider or the WhatsApp Cloud API",
        trackt: TRACKT_FACTS.whatsapp,
      },
      {
        label: "Meta and Google lead ads",
        other: "Facebook and Instagram Lead Ads connector from its Apps Marketplace",
        trackt: TRACKT_FACTS.ads,
      },
      {
        label: "Lead portals",
        other: "IndiaMART connector. Justdial connector is a paid feature enabled by the account manager",
        trackt: TRACKT_FACTS.portals,
      },
      { label: "AI features", other: "Check LeadSquared's site for AI features by plan", trackt: TRACKT_FACTS.ai },
      {
        label: "Onboarding and migration",
        other: "Business process mapping, migration and onboarding services listed",
        trackt: TRACKT_FACTS.onboarding,
      },
      {
        label: "Best for",
        other: "Larger, high-volume sales teams that need deep process customisation and a sales-led rollout",
        trackt: TRACKT_FACTS.bestFor,
      },
    ],
    note: (
      <>
        Prices are per user per month as shown on each pricing page. TracktCRM
        bills at company level. See <Link href="/pricing">TracktCRM pricing</Link>{" "}
        for every plan.
      </>
    ),
  },
  fit: {
    switchTitle: "Who Should Switch to a LeadSquared Alternative",
    switch: [
      "You are a small team and want to sign up and start today, without a sales call first",
      "You want a free plan to test with real leads before you pay",
      "You want WhatsApp ready on day one, without choosing and contracting a solution provider",
      "You get leads from IndiaMART, Justdial, 99acres or MagicBricks and want them captured on a simple plan",
      "Per-user pricing in the thousands is more than your team needs right now",
    ],
    stayTitle: "Who Should Stay With LeadSquared",
    stay: [
      "You run a large, high-volume sales team, for example in field sales, financial services or education",
      "You need deep process customisation mapped by a dedicated team",
      "You already pay for a guided rollout and your processes are built around it",
      "You need connectors from LeadSquared's Apps Marketplace that TracktCRM does not list",
    ],
    stayNote:
      "LeadSquared is built for scale. TracktCRM fits teams that want to move fast with fewer settings and a lower cost per user.",
  },
  differ: {
    title: "LeadSquared vs TracktCRM: Where They Differ",
    items: [
      {
        title: "Self-serve sign-up vs a sales-led rollout",
        body: "LeadSquared's Sales CRM plans are bought through its sales team, which suits companies that want process mapping and a guided rollout. With TracktCRM you can create a free account and set up your own pipeline today. From Pro, a dedicated onboarding specialist helps you set up stages, automations and integrations.",
        shot: COMPARE_SHOTS.pipeline,
      },
      {
        title: "WhatsApp included vs a connector",
        body: (
          <>
            LeadSquared connects WhatsApp through its WhatsApp Business
            Messaging Connector, working with a solution provider such as Gupshup
            or Wati, or the WhatsApp Cloud API. TracktCRM includes WhatsApp
            integration on the Free plan, with chats saved on each lead. See the{" "}
            <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> page.
          </>
        ),
        shot: COMPARE_SHOTS.whatsapp,
      },
      {
        title: "Lead capture from ads and portals",
        body: (
          <>
            Both tools capture Facebook and Instagram lead ads and IndiaMART
            enquiries. LeadSquared&apos;s Justdial connector is a paid feature
            switched on by its account manager. TracktCRM lists Justdial,
            99acres, Housing.com, MagicBricks and TradeIndia integrations, plus
            Google Ads from Pro. Our{" "}
            <Link href="/lead-management-software">lead management software</Link>{" "}
            page shows the follow-up flow.
          </>
        ),
      },
      {
        title: "Pricing",
        body: "On the pricing pages we checked, LeadSquared Sales Pro is ₹2,500 and Sales Super ₹5,000 per user a month. TracktCRM has a Free plan for 1 user, then Pro at ₹319, Premium at ₹559 and All-in-One at ₹799 per user a month billed yearly, with no forced contracts.",
      },
      {
        title: "Depth vs simplicity",
        body: "LeadSquared offers deep process customisation for large teams with complex workflows. TracktCRM keeps a simpler set-up: a visual pipeline, automations (30 on Pro, 50 on Premium), a standard sales dashboard and AI on Premium and All-in-One, so a small team can run it without an admin.",
      },
    ],
  },
  migration: {
    title: "How to Move From LeadSquared to TracktCRM",
    intro: "Most small teams can test TracktCRM on new enquiries first, then switch when they are confident.",
    steps: [
      { title: "Export from LeadSquared", body: "Export your leads, opportunities and their stages from LeadSquared." },
      {
        title: "Set up your stages",
        body: "Create a free TracktCRM account and set up stages that match your current sales process.",
      },
      { title: "Import your leads", body: "Use the Import button on the pipeline view to bring your records in." },
      {
        title: "Connect your sources",
        body: "Connect WhatsApp and your portals, and on Pro or above, your Meta and Google ad accounts.",
      },
      { title: "Switch your team", body: "Run both systems on live enquiries for a week, then move everyone over." },
    ],
    note: "On paid plans, our team in Mohali, Punjab helps you map stages and fields so the move is quick.",
  },
  faqTitle: "Questions About Switching From LeadSquared",
  faqs: FAQS,
  checked: COMPARE_CHECKED,
  sources: {
    links: [
      { label: "LeadSquared Sales CRM pricing", href: "https://www.leadsquared.com/sales-crm-pricing/" },
      {
        label: "LeadSquared: WhatsApp Business Messaging Connector",
        href: "https://help.leadsquared.com/whatsapp-business-messaging-connector/",
      },
      { label: "LeadSquared: Facebook Lead Ads connector", href: "https://help.leadsquared.com/facebook-lead-ads-connector/" },
      { label: "LeadSquared: IndiaMART integration", href: "https://help.leadsquared.com/integrate-indiamart-with-leadsquared/" },
      { label: "LeadSquared: Justdial integration", href: "https://help.leadsquared.com/integrate-justdial-with-leadsquared/" },
    ],
  },
  related: (
    <>
      Choosing your first CRM? Our guide to{" "}
      <Link href="/crm-software">CRM software</Link> covers what small teams
      need.
    </>
  ),
  cta: {
    title: "Start With TracktCRM Today",
    text: "Create a free account with WhatsApp included and test it on real enquiries, or book a demo and we will walk you through your pipeline. No credit card needed.",
  },
};

export default function LeadsquaredAlternativePage() {
  return <CompareLayout page={PAGE} seo={PAGE_SEO[ROUTE]} />;
}
