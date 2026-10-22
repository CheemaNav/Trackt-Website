/**
 * Partner program values used by /partners/reseller-partner-program,
 * /partners/affiliate-partner-program and the partner application emails.
 *
 * A value still in [brackets] is a placeholder: the pages drop it from the
 * sentence instead of showing the brackets. Replace it with the real value
 * (for example "25%" or 90) and the number appears everywhere.
 */
const PARTNER_PROGRAM = {
  RESELLER_COMMISSION: "[XX]%",
  RESELLER_COMMISSION_TYPE: "recurring", // "recurring" or "one-time"
  AFFILIATE_COMMISSION: "[XX]%",
  AFFILIATE_COMMISSION_DURATION: "first 12 months",
  COOKIE_DAYS: "[90]",
  MIN_PAYOUT: "₹[2,000]",
  PAYOUT_SCHEDULE: "monthly",
  PARTNER_EMAIL: "partners@tracktcrm.com",
};

export default PARTNER_PROGRAM;
