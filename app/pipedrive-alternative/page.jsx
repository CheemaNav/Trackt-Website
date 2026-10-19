import Link from "next/link";
import CompareLayout from "../components/compare-layout";
import {
  COMPARE_CHECKED,
  COMPARE_SHOTS,
  COMPARE_TRUST,
  TRACKT_FACTS,
} from "../compare-data";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/pipedrive-alternative";

export const metadata = buildMetadata(ROUTE);

const FAQS = [
  {
    q: "Is TracktCRM a good Pipedrive alternative?",
    a: "Yes, for teams that sell on WhatsApp, get leads from ads and portals and want to start on a free plan. Pipedrive remains strong for highly configurable pipelines and has a much larger app marketplace.",
  },
  {
    q: "Does Pipedrive have a free plan?",
    a: "No free plan was shown on Pipedrive's pricing page when we checked. It offers a 14-day free trial. TracktCRM has a Free plan for 1 user with WhatsApp integration included.",
  },
  {
    q: "Is TracktCRM cheaper than Pipedrive?",
    a: "Pipedrive Lite starts at US$14 per seat per month billed annually. TracktCRM Pro is ₹319 per user per month billed yearly and is shown in your local currency. Compare both pricing pages, since prices change.",
  },
  {
    q: "Does Pipedrive have WhatsApp?",
    a: "Pipedrive's help page says its native WhatsApp integration is on Growth and above, is in beta and is available to some customers only, and that Meta charges per message. TracktCRM includes WhatsApp integration on the Free plan.",
  },
  {
    q: "Can I migrate from Pipedrive?",
    a: "Yes. Export your persons, organisations and deals from Pipedrive, set up your stages in TracktCRM and use the Import button on the pipeline view. On paid plans our team helps you move your data.",
  },
  {
    q: "Does TracktCRM have as many integrations as Pipedrive?",
    a: "No. Pipedrive has a much larger marketplace. TracktCRM offers 24 integrations focused on WhatsApp, lead portals, ads, email and payments, plus webhooks and custom forms.",
  },
  {
    q: "Which TracktCRM plans include AI?",
    a: "AI is on Premium and All-in-One, with 1,000 and 3,000 AI credits per month, covering email reply suggestions, drafting, record summaries and upsell suggestions.",
  },
  {
    q: "Which currency are TracktCRM prices shown in?",
    a: "Prices are set in rupees and shown in your local currency on the pricing page, based on where you are browsing from.",
  },
];

