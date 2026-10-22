import PARTNER_PROGRAM from "@/content/partner-program";

function isSet(value) {
  if (value === undefined || value === null) return false;
  const text = String(value).trim();
  return text !== "" && !/[[\]]/.test(text);
}

function valueOrNull(key) {
  return isSet(PARTNER_PROGRAM[key]) ? String(PARTNER_PROGRAM[key]).trim() : null;
}

const resellerCommission = valueOrNull("RESELLER_COMMISSION");
const resellerType = valueOrNull("RESELLER_COMMISSION_TYPE") || "recurring";
const affiliateCommission = valueOrNull("AFFILIATE_COMMISSION");
const affiliateDuration = valueOrNull("AFFILIATE_COMMISSION_DURATION");
const cookieDays = valueOrNull("COOKIE_DAYS");
const minPayout = valueOrNull("MIN_PAYOUT");
const payoutSchedule = valueOrNull("PAYOUT_SCHEDULE");

const isRecurring = resellerType.toLowerCase() === "recurring";
// "first 12 months" reads as "for the first 12 months" in a sentence.
const durationPhrase = affiliateDuration
  ? /^first\b/i.test(affiliateDuration)
    ? `the ${affiliateDuration}`
    : affiliateDuration
  : null;

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const PARTNER_EMAIL = PARTNER_PROGRAM.PARTNER_EMAIL;

/** "25% recurring" when the rate is set, otherwise just "recurring". */
export const resellerRate = [resellerCommission, resellerType].filter(Boolean).join(" ");

/** "25% for the first 12 months", without whichever part is still a placeholder. */
export const affiliateRate = [affiliateCommission, durationPhrase && `for ${durationPhrase}`]
  .filter(Boolean)
  .join(" ");

export const COPY = {
  resellerHeroEarn: `earn ${resellerRate} commission on every paying customer.`,
  resellerBenefitTitle: `${capitalize(resellerType)} commission`,
  resellerBenefitBody: `Earn ${resellerCommission ? `${resellerCommission} ` : "commission "}on every paying customer you bring${isRecurring ? ", for as long as they stay subscribed" : ""}.`,
  resellerStepEarn: isRecurring
    ? "Bring clients to TracktCRM, set them up, and earn commission every month they stay subscribed."
    : "Bring clients to TracktCRM, set them up, and earn commission on every paying client.",
  resellerTableCommission: capitalize(resellerRate),
  resellerFaqEarn: `You earn ${resellerRate} commission on every paying customer you bring. There is no cap. You can also charge your clients separately for setup, training and customisation.`,

  affiliateHeroEarn: `earn ${[affiliateCommission, "commission", durationPhrase && `for ${durationPhrase}`].filter(Boolean).join(" ")} on every paying customer you refer.`,
  affiliateBenefitBody: `Earn ${affiliateCommission ? `${affiliateCommission} ` : "commission "}${durationPhrase ? `for ${durationPhrase} ` : ""}on every paying customer you refer. No cap.`,
  affiliateTableCommission: affiliateCommission
    ? affiliateRate
    : capitalize(durationPhrase ? `commission for ${durationPhrase}` : "commission"),
  cookieTitle: cookieDays ? `${cookieDays}-day tracking` : "Referral tracking",
  cookieBody: cookieDays
    ? `If someone clicks your link and signs up within ${cookieDays} days, the referral is yours.`
    : "If someone clicks your link and later signs up, the referral is yours.",
  cookieFaq: cookieDays
    ? `When someone clicks your link, it's tracked for ${cookieDays} days. If they sign up in that time and become a paying customer, the commission is yours.`
    : "When someone clicks your link, the visit is tracked. If they sign up and become a paying customer, the commission is yours.",
  affiliateStepEarn: `When someone signs up through your link and becomes a paying customer, you earn commission${payoutSchedule ? `, paid ${payoutSchedule}` : ""}.`,

  payoutFaq: `Commissions are paid ${payoutSchedule ? `${payoutSchedule} ` : ""}by bank transfer${minPayout ? ` once your balance crosses ${minPayout}` : ""}.`,
};
