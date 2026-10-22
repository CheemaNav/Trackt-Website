/**
 * Partner application fields and validation, shared by the form (browser)
 * and /api/partner-application (server) so both apply the same rules.
 */

export const PROGRAM_TYPES = ["reseller", "affiliate"];
export const MESSAGE_MAX = 500;
export const HONEYPOT_FIELD = "fax_number";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const COMPANY_TYPES = [
  "IT / Software Reseller",
  "Digital Marketing Agency",
  "Business Consultant",
  "System Integrator",
  "Web Development Agency",
  "ERP / Tally Partner",
  "Freelancer",
  "Other",
];
const TEAM_SIZES = ["Just me", "2–5", "6–20", "21–50", "50+"];
const CLIENT_INDUSTRIES = [
  "Real Estate",
  "Education",
  "Healthcare",
  "Insurance",
  "Travel",
  "Automotive",
  "Manufacturing",
  "Retail / eCommerce",
  "Agencies",
  "Other",
];
const CRM_EXPERIENCE = [
  "No, this would be my first",
  "Yes, 1–5 implementations",
  "Yes, 5+ implementations",
];
const OTHER_CRM_PARTNER = ["No", "Zoho / Bigin", "LeadSquared", "HubSpot", "Salesforce", "Other"];
const PROFILE_TYPES = [
  "Chartered Accountant",
  "Business Consultant",
  "Freelancer",
  "Sales Trainer / Coach",
  "YouTuber / Blogger",
  "Social Media Creator",
  "Agency",
  "Existing TracktCRM Customer",
  "Other",
];
const PROMOTION_CHANNELS = [
  "Website / Blog",
  "YouTube",
  "Instagram",
  "LinkedIn",
  "Facebook",
  "WhatsApp groups / communities",
  "Directly to my clients",
  "Email newsletter",
  "Other",
];
const AUDIENCE_REACH = [
  "Under 1,000",
  "1,000–10,000",
  "10,000–50,000",
  "50,000+",
  "I mainly refer my own clients",
];

/**
 * Field types: text, email, phone, select, checkboxes, url, textarea, consent.
 * `half` fields share a row with the next half field on wider screens.
 */
export const PARTNER_FORMS = {
  reseller: {
    label: "Reseller",
    submitLabel: "Submit Application",
    success:
      "Thank you! Your application has been received. Our partner team will contact you within 2 working days at the email you shared.",
    consentText: "I agree to be contacted by TracktCRM about the partner program and accept the",
    fields: [
      { name: "first_name", label: "First name", type: "text", required: true, half: true, max: 60, autoComplete: "given-name" },
      { name: "last_name", label: "Last name", type: "text", required: true, half: true, max: 60, autoComplete: "family-name" },
      { name: "email", label: "Work email", type: "email", required: true, half: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "phone", required: true, half: true },
      { name: "company_name", label: "Company name", type: "text", required: true, half: true, max: 120, autoComplete: "organization" },
      { name: "role", label: "Your role / designation", type: "text", required: true, half: true, max: 80, autoComplete: "organization-title" },
      { name: "city", label: "City", type: "text", required: true, half: true, max: 80, autoComplete: "address-level2" },
      { name: "company_type", label: "Company type", type: "select", required: true, half: true, options: COMPANY_TYPES },
      { name: "team_size", label: "Team size", type: "select", required: true, half: true, options: TEAM_SIZES },
      { name: "crm_experience", label: "Have you implemented a CRM before?", type: "select", required: true, half: true, options: CRM_EXPERIENCE },
      { name: "client_industries", label: "Industries your clients are in", type: "checkboxes", options: CLIENT_INDUSTRIES },
      { name: "other_crm_partner", label: "Are you currently a partner of another CRM?", type: "select", half: true, options: OTHER_CRM_PARTNER },
      { name: "website", label: "Website or LinkedIn URL", type: "url", half: true, placeholder: "https://" },
      { name: "message", label: "Tell us about your plans", type: "textarea", max: MESSAGE_MAX },
      { name: "consent", label: "Consent", type: "consent", required: true },
    ],
  },
  affiliate: {
    label: "Affiliate",
    submitLabel: "Join Affiliate Program",
    success:
      "Thanks for applying! We'll review your details and email your referral link within 2 working days.",
    consentText: "I agree to be contacted by TracktCRM about the affiliate program and accept the",
    fields: [
      { name: "full_name", label: "Full name", type: "text", required: true, half: true, max: 120, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, half: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "phone", required: true, half: true },
      { name: "city", label: "City", type: "text", required: true, half: true, max: 80, autoComplete: "address-level2" },
      { name: "profile_type", label: "What best describes you?", type: "select", required: true, half: true, options: PROFILE_TYPES },
      { name: "audience_reach", label: "Approximate audience / client reach", type: "select", half: true, options: AUDIENCE_REACH },
      { name: "promotion_channels", label: "Where will you promote TracktCRM?", type: "checkboxes", required: true, options: PROMOTION_CHANNELS },
      { name: "website", label: "Link to your website or main profile", type: "url", placeholder: "https://" },
      { name: "message", label: "How do you plan to promote TracktCRM?", type: "textarea", max: MESSAGE_MAX },
      { name: "consent", label: "Consent", type: "consent", required: true },
    ],
  },
};

