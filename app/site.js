export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://tracktcrm.com";

export const SITE_NAME = "TracktCRM";

export const SEO = {
  title: "AI CRM Software for Leads, Pipeline & Real Estate | TracktCRM",
  description:
    "TracktCRM is an AI CRM that captures leads, automates follow-ups and tracks your sales pipeline — built for real estate, agencies & freelancers. Free 14-day trial.",
  ogTitle: "TracktCRM — AI CRM Software That Answers Every Lead",
  ogDescription:
    "AI-powered lead management, sales pipeline tracking and automated follow-ups — for real estate teams, agencies, consultants and freelancers.",
  keywords: [
    "ai crm",
    "crm for real estate",
    "pipedrive alternative",
    "best crm for freelancers",
    "lead management software",
    "crm for agency",
    "crm for consultants",
    "crm for small business",
    "ai sales assistant",
    "sales pipeline management",
    "AI CRM software",
  ],
};
