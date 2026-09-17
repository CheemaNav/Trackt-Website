export const PROBLEM_POINTS = [
  "Enquiries from 99acres, MagicBricks, Housing.com, your website and WhatsApp all land in one inbox - no manual copy-paste",
  "Site visits get scheduled and confirmed automatically, so leads don't go cold waiting for a callback",
  "Brokers and channel partners get their own login - no more tracking referrals in a spreadsheet",
  "Every unit, tower and project has live availability, so no one sells a flat that's already booked",
];

export const FEATURES = [
  {
    icon: "capture",
    title: "Portal & Multi-Channel Lead Capture",
    body: "Every enquiry - from property portals, your website, Meta/Google ads, or a WhatsApp message - is captured automatically and assigned to the right agent based on project, location or team rotation.",
  },
  {
    icon: "visit",
    title: "Site-Visit Scheduling",
    body: "Leads can book a site visit directly from a WhatsApp or email link. Confirmations and reminders go out automatically, and no-shows are flagged for a follow-up call.",
  },
  {
    icon: "broker",
    title: "Channel-Partner & Broker Management",
    body: "Give brokers their own dashboard to submit leads, track commission status and see deal stage - without giving them access to your full CRM.",
  },
  {
    icon: "inventory",
    title: "Inventory & Availability Tracking",
    body: "See every unit, tower, floor and price point live. Agents always quote from real-time availability, so nothing gets oversold.",
  },
  {
    icon: "pipeline",
    title: "Sales Pipeline by Project",
    body: "Run separate pipelines per project or launch, while still seeing a rolled-up view across your whole portfolio.",
  },
];

export const PIPELINE_STAGES = [
  {
    name: "Enquiry",
    count: 24,
    cards: [
      { t: "Meera Raval", v: "2 BHK · Skyline Towers" },
      { t: "Arjun Mehta", v: "3 BHK · Palm Residency" },
    ],
  },
  {
    name: "Site Visit",
    count: 15,
    cards: [
      { t: "Ronak Textiles", v: "Shop 14 · Riverside Mall" },
      { t: "Divya Nair", v: "4 BHK · Palm Residency" },
    ],
  },
  {
    name: "Negotiation",
    count: 9,
    cards: [
      { t: "Aarav Builders", v: "Tower B · Skyline Towers" },
      { t: "Zenith IT", v: "Office 302 · Riverside Mall" },
    ],
  },
  {
    name: "Booked",
    count: 6,
    cards: [
      { t: "Priya Kapoor", v: "3 BHK · Palm Residency" },
      { t: "Vikram Joshi", v: "2 BHK · Skyline Towers" },
    ],
  },
  {
    name: "Registered",
    count: 4,
    cards: [
      { t: "Sana Kapoor", v: "4 BHK · Palm Residency" },
      { t: "Rahul Iyer", v: "Shop 6 · Riverside Mall" },
    ],
  },
];

export const BROKER_POINTS = [
  "Their own login to submit and track leads",
  "Visibility into deal stage, without seeing your full pipeline",
  "Automated commission-status updates, so they stop calling to ask “any update?”",
];

export const TESTIMONIAL = {
  quote:
    "TracktCRM cut our lead response time from hours to minutes. Our channel partners finally have visibility into their deals without calling us every day.",
  attribution: "Name, Title, Brokerage/Developer name",
};

export const RE_FAQS = [
  {
    q: "Can I track multiple projects or listings?",
    a: "Yes. TracktCRM lets you run a separate pipeline per project or launch, while still seeing all deals rolled up in one portfolio view.",
  },
  {
    q: "Does it integrate with property portals?",
    a: "TracktCRM captures leads from 99acres, MagicBricks, Housing.com and other major portals, along with your website forms and WhatsApp, into a single inbox.",
  },
  {
    q: "Can channel partners get their own logins?",
    a: "Yes. Brokers and channel partners get a restricted dashboard to submit leads and track commission status, without access to your full CRM.",
  },
  {
    q: "Is TracktCRM only for developers, or does it work for individual agents too?",
    a: "Both. TracktCRM scales from a single agent managing a handful of listings to a developer sales team running multiple projects at once.",
  },
  {
    q: "How long does setup take?",
    a: "Most real estate teams are live within a day - portal integrations and WhatsApp connect without any technical setup.",
  },
];
