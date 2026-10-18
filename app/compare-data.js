import Link from "next/link";

/** Comparison pages shown in the header, footer and the cross-link block on each page. */
export const COMPARE_PAGES = [
  { label: "Pipedrive alternative", href: "/pipedrive-alternative" },
  { label: "Bigin alternative", href: "/bigin-alternative" },
  { label: "Zoho CRM alternative", href: "/zoho-crm-alternative" },
  { label: "HubSpot alternative", href: "/hubspot-alternative" },
  { label: "TeleCRM alternative", href: "/telecrm-alternative" },
  { label: "LeadSquared alternative", href: "/leadsquared-alternative" },
  { label: "CRM vs Excel", href: "/crm-vs-excel" },
];

/** Date competitor details were last checked on their official pages. */
export const COMPARE_CHECKED = { iso: "2026-10-17", label: "17 October 2026" };

/** TracktCRM side of every comparison table. Keep in sync with app/pricing/plans.js and app/integrations/data.js. */
export const TRACKT_FACTS = {
  free: "Yes. Free forever for 1 user with a single pipeline, unlimited records, 3 automations and WhatsApp integration. No card needed.",
  price: "Pro at ₹319 per user/month, billed yearly (shown in your local currency)",
  whatsapp: (
    <>
      Included on the Free plan (<Link href="/pricing">Meta message charges</Link> apply)
    </>
  ),
  ads: "Meta Ads and Google Ads integrations from Pro",
  portals: "Not available yet",
  ai: "Premium and All-in-One: reply suggestions, drafting, record summaries and upsell ideas",
  onboarding: "Dedicated onboarding specialist from Pro, plus help moving your data on paid plans",
  bestFor: "Small and growing teams that sell on WhatsApp and want a simple pipeline they can set up themselves",
};

export const COMPARE_TRUST = "Free plan for 1 user · No credit card · WhatsApp included";

export const COMPARE_SHOTS = {
  pipeline: {
    src: "/assets/compare/tracktcrm-pipeline-board.webp",
    alt: "TracktCRM pipeline board with lead cards across New, Won, Lost and Junk stages and Import and Export buttons",
    width: 1383,
    height: 695,
    caption: "The TracktCRM pipeline board (sample data).",
  },
  whatsapp: {
    src: "/assets/compare/tracktcrm-whatsapp-chat.webp",
    alt: "TracktCRM deal view with the WhatsApp conversation open next to the contact summary",
    width: 1820,
    height: 864,
    caption: "A WhatsApp chat saved on a deal in TracktCRM (sample data).",
  },
  dashboard: {
    src: "/assets/compare/tracktcrm-sales-dashboard.webp",
    alt: "TracktCRM sales dashboard with total deals, deals by stage, a deals trend chart and a customer report",
    width: 1381,
    height: 407,
    caption: "The TracktCRM sales dashboard (sample data).",
  },
};