const PAGE = {
  route: ROUTE,
  breadcrumb: "Pipedrive alternative",
  brand: "Pipedrive",
  h1: { lead: "Pipedrive Alternative for Teams", highlight: "That Sell on WhatsApp" },
  intro:
    "Weighing up a Pipedrive alternative? Pipedrive is a strong, mature sales CRM with a configurable pipeline and a large app marketplace. TracktCRM is built for teams that work from WhatsApp, capture leads from ads and lead portals, and want to start on a free plan. Here is an honest comparison.",
  trust: COMPARE_TRUST,
  hero: {
    src: "/assets/compare/pipedrive-alternative-hero.webp",
    alt: "TracktCRM vs Pipedrive comparison of free plan, pricing, WhatsApp, lead ads, lead portals and AI",
  },
  meta: "We are not affiliated with Pipedrive.",
  glance: {
    title: "TracktCRM vs Pipedrive at a Glance",
    intro:
      "Free plan, entry price, WhatsApp and lead capture are where the two tools differ most for small sales teams.",
    rows: [
      { label: "Free plan", other: "No free plan shown. 14-day free trial", trackt: TRACKT_FACTS.free },
      { label: "Starting paid price", other: "Lite at US$14 per seat/month, billed annually", trackt: TRACKT_FACTS.price },
      {
        label: "WhatsApp",
        other: "Native integration on Growth and above, in beta and available to some customers only",
        trackt: TRACKT_FACTS.whatsapp,
      },
      {
        label: "Meta and Google lead ads",
        other: "Facebook lead ads through Marketplace apps or connectors such as Zapier. LeadBooster add-on from US$32.50",
        trackt: TRACKT_FACTS.ads,
      },
      { label: "Lead portals", other: "Not listed. Check the Pipedrive Marketplace", trackt: TRACKT_FACTS.portals },
      { label: "AI features", other: "AI features, such as AI-powered report creation, start on Lite", trackt: TRACKT_FACTS.ai },
      {
        label: "Onboarding and migration",
        other: "Free implementation on plans over US$400 a year",
        trackt: TRACKT_FACTS.onboarding,
      },
      {
        label: "Best for",
        other: "Sales teams that want a mature, highly configurable pipeline and a large app marketplace",
        trackt: TRACKT_FACTS.bestFor,
      },
    ],
    note: (
      <>
        Prices are per seat or per user per month as shown on each pricing page.
        TracktCRM bills at company level and shows prices in your local currency.
        See <Link href="/pricing">TracktCRM pricing</Link> for every plan.
      </>
    ),
  },
  fit: {
    switchTitle: "Who Should Consider Switching From Pipedrive",
    switch: [
      "Most of your enquiries arrive on WhatsApp and you want those chats in the CRM on a free plan",
      "You run Meta or Google lead ads and want them connected without a third-party connector",
      "You buy leads from 99acres, IndiaMART, Justdial or similar portals and want them captured automatically",
      "You want a free plan to start and a clear per-user price after that",
      "You want a dedicated onboarding specialist on your first paid plan",
    ],
    stayTitle: "Who Should Stay With Pipedrive",
    stay: [
      "You use many Pipedrive Marketplace apps that have no TracktCRM equivalent",
      "Your team depends on the higher automation, report and custom field limits of its larger plans",
      "You sell mainly through email and calls in markets where WhatsApp is not central",
      "You want AI features on the entry plan",
    ],
    stayNote:
      "Switching has a cost. TracktCRM is the better fit when WhatsApp and lead capture are your bottleneck, not when you only need a polished pipeline.",
  },
  differ: {
    title: "Pipedrive vs TracktCRM: Where They Differ",
    items: [
      {
        title: "WhatsApp on every plan",
        body: (
          <>
            Pipedrive&apos;s native WhatsApp integration is on Growth and above,
            and its help page says it is in beta and available to some customers
            only. TracktCRM includes WhatsApp integration on the Free plan,
            with replies and chat history on each lead. See the{" "}
            <Link href="/features/whatsapp-crm">WhatsApp CRM</Link> page.
          </>
        ),
        shot: COMPARE_SHOTS.whatsapp,
      },
      {
        title: "Pipeline and customisation",
        body: "Both give you a visual pipeline with custom stages. Pipedrive offers deeper customisation, with limits that grow on higher plans. TracktCRM focuses on getting a team live quickly: 1 pipeline on Free, 5 on Pro, 10 on Premium and 20 on All-in-One, with Import and Export on the board.",
        shot: COMPARE_SHOTS.pipeline,
      },
      {
        title: "Lead capture from ads and portals",
        body: (
          <>
            Pipedrive connects Facebook lead ads through Marketplace apps or
            connectors such as Zapier, which needs a paid Zapier plan, and sells
            LeadBooster as an add-on. TracktCRM includes Meta Ads and Google Ads
            from Pro and lists integrations for 99acres, Housing.com, MagicBricks,
            IndiaMART, Justdial and TradeIndia. Our{" "}
            <Link href="/lead-management-software">lead management software</Link>{" "}
            page shows the follow-up flow.
          </>
        ),
      },
      {
        title: "Integrations",
        body: (
          <>
            Pipedrive has a much larger marketplace. TracktCRM offers 24
            integrations focused on WhatsApp, lead portals, ads, email and
            payments, plus webhooks and custom forms. See{" "}
            <Link href="/integrations">all TracktCRM integrations</Link>.
          </>
        ),
      },
      {
        title: "Pricing and billing",
        body: "Pipedrive lists Lite at US$14, Growth at US$39, Premium at US$59 and Ultimate at US$79 per seat a month billed annually. TracktCRM has a Free plan for 1 user, then Pro at ₹319, Premium at ₹559 and All-in-One at ₹799 per user a month billed yearly, shown in your local currency.",
      },
      {
        title: "AI",
        body: "Pipedrive lists AI features from Lite. TracktCRM keeps AI on Premium and All-in-One, with 1,000 or 3,000 credits a month for email reply suggestions, drafting, record summaries and upsell ideas.",
      },
    ],
  },
  migration: {
    title: "How to Move From Pipedrive to TracktCRM",
    intro: "Run TracktCRM on new enquiries alongside Pipedrive, then switch once your team is comfortable.",
    steps: [
      {
        title: "Export from Pipedrive",
        body: "Export your persons, organisations, deals and activities from Pipedrive.",
      },
      {
        title: "Map your stages",
        body: "Create a free TracktCRM account and set up stages that match your Pipedrive pipeline.",
      },
      { title: "Import your data", body: "Use the Import button on the pipeline view to bring in contacts and open deals." },
      {
        title: "Connect your channels",
        body: "Connect WhatsApp and your portals, and on Pro or above, your Meta and Google ad accounts.",
      },
      { title: "Switch your team", body: "Run TracktCRM on live enquiries for a week, then move everyone over." },
    ],
    note: "On paid plans, our team in Mohali, Punjab helps you map stages and fields so you do not start from a blank sheet.",
  },
  faqTitle: "Pipedrive Alternative FAQs",
  faqs: FAQS,
  checked: COMPARE_CHECKED,
  sources: {
    links: [
      { label: "Pipedrive pricing", href: "https://www.pipedrive.com/en/pricing" },
      { label: "Pipedrive: WhatsApp integration", href: "https://support.pipedrive.com/en/article/whatsapp-integration" },
      {
        label: "Pipedrive: add Facebook ad leads with Zapier",
        href: "https://support.pipedrive.com/en/article/zapier-add-new-facebook-ad-leads-as-people-in-pipedrive",
      },
      {
        label: "Pipedrive Marketplace: Facebook Lead Ads sync",
        href: "https://www.pipedrive.com/en/marketplace/app/facebook-lead-ads-sync/f7d03043685585ef",
      },
    ],
  },
  related: (
    <>
      Selling property or courses? See our{" "}
      <Link href="/industries/real-estate-crm">real estate CRM</Link> and{" "}
      <Link href="/industries/education-crm">education CRM</Link>, or start with
      our guide to <Link href="/crm-software">CRM software</Link>.
    </>
  ),
  cta: {
    title: "Try TracktCRM Free Alongside Pipedrive",
    text: "Start on the Free plan with WhatsApp included and run it on live enquiries, or book a demo and we will show you how your pipeline would look. No credit card needed.",
  },
};

export default function PipedriveAlternativePage() {
  return <CompareLayout page={PAGE} seo={PAGE_SEO[ROUTE]} />;
}
