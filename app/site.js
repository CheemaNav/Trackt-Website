export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://tracktcrm.com"
).replace("://www.", "://");

export const SITE_NAME = "TracktCRM";

export const APP_BASE_URL = "https://dashboard.tracktcrm.com";
export const APP_LOGIN_URL = `${APP_BASE_URL}/login`;
export const APP_REGISTER_URL = `${APP_BASE_URL}/register`;

export const SOCIAL_PROFILES = {
  linkedin: "https://www.linkedin.com/in/trakt-undefined-74740b439/",
  facebook: "https://www.facebook.com/profile.php?id=61594335255912",
  instagram: "https://www.instagram.com/tracktcrm",
  google: "https://share.google/hBbCBq0J68WNCWACF",
};

export const CONTACT = {
  phoneE164: "916239520057",
  phoneDisplay: "+91 62395 20057",
  phoneTel: "+916239520057",
  email: "support@tracktcrm.com",
  whatsappUrl: "https://wa.me/916239520057",
  supportHours: "Mon–Fri, 10:00–19:00 IST",
  address:
    "3rd Floor, D-231, Phase 8B, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 140308",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3rd+Floor,+D-231,+Phase+8B,+Sector+91,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308",
};

export const SEO = {
  title: "AI CRM Software India: Lead & Sales Pipeline | TracktCRM",
  description:
    "AI CRM software for Indian businesses. Reply to every lead on WhatsApp, email and SMS in seconds, automate follow-ups and track your pipeline. Free 1 month trial.",
  ogTitle: "AI CRM Software India: Lead & Sales Pipeline | TracktCRM",
  ogDescription:
    "TracktCRM is an AI-powered CRM that captures leads, automates follow-ups, and helps teams close more deals.",
};
