import { APP_REGISTER_URL } from "../site";

export const YEARLY_SAVING = "20%";

/** Prices are per user per month in USD and converted for each visitor. */
export const PLANS = [
  {
    id: "free",
    name: "Free",
    tagline: "For solo founders replacing a spreadsheet.",
    monthly: 0,
    yearly: 0,
    note: "1 user · no card required",
    cta: { label: "Start free", href: APP_REGISTER_URL, external: true },
    featuresLabel: "Key features",
    features: [
      { text: "1 pipeline, unlimited records" },
      { text: "Contacts, deals & activities" },
      { text: "Email + WhatsApp lead response" },
      { text: "Mobile app (iOS & Android)" },
      { text: "AI follow-up calls", excluded: true },
      { text: "Team pipelines & roles", excluded: true },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For small teams ready to stop losing leads.",
    monthly: 24,
    yearly: 19,
    ai: true,
    cta: { label: "Start free trial", href: APP_REGISTER_URL, external: true },
    featuresLabel: "Everything in Free +",
    features: [
      { text: "Unlimited pipelines & records" },
      { text: "Full AI response: email, WhatsApp, SMS + AI call" },
      { text: "Zoom / Teams / Meet call summaries" },
      { text: "25 automations" },
      { text: "Slack, Gmail, Calendar, Zapier" },
      { text: "Custom reporting dashboards", excluded: true },
    ],
  },
  {
    id: "team",
    name: "Team",
    tagline: "For sales teams who need visibility, not guesswork.",
    monthly: 49,
    yearly: 39,
    ai: true,
    popular: true,
    cta: { label: "Start free trial", href: APP_REGISTER_URL, external: true },
    featuresLabel: "Everything in Growth +",
    features: [
      { text: "Unlimited records" },
      { text: "Roles, permissions & team visibility" },
      { text: "Live KPI dashboards & revenue tracking" },
      { text: "100 automations" },
      { text: "Priority AI call routing" },
      { text: "Workflow templates library" },
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For multi-team orgs with custom needs.",
    monthly: 85,
    yearly: 69,
    ai: true,
    cta: { label: "Talk to sales", href: "/contact" },
    demo: true,
    featuresLabel: "Everything in Team +",
    features: [
      { text: "Unlimited records" },
      { text: "Dedicated onboarding specialist" },
      { text: "Open API & custom integrations" },
      { text: "Multi-team pipeline governance" },
      { text: "SLA-backed support" },
      { text: "Data residency options" },
    ],
  },
];

export const PRICING_PERKS = [
  { text: "Free 1 month trial", highlight: true },
  { text: "No credit card required" },
  { text: "No forced contracts" },
  { text: "Cancel anytime" },
  { text: "Data never sold or used for ads" },
];