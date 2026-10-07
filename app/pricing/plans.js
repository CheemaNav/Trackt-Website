import { APP_REGISTER_URL } from "../site";

export const YEARLY_SAVING = "20%";

const AI_FEATURES = [
  "AI-powered email reply suggestions",
  "AI-powered email drafting",
  "AI-powered record summaries",
  "AI-powered upsell & cross-sell suggestions",
];

/** Prices are per user per month in INR and converted for each visitor. */
export const PLANS = [
  {
    id: "free",
    name: "Free",
    tagline: "For individuals getting started with a CRM.",
    monthly: 0,
    yearly: 0,
    note: "1 user · no card required",
    cta: { label: "Start free", href: APP_REGISTER_URL, external: true },
    demo: true,
    featuresLabel: "Key features",
    features: [
      { text: "Single pipeline" },
      { text: "Unlimited records" },
      { text: "Contacts, products & activities management" },
      { text: "3 automations" },
      { text: "WhatsApp integration" },
      { text: "Standard dashboard: charts & KPIs" },
      { text: "File storage", excluded: true },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For growing teams that need more pipelines and integrations.",
    monthly: 399,
    yearly: 319,
    cta: { label: "Start free", href: APP_REGISTER_URL, external: true },
    demo: true,
    featuresLabel: "Everything in Free, plus",
    features: [
      { text: "5 pipelines" },
      { text: "30 automations" },
      { text: "2 GB file storage" },
      { text: "Google Ads, Meta Ads, Gmail, Google Sheets, Microsoft Outlook & X (Twitter) integrations" },
      { text: "2 on-demand integrations based on your business requirements" },
      { text: "Custom website form" },
      { text: "Multi-team pipeline management" },
      { text: "Dedicated onboarding specialist" },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For sales teams that want AI help on every deal.",
    monthly: 699,
    yearly: 559,
    ai: true,
    popular: true,
    cta: { label: "Start free", href: APP_REGISTER_URL, external: true },
    demo: true,
    featuresLabel: "Everything in Pro, plus",
    features: [
      { text: "10 pipelines" },
      { text: "50 automations" },
      { text: "4 GB file storage" },
      { text: "LinkedIn Ads & TikTok Lead Ads integrations" },
      { text: "4 on-demand integrations based on your business requirements" },
      { text: "Duplicate record management" },
      { text: "1 landing page: design & development" },
    ],
    aiFeatures: [...AI_FEATURES, "1,000 AI credits per month"],
  },
  {
    id: "all-in-one",
    name: "All-in-One",
    tagline: "For businesses that want CRM, AI and a website in one plan.",
    monthly: 999,
    yearly: 799,
    ai: true,
    cta: { label: "Talk to sales", href: "/contact" },
    demo: true,
    featuresLabel: "Everything in Premium, plus",
    features: [
      { text: "20 pipelines" },
      { text: "100 automations" },
      { text: "8 GB file storage" },
      { text: "8 on-demand integrations based on your business requirements" },
      { text: "1 full website: up to 5 pages, design & development" },
      { text: "Priority support" },
    ],
    aiFeatures: [...AI_FEATURES, "3,000 AI credits per month"],
  },
];

export const PRICING_PERKS = [
  { text: "Free 1 month trial", highlight: true },
  { text: "No credit card required" },
  { text: "No forced contracts" },
  { text: "Cancel anytime" },
  { text: "Data never sold or used for ads" },
];