export function emptyValues(programType) {
  const values = {};
  for (const field of PARTNER_FORMS[programType].fields) {
    if (field.type === "checkboxes") values[field.name] = [];
    else if (field.type === "consent") values[field.name] = false;
    else if (field.type === "phone") values[field.name] = "+91";
    else values[field.name] = "";
  }
  return values;
}

/** Indian numbers (+91) need 10 digits starting 6–9; other countries 6–14 digits after the code. */
function phoneError(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (!digits || digits === "91") return "Phone number is required.";
  if (digits.startsWith("91")) {
    return /^91[6-9]\d{9}$/.test(digits) ? "" : "Enter a valid 10-digit Indian mobile number.";
  }
  return digits.length >= 8 && digits.length <= 15 ? "" : "Enter a valid phone number with country code.";
}

/** Returns a normalised https URL, or null if the value is not a usable web address. */
export function normaliseUrl(raw) {
  const text = String(raw || "").trim();
  if (!text) return "";
  if (text.length > 300 || /\s/.test(text)) return null;
  const withScheme = /^https?:\/\//i.test(text) ? text : `https://${text}`;
  try {
    const url = new URL(withScheme);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(url.hostname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * Validates and cleans a submission. Returns `{ errors, values }`; `errors`
 * is empty when the submission is valid.
 */
export function validatePartnerApplication(programType, input = {}) {
  const form = PARTNER_FORMS[programType];
  const errors = {};
  const values = {};
  if (!form) return { errors: { program_type: "Unknown program." }, values };

  for (const field of form.fields) {
    const raw = input[field.name];

    if (field.type === "checkboxes") {
      const picked = Array.isArray(raw) ? raw.map(String) : [];
      const clean = field.options.filter((option) => picked.includes(option));
      if (picked.length !== clean.length) errors[field.name] = "Choose from the listed options.";
      else if (field.required && !clean.length) errors[field.name] = "Choose at least one option.";
      values[field.name] = clean;
      continue;
    }

    if (field.type === "consent") {
      values[field.name] = raw === true;
      if (field.required && raw !== true) errors[field.name] = "Please tick this box so we can contact you.";
      continue;
    }

    const text = typeof raw === "string" ? raw.trim() : "";

    if (field.required && !text && field.type !== "phone") {
      errors[field.name] =
        field.type === "select" ? "Please choose an option." : `${field.label} is required.`;
      values[field.name] = text;
      continue;
    }

    switch (field.type) {
      case "email":
        if (text.length > 254 || !EMAIL_PATTERN.test(text)) errors[field.name] = "Enter a valid email address.";
        values[field.name] = text.toLowerCase();
        break;
      case "phone": {
        const message = phoneError(text);
        if (message) errors[field.name] = message;
        values[field.name] = `+${text.replace(/\D/g, "")}`;
        break;
      }
      case "select":
        if (text && !field.options.includes(text)) errors[field.name] = "Please choose an option.";
        values[field.name] = text;
        break;
      case "url": {
        const url = normaliseUrl(text);
        if (url === null) errors[field.name] = "Enter a valid website or profile URL.";
        values[field.name] = url || "";
        break;
      }
      case "textarea":
        if (text.length > field.max) errors[field.name] = `Keep this under ${field.max} characters.`;
        values[field.name] = text;
        break;
      default:
        if (field.max && text.length > field.max) errors[field.name] = `Keep this under ${field.max} characters.`;
        values[field.name] = text;
    }
  }

  return { errors, values };
}

/** Display name for emails and the database. */
export function applicantName(programType, values) {
  return programType === "reseller"
    ? `${values.first_name || ""} ${values.last_name || ""}`.trim()
    : values.full_name || "";
}
