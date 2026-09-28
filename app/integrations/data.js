export const INTEGRATION_CATEGORIES = [
  {
    id: "messaging",
    label: "Messaging",
    title: "Chat with leads where they already are",
    body: "Run WhatsApp, Instagram and Facebook conversations from inside TracktCRM — every message logged against the right lead.",
  },
  {
    id: "lead-sources",
    label: "Lead sources",
    title: "Auto-capture leads from every marketplace",
    body: "India marketplaces and classifieds feed straight into your pipeline — no copy-paste, no missed enquiries.",
  },
  {
    id: "ads",
    label: "Ads",
    title: "Every ad lead, synced in real time",
    body: "Meta and Google lead forms land in TracktCRM the moment someone submits — assigned, scored and ready to reply.",
  },
  {
    id: "productivity",
    label: "Productivity",
    title: "Keep your workspace in sync",
    body: "Email, calendars, LinkedIn and website tools stay connected so reps never leave the CRM to do the next step.",
  },
  {
    id: "commerce",
    label: "Commerce",
    title: "Connect sales to payments and fulfilment",
    body: "Orders, payment status and shipments sit next to the deal — so you close the loop without another dashboard.",
  },
  {
    id: "developer",
    label: "Developer",
    title: "Connect anything else",
    body: "Use webhooks, custom forms and our API when you need a source that is not listed here.",
  },
];

