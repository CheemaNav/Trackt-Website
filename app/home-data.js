export const FEATURES = [
  {
    id: "pipeline",
    label: "Sales Pipeline Management",
    title: "Sales Pipeline Management",
    body: "Set up stages the way your team actually closes deals. Every deal, owner and next step is visible on one drag-and-drop board.",
    chips: ["Custom stages", "Drag & drop", "Deal forecasting"],
    screen: "TracktCRM sales pipeline view",
    metrics: [
      { v: "₹4.2Cr", k: "open value" },
      { v: "34%", k: "win rate" },
      { v: "18d", k: "avg. cycle" },
      { v: "63", k: "deals" },
    ],
    columns: [
      {
        name: "Proposal",
        count: 11,
        cards: [
          { t: "Sunrise Realty", v: "₹18.5L", w: "60%" },
          { t: "Nova Interiors", v: "₹6.2L", w: "45%" },
        ],
      },
      {
        name: "Negotiation",
        count: 7,
        cards: [
          { t: "Bharat Weaves", v: "₹32L", w: "82%" },
          { t: "Kaya Clinics", v: "₹9.4L", w: "74%" },
        ],
      },
      {
        name: "Closing",
        count: 4,
        cards: [
          { t: "Optimum Finserve", v: "₹21L", w: "94%" },
          { t: "Greenleaf Farms", v: "₹5.8L", w: "88%" },
        ],
      },
    ],
    bars: [44, 40, 58, 52, 70, 64, 78, 72, 86, 80],
  },
  {
    id: "leads",
    label: "Lead Management Software",
    title: "Lead Management Software",
    body: "Leads from forms, WhatsApp, ads and missed calls land in one dashboard. They are assigned to the right person and scored on arrival, so nothing sits unnoticed.",
    chips: ["Auto-assignment", "Lead scoring", "Source tracking"],
    screen: "TracktCRM lead management dashboard",
    metrics: [
      { v: "412", k: "new leads" },
      { v: "8s", k: "first reply" },
      { v: "97%", k: "contacted" },
      { v: "11", k: "sources" },
    ],
    columns: [
      {
        name: "New",
        count: 14,
        cards: [
          { t: "Meera Raval", v: "Website form · 2m ago", w: "22%" },
          { t: "Kunal Shah", v: "WhatsApp · 6m ago", w: "18%" },
        ],
      },
      {
        name: "Contacted",
        count: 22,
        cards: [
          { t: "Ronak Textiles", v: "Called · yesterday", w: "48%" },
          { t: "Divya Nair", v: "Quote sent", w: "55%" },
        ],
      },
      {
        name: "Qualified",
        count: 9,
        cards: [
          { t: "Aarav Builders", v: "Site visit booked", w: "78%" },
          { t: "Zenith IT", v: "Demo done", w: "70%" },
        ],
      },
    ],
    bars: [38, 52, 44, 66, 58, 72, 61, 84, 70, 92],
  },
  {
    id: "automation",
    label: "Sales Automation",
    title: "Sales Automation",
    body: "Instant replies, follow-up reminders and task scheduling run on their own. Your team spends time talking to buyers instead of chasing spreadsheets.",
    chips: ["Automated follow-ups", "Task reminders", "Workflow rules"],
    screen: "TracktCRM sales automation workflow",
    metrics: [
      { v: "1,204", k: "touches" },
      { v: "0", k: "overdue" },
      { v: "92%", k: "on time" },
      { v: "3.1", k: "touch/lead" },
    ],
    columns: [
      {
        name: "Today",
        count: 18,
        cards: [
          { t: "Auto call task - Meera", v: "10:30 AM", channel: "call" },
          { t: "WhatsApp sequence", v: "12:00 PM", channel: "whatsapp" },
        ],
      },
      {
        name: "This week",
        count: 34,
        cards: [
          { t: "Quote follow-up", v: "Thu · Ronak Textiles", channel: "email" },
          { t: "Meeting recap email", v: "Fri · Aarav", channel: "email" },
        ],
      },
      {
        name: "Snoozed",
        count: 6,
        cards: [
          { t: "Zenith IT", v: "Reopen in 10 days", channel: "snooze" },
          { t: "Priya Kapoor", v: "Budget next quarter", channel: "snooze" },
        ],
      },
    ],
    bars: [70, 62, 74, 55, 80, 68, 88, 76, 90, 84],
  },
  {
    id: "reports",
    label: "Reporting & Analytics",
    title: "Reporting and Analytics",
    body: "See performance by rep, lead source and pipeline stage. It is easy to spot where deals are getting stuck.",
    chips: ["Live dashboards", "Revenue tracking", "Source ROI"],
    screen: "TracktCRM reporting and analytics dashboard",
    metrics: [
      { v: "₹92L", k: "closed MTD" },
      { v: "+21%", k: "vs last month" },
      { v: "12", k: "reps" },
      { v: "4", k: "branches" },
    ],
    columns: [
      {
        name: "By rep",
        count: 12,
        cards: [
          { t: "Nisha D.", v: "₹28L closed", w: "90%" },
          { t: "Arjun M.", v: "₹19L closed", w: "64%" },
        ],
      },
      {
        name: "By source",
        count: 11,
        cards: [
          { t: "Meta ads", v: "38% conversion", w: "76%" },
          { t: "IndiaMART", v: "24% conversion", w: "48%" },
        ],
      },
      {
        name: "By branch",
        count: 4,
        cards: [
          { t: "Surat", v: "₹41L", w: "85%" },
          { t: "Pune", v: "₹22L", w: "52%" },
        ],
      },
    ],
    bars: [30, 46, 40, 62, 55, 74, 66, 82, 78, 96],
  },
  {
    id: "forms",
    label: "Custom Forms",
    title: "Custom Lead Forms",
    body: "Build a form, choose the pipeline and owner, and embed it on any website. Submissions go straight into your CRM.",
    chips: ["Drag & drop builder", "Auto field mapping", "Embed anywhere"],
    screen: "TracktCRM form builder",
  },
  {
    id: "integrations",
    label: "Integrations",
    title: "CRM Integrations",
    body: "Connect WhatsApp, Gmail, Google Calendar, Meta and Google Ads, 99acres, Housing.com, Shopify and Razorpay.",
    chips: ["WhatsApp API", "Portals & ads", "Open API"],
    screen: "TracktCRM integrations settings",
    metrics: [
      { v: "40+", k: "integrations" },
      { v: "2 min", k: "to connect" },
      { v: "100%", k: "two-way sync" },
      { v: "0", k: "code needed" },
    ],
    columns: [
      {
        name: "Messaging",
        count: 6,
        cards: [
          { t: "WhatsApp", v: "Two-way sync", w: "100%", brand: "WhatsApp" },
          { t: "Gmail", v: "Threads on record", w: "90%", brand: "Gmail" },
          { t: "Google Calendar", v: "Meetings synced", w: "86%", brand: "Google Calendar" },
          { t: "Instagram", v: "DMs & comments", w: "82%", brand: "Instagram" },
          { t: "Facebook", v: "Lead forms sync", w: "78%", brand: "Facebook" },
          { t: "LinkedIn", v: "InMail capture", w: "70%", brand: "LinkedIn" },
        ],
      },
      {
        name: "Lead sources",
        count: 6,
        cards: [
          { t: "Meta & Google Ads", v: "Instant capture", w: "88%", brand: "Meta & Google Ads" },
          { t: "99acres", v: "Portal enquiries", w: "84%", brand: "99acres" },
          { t: "Housing.com", v: "Listing leads", w: "80%", brand: "Housing.com" },
          { t: "OLX", v: "Classified leads", w: "76%", brand: "OLX" },
          { t: "Justdial", v: "Enquiry sync", w: "74%", brand: "Justdial" },
          { t: "Practo", v: "Clinic enquiries", w: "72%", brand: "Practo" },
        ],
      },
      {
        name: "Business",
        count: 4,
        cards: [
          { t: "Shopify", v: "Orders & customers", w: "80%", brand: "Shopify" },
          { t: "Razorpay", v: "Payment status", w: "64%", brand: "Razorpay" },
          { t: "Delhivery", v: "Shipment tracking", w: "58%", brand: "Delhivery" },
          { t: "Shiprocket", v: "Order fulfilment", w: "62%", brand: "Shiprocket" },
        ],
      },
    ],
    bars: [36, 50, 46, 58, 64, 70, 76, 80, 88, 92],
  },
];

