export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://tracktcrm.com";

export const SITE_NAME = "TracktCRM";

export const APP_BASE_URL = "https://dashboard.tracktcrm.com";
export const APP_LOGIN_URL = `${APP_BASE_URL}/login`;
export const APP_REGISTER_URL = `${APP_BASE_URL}/register`;

export const SOCIAL_PROFILES = {
  linkedin: "https://www.linkedin.com/company/tracktcrm",
  facebook: "https://www.facebook.com/tracktcrm",
  instagram: "https://www.instagram.com/tracktcrm",
};

export const CONTACT = {
  phoneE164: "917009811184",
  phoneDisplay: "+91 70098 11184",
  phoneTel: "+917009811184",
  email: "traktcrm@gmail.com",
  whatsappUrl: "https://wa.me/917009811184",
  supportHours: "Mon–Fri, 10:00–19:00 IST",
  address:
    "3rd Floor, D-231, Phase 8B, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 140308",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3rd+Floor,+D-231,+Phase+8B,+Sector+91,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308",
};

export const SEO = {
  title: "AI CRM Software That Answers Every Lead | TracktCRM",
  description:
    "TracktCRM is an AI CRM that replies to every lead in seconds, automates follow-ups and tracks your pipeline. Start your free 1-month trial.",
  ogTitle: "TracktCRM - AI CRM Software That Answers Every Lead",
  ogDescription:
    "AI-powered lead management, sales pipeline tracking and automated follow-ups - for real estate teams, agencies, consultants and freelancers.",
};
