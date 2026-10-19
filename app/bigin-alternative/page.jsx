import Link from "next/link";
import CompareLayout from "../components/compare-layout";
import {
  COMPARE_CHECKED,
  COMPARE_SHOTS,
  COMPARE_TRUST,
  TRACKT_FACTS,
} from "../compare-data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/bigin-alternative";

export const metadata = buildMetadata(ROUTE);

const FAQS = [
  {
    q: "Is TracktCRM a good Bigin alternative?",
    a: "Yes, if your leads come in on WhatsApp, Meta and Google ads or lead portals. TracktCRM includes WhatsApp on the Free plan and connects portals such as 99acres and IndiaMART. Bigin is a strong choice if you already use Zoho apps and want its mobile apps and built-in calling.",
  },
  {
    q: "Does Bigin have a free plan?",
    a: "Yes. Bigin's Free plan covers 1 user with 500 records, 1 pipeline and 3 automations. TracktCRM's Free plan is also for 1 user, with a single pipeline, unlimited records, 3 automations and WhatsApp integration.",
  },
  {
    q: "Is TracktCRM cheaper than Bigin?",
    a: "On the pricing pages we checked, TracktCRM Pro is ₹319 per user per month and Bigin Express is ₹400 per user per month, both billed yearly. Compare the features you need on each plan, since prices and plans change.",
  },
  {
    q: "Can I use WhatsApp on TracktCRM's Free plan?",
    a: "Yes. WhatsApp integration is part of the Free plan, so you can reply to leads and keep the chat history on each lead without upgrading.",
  },
  {
    q: "Which plans include AI?",
    a: "On TracktCRM, AI is on Premium and All-in-One, with 1,000 and 3,000 AI credits per month. On Bigin, AI features are listed on Premier and Bigin 360.",
  },
  {
    q: "How do I move my data from Bigin to TracktCRM?",
    a: "Export your contacts and deals from Bigin, set up your stages in TracktCRM, then use the Import button on the pipeline view. On paid plans our team helps you move your data.",
  },
  {
    q: "Does TracktCRM capture Meta and Google lead ads?",
    a: "Yes. Meta Ads and Google Ads integrations are included from the Pro plan, so ad leads reach your pipeline as soon as someone submits a form.",
  },
];

