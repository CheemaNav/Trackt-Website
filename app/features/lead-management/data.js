const IMG = "/assets/features/lead-management";

export const DATA = {
  schemaId: "schema-lead-management",
  name: "Lead management",
  badge: "LEAD MANAGEMENT",
  h1: ["Lead Management System to Capture, Assign and", "Track Every Lead"],
  intro: [
    "Leads arrive from your website, WhatsApp, Meta and Google ads, IndiaMART and property portals, often all in the same hour. If they land in five different inboxes, the slowest reply loses the sale.",
    "TracktCRM pulls every enquiry into one leads list, assigns it to the right rep in seconds, labels it hot, warm or cold, and keeps every call, message and follow-up on the lead until it becomes a deal.",
  ],
  hero: {
    src: `${IMG}-hero.webp`,
    alt: "TracktCRM leads list with source, owner, label and last activity for each lead, a new lead notification and the team's saved views",
  },
  what: {
    kicker: "THE BASICS",
    title: "What is a lead management system?",
    paras: [
      "A lead management system collects enquiries from every channel, decides who handles each one, and tracks every lead until it is either a deal or ruled out. It replaces the shared spreadsheet, the forwarded emails and the screenshots on WhatsApp groups.",
      "The goal is simple: reply first, follow up on time and never lose track of who is talking to whom. Lead tracking in one place also keeps the source on every lead, so you always know where a buyer came from.",
    ],
    listTitle: "With TracktCRM lead management you can:",
    bullets: [
      "Capture leads from forms, WhatsApp, ads, portals and spreadsheets automatically",
      "Assign leads by round-robin, workload or fixed owner",
      "Sort leads with labels and saved views",
      "Keep the full history when a lead becomes a deal",
    ],
  },
  features: {
    title: "Lead management features in TracktCRM",
    intro: "From the moment an enquiry arrives to the moment it turns into a deal, every step runs in one place.",
    items: [
      { icon: "inbox", title: "One leads list", body: "Leads from every source land in the same list with their source, campaign and details filled in." },
      { icon: "form", title: "Lead capture forms", body: "Build forms with your own fields, embed them on any website or share them as a link." },
      { icon: "assign", title: "Automatic assignment", body: "Share new leads by round-robin, send them to whoever has the fewest open leads, or pick a fixed owner." },
      { icon: "tags", title: "Labels and saved views", body: "Tag leads hot, warm or cold, add your own labels and save filtered views for each rep." },
      { icon: "sync", title: "Import and sync", body: "Import CSV files, sync Google Sheets and connect lead sources like IndiaMART, Justdial and 99acres." },
      { icon: "history", title: "Full lead history", body: "Calls, emails, WhatsApp chats, notes, files and follow-ups stay on the lead from day one." },
    ],
  },
  lookFor: {
    title: "What to look for in a lead management system",
    intro: "A lead management tool should cut your reply time on day one. Check for these before you sign up.",
    items: [
      { title: "Every source connected", body: "Website forms, WhatsApp, Meta and Google ads and the portals you advertise on should feed leads in without copy-paste." },
      { title: "Fair, fast assignment", body: "Rules that share leads across the team automatically mean nobody waits for a manager to forward an enquiry." },
      { title: "Quick qualification", body: "Labels, custom fields and lost reasons help reps sort serious buyers from time-wasters in seconds." },
      { title: "Follow-ups built in", body: "Every lead should have a next step with a reminder, so warm leads do not cool off over a weekend." },
      { title: "Clean hand-off to deals", body: "When a lead is ready, it should become a deal in your pipeline without losing its notes or messages." },
      { title: "Source tracking", body: "Every lead should keep its source automatically, so you always know which channel a buyer came from." },
    ],
  },
  sections: [
    {
      id: "capture",
      kicker: "LEAD CAPTURE",
      title: "Capture leads from every channel automatically",
      paras: [
        "When enquiries arrive by email, portal dashboards and personal WhatsApp numbers, somebody has to copy them into a sheet. Leads wait, details get lost and nobody knows the true source.",
        "TracktCRM connects your lead sources once. Website forms, WhatsApp Business, Meta Lead Ads, Google Ads, IndiaMART, Justdial, 99acres, Housing.com and Google Sheets all drop leads straight into the right pipeline.",
        "Each lead arrives with its name, phone, source and campaign, so you know where every enquiry came from on the first day.",
      ],
      link: { href: "/integrations", label: "See all lead sources" },
      image: { src: `${IMG}-capture.webp`, alt: "TracktCRM lead sources list showing website form, WhatsApp Business, Meta Lead Ads, Google Ads, IndiaMART, 99acres and Google Sheets with the pipeline and owner for each" },
    },
    {
      id: "assign",
      kicker: "LEAD ASSIGNMENT",
      title: "Assign every lead to the right rep in seconds",
      paras: [
        "A lead that waits an hour for someone to pick it up is often already talking to a competitor.",
        "Set assignment rules once in TracktCRM. Share leads by round-robin, send each new lead to the rep with the fewest open leads, or route by city, product or source using conditions.",
        "The same workflow can add a label, create a call task due in 15 minutes and send a WhatsApp welcome, so the buyer hears from you almost immediately.",
      ],
      link: { href: "/features/sales-automation", label: "See how workflows assign leads" },
      image: { src: `${IMG}-assign.webp`, alt: "TracktCRM workflow that runs when a lead is created, checks the city, assigns an owner by round-robin, adds a label and creates a call task" },
    },
    {
      id: "forms",
      kicker: "WEB FORMS",
      title: "Turn website visitors into leads with custom forms",
      paras: [
        "Generic contact forms send an email that someone has to read, forward and type into a CRM.",
        "Build a lead capture form in TracktCRM with the fields you need, such as budget or preferred visit day. Choose which pipeline, stage and owner each submission goes to.",
        "Embed the form on your website with one line of code, or share it as a link or QR code on WhatsApp, Instagram and print.",
      ],
      link: { href: "/lead-management-software", label: "Read more about lead management software" },
      image: { src: `${IMG}-forms.webp`, alt: "TracktCRM form builder with a site visit form, settings for pipeline, stage, owner and label, and an embed code snippet" },
    },
    {
      id: "qualify",
      kicker: "LEAD QUALIFICATION",
      title: "Sort hot, warm and cold leads at a glance",
      paras: [
        "When every lead looks the same, reps call whoever is at the top of the list instead of whoever is most likely to buy.",
        "Use labels like Hot, Warm, Cold or VIP, add custom fields for budget or timeline, and mark junk leads with a reason. Saved views let each rep open exactly the leads they should work on today.",
        "Managers can share views with the team, so everyone follows the same priorities.",
      ],
      link: { href: "/features/pipeline-management", label: "See pipeline management" },
      image: { src: `${IMG}-views.webp`, alt: "TracktCRM saved view of hot follow-ups grouped by stage, with labels such as Hot, Quote asked and Budget OK, and an overdue follow-up highlighted" },
    },
    {
      id: "convert",
      kicker: "LEAD TO DEAL",
      title: "Keep the full story when a lead becomes a deal",
      paras: [
        "Switching tools when a lead turns serious means re-typing details and losing the conversation that got you there.",
        "In TracktCRM a lead and its deal are the same record. The first WhatsApp message, the owner assignment, every call, email and note travel with it into your pipeline.",
        "Anyone who picks up the deal later sees the whole history in one timeline, so the buyer never has to repeat themselves.",
      ],
      link: { href: "/features/email-sync-and-tracking", label: "See email sync and tracking" },
      image: { src: `${IMG}-convert.webp`, alt: "TracktCRM lead page with source and campaign details and a history of WhatsApp, assignment, call, opened email and follow-up activities" },
    },
  ],
  steps: {
    title: "Get your lead management running today",
    intro: "Connect a source, set a rule and let the next enquiry show you how it works.",
    items: [
      { title: "Connect sources", body: "Link your website form, WhatsApp, ad accounts and portals, or import a CSV of existing leads." },
      { title: "Set assignment", body: "Pick round-robin, least-busy or fixed owner, and add conditions for city or product." },
      { title: "Add a first reply", body: "Send a WhatsApp or email template automatically and create a call task for the owner." },
      { title: "Track and convert", body: "Label, follow up and convert serious leads into deals in your pipeline." },
    ],
  },
  integrations: {
    title: "Bring leads in from the channels you already use",
    intro: "Connect ad platforms, portals, WhatsApp and your website in a few clicks. No code and no copy-paste.",
  },
  pairs: {
    title: "Reply faster to every new lead",
    intro: "Lead management pays off when the first reply goes out before the buyer moves on.",
    items: [
      { title: "AI lead replies", href: "/industries/ai-crm", body: "Send a personalised reply to every new enquiry within seconds, using the details the lead shared." },
      { title: "WhatsApp CRM", href: "/features/whatsapp-crm", body: "Answer leads from a shared WhatsApp inbox, with approved templates and every chat saved to the lead." },
      { title: "Sales dashboard", href: "/features/sales-dashboard", body: "See new leads, revenue won, lost deals and the latest team activity on one live screen." },
    ],
  },
  faqTitle: "Lead management FAQs",
  faqs: [
    {
      q: "What does a lead management system do?",
      a: "It collects enquiries from all your channels into one place, assigns each lead to a rep, tracks follow-ups and conversations, and moves qualified leads into your sales pipeline. TracktCRM does all of this in one product.",
    },
    {
      q: "Which lead sources can TracktCRM capture?",
      a: "Website forms, WhatsApp Business, Meta Lead Ads, Google Ads, IndiaMART, Justdial, 99acres, Housing.com, MagicBricks, Google Sheets and CSV imports, plus webhooks for other tools. See the integrations page for the full list.",
    },
    {
      q: "How does automatic lead assignment work?",
      a: "You create a workflow that runs when a lead is created. Choose round-robin between selected reps, send each lead to whoever has the fewest open leads, or assign a fixed owner. Conditions let you route by city, product, source or any field.",
    },
    {
      q: "Can I label leads as hot, warm or cold?",
      a: "Yes. Add labels to any lead, create your own labels and filter or save views by label. Workflows can also add or remove labels automatically.",
    },
    {
      q: "What happens to a lead's history when it becomes a deal?",
      a: "Nothing is lost. In TracktCRM the lead and the deal are the same record, so calls, emails, WhatsApp messages, notes and files stay attached as it moves through your pipeline.",
    },
    {
      q: "How is this page different from lead management software?",
      a: "This page walks through the lead management features inside TracktCRM. Our lead management software guide covers how to choose a tool and set up a lead process for your team.",
    },
    {
      q: "Is there a free plan?",
      a: "Yes. The Free plan is free forever for 1 user with no credit card needed. Paid plans add more users, pipelines, automations and AI.",
    },
  ],
  cta: {
    title: "Capture and follow up every lead from today",
    body: "Connect your first lead source in minutes. Free plan for 1 user, no credit card needed.",
  },
};
