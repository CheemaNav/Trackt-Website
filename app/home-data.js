export const FEATURES = [
  {
    id: "pipeline",
    label: "Sales Pipeline Management",
    title: "Sales Pipeline Management",
    body: "Customise your stages to match how you actually close deals. See every deal, every owner and every next step in one pipeline view.",
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
    body: "Manage and organise every lead in one place. Website forms, WhatsApp, ads, calls and referrals are captured automatically, de-duplicated and assigned to the right rep - so no enquiry is missed.",
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
    body: "Automated follow-ups, reminders and multi-channel outreach keep every lead moving - without a rep having to remember to chase it.",
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
    title: "Reporting & Analytics",
    body: "Live rep scorecards, source-level ROI and pipeline health - no manual spreadsheet pulls at month-end.",
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
    title: "Custom Forms",
    body: "Build branded lead forms without a developer. Drag fields into place, they map to your CRM automatically, then embed the form on any site.",
    chips: ["Drag & drop builder", "Auto field mapping", "Embed anywhere"],
    screen: "TracktCRM form builder",
  },
  {
    id: "integrations",
    label: "Integrations",
    title: "CRM Integrations",
    body: "Connects with WhatsApp, Gmail, Google Calendar, Meta & Google Ads, 99acres, Housing.com, OLX, Shopify, Shiprocket and an open API.",
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
  "real estate",
  "education",
  "automotive",
  "insurance",
  "retail",
  "SaaS",
  "events",
  "freelancers",
  "and more",
];

export const LOGO_ROW = [
  "Navshakti",
  "Optimum Finserve",
  "ZebraLearn",
  "Bharat Weaves",
  "Sunrise Realty",
  "Kaya Clinics",
  "Greenleaf",
  "Nova Interiors",
];

export const SPEED_POINTS = [
  "You set the tone, script and hand-off rules - the AI sales assistant never goes off-script.",
  "Calls are recorded, transcribed and summarised straight onto the lead record.",
  "Reps pick up mid-conversation with full context, not a cold trail.",
];

export const TIMELINE = [
  { at: "0s", title: "Lead arrives", sub: "Form, WhatsApp, ad or missed call - captured and scored" },
  { at: "2s", title: "WhatsApp + email out", sub: "Personalised with the enquiry details" },
  { at: "8s", title: "SMS backup", sub: "For leads who never open email" },
  { at: "45s", title: "Follow-up call placed", sub: "While the enquiry is still warm" },
  { at: "2m", title: "Handed to a rep", sub: "With transcript, source and next action attached" },
];

export const INDUSTRIES = [
  {
    name: "Real Estate CRM",
    body: "Property enquiries arrive from a dozen portals at once. TracktCRM is a real estate CRM that captures each lead instantly, books the site visit and tracks every broker, unit and deal in one sales pipeline.",
    points: ["Site-visit scheduling", "Channel-partner tracking", "Inventory & availability"],
    href: "/real-estate-crm",
  },
  {
    name: "Freelancer CRM",
    body: "Solo work dies in spreadsheets. TracktCRM is the CRM for freelancers who don't have time to run a CRM - track enquiries, send quotes, and get reminded to follow up automatically.",
    points: ["Enquiry to quote", "Automated reminders", "Invoice status tracking"],
    href: "#industries",
  },
  {
    name: "Agency CRM",
    body: "Agencies and consultants juggle pitches, retainers and referrals across tools. TracktCRM keeps proposals, client conversations and renewals in one lead management dashboard - built for agencies and consultants alike.",
    points: ["Proposal pipeline", "Retainer renewals", "Client conversation history"],
    href: "#industries",
  },
  {
    name: "Education CRM",
    body: "Admissions teams lose applicants to slow replies. TracktCRM assigns each enquiry to a counsellor, automates follow-ups and shows every applicant's admission stage live.",
    points: ["Counsellor allocation", "Admission-stage pipeline", "Fee follow-up reminders"],
    href: "#industries",
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
    title: "AI Catalog Design",
    body: "Create stunning product catalogs from your images in seconds, not hours. Just upload, pick a style, and let AI do the rest",
    icon: "/assets/ai/ai-icon-catalog.svg",
  },
  {
    title: "AI-Powered Reports",
    body: "Get instant insights and smart summaries across your sales, inventory & tasks. No manual number-crunching needed",
    icon: "/assets/ai/ai-icon-reports.svg",
  },
];

export const QUOTES = [
  {
    text: "Our response time went from four hours to under a minute. That alone changed our close rate. TracktCRM is easy to use and the team keeps everything organised.",
    name: "Bhairav Shah",
    initials: "BS",
    color: "#7B3FF2",
    stars: 5,
  },
  {
    text: "Every enquiry, call and quote sits on one screen. Monday reviews take fifteen minutes now. The platform is easy to use and support has been very responsive.",
    name: "Shubhajit Maji",
    initials: "SM",
    color: "#1A8A4A",
    stars: 5,
  },
  {
    text: "We moved twelve reps across three branches onto TracktCRM in a week, with zero data loss. Follow-ups finally happen on time and the pipeline is actually accurate.",
    name: "Anurag Sundarka",
    initials: "AS",
    color: "#12B5CB",
    stars: 5,
  },
  {
    text: "I've been using TracktCRM for a while now and honestly had a really great experience. The platform is easy to use, helps keep everything organized, and the support team has been very responsive whenever needed.",
    name: "Himanshi Bhola",
    initials: "HB",
    color: "#7B3FF2",
    stars: 5,
  },
  {
    text: "TracktCRM support team takes quick actions to resolve your query. Lead capture from WhatsApp and ads is instant, so our reps never miss a warm enquiry.",
    name: "Yogita Mangal",
    initials: "YM",
    color: "#1A8A4A",
    stars: 5,
  },
  {
    text: "This system is easy to pick up in a few days and it has made it simple to track leads and run automated follow-ups. Exactly what a small sales team needs.",
    name: "Ajay Chauhan",
    initials: "AC",
    color: "#6B8F71",
    stars: 5,
  },
];

export const STEPS = [
  { n: "01", title: "Book a demo", body: "A 30-minute call where we map your current lead flow." },
  { n: "02", title: "We configure it", body: "Pipelines, stages, sources and rules set up for your process." },
  { n: "03", title: "Onboard your team", body: "Training for reps and managers, plus data migration." },
  { n: "04", title: "Watch it compound", body: "Faster replies, cleaner data, better forecasts every month." },
];

export const FAQS = [
  { q: "What is TracktCRM?", a: "TracktCRM is AI-powered CRM software for sales teams. It captures leads from every channel, organises them in one lead management dashboard, and tracks each deal through a customisable sales pipeline. Everything - contacts, conversations, tasks and reporting - lives in a single place." },
  { q: "How does TracktCRM help increase sales?", a: "It removes the two things that lose deals: slow replies and forgotten follow-ups. TracktCRM answers new leads automatically, reminds reps of every next step, and shows exactly which pipeline stage is leaking revenue so you can fix it early." },
  { q: "Is TracktCRM good for small businesses?", a: "Yes. TracktCRM is built for small businesses, agencies, freelancers and growing sales teams who want proper lead management without enterprise pricing. There is nothing to configure on day one - pick a pipeline template and start selling." },
  { q: "Does TracktCRM offer a free trial?", a: "Yes. Every feature is available on a free 1 month trial with no credit card required. You can import your existing leads, run your real sales pipeline, and decide afterwards." },
  { q: "What integrations does TracktCRM support?", a: "TracktCRM connects with WhatsApp, Gmail and other email, Google Calendar, Meta and Google Ads, Shopify, payment tools and Zapier. An open CRM API and webhooks cover anything custom your team needs." },
  { q: "How do I get started with TracktCRM?", a: "Start your free trial or book a demo and our team maps your current lead flow. We set up your pipeline stages, sources and users, migrate your spreadsheet or old CRM data, and most teams are live within a week." },
  { q: "Is TracktCRM a good Pipedrive alternative?", a: "Yes. TracktCRM includes AI-powered lead response, WhatsApp automation and industry-ready pipelines that Pipedrive doesn't offer natively - at a lower price point, with data migration support if you're switching." },
  { q: "Does TracktCRM work as a real estate CRM?", a: "Yes. TracktCRM includes ready-made pipelines for site-visit scheduling, channel-partner tracking and unit/inventory management - built specifically for how real estate teams sell." },
];

export const FOOTER_COLS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#top" },
      { label: "Contact", href: "/#demo" },
      { label: "Blog", href: "/#top" },
      { label: "Partner with us", href: "/#demo" },
      { label: "Help Center", href: "/#faq" },
      { label: "Privacy Policy", href: "/#top" },
      { label: "Terms & Conditions", href: "/#top" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#product" },
      { label: "AI CRM Software", href: "/#speed" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Custom Forms", href: "/#forms" },
      { label: "Pricing", href: "/#demo" },
      { label: "Open API", href: "/#integrations" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Lead Management Software", href: "/#product" },
      { label: "Sales Pipeline Management", href: "/#product" },
      { label: "Sales Automation", href: "/#speed" },
      { label: "Reporting & Analytics", href: "/#product" },
      { label: "AI Sales Assistant", href: "/#speed" },
      { label: "Follow-up Reminders", href: "/#speed" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Real Estate CRM", href: "/real-estate-crm" },
      { label: "Best CRM for Freelancers", href: "/#industries" },
      { label: "Agency CRM", href: "/#industries" },
      { label: "CRM for Consultants", href: "/#industries" },
      { label: "Education CRM", href: "/#industries" },
      { label: "CRM for Small Business", href: "/#compare" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Pipedrive Alternative", href: "/#compare" },
      { label: "Affordable CRM Alternative", href: "/#compare" },
      { label: "CRM vs Spreadsheets", href: "/#compare" },
      { label: "Switch from your CRM", href: "/#compare" },
    ],
  },
];
