const IMG = "/assets/features/sales-automation";

export const DATA = {
  schemaId: "schema-sales-automation",
  name: "Sales automation",
  badge: "SALES AUTOMATION",
  h1: ["Sales Automation Software That Does the", "Repetitive Work for You"],
  intro: [
    "Some sales work moves deals forward. A lot of it is typing the same welcome message, forwarding leads, creating the same task after every call and chasing deals that went quiet.",
    "TracktCRM workflows handle that busywork. Pick a trigger, add conditions and choose what should happen next. Replies, owner assignment, follow-ups and alerts then run on their own, and every run is logged.",
  ],
  hero: {
    src: `${IMG}-hero.webp`,
    alt: "TracktCRM workflow for new leads that sends a WhatsApp welcome, assigns an owner by round-robin, creates a call task, waits two days and sends an email",
  },
  what: {
    kicker: "THE BASICS",
    title: "What is CRM sales automation?",
    paras: [
      "Sales automation uses rules in your CRM to complete routine steps without a person doing them. When something happens, such as a new lead, a stage change or a missed follow-up, the CRM takes the action you defined.",
      "Good automation does not replace your reps. It makes sure the first reply is instant, the next step is always scheduled and managers hear about stuck deals before the month ends.",
    ],
    listTitle: "With TracktCRM sales automation you can:",
    bullets: [
      "Reply to new leads on WhatsApp or email within seconds",
      "Assign owners and create follow-ups automatically",
      "Schedule steps after a delay or around a date",
      "See every workflow run in a clear history",
    ],
  },
  features: {
    title: "Sales automation features in TracktCRM",
    intro: "Build workflows with a simple trigger, conditions and actions layout. No code and no consultant needed.",
    items: [
      { icon: "zap", title: "15+ triggers", body: "Run workflows when a lead is created, a stage or owner changes, a tag is added, an email is opened, a WhatsApp arrives or a form is submitted." },
      { icon: "filter", title: "Flexible conditions", body: "Match all conditions, any condition or a custom pattern, using any field including your custom fields." },
      { icon: "send", title: "WhatsApp and email actions", body: "Send approved WhatsApp templates or email templates with merge fields such as the lead's name and product." },
      { icon: "checklist", title: "Tasks and follow-ups", body: "Create tasks, follow-ups and meetings for the owner, with due times and reminders." },
      { icon: "delay", title: "Delays and schedules", body: "Wait minutes, hours or days, or run a step before or after a date field such as a visit or renewal date." },
      { icon: "history", title: "Run history and test runs", body: "Test a workflow before switching it on, then see which records it ran on and how each step went." },
    ],
  },
  lookFor: {
    title: "What to look for in sales automation software",
    intro: "Automation only helps if your team can set it up and trust it. Check for these.",
    items: [
      { title: "Triggers beyond 'new lead'", body: "Stage changes, inactivity, email opens, WhatsApp messages and dates all deserve their own automations." },
      { title: "Conditions you can read", body: "Rules should read like a sentence, such as 'deal value is more than ₹50L', so anyone can check what a workflow does." },
      { title: "Messages on the channels buyers use", body: "In India that means WhatsApp first, with email as a backup, both using templates and merge fields." },
      { title: "Timing control", body: "Delays and date-based steps let you follow up at the right moment instead of all at once." },
      { title: "Ready-made templates", body: "Starting from a tested workflow saves time and shows your team what good automation looks like." },
      { title: "A clear audit trail", body: "A run history shows exactly what happened to each lead, which makes problems easy to spot and fix." },
    ],
  },
  sections: [
    {
      id: "triggers",
      kicker: "TRIGGERS AND CONDITIONS",
      title: "Start workflows on the events that matter",
      paras: [
        "A workflow that only runs on new leads misses most of the sales process.",
        "TracktCRM workflows can start when a record is created or edited, when a deal changes stage or owner, when a tag is added or removed, when a call is logged or a meeting is scheduled, when an email is received or opened, when a WhatsApp message arrives or a form is submitted.",
        "Time-based triggers run before or after a date, when a follow-up is due or when a deal has had no activity for a set number of days. Add conditions so each workflow only runs on the records you want.",
      ],
      link: { href: "/features/pipeline-management", label: "See pipeline stage automations" },
      image: { src: `${IMG}-triggers.webp`, alt: "TracktCRM create workflow screen listing record, pipeline, conversation, activity and time-based triggers, with templates, conditions and settings" },
    },
    {
      id: "tasks",
      kicker: "AUTOMATED FOLLOW-UPS",
      title: "Never forget a follow-up again",
      paras: [
        "Reps juggling forty conversations will miss some follow-ups. That is not a discipline problem. It is a system problem.",
        "Let workflows create the follow-up for them. A new lead gets a call task due in 15 minutes. A sent quote gets a reminder in two days. A deal with no activity for five days alerts its owner.",
        "Each rep starts the day with a clear list of what is due, with reminders before every call.",
      ],
      link: { href: "/features/lead-management", label: "See lead management" },
      image: { src: `${IMG}-tasks.webp`, alt: "TracktCRM follow-ups list showing tasks created by workflows with due times, a completed call and a reminder to call a new lead" },
    },
    {
      id: "messages",
      kicker: "AUTOMATED MESSAGES",
      title: "Send the right WhatsApp or email at the right moment",
      paras: [
        "Buyers expect a reply within minutes, at any hour. Typing the same message by hand cannot keep up.",
        "Add a Send WhatsApp or Send email action to any workflow. Use approved WhatsApp Business templates or your email templates, filled in with merge fields such as the lead's name, product and owner.",
        "Use the same workflows to notify a teammate, update a field, add tags or post data to another tool with a webhook.",
      ],
      link: { href: "/features/whatsapp-crm", label: "Explore WhatsApp CRM" },
      image: { src: `${IMG}-messages.webp`, alt: "TracktCRM workflow action that sends a WhatsApp template with merge fields, a delivered message preview and a list of other actions" },
    },
    {
      id: "timing",
      kicker: "DELAYS AND SCHEDULES",
      title: "Space out steps so follow-ups feel personal",
      paras: [
        "Sending everything the moment a lead arrives feels robotic. Waiting too long loses the deal.",
        "Add a wait step between actions, from a few minutes to several days, or schedule a step before or after a date such as a site visit, demo or renewal date. Conditions can be re-checked before each step, so a lead who already replied is not chased again.",
        "Combine an inactivity trigger with delays to build a rescue sequence for deals that have gone quiet.",
      ],
      link: { href: "/features/email-sync-and-tracking", label: "See email follow-ups" },
      image: { src: `${IMG}-delays.webp`, alt: "TracktCRM stale deal workflow that notifies the owner, waits a day, sends a WhatsApp check-in, waits two days and moves the deal to Cold" },
    },
    {
      id: "history",
      kicker: "RUN HISTORY",
      title: "See exactly what every workflow did",
      paras: [
        "Automation you cannot see is automation you cannot trust.",
        "Every workflow in TracktCRM keeps a run history showing which leads it ran on, when it started, how each step went and whether the run is done, still running or was skipped because a condition was not met.",
        "Test a workflow on a sample record before you switch it on, and pause it in one click while you make changes.",
      ],
      link: { href: "/features/reporting-and-analytics", label: "Explore reporting and analytics" },
      image: { src: `${IMG}-history.webp`, alt: "TracktCRM workflow run history with total runs, done, running and skipped counts and a list of leads with their run status" },
    },
  ],
  steps: {
    title: "Build your first workflow in five minutes",
    intro: "Start from a template or build from scratch with three simple cards.",
    items: [
      { title: "Choose a trigger", body: "Pick the event that starts the workflow, such as a new lead or a stage change." },
      { title: "Add conditions", body: "Limit it to the right records, for example leads from one city or deals above a value." },
      { title: "Add actions", body: "Send a message, assign an owner, create a task, add a delay or notify a teammate." },
      { title: "Switch it on", body: "Turn the workflow on and watch the run history as new leads come in." },
    ],
  },
  integrations: {
    title: "Automate across the tools your team already uses",
    intro: "Workflows can react to WhatsApp messages, Gmail emails, form submissions and ad leads, and send data to other apps with webhooks.",
  },
  pairs: {
    title: "Popular workflows to start with",
    intro: "These are the workflows most teams switch on in their first week.",
    items: [
      { title: "Welcome every new lead", body: "Send a WhatsApp template, assign an owner by round-robin and create a call task due in 15 minutes." },
      { title: "Rescue stale deals", body: "When a deal has no activity for five days, alert the owner, then send a check-in message if it is still quiet." },
      { title: "Confirm visits and demos", body: "When a deal reaches the visit or demo stage, send a confirmation and remind the owner the day before." },
    ],
  },
  faqTitle: "Sales automation FAQs",
  faqs: [
    {
      q: "What is sales automation in a CRM?",
      a: "Sales automation uses rules inside your CRM to handle routine steps such as replying to new leads, assigning owners, creating follow-ups and alerting managers. In TracktCRM these rules are called workflows.",
    },
    {
      q: "What can trigger a workflow in TracktCRM?",
      a: "A record being created or edited, a stage, owner or tag change, a call logged, a meeting scheduled, an email received or opened, a WhatsApp message received, a form submitted, an activity logged, a date, a follow-up becoming due, or no activity for a set number of days.",
    },
    {
      q: "Which actions can a workflow take?",
      a: "Assign an owner, update fields, move a deal to another stage, add or remove tags, create a task, follow-up or meeting, notify a user, send an email template, send a WhatsApp message or template, create a record or call a webhook.",
    },
    {
      q: "Can workflows send WhatsApp messages?",
      a: "Yes. Workflows can send approved WhatsApp Business templates through the official API, with merge fields such as the lead's name. You can also send email templates as a backup.",
    },
    {
      q: "Do I need technical skills to set up automation?",
      a: "No. Each workflow is built from three cards: trigger, conditions and actions. You can also start from a template and adjust it. Our team can set up your first workflows during onboarding.",
    },
    {
      q: "Which plans include sales automation?",
      a: "Automation limits depend on your plan. Compare what each plan includes on the pricing page, or start on the Free plan and upgrade when you need more workflows.",
    },
  ],
  cta: {
    title: "Put your routine sales work on autopilot",
    body: "Switch on your first workflow today and let TracktCRM reply, assign and follow up for you. Free plan for 1 user, no credit card needed.",
  },
};