export const HERO_WORDS = [
  "real estate teams",
  "education",
  "automotive",
  "insurance",
  "SaaS",
  "agencies",
  "freelancers",
];

export const LOGO_ROW = [
  { name: "Coursely", src: "/assets/clients/coursely.webp", width: 228, height: 120 },
  { name: "On Road Driving School", src: "/assets/clients/on-road-driving-school.webp", width: 155, height: 120 },
  { name: "Task Canada Immigration", src: "/assets/clients/task-canada-immigration.webp", width: 382, height: 120 },
  { name: "My Transition Team", src: "/assets/clients/my-transition-team.webp", width: 433, height: 87 },
  { name: "Arch Referrals", src: "/assets/clients/arch-referrals.webp", width: 300, height: 120 },
  { name: "Gaudium", src: "/assets/clients/gaudium.webp", width: 295, height: 55 },
  { name: "Frill Thrills", src: "/assets/clients/frill-thrills.webp", width: 199, height: 68 },
];

export const SPEED_POINTS = [
  "You decide the tone, script and hand-off rules.",
  "Calls are recorded, transcribed and summarised on the lead record.",
  "Reps start with context, not a blank screen.",
];

export const TIMELINE = [
  { at: "0s", title: "Lead arrives", sub: "From a form, WhatsApp, an ad or a missed call" },
  { at: "2s", title: "WhatsApp and email sent", sub: "Personalised with the enquiry details" },
  { at: "8s", title: "SMS backup", sub: "For leads who never open email" },
  { at: "45s", title: "Follow-up call", sub: "While the buyer is still interested" },
  { at: "2m", title: "Handed to a rep", sub: "With the transcript and lead source attached" },
];

export const INDUSTRIES = [
  {
    name: "Real Estate CRM in India",
    body: "Property enquiries come from many portals at once. TracktCRM pulls them into one place, books site visits, tracks channel partners and keeps inventory visible.",
    points: ["Site-visit scheduling", "Channel-partner tracking", "Inventory & availability"],
    href: "/industries/real-estate-crm",
  },
  {
    name: "CRM for Education",
    body: "Assign each enquiry to a counsellor, follow every admission stage and remind families about fees.",
    points: ["Counsellor allocation", "Admission-stage pipeline", "Fee follow-up reminders"],
    href: "/industries/education-crm",
  },
  {
    name: "Agency CRM",
    body: "Pitches, retainers and client chats scattered across inboxes. TracktCRM tracks every proposal, renewal and client conversation in one pipeline.",
    points: ["Proposal pipeline", "Retainer renewal tracking", "Client conversation history"],
    href: "/industries/crm-for-agencies",
  },
  {
    name: "Recruitment CRM",
    body: "Candidates in one sheet, client roles in another. TracktCRM tracks both side by side, reaches candidates on WhatsApp and reminds recruiters to follow up.",
    points: ["Candidate pipeline", "Client pipeline", "Follow-up reminders"],
    href: "/industries/crm-for-recruitment",
  },
];

export const COMPARE = [
  { old: "Leads sit in an inbox for hours before anyone replies", new: "Answered on WhatsApp, Email and SMS within seconds" },
  { old: "Data re-entered across three or four disconnected tools", new: "One dashboard for leads, deals, calls and reporting" },
  { old: "Follow-ups remembered from memory and sticky notes", new: "Every touchpoint scheduled, logged and reminded" },
  { old: "Team performance is a guess, or a monthly sheet pull", new: "Live rep scorecards and source-level ROI" },
  { old: "One rigid pipeline forced onto every team", new: "Custom pipelines and stages per team, from day one" },
];

export const INTEGRATIONS = [
  "",
  "",
  "Meta & Google Ads",
  "Gmail",
  "Google Calendar",
  "",
  "WhatsApp",
  "99acres",
  "",
  "",
  "Instagram",
  "Housing.com",
  "OLX",
  "Shopify",
  "",
  "",
  "LinkedIn",
  "Practo",
  "",
  "Razorpay",
  "Shiprocket",
  "Facebook",
  "",
  "",
];

