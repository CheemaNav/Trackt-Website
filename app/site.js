export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://tracktcrm.com"
).replace("://www.", "://");

/** Homepage URL in its one canonical form (with trailing slash). */
export const HOME_URL = `${SITE_URL}/`;

export const SITE_NAME = "TracktCRM";

/**
 * Real, verifiable review totals only. SoftwareApplication schema (with stars)
 * is emitted only when both values are set; never fill these with estimates.
 */
export const SITE_RATING = { ratingValue: null, ratingCount: null };

export const APP_BASE_URL = "https://dashboard.tracktcrm.com";
export const APP_LOGIN_URL = `${APP_BASE_URL}/login`;
export const APP_REGISTER_URL = `${APP_BASE_URL}/register`;

// TODO: set to the TracktCRM LinkedIn company page URL. The footer icon stays hidden while this is empty.
export const LINKEDIN_COMPANY_URL = "";

// TODO: paste the Google Business Profile URL from Google Maps (Share → Copy link, or the full
// https://www.google.com/maps/place/... URL). Organization sameAs skips it while this is empty.
export const GOOGLE_BUSINESS_URL = "";

const GOOGLE_SHARE_URL = "https://share.google/hBbCBq0J68WNCWACF";

export const SOCIAL_PROFILES = {
  ...(LINKEDIN_COMPANY_URL && { linkedin: LINKEDIN_COMPANY_URL }),
  facebook: "https://www.facebook.com/profile.php?id=61594335255912",
  instagram: "https://www.instagram.com/tracktcrm",
  google: GOOGLE_BUSINESS_URL || GOOGLE_SHARE_URL,
};

/** Profiles listed in Organization sameAs. */
export const SAME_AS = [
  LINKEDIN_COMPANY_URL,
  SOCIAL_PROFILES.facebook,
  SOCIAL_PROFILES.instagram,
  GOOGLE_BUSINESS_URL,
].filter(Boolean);

const PHONE_E164 = "916239520057";

export const CONTACT = {
  phoneE164: PHONE_E164,
  phoneDisplay: "+91 62395 20057",
  phoneTel: `+${PHONE_E164}`,
  email: "support@tracktcrm.com",
  whatsappUrl: `https://wa.me/${PHONE_E164}`,
  // wa.me answers crawlers with HTTP 429; nofollow keeps audits from treating it as broken.
  whatsappRel: "nofollow noopener noreferrer",
  supportHours: "Mon–Fri, 10:00–19:00 IST",
  address:
    "3rd Floor, D-231, Phase 8B, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 140307",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3rd+Floor,+D-231,+Phase+8B,+Sector+91,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140307",
};