export const LAST_UPDATED = { iso: "2026-10-07", label: "7 October 2026" };

export function integrationSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const INTEGRATION_CATEGORIES = [
  {
    id: "messaging",
    label: "Messaging",
    title: "WhatsApp, Instagram and Facebook Messaging Integrations",
    body: "Run your customer conversations from inside TracktCRM. Every message is logged on the right lead.",
  },
  {
    id: "lead-sources",
    label: "Lead sources",
    title:
      "Lead Portal Integrations: 99acres, Housing.com, MagicBricks, IndiaMART and More",
    body: "Enquiries from Indian portals and marketplaces arrive in your pipeline without copy and paste, each tagged with its source.",
  },
  {
    id: "ads",
    label: "Ads",
    title: "Meta and Google Ads Lead Form Integrations",
    body: "Ad leads reach the CRM the moment someone submits, with the campaign that produced them.",
  },
  {
    id: "productivity",
    label: "Productivity",
    title:
      "Gmail, Google Calendar, LinkedIn, Calendly and WordPress Integrations",
    body: "Email, calendars and website forms stay connected, so your team does not leave the CRM to do the next step.",
  },
  {
    id: "commerce",
    label: "Commerce",
    title: "Shopify, Razorpay, Delhivery and Shiprocket Integrations",
    body: "Orders, payments and shipments sit next to the deal, so sales and support share one status.",
  },
  {
    id: "developer",
    label: "Developer",
    title: "Webhooks, API and Custom Forms",
    body: "For anything that is not listed, use a webhook, a custom form or the API.",
  },
];

export const INTEGRATION_APPS = [
  {
    name: "WhatsApp",
    category: "messaging",
    body: "Chat with leads on WhatsApp from TracktCRM. Two-way messages, templates and full history stay on the lead.",
    href: "/features/whatsapp-crm",
    tags: ["whatsapp", "chat", "messaging"],
  },
  {
    name: "Instagram",
    category: "messaging",
    body: "Bring Instagram messages into the CRM as tracked leads instead of leaving them in a phone inbox.",
    tags: ["instagram", "dm", "social"],
  },
  {
    name: "Facebook",
    category: "messaging",
    body: "Sync Facebook Messenger chats and lead forms so each enquiry is assigned and followed up.",
    tags: ["facebook", "meta", "messenger", "lead forms"],
  },
  {
    name: "99acres",
    category: "lead-sources",
    body: "Capture buyer enquiries from 99acres straight into your real estate pipeline.",
    href: "/industries/real-estate-crm",
    tags: ["99acres", "real estate", "portal"],
  },
  {
    name: "Housing.com",
    category: "lead-sources",
    body: "Import Housing.com leads so they are ready for a site visit follow-up.",
    href: "/industries/real-estate-crm",
    tags: ["housing", "real estate", "portal"],
  },
  {
    name: "MagicBricks",
    category: "lead-sources",
    body: "Sync MagicBricks enquiries so no listing lead sits unanswered.",
    href: "/industries/real-estate-crm",
    tags: ["magicbricks", "real estate", "portal"],
  },
  {
    name: "OLX",
    category: "lead-sources",
    body: "Bring OLX classified leads into the pipeline when a buyer enquires.",
    tags: ["olx", "classifieds"],
  },
  {
    name: "Justdial",
    category: "lead-sources",
    body: "Pull Justdial enquiries into TracktCRM and assign them to the right person.",
    tags: ["justdial", "marketplace"],
  },
  {
    name: "IndiaMART",
    category: "lead-sources",
    body: "Capture IndiaMART buyer enquiries so B2B leads never wait in email.",
    tags: ["indiamart", "b2b", "marketplace"],
  },
  {
    name: "TradeIndia",
    category: "lead-sources",
    body: "Bring TradeIndia enquiries into your pipeline with the source attached.",
    tags: ["tradeindia", "b2b"],
  },
  {
    name: "Practo",
    category: "lead-sources",
    body: "Capture clinic and appointment enquiries from Practo and follow up quickly.",
    tags: ["practo", "healthcare", "clinic"],
  },
  {
    name: "Meta",
    category: "ads",
    body: "Receive Meta lead ads and Instant Form submissions as they come in. Covers Facebook and Instagram ads.",
    tags: ["meta", "facebook ads", "instagram ads", "lead ads"],
  },
  {
    name: "Google Ads",
    category: "ads",
    body: "Receive Google Ads lead form submissions, attributed to the campaign that created them.",
    tags: ["google ads", "pmax", "lead forms"],
  },
  {
    name: "Gmail",
    category: "productivity",
    body: "Send and log Gmail threads on each contact, so email history sits with the deal.",
    tags: ["gmail", "email", "google"],
  },
  {
    name: "Google Calendar",
    category: "productivity",
    body: "Sync meetings between the CRM and Google Calendar, including demos, site visits and follow-ups.",
    tags: ["google calendar", "meetings"],
  },
  {
    name: "LinkedIn",
    category: "productivity",
    body: "Keep LinkedIn outreach next to the rest of your pipeline.",
    tags: ["linkedin", "b2b"],
  },
  {
    name: "Calendly",
    category: "productivity",
    body: "Turn Calendly bookings into CRM leads, with name, email, phone and time slot attached.",
    tags: ["calendly", "booking", "meetings"],
  },
  {
    name: "WordPress",
    category: "productivity",
    body: "Send WordPress contact form submissions into TracktCRM with field mapping and assignment.",
    tags: ["wordpress", "website", "forms"],
  },
  {
    name: "Shopify",
    category: "commerce",
    body: "Save Shopify customers and orders as CRM contacts so fulfilment and follow-up stay together.",
    tags: ["shopify", "ecommerce"],
  },
  {
    name: "Razorpay",
    category: "commerce",
    body: "See Razorpay payment status against each deal without opening another tab.",
    tags: ["razorpay", "payments"],
  },
  {
    name: "Delhivery",
    category: "commerce",
    body: "Track Delhivery shipments next to the order.",
    tags: ["delhivery", "shipping", "logistics"],
  },
  {
    name: "Shiprocket",
    category: "commerce",
    body: "Keep Shiprocket order status in view as a deal moves from packed to delivered.",
    tags: ["shiprocket", "shipping"],
  },
  {
    name: "Webhooks",
    category: "developer",
    body: "Create a webhook URL, map your website or app fields to lead fields, and send data into TracktCRM in real time.",
    tags: ["webhook", "api", "developer"],
  },
  {
    name: "Custom Forms",
    category: "developer",
    body: "Build branded lead forms, map the fields and embed the link or iframe on any site.",
    href: "/#forms",
    tags: ["forms", "embed", "website"],
  },
];

export const INTEGRATION_POPULAR = [
  "WhatsApp",
  "Razorpay",
  "IndiaMART",
  "99acres",
  "Shopify",
];

export const INTEGRATION_STEPS = [
  {
    n: "01",
    title: "Pick your app",
    body: "Search the catalogue for your lead sources, messaging, ads, payments and workspace tools.",
  },
  {
    n: "02",
    title: "Connect securely",
    body: "Sign in or paste a key, and map the fields. No developer needed for most apps.",
  },
  {
    n: "03",
    title: "Leads flow in",
    body: "Enquiries, messages and orders arrive in TracktCRM, assigned and tracked.",
  },
];

export const CUSTOM_WORK = [
  {
    title: "Custom integrations",
    body: "If your app is not in the catalogue, such as a portal, an in-house tool or another CRM, we can connect it so leads still land in TracktCRM.",
  },
  {
    title: "Custom workflows",
    body: "Assignment rules, field mapping and follow-up logic built around how your team actually sells, not a generic template.",
  },
  {
    title: "Custom forms and webhooks",
    body: "Branded forms, inbound webhooks and one-off data feeds. We map the fields and keep every submission on the right deal.",
  },
];

/** FAQ copy must match schema markup word-for-word. */
export const INTEGRATION_FAQS = [
  {
    q: "Which integrations does TracktCRM have?",
    a: `TracktCRM connects to ${INTEGRATION_APPS.slice(0, -1)
      .map((app) => (app.name === "Webhooks" ? "webhooks" : app.name))
      .join(", ")} and custom forms.`,
  },
  {
    q: "Does TracktCRM integrate with WhatsApp?",
    a: "Yes. TracktCRM is a WhatsApp CRM: two-way chats, templates and history sit on the lead record, so your team never copies and pastes from a phone.",
  },
  {
    q: "Can I capture leads from 99acres, Housing.com and Justdial?",
    a: "Yes. Property portals and Indian marketplaces, including 99acres, Housing.com, MagicBricks, OLX, Justdial and IndiaMART, can send enquiries into your pipeline, each tagged with its source.",
  },
  {
    q: "Does TracktCRM connect with Gmail and Google Calendar?",
    a: "Yes. Gmail threads are logged on the contact, and meetings sync with Google Calendar for demos, site visits and follow-ups.",
  },
  {
    q: "Can I connect Shopify, Razorpay or Shiprocket?",
    a: "Yes. Ecommerce, payment and shipping tools connect to TracktCRM, so order status and payment status sit next to the deal.",
  },
  {
    q: "Does TracktCRM have an API?",
    a: "Webhooks cover inbound data: create a webhook URL, map your fields and send leads from any website or app into TracktCRM in real time. Contact us if you need deeper API access.",
  },
  {
    q: "Do I need a developer to connect apps?",
    a: "No. Most integrations connect with a login or a key. For anything custom, use webhooks or talk to us and we will map the fields for you.",
  },
  {
    q: "How long does it take to connect an integration?",
    a: "Most connections take a few minutes with a login or key. Portal and ad connections may need access from the portal or ad account.",
  },
  {
    q: "What permissions do I give when I connect an app?",
    a: "TracktCRM asks only for the access needed to read leads or send messages, and you can disconnect at any time.",
  },
  {
    q: "What if my tool is not listed?",
    a: "Tell us which app you need. We can build a custom integration or other custom work around TracktCRM, and webhooks can bring in data from most other tools in the meantime.",
  },
  {
    q: "Can you build a custom integration for us?",
    a: "Yes. If you need a custom integration, a one-off workflow or other custom work, contact us or book a demo with the tool you use. We will map how it should land in TracktCRM and send you a quote.",
  },
];
