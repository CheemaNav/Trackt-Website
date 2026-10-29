import { PLANS } from "../pricing/plans";

export const SIGNS = [
  {
    title: "Leads are scattered.",
    body: "Enquiries sit in WhatsApp, Gmail, Facebook, IndiaMART and phone calls, and nobody has the full list.",
  },
  {
    title: "Follow-ups depend on memory.",
    body: "A lead goes cold because the reminder was in someone's head or on a sticky note.",
  },
  {
    title: "You can't see who is doing what.",
    body: "You ask \u201cdid anyone call this lead?\u201d in the team group every day.",
  },
  {
    title: "Reports take hours.",
    body: "You rebuild the same sales sheet in Excel every week.",
  },
  {
    title: "A salesperson leaves and the data leaves too.",
    body: "Their contacts and chats were on their own phone.",
  },
];

export const FEATURES = [
  {
    icon: "capture",
    title: "All your leads in one place",
    before:
      "Website forms, Facebook and Google lead ads, WhatsApp and portals like IndiaMART, Justdial and 99acres flow straight into one lead list. No copy-pasting. See our ",
    href: "/lead-management-software",
    linkLabel: "lead management software",
    after: ".",
  },
  {
    icon: "pipeline",
    title: "Simple sales pipeline",
    before: "Drag leads through your own stages, from New to Won. See every deal at a glance in one ",
    href: "/crm-software",
    linkLabel: "sales pipeline",
    after: ".",
  },
  {
    icon: "reminder",
    title: "Follow-up reminders",
    before:
      "Every lead gets an owner and a next step, so no customer waits for a reply.",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp CRM",
    before: "Chat with leads on WhatsApp and keep every conversation saved on the lead with our ",
    href: "/features/whatsapp-crm",
    linkLabel: "WhatsApp CRM",
    after: ".",
  },
  {
    icon: "contacts",
    title: "Client and customer management",
    before:
      "Contacts, companies, products, notes and activity history stay together, so anyone on the team can pick up a customer.",
  },
  {
    icon: "report",
    title: "Sales dashboard",
    before: "Live charts and KPIs for leads, follow-ups and deals won in one ",
    href: "/features/sales-dashboard",
    linkLabel: "sales dashboard",
    after: ", without building reports in Excel.",
  },
];

const plan = (id) => PLANS.find((item) => item.id === id);
const perUser = (id) => `₹${plan(id).yearly}/user/month`;

export const PRICING_ROWS = [
  { plan: "Free", price: "₹0, 1 user", bestFor: "Solo owners getting started" },
  {
    plan: plan("pro").name,
    price: perUser("pro"),
    bestFor: "Small teams that need more pipelines and ad integrations",
  },
  {
    plan: plan("premium").name,
    price: perUser("premium"),
    bestFor: "Teams that want AI help on every deal",
  },
  {
    plan: plan("all-in-one").name,
    price: perUser("all-in-one"),
    bestFor: "CRM, AI and a website in one plan",
  },
];

export const SETUP_STEPS = [
  {
    n: "01",
    title: "Sign up free",
    body: "Create your account in a minute. No credit card needed.",
  },
  {
    n: "02",
    title: "Bring in your leads",
    body: "Import your Excel sheet or connect your website form, WhatsApp and lead sources. Moving from another CRM? Our team helps you shift your data.",
  },
  {
    n: "03",
    title: "Set your pipeline",
    body: "Name your stages the way your business sells, for example New, Contacted, Quote Sent, Won.",
  },
  {
    n: "04",
    title: "Follow up and close",
    body: "Assign leads to your team, set reminders and watch deals move on the dashboard.",
  },
];

export const INDUSTRIES = [
  { icon: "realEstate", label: "Real estate agents and brokers", href: "/industries/real-estate-crm" },
  { icon: "education", label: "Schools, coaching and admission teams", href: "/industries/education-crm" },
  { icon: "agency", label: "Marketing and digital agencies", href: "/industries/crm-for-agencies" },
  { icon: "recruitment", label: "Recruitment firms", href: "/industries/crm-for-recruitment" },
  { icon: "insurance", label: "Insurance agents", href: "/industries/crm-for-insurance" },
  { icon: "automotive", label: "Car and bike dealerships", href: "/industries/crm-for-automotive" },
  { icon: "healthcare", label: "Clinics and healthcare", href: "/industries/crm-for-healthcare" },
  { icon: "travel", label: "Travel agencies", href: "/industries/crm-for-travel" },
];

export const CHOOSE_POINTS = [
  { title: "Easy to use", body: "Your team should learn it in a day, not a month." },
  {
    title: "Free or affordable to start",
    body: "A free plan lets you test it with real leads before you pay.",
  },
  {
    title: "Captures leads automatically",
    body: "Look for website forms, ad integrations and WhatsApp, so nobody types leads by hand.",
  },
  { title: "Follow-up reminders", body: "The CRM should tell your team who to call next." },
  { title: "Works on mobile", body: "Small business teams are rarely at a desk all day." },
  {
    title: "Fair pricing as you grow",
    body: "Per-user pricing with no long contract keeps costs predictable.",
  },
];

export const SWITCH_LINKS = [
  { label: "TracktCRM vs Bigin", href: "/bigin-alternative" },
  { label: "vs Zoho CRM", href: "/zoho-crm-alternative" },
  { label: "vs HubSpot", href: "/hubspot-alternative" },
  { label: "vs Pipedrive", href: "/pipedrive-alternative" },
];

export const FAQS = [
  {
    q: "What is a CRM for small business?",
    a: "A CRM (customer relationship management) for small business is software that keeps all your leads, customers, follow-ups and deals in one place. Instead of Excel sheets and WhatsApp chats, your whole team works from one shared list and pipeline, so no enquiry is missed.",
  },
  {
    q: "Do small businesses really need a CRM?",
    a: "If you get more leads than you can track in your head, yes. A CRM makes sure every enquiry gets a reply, every follow-up happens on time and you can see which sources bring customers. Most teams feel the difference within the first week.",
  },
  {
    q: "Is there a free CRM for small business?",
    a: "Yes. TracktCRM has a Free plan for 1 user that is free forever, with no time limit. It includes a sales pipeline, unlimited records, 3 automations, WhatsApp integration and a standard dashboard. No credit card is needed.",
  },
  {
    q: "How much does a CRM cost for a small business?",
    a: `TracktCRM is free for 1 user. Paid plans start at ₹${plan("pro").yearly} per user per month (billed yearly) for Pro, ₹${plan("premium").yearly} for Premium and ₹${plan("all-in-one").yearly} for All-in-One. You can upgrade, downgrade or cancel anytime.`,
  },
  {
    q: "What is the best CRM for a small business?",
    a: "The best CRM is one that is easy to use, captures leads automatically, reminds your team to follow up and is affordable as you grow. TracktCRM is built for exactly this, with a free plan so you can test it with your own leads.",
  },
  {
    q: "Can I use TracktCRM on my mobile?",
    a: "Yes. TracktCRM is a cloud-based CRM that works in any browser on your laptop or phone, so your team can update leads from anywhere.",
  },
  {
    q: "Can I move my data from Excel or another CRM?",
    a: "Yes. You can import your leads from Excel, and our team helps you move data from another CRM, including Pipedrive.",
  },
  {
    q: "Is my customer data safe?",
    a: "Your data is stored securely, every team member has their own login, and your data is never sold or used for ad targeting.",
  },
];
