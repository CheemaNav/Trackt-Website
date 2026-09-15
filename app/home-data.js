export const FEATURES = [
  {
    id: "leads",
    label: "Lead Management Software",
    title: "Lead Management Software",
    body: "Manage and organise every lead in one place. Website forms, WhatsApp, ads, calls and referrals are captured automatically, de-duplicated and assigned to the right rep.",
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
    id: "pipeline",
    label: "Sales Pipeline Management",
    title: "Sales Pipeline Management",
    body: "Customisable pipeline stages with drag-and-drop deal tracking. Run a separate sales pipeline per team, forecast by month, and see where revenue is stuck.",
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
    id: "automation",
    label: "Sales Automation",
    title: "Sales Automation",
    body: "Automated follow-ups and reminders keep every lead warm. Set the rules once and TracktCRM sends the message, books the task and nudges the rep before a deal goes cold.",
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
          { t: "Auto call task — Meera", v: "10:30 AM", w: "40%" },
          { t: "WhatsApp sequence", v: "12:00 PM", w: "30%" },
        ],
      },
      {
        name: "This week",
        count: 34,
        cards: [
          { t: "Quote follow-up", v: "Thu · Ronak Textiles", w: "62%" },
          { t: "Meeting recap email", v: "Fri · Aarav", w: "50%" },
        ],
      },
      {
        name: "Snoozed",
        count: 6,
        cards: [
          { t: "Zenith IT", v: "Reopen in 10 days", w: "20%" },
          { t: "Priya Kapoor", v: "Budget next quarter", w: "15%" },
        ],
      },
    ],
    bars: [70, 62, 74, 55, 80, 68, 88, 76, 90, 84],
  },
  {
    id: "reports",
    label: "Reporting & Analytics",
    title: "Reporting & Analytics",
    body: "Real-time dashboards and revenue tracking. See rep performance, source ROI and stage conversion live, so sales reviews run on numbers instead of opinions.",
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
    id: "integrations",
    label: "Integrations",
    title: "CRM Integrations",
    body: "Connect WhatsApp, email, calendar, billing and lead sources in a couple of clicks — or wire up anything custom with our open CRM API.",
    chips: ["WhatsApp API", "Email & calendar", "Open API"],
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
        count: 5,
        cards: [
          { t: "WhatsApp", v: "Two-way sync", w: "100%", brand: "WhatsApp" },
          { t: "Gmail", v: "Threads on record", w: "90%", brand: "Gmail" },
          { t: "Instagram", v: "DMs & comments", w: "82%", brand: "Instagram" },
          { t: "Facebook", v: "Lead forms sync", w: "78%", brand: "Facebook" },
          { t: "LinkedIn", v: "InMail capture", w: "70%", brand: "LinkedIn" },
        ],
      },
      {
        name: "Lead sources",
        count: 6,
        cards: [
          { t: "Google Ads", v: "Instant capture", w: "88%", brand: "Google Ads" },
          { t: "Justdial", v: "Enquiry sync", w: "76%", brand: "Justdial" },
          { t: "IndiaMART", v: "Buy leads", w: "74%", brand: "IndiaMART" },
          { t: "TradeIndia", v: "RFQ capture", w: "68%", brand: "TradeIndia" },
          { t: "WordPress", v: "Form submissions", w: "72%", brand: "WordPress" },
          { t: "Webhooks", v: "Any custom source", w: "95%", brand: "Webhooks" },
        ],
      },
      {
        name: "Business",
        count: 3,
        cards: [
          { t: "Shopify", v: "Orders & customers", w: "80%", brand: "Shopify" },
          { t: "Razorpay", v: "Payment status", w: "64%", brand: "Razorpay" },
          { t: "Delhivery", v: "Shipment tracking", w: "58%", brand: "Delhivery" },
        ],
      },
    ],
    bars: [36, 50, 46, 58, 64, 70, 76, 80, 88, 92],
  },
];

export const HERO_WORDS = ["deals.", "leads.", "sales."];

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
  "You set the tone, script and hand-off rules — the automation never goes off-script.",
  "Calls are recorded, transcribed and summarised straight onto the lead record.",
  "Reps pick up mid-conversation with full context, not a cold trail.",
];

export const TIMELINE = [
  { at: "0s", title: "Lead arrives", sub: "Form, WhatsApp, ad or missed call — captured and scored" },
  { at: "2s", title: "WhatsApp + email out", sub: "Personalised with the enquiry details" },
  { at: "8s", title: "SMS backup", sub: "For leads who never open email" },
  { at: "45s", title: "Follow-up call placed", sub: "While the enquiry is still warm" },
  { at: "2m", title: "Handed to a rep", sub: "With transcript, source and next action attached" },
];

