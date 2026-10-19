import Link from "next/link";
import CompareLayout from "../components/compare-layout";
import {
  COMPARE_CHECKED,
  COMPARE_SHOTS,
  COMPARE_TRUST,
  TRACKT_FACTS,
} from "../compare-data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/telecrm-alternative";

export const metadata = buildMetadata(ROUTE);

const FAQS = [
  {
    q: "Is TracktCRM a good TeleCRM alternative?",
    a: "Yes, if your team sells mostly over WhatsApp and wants to start on a free plan. TeleCRM is the better choice if your team lives on phone calls and needs a built-in dialer and call recording.",
  },
  {
    q: "Does TeleCRM have a free plan?",
    a: "No free plan was shown on TeleCRM's pricing page when we checked. Its CRM is priced at ₹799 per user per month billed annually, or ₹1,099 billed quarterly. TracktCRM has a Free plan for 1 user.",
  },
  {
    q: "Is TracktCRM cheaper than TeleCRM?",
    a: "On the pricing pages we checked, TracktCRM Pro is ₹319 per user per month billed yearly and TeleCRM is ₹799 per user per month billed annually. The two tools focus on different channels, so compare the features your team needs.",
  },
  {
    q: "Does TeleCRM charge for WhatsApp set-up?",
    a: "TeleCRM's pricing page lists a one-time WhatsApp API set-up fee of ₹1,999 plus Meta's messaging charges. On TracktCRM, WhatsApp integration is part of the Free plan.",
  },
  {
    q: "Is TracktCRM built for telecalling teams?",
    a: "TracktCRM is built around WhatsApp, lead capture and follow-up rather than telecalling. If calling is the centre of your sales process and you need a 1-click dialer with automatic call recording, TeleCRM may suit you better.",
  },
  {
    q: "How do I move from TeleCRM to TracktCRM?",
    a: "Export your leads from TeleCRM, set up your stages in TracktCRM and use the Import button on the pipeline view. On paid plans our team helps you move your data.",
  },
  {
    q: "Which TracktCRM plans include AI?",
    a: "AI is on Premium and All-in-One, with 1,000 and 3,000 AI credits per month. It covers email reply suggestions, drafting, record summaries and upsell suggestions.",
  },
];