const PAGE = {
  route: ROUTE,
  breadcrumb: "Bigin alternative",
  brand: "Bigin",
  h1: { lead: "Bigin Alternative for Teams", highlight: "That Sell on WhatsApp" },
  intro:
    "Looking for a Bigin alternative? Bigin by Zoho is a capable, low-cost pipeline CRM for small teams. TracktCRM is built for teams whose leads arrive on WhatsApp, Meta and Google ads and lead portals, and who want WhatsApp on the free plan. Here is an honest comparison so you can decide.",
  trust: COMPARE_TRUST,
  hero: {
    src: "/assets/compare/bigin-alternative-hero.webp",
    alt: "TracktCRM vs Bigin by Zoho CRM comparison of free plan, pricing, WhatsApp, lead ads, lead portals and AI",
  },
  meta: "We are not affiliated with Zoho or Bigin.",
  glance: {
    title: "TracktCRM vs Bigin at a Glance",
    intro:
      "The table puts the two free plans, starting prices and the features small sales teams ask about most side by side.",
    rows: [
      {
        label: "Free plan",
        other: "Yes. Free forever for 1 user with 500 records, 1 pipeline and 3 automations. Paid plans have a 15-day trial.",
        trackt: TRACKT_FACTS.free,
      },
      { label: "Starting paid price", other: "Express at ₹400 per user/month, billed yearly", trackt: TRACKT_FACTS.price },
      { label: "WhatsApp", other: "WhatsApp Business integration from Express", trackt: TRACKT_FACTS.whatsapp },
      {
        label: "Meta and Google lead ads",
        other: "Facebook, Instagram, LinkedIn and TikTok lead ads from Express through LeadChain, which has its own subscription",
        trackt: TRACKT_FACTS.ads,
      },
      { label: "Lead portals", other: "Not listed on the pricing page. Check the Bigin Marketplace", trackt: TRACKT_FACTS.portals },
      {
        label: "AI features",
        other: "Premier and Bigin 360: Writing Assistant, Record Summary, Email Reply Assistant and more",
        trackt: TRACKT_FACTS.ai,
      },
      {
        label: "Onboarding and migration",
        other: "Free onboarding session and data import help on paid plans, plus one-click migration from some CRMs",
        trackt: TRACKT_FACTS.onboarding,
      },
      {
        label: "Best for",
        other: "Small teams in the Zoho ecosystem that want a simple pipeline, mobile apps and built-in calling",
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
    switchTitle: "Who Should Switch to a Bigin Alternative",
    switch: [
      "Most of your enquiries start on WhatsApp and you want those chats inside the CRM from day one, without moving to a paid plan",
      "You run Meta or Google lead ads and want every form submission in the pipeline the moment it arrives",
      "You buy leads from property portals or B2B marketplaces like 99acres, MagicBricks or IndiaMART",
      "You want unlimited records on the free plan instead of a record cap",
      "You would rather have a person help you set up stages and move your data than do it alone",
    ],
    stayTitle: "Who Should Stay With Bigin",
    stay: [
      "Your business already runs on Zoho apps and you want everything under one Zoho account",
      "You need native mobile apps or built-in telephony, which Bigin lists on its plans",
      "You rely on Bigin's one-click migration or apps from the Bigin Marketplace that TracktCRM does not offer",
      "Your team is happy with how Bigin works today",
    ],
    stayNote:
      "Switching takes effort. A Bigin alternative only makes sense when WhatsApp, ad leads or portal leads are where your team loses time.",
  },
  differ: {
    title: "Bigin vs TracktCRM: Where They Differ",
    items: [
      {
        title: "WhatsApp on the free plan",
        body: (
          <>
            Bigin lists its WhatsApp Business integration from the Express
            plan. TracktCRM includes WhatsApp integration on the Free plan, so
            a single user can reply to leads and keep every message on the lead
            record before paying anything. Teams that sell mostly over chat can
            see how it works on the{" "}
            <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> page.
          </>
        ),
        shot: COMPARE_SHOTS.whatsapp,
      },
      {
        title: "Pipeline and records",
        body: (
          <>
            Both tools give you a drag-and-drop pipeline. Bigin&apos;s Free plan
            caps you at 500 records, while TracktCRM&apos;s Free plan has
            unlimited records on a single pipeline. On paid plans, TracktCRM Pro
            gives you 5 pipelines and 30 automations, and the pipeline view has
            Import and Export built in.
          </>
        ),
        shot: COMPARE_SHOTS.pipeline,
      },
      {
        title: "Lead capture from ads and portals",
        body: (
          <>
            Bigin connects Facebook, Instagram, LinkedIn and TikTok lead ads
            through LeadChain, which Zoho bills as a separate subscription.
            TracktCRM includes Meta Ads and Google Ads integrations from Pro and
            lists integrations for 99acres, Housing.com, MagicBricks, IndiaMART,
            Justdial and TradeIndia. Our{" "}
            <Link href="/lead-management-software">lead management software</Link>{" "}
            page shows how leads are assigned and followed up.
          </>
        ),
      },
      {
        title: "AI and which plan has it",
        body: "Both products keep AI on higher plans. Bigin lists AI on Premier and Bigin 360. TracktCRM includes AI on Premium and All-in-One: email reply suggestions, drafting, record summaries and upsell and cross-sell suggestions, with 1,000 or 3,000 AI credits a month.",
      },
      {
        title: "Pricing and what each plan adds",
        body: "On the pricing pages we checked, Bigin Express is ₹400, Premier ₹720 and Bigin 360 ₹1,080 per user per month, billed yearly. TracktCRM Pro is ₹319, Premium ₹559 and All-in-One ₹799 per user per month, billed yearly, and yearly billing saves up to 20%. Pro adds 5 pipelines, 30 automations, a custom website form and the Meta and Google Ads integrations.",
      },
      {
        title: "Ecosystem and set-up help",
        body: "Bigin sits inside the Zoho family, which is a real advantage if you already use Zoho Mail, Books or other Zoho apps. TracktCRM is a single product focused on capturing and following up leads. From Pro you get a dedicated onboarding specialist, and our team helps move your data on paid plans.",
      },
    ],
  },
  migration: {
    title: "How to Move From Bigin to TracktCRM",
    intro: "Most teams run both tools for a short time, then switch once new enquiries flow into TracktCRM.",
    steps: [
      { title: "Export from Bigin", body: "Export your contacts, companies and open deals from Bigin." },
      {
        title: "Set up your pipeline",
        body: "Create a free TracktCRM account and set up stages that match the ones you use in Bigin.",
      },
      { title: "Import your data", body: "Use the Import button on the pipeline view to bring in your leads and deals." },
      {
        title: "Connect your channels",
        body: "Connect WhatsApp, and on Pro or above, your Meta and Google ad accounts.",
      },
      { title: "Run side by side", body: "Run both tools on live enquiries for a week, then move your team over." },
    ],
    note: "On paid plans, our team in Mohali, Punjab helps you map stages and fields so you do not start from a blank sheet.",
  },
  faqTitle: "Bigin Alternative FAQs",
  faqs: FAQS,
  checked: COMPARE_CHECKED,
  sources: {
    links: [
      { label: "Bigin pricing and plan comparison", href: "https://www.bigin.com/pricing.html" },
      {
        label: "Zoho LeadChain overview (lead ads add-on for Bigin)",
        href: "https://help.zoho.com/portal/en/kb/zoho-lead-chain/getting-started/articles/lead-chain-an-overview",
      },
    ],
  },
  related: (
    <>
      New to CRMs? Start with our guide to{" "}
      <Link href="/crm-software">CRM software</Link> for growing teams.
    </>
  ),
  cta: {
    title: "Try TracktCRM Free Next to Bigin",
    text: "Start on the Free plan with WhatsApp included and run it on live enquiries, or book a demo and we will show you how your pipeline would look. No credit card needed.",
  },
};

export default function BiginAlternativePage() {
  return <CompareLayout page={PAGE} seo={PAGE_SEO[ROUTE]} />;
}