export const INTEGRATION_APPS = [
  {
    name: "WhatsApp",
    category: "messaging",
    body: "Message leads on WhatsApp without leaving TracktCRM. Two-way chats, templates and history sit on the lead record.",
    href: "/features/whatsapp-crm",
    tags: ["whatsapp", "chat", "messaging"],
  },
  {
    name: "Instagram",
    category: "messaging",
    body: "Turn Instagram DMs and comments into tracked CRM leads instead of losing them in a phone inbox.",
    tags: ["instagram", "dm", "social"],
  },
  {
    name: "Facebook",
    category: "messaging",
    body: "Sync Facebook conversations and lead forms so every enquiry is assigned and followed up.",
    tags: ["facebook", "meta", "lead forms"],
  },
  {
    name: "99acres",
    category: "lead-sources",
    body: "Capture property buyer enquiries from 99acres automatically into your real estate pipeline.",
    href: "/industries/real-estate-crm",
    tags: ["99acres", "real estate", "portal"],
  },
  {
    name: "Housing.com",
    category: "lead-sources",
    body: "Import Housing.com listing leads without lifting a finger — they land ready for a site-visit follow-up.",
    href: "/industries/real-estate-crm",
    tags: ["housing", "real estate", "portal"],
  },
  {
    name: "MagicBricks",
    category: "lead-sources",
    body: "Sync MagicBricks property enquiries to TracktCRM so no listing lead sits unanswered.",
    href: "/industries/real-estate-crm",
    tags: ["magicbricks", "real estate", "portal"],
  },
  {
    name: "OLX",
    category: "lead-sources",
    body: "Bring OLX classified leads into your pipeline the moment a buyer enquires.",
    href: "/industries/real-estate-crm",
    tags: ["olx", "classifieds"],
  },
  {
    name: "Justdial",
    category: "lead-sources",
    body: "Pull Justdial enquiries straight into TracktCRM and assign them to the right rep.",
    tags: ["justdial", "marketplace"],
  },
  {
    name: "IndiaMART",
    category: "lead-sources",
    body: "Auto-capture buyer enquiries from IndiaMART so B2B leads never wait in email.",
    tags: ["indiamart", "b2b", "marketplace"],
  },
  {
    name: "TradeIndia",
    category: "lead-sources",
    body: "Bring TradeIndia buyer enquiries into your pipeline with source tracking attached.",
    tags: ["tradeindia", "b2b"],
  },
  {
    name: "Practo",
    category: "lead-sources",
    body: "Capture clinic and appointment enquiries from Practo and follow up while they are still warm.",
    tags: ["practo", "healthcare", "clinic"],
  },
  {
    name: "Meta",
    category: "ads",
    body: "Receive Meta lead ads and Instant Form submissions in real time — Facebook and Instagram included.",
    tags: ["meta", "facebook ads", "instagram ads"],
  },
  {
    name: "Google Ads",
    category: "ads",
    body: "Google Ads and lead form submissions flow into TracktCRM, attributed to the campaign that created them.",
    tags: ["google ads", "pmax", "lead forms"],
  },
  {
    name: "Gmail",
    category: "productivity",
    body: "Send and log Gmail threads against every contact so email history lives with the deal.",
    tags: ["gmail", "email", "google"],
  },
  {
    name: "Google Calendar",
    category: "productivity",
    body: "Two-way sync CRM meetings with Google Calendar — site visits, demos and follow-ups stay on one timeline.",
    tags: ["google calendar", "meetings"],
  },
  {
    name: "LinkedIn",
    category: "productivity",
    body: "Capture LinkedIn conversations and InMail so B2B outreach is tracked next to the rest of the pipeline.",
    tags: ["linkedin", "b2b"],
  },
  {
    name: "Calendly",
    category: "productivity",
    body: "Sync Calendly bookings as CRM leads — name, email, phone and slot attached automatically.",
    tags: ["calendly", "booking", "meetings"],
  },
  {
    name: "WordPress",
    category: "productivity",
    body: "Route WordPress contact-form submissions into TracktCRM with field mapping and assignment.",
    tags: ["wordpress", "website", "forms"],
  },
  {
    name: "Shopify",
    category: "commerce",
    body: "Capture Shopify orders and customers as CRM contacts so fulfilment and follow-up stay together.",
    tags: ["shopify", "ecommerce"],
  },
  {
    name: "Razorpay",
    category: "commerce",
    body: "Collect payments and see Razorpay status against every deal — no tab-hopping to reconcile.",
    tags: ["razorpay", "payments"],
  },
  {
    name: "Delhivery",
    category: "commerce",
    body: "Track Delhivery shipments next to the order so support and sales share the same status.",
    tags: ["delhivery", "shipping", "logistics"],
  },
  {
    name: "Shiprocket",
    category: "commerce",
    body: "Keep Shiprocket order fulfilment in view as deals move — from packed to delivered.",
    tags: ["shiprocket", "shipping"],
  },
  {
    name: "Webhooks",
    category: "developer",
    body: "Generate a webhook URL, map website or app fields to leads, and push data into TracktCRM in real time.",
    tags: ["webhook", "api", "developer"],
  },
  {
    name: "Custom Forms",
    category: "developer",
    body: "Build branded lead forms, map fields to the CRM, then embed the link or iframe on any site.",
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
    body: "Search the catalogue — lead sources, WhatsApp, ads, payments and more — and find the tools you already run.",
  },
  {
    n: "02",
    title: "Connect securely",
    body: "Sign in or paste a key. OAuth, webhooks and field mapping handle the rest — no developer required.",
  },
  {
    n: "03",
    title: "Leads flow in",
    body: "Every enquiry, message and order lands in TracktCRM automatically — assigned, tracked and ready to close.",
  },
];

export const INTEGRATION_FAQS = [
  {
    q: "Does TracktCRM integrate with WhatsApp?",
    a: "Yes. TracktCRM is a WhatsApp CRM: two-way chats, templates and history sit on the lead record so your team never copy-pastes from a phone.",
  },
  {
    q: "Can I capture leads from 99acres, Housing.com and Justdial?",
    a: "Yes. Property portals and India marketplaces including 99acres, Housing.com, MagicBricks, OLX, Justdial and IndiaMART can flow into your pipeline in real time.",
  },
  {
    q: "Does TracktCRM connect with Gmail and Google Calendar?",
    a: "Yes. Gmail threads log against the contact, and Google Calendar stays in two-way sync for demos, site visits and follow-ups.",
  },
  {
    q: "Can I connect Shopify, Razorpay or Shiprocket?",
    a: "Yes. Ecommerce, payments and fulfilment tools plug into TracktCRM so order status and payment state sit next to the deal.",
  },
  {
    q: "Do I need a developer to connect apps?",
    a: "No. Most integrations connect with a login or a key. For anything custom, use webhooks or talk to us — we will map the fields for you.",
  },
  {
    q: "What if my tool is not listed?",
    a: "Tell us which app you need. Popular requests jump the roadmap, and webhooks plus Zapier-style automation cover thousands of other tools in the meantime.",
  },
];