const PAGE = {
  route: ROUTE,
  breadcrumb: "TeleCRM alternative",
  brand: "TeleCRM",
  h1: { lead: "TeleCRM Alternative With a Free Plan", highlight: "and WhatsApp Included" },
  intro:
    "Comparing a TeleCRM alternative? TeleCRM is built for telecalling teams, with a dialer, call tracking and call recording. TracktCRM is built for teams that sell on WhatsApp and get leads from ads and portals, with a free plan to start. Here is an honest look at both.",
  trust: COMPARE_TRUST,
  hero: {
    src: "/assets/compare/telecrm-alternative-hero.webp",
    alt: "TracktCRM vs TeleCRM comparison of free plan, pricing, WhatsApp set-up, lead capture and calling",
  },
  meta: "We are not affiliated with TeleCRM.",
  glance: {
    title: "TracktCRM vs TeleCRM at a Glance",
    intro:
      "Both tools capture leads from ads and portals. The big differences are the free plan, WhatsApp set-up and calling.",
    rows: [
      { label: "Free plan", other: "No free plan shown on the pricing page", trackt: TRACKT_FACTS.free },
      {
        label: "Starting paid price",
        other: "₹799 per user/month billed annually, or ₹1,099 billed quarterly",
        trackt: TRACKT_FACTS.price,
      },
      {
        label: "WhatsApp",
        other: "Official WhatsApp API with a one-time ₹1,999 set-up fee plus Meta messaging charges",
        trackt: TRACKT_FACTS.whatsapp,
      },
      { label: "Meta and Google lead ads", other: "Lead capture from Facebook Ads and Google Ads", trackt: TRACKT_FACTS.ads },
      {
        label: "Lead portals",
        other: "Justdial, Sulekha, IndiaMART, 99acres, MagicBricks, Housing and others",
        trackt: TRACKT_FACTS.portals,
      },
      {
        label: "Calling",
        other: "1-click dialer, call tracking and automatic call recording",
        trackt: "Built around WhatsApp and lead follow-up rather than telecalling",
      },
      { label: "AI features", other: "Check TeleCRM's site for current AI features", trackt: TRACKT_FACTS.ai },
      {
        label: "Onboarding and migration",
        other: "One-click CSV import, and a 15-day refund on quarterly and annual plans",
        trackt: TRACKT_FACTS.onboarding,
      },
      {
        label: "Best for",
        other: "Telecalling-heavy sales teams that need a phone dialer and call recording",
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
    switchTitle: "Who Should Switch to a TeleCRM Alternative",
    switch: [
      "Your buyers would rather chat on WhatsApp than pick up a call",
      "You want to start on a free plan before paying for every seat",
      "You do not want a separate set-up fee before you can use WhatsApp",
      "You want more than one pipeline as you grow. TracktCRM Pro has 5, Premium 10 and All-in-One 20",
      "You want a dedicated onboarding specialist to set things up with you",
    ],
    stayTitle: "Who Should Stay With TeleCRM",
    stay: [
      "Your team makes most sales over the phone and needs a 1-click dialer",
      "You need call tracking and automatic call recording inside the CRM",
      "You capture leads from Sulekha or Tawk, which TracktCRM does not list",
      "Your current set-up works and your team is used to it",
    ],
    stayNote:
      "TeleCRM is a strong fit for calling teams. TracktCRM fits teams where WhatsApp, not the phone, is the main sales channel.",
  },
  differ: {
    title: "TeleCRM vs TracktCRM: Where They Differ",
    items: [
      {
        title: "WhatsApp-first vs calling-first",
        body: (
          <>
            TeleCRM is built around the phone, with a dialer, call tracking and
            automatic call recording, and offers the WhatsApp API for a one-time
            ₹1,999 set-up fee plus Meta charges. TracktCRM puts WhatsApp at the
            centre and includes it on the Free plan, so replies and chat history
            sit on each lead. See the{" "}
            <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> page.
          </>
        ),
        shot: COMPARE_SHOTS.whatsapp,
      },
      {
        title: "Pipelines and automation",
        body: "TracktCRM gives every team a visual pipeline with stages you can rename, and Import and Export on the board. The Free plan has 1 pipeline and 3 automations, Pro has 5 pipelines and 30 automations, and Premium has 10 pipelines and 50 automations, so you can run separate pipelines for different products or teams.",
        shot: COMPARE_SHOTS.pipeline,
      },
      {
        title: "Lead capture from ads and portals",
        body: (
          <>
            Both tools pull in leads from Facebook and Google ads and from
            portals such as IndiaMART, Justdial, 99acres and MagicBricks.
            TeleCRM also lists Sulekha and Tawk. TracktCRM lists Housing.com,
            OLX, TradeIndia and Practo, plus website forms and webhooks. Our{" "}
            <Link href="/lead-management-software">lead management software</Link>{" "}
            page shows how leads are followed up.
          </>
        ),
      },
      {
        title: "Pricing",
        body: "On the pricing pages we checked, TeleCRM is ₹799 per user a month billed annually, or ₹1,099 billed quarterly, with no free plan shown. TracktCRM has a Free plan for 1 user, then Pro at ₹319, Premium at ₹559 and All-in-One at ₹799 per user a month billed yearly.",
      },
      {
        title: "Reports and AI",
        body: "TracktCRM includes a standard sales dashboard on every plan with deals by stage and trends. AI is on Premium and All-in-One for reply suggestions, drafting, record summaries and upsell ideas. We could not confirm TeleCRM's AI features on its pricing page, so check its site.",
      },
    ],
  },
  migration: {
    title: "How to Move From TeleCRM to TracktCRM",
    intro: "Run both tools on new enquiries for a short time, then move your team once WhatsApp chats flow in.",
    steps: [
      { title: "Export from TeleCRM", body: "Export your leads and their status from TeleCRM." },
      {
        title: "Set up your stages",
        body: "Create a free TracktCRM account and set up stages that match the lead statuses you use today.",
      },
      { title: "Import your leads", body: "Use the Import button on the pipeline view to bring your leads in." },
      {
        title: "Connect your sources",
        body: "Connect WhatsApp and your lead portals, and on Pro or above, your Meta and Google ad accounts.",
      },
      { title: "Switch your team", body: "Run both tools for a week, then move everyone over." },
    ],
    note: "On paid plans, our team in Mohali, Punjab helps you map statuses and fields so the move is smooth.",
  },
  faqTitle: "Questions About Switching From TeleCRM",
  faqs: FAQS,
  checked: COMPARE_CHECKED,
  sources: {
    links: [
      { label: "TeleCRM pricing", href: "https://telecrm.in/pricing" },
      { label: "TeleCRM home page (features and FAQ)", href: "https://telecrm.in/" },
    ],
  },
  related: (
    <>
      Want the basics first? Read our guide to{" "}
      <Link href="/crm-software">CRM software</Link> for growing sales teams.
    </>
  ),
  cta: {
    title: "Try TracktCRM Free Next to TeleCRM",
    text: "Start on the Free plan with WhatsApp included and run it on live enquiries, or book a demo and we will show you how your pipeline would look. No credit card needed.",
  },
};

export default function TelecrmAlternativePage() {
  return <CompareLayout page={PAGE} seo={PAGE_SEO[ROUTE]} />;
}