export const INDUSTRIES = [
  {
    name: "Real Estate CRM",
    body: "Property enquiries arrive from a dozen portals at once. TracktCRM captures each lead instantly, books the site visit and tracks every broker and unit in one sales pipeline.",
    points: ["Site-visit scheduling", "Channel-partner tracking", "Inventory & availability"],
    featured: true,
  },
  {
    name: "Education CRM",
    body: "Admissions teams lose applicants to slow replies. TracktCRM assigns each enquiry to a counsellor, automates follow-ups and shows every applicant's admission stage live.",
    points: ["Counsellor allocation", "Admission-stage pipeline", "Fee follow-up reminders"],
  },
  {
    name: "Agency CRM",
    body: "Agencies juggle pitches, retainers and referrals across tools. TracktCRM keeps proposals, client conversations and renewals in one lead management dashboard.",
    points: ["Proposal pipeline", "Retainer renewals", "Client conversation history"],
  },
  {
    name: "Freelancer CRM",
    body: "Solo work dies in spreadsheets. TracktCRM tracks enquiries, sends quotes and reminds you to follow up — an affordable CRM that takes minutes to run each day.",
    points: ["Enquiry to quote", "Automated reminders", "Invoice status tracking"],
  },
];

export const COMPARE = [
  { old: "Leads sit in an inbox for hours before anyone replies", new: "Answered on WhatsApp, email and SMS within seconds" },
  { old: "Data re-entered across three or four disconnected tools", new: "One dashboard for leads, deals, calls and reporting" },
  { old: "Follow-ups remembered from memory and sticky notes", new: "Every touchpoint scheduled, logged and reminded" },
  { old: "Team performance is a guess, or a monthly sheet pull", new: "Live rep scorecards and source-level ROI" },
  { old: "One rigid pipeline forced onto every team", new: "Custom pipelines and stages per team, from day one" },
];

export const INTEGRATIONS = [
  "",
  "",
  "Google Ads",
  "Gmail",
  "Webhooks",
  "",
  "WhatsApp",
  "Justdial",
  "",
  "",
  "Instagram",
  "TradeIndia",
  "IndiaMART",
  "Shopify",
  "",
  "",
  "LinkedIn",
  "WordPress",
  "",
  "Razorpay",
  "Delhivery",
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
  { q: "What is TracktCRM?", a: "TracktCRM is AI-powered CRM software for sales teams. It captures leads from every channel, organises them in one lead management dashboard, and tracks each deal through a customisable sales pipeline. Everything — contacts, conversations, tasks and reporting — lives in a single place." },
  { q: "How does TracktCRM help increase sales?", a: "It removes the two things that lose deals: slow replies and forgotten follow-ups. TracktCRM answers new leads automatically, reminds reps of every next step, and shows exactly which pipeline stage is leaking revenue so you can fix it early." },
  { q: "Is TracktCRM good for small businesses?", a: "Yes. TracktCRM is built for small businesses, agencies, freelancers and growing sales teams who want proper lead management without enterprise pricing. There is nothing to configure on day one — pick a pipeline template and start selling." },
  { q: "Does TracktCRM offer a free trial?", a: "Yes. Every feature is available on a free 14-day trial with no credit card required. You can import your existing leads, run your real sales pipeline, and decide afterwards." },
  { q: "What integrations does TracktCRM support?", a: "TracktCRM connects with WhatsApp, Gmail and other email, Google Calendar, Meta and Google Ads, Shopify, payment tools and Zapier. An open CRM API and webhooks cover anything custom your team needs." },
  { q: "How do I get started with TracktCRM?", a: "Start your free trial or book a demo and our team maps your current lead flow. We set up your pipeline stages, sources and users, migrate your spreadsheet or old CRM data, and most teams are live within a week." },
];


export const FOOTER_COLS = [
  { title: "Company", links: ["About Us", "Contact", "Blog", "Partner with us", "Help Center", "Privacy Policy", "Terms & Conditions"] },
  { title: "Product", links: ["Features", "Pricing", "Integrations", "AI CRM Software", "Open API"] },
  { title: "Features", links: ["Lead Management Software", "Sales Pipeline Management", "Sales Automation", "Reporting & Analytics", "Quotation Management", "Follow-up Reminders"] },
  { title: "Industries", links: ["Real Estate CRM", "Education CRM", "Agency CRM", "Freelancer CRM", "Insurance CRM", "Ecommerce CRM"] },
  { title: "Compare", links: ["CRM for Small Business", "Affordable CRM Alternative", "CRM vs Spreadsheets", "Switch from your CRM"] },
];