export const AI_FEATURES = [
  {
    title: "AI Lead Response",
    body: "Every new enquiry gets a personalised reply within seconds, using the details the lead submitted.",
    icon: "/assets/ai/ai-icon-reply.svg",
  },
  {
    title: "AI Call Summaries",
    body: "Calls are recorded, transcribed and summarised on the lead, so nobody has to write notes by hand.",
    icon: "/assets/ai/ai-icon-call.svg",
  },
  {
    title: "AI-Powered Reports",
    body: "Get quick summaries of sales, pipeline movement and team activity without building reports yourself.",
    icon: "/assets/ai/ai-icon-reports.svg",
  },
];

export const STEPS = [
  { n: "01", title: "Book a demo", body: "A 30-minute call to map how your leads come in today." },
  { n: "02", title: "We set it up", body: "Pipelines, stages, sources and rules built around your process." },
  { n: "03", title: "Onboard your team", body: "Training for reps and managers, plus data migration." },
  { n: "04", title: "Go live", body: "Most teams are working in TracktCRM within a week." },
];

export const FAQS = [
  { q: "What is TracktCRM?", a: "TracktCRM is AI-powered CRM software for sales teams. It captures leads from every channel, organises them in one lead management dashboard, and tracks each deal through a customisable sales pipeline. Everything - contacts, conversations, tasks and reporting - lives in a single place." },
  { q: "How does TracktCRM help increase sales?", a: "It removes the two things that lose deals: slow replies and forgotten follow-ups. TracktCRM answers new leads automatically, reminds reps of every next step, and shows exactly which pipeline stage is leaking revenue so you can fix it early." },
  { q: "Is TracktCRM good for small businesses?", a: "Yes. TracktCRM is built for small businesses, agencies, freelancers and growing sales teams who want proper lead management without enterprise pricing. There is nothing to configure on day one - pick a pipeline template and start selling." },
  { q: "Does TracktCRM offer a free trial?", a: "Yes. Every feature is available on a free 1 month trial with no credit card required. You can import your existing leads, run your real sales pipeline, and decide afterwards." },
  { q: "What integrations does TracktCRM support?", a: "TracktCRM connects with WhatsApp, Gmail, Google Calendar, Meta and Google Ads, India marketplaces, Shopify, Razorpay, shipping tools and webhooks. Browse the full catalogue on the integrations page, or ask us to add a tool you do not see." },
  { q: "How do I get started with TracktCRM?", a: "Start your free trial or book a demo and our team maps your current lead flow. We set up your pipeline stages, sources and users, migrate your spreadsheet or old CRM data, and most teams are live within a week." },
  { q: "Is TracktCRM a good Pipedrive alternative?", a: "Yes. TracktCRM offers built-in WhatsApp automation, AI lead replies and pipelines made for Indian businesses at a lower price, with data migration support if you are switching." },
  { q: "Does TracktCRM work as a real estate CRM?", a: "Yes. TracktCRM includes ready-made pipelines for site-visit scheduling, channel-partner tracking and unit/inventory management - built specifically for how real estate teams sell." },
  { q: "What is a WhatsApp CRM?", a: "A WhatsApp CRM connects your WhatsApp chats to lead records. It automates replies and follow-ups and gives the whole team one shared inbox, so conversations are not stuck on one person's phone." },
  { q: "Which is the best CRM for a small business in India?", a: "Look for one that is quick to set up, works with WhatsApp and Indian portals like 99acres, and does not need a large budget or a consultant. TracktCRM is built for that kind of team." },
  { q: "How much does CRM software cost in India?", a: "TracktCRM plans are priced by seats, channels and volume, with quotes in INR or USD. Every feature is free for the first month, with no credit card needed." },
];

export const FOOTER_COLS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "/help" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "CRM Software", href: "/crm-software" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Contact / Demo", href: "/contact" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "AI CRM", href: "/industries/ai-crm" },
      { label: "WhatsApp CRM", href: "/features/whatsapp-crm" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Real Estate CRM", href: "/industries/real-estate-crm" },
      { label: "Education CRM", href: "/industries/education-crm" },
      { label: "Agency CRM", href: "/industries/crm-for-agencies" },
      { label: "Recruitment CRM", href: "/industries/crm-for-recruitment" },
      { label: "Insurance CRM", href: "/industries/crm-for-insurance" },
      { label: "Automotive CRM", href: "/industries/crm-for-automotive" },
      { label: "Healthcare CRM", href: "/industries/crm-for-healthcare" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Pipedrive Alternative", href: "/pipedrive-alternative" },
    ],
  },
];
