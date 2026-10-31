const IMG = "/assets/features/email-sync-and-tracking";

export const DATA = {
  schemaId: "schema-email-sync",
  name: "Email sync and tracking",
  badge: "EMAIL SYNC AND TRACKING",
  h1: ["CRM Email Integration with Gmail Sync and", "Email Tracking"],
  intro: [
    "When sales emails live only in each rep's inbox, nobody else can see what was promised, what was sent or whether the buyer replied. Logging emails by hand never lasts.",
    "TracktCRM syncs Gmail with your CRM and links every email to the right lead and deal. Send from templates, schedule emails for later and see when a buyer opens your quote, so you call at the right moment.",
  ],
  hero: {
    src: `${IMG}-hero.webp`,
    alt: "TracktCRM Sales Inbox with email threads linked to deals, an open quote thread showing three opens, and an email opened notification",
  },
  what: {
    kicker: "THE BASICS",
    title: "What is CRM email integration?",
    paras: [
      "CRM email integration connects your mailbox to your CRM, so emails with a lead appear on that lead automatically and you can send emails without leaving the CRM. Your inbox and your customer records stay in step.",
      "Add email tracking and you also know when a buyer opens what you sent. That turns a guess about when to follow up into a clear signal.",
    ],
    listTitle: "With TracktCRM email sync and tracking you can:",
    bullets: [
      "Sync Gmail and link emails to leads, contacts and deals",
      "Send emails from the CRM using templates and merge fields",
      "See when each email is opened",
      "Schedule emails and trigger workflows from email activity",
    ],
  },
  features: {
    title: "Email features in TracktCRM",
    intro: "Write, send, track and automate sales emails in the same place you manage leads and deals.",
    items: [
      { icon: "sync", title: "Gmail sync", body: "Connect Gmail once. Emails with your leads and contacts show up on their records automatically." },
      { icon: "inbox", title: "Sales Inbox", body: "Read and reply to sales emails inside TracktCRM, with each thread linked to its lead or deal." },
      { icon: "history", title: "Full email history", body: "Every email sits in the lead timeline next to calls, WhatsApp chats, notes and files." },
      { icon: "template", title: "Email templates", body: "Save templates with merge fields, Cc, Bcc and attachments, and reuse them in emails and workflows." },
      { icon: "eye", title: "Open tracking", body: "See when a buyer opens your email and how many times, right on the email and the lead." },
      { icon: "calendar", title: "Schedule send", body: "Write now and pick the date and time it goes out, so emails land when buyers are at their desks." },
    ],
  },
  lookFor: {
    title: "What to look for in a CRM with email integration",
    intro: "Email is still where quotes, proposals and contracts get sent. Make sure your CRM handles it properly.",
    items: [
      { title: "Simple setup", body: "Connecting your mailbox should take one sign-in, not an IT ticket." },
      { title: "Automatic linking", body: "Emails should attach to the right lead or contact by email address, without forwarding or copy-paste." },
      { title: "Templates with merge fields", body: "Reusable templates that fill in names, products and owner details keep emails fast and consistent." },
      { title: "Open tracking", body: "Knowing a quote was opened tells you when to call while the buyer is still thinking about it." },
      { title: "Scheduling", body: "Schedule send helps you reach buyers in the morning, even if you write the email late at night." },
      { title: "Automation hooks", body: "Email received and email opened events should be able to start workflows and create follow-ups." },
    ],
  },
  sections: [
    {
      id: "sync",
      kicker: "GMAIL SYNC",
      title: "Sync your inbox so every email lands on the right lead",
      paras: [
        "If emails live in separate tools, reps waste time searching for context and managers never see the full conversation.",
        "Connect your Gmail account to TracktCRM with a Google sign-in. Emails with a lead or contact are matched by email address and appear on their record automatically, both the ones you send and the ones you receive.",
        "You can also connect an SMTP mailbox for sending, and Google Calendar so meetings sit next to the emails that led to them.",
      ],
      link: { href: "/integrations", label: "See Gmail and calendar integrations" },
      image: { src: `${IMG}-sync.webp`, alt: "TracktCRM Gmail sync settings showing a connected mailbox, linking rules, open tracking and Google Calendar, with a list of what syncs" },
    },
    {
      id: "history",
      kicker: "CONVERSATION HISTORY",
      title: "See every conversation in context before you reply",
      paras: [
        "A reply written without the earlier thread feels slow and generic, and buyers notice.",
        "Open any lead or deal in TracktCRM and the Email tab shows the full thread, alongside calls, WhatsApp messages, notes and files in the history timeline.",
        "Whoever picks up the deal next, whether a teammate or a manager, sees exactly what was said and sent.",
      ],
      link: { href: "/features/lead-management", label: "See lead management" },
      image: { src: `${IMG}-history.webp`, alt: "TracktCRM lead page with the Email tab open, showing inbound and outbound emails, an opened quote and a WhatsApp message in the timeline" },
    },
    {
      id: "templates",
      kicker: "EMAIL TEMPLATES",
      title: "Write faster with shared email templates",
      paras: [
        "Typing the same quote email twenty times a week wastes time and makes your outreach inconsistent.",
        "Create templates in TracktCRM with a subject, body, Cc, Bcc and attachments. Merge fields fill in the lead's name, company, product and the owner's details automatically when you send.",
        "Use the same templates in workflows, so automated emails sound as good as the ones you write by hand.",
      ],
      link: { href: "/features/sales-automation", label: "Use templates in workflows" },
      image: { src: `${IMG}-templates.webp`, alt: "TracktCRM email template editor with merge fields in the subject and body, an attachment and a list of where the template is used" },
    },
    {
      id: "tracking",
      kicker: "EMAIL TRACKING",
      title: "Know when buyers open your emails",
      paras: [
        "Without open tracking, you either follow up too early and annoy the buyer, or too late and lose them.",
        "TracktCRM tracks opens on emails you send from the CRM. See the open count and last open time on each email, spot buyers who keep coming back to your quote, and call while it is fresh in their mind.",
        "Use the email opened trigger to create a follow-up task for the owner automatically.",
      ],
      link: { href: "/features/reporting-and-analytics", label: "See email activity in reports" },
      image: { src: `${IMG}-opens.webp`, alt: "TracktCRM list of opened emails with sent, opened and not opened counts, open counts per email and a workflow tip" },
    },
    {
      id: "schedule",
      kicker: "SCHEDULE SEND",
      title: "Send emails at the right time, every time",
      paras: [
        "The best time to write an email is not always the best time to send it.",
        "Write your email, choose a date and time, and TracktCRM sends it then. Scheduled emails and drafts sit on the lead, so you can edit or cancel them before they go out.",
        "Pair schedule send with workflows and delays to keep a steady rhythm of follow-ups without watching the clock.",
      ],
      link: { href: "/features/pipeline-management", label: "See pipeline management" },
      image: { src: `${IMG}-schedule.webp`, alt: "TracktCRM new email draft using a demo recap template with tracking on and a schedule send menu set to tomorrow at 9:30 AM" },
    },
  ],
  steps: {
    title: "Set up email integration in four steps",
    intro: "It takes a few minutes and works with the Gmail account you already use.",
    items: [
      { title: "Connect Gmail", body: "Sign in with Google from the integrations page and allow TracktCRM to sync your mail." },
      { title: "Check linking", body: "Emails with your leads and contacts appear on their records automatically." },
      { title: "Create templates", body: "Save your most-used emails as templates with merge fields and attachments." },
      { title: "Track and automate", body: "Watch opens, schedule sends and add workflows that react to email activity." },
    ],
  },
  integrations: {
    title: "Email works alongside your other channels",
    intro: "Gmail, Google Calendar and WhatsApp keep every conversation and meeting on the same lead, next to leads from your ads and portals.",
  },
  pairs: {
    title: "Follow up on every channel",
    intro: "Buyers reply on whichever channel is easiest for them. Keep all of it in one place.",
    items: [
      { title: "WhatsApp CRM", href: "/features/whatsapp-crm", body: "Send WhatsApp templates and keep chats on the lead, right next to your emails." },
      { title: "Sales automation", href: "/features/sales-automation", body: "Trigger workflows when an email is received or opened, and send email templates automatically." },
      { title: "AI CRM", href: "/industries/ai-crm", body: "Reply to new enquiries in seconds with personalised AI responses based on what the lead shared." },
    ],
  },
  faqTitle: "Email sync and tracking FAQs",
  faqs: [
    {
      q: "How do I connect Gmail to TracktCRM?",
      a: "Open Integrations, choose Gmail and sign in with your Google account. Once connected, emails with your leads and contacts sync to their records and you can send emails from TracktCRM.",
    },
    {
      q: "What is CRM email integration?",
      a: "It connects your mailbox to your CRM so emails are linked to the right leads and deals automatically, and you can send emails from inside the CRM. It removes manual logging and keeps the full conversation visible to your team.",
    },
    {
      q: "Can I see when a lead opens my email?",
      a: "Yes. Emails sent from TracktCRM include open tracking. You can see the open count and the last time the email was opened, and use the email opened trigger to start a workflow.",
    },
    {
      q: "Can I schedule emails to send later?",
      a: "Yes. Write your email, pick a date and time and TracktCRM sends it then. Scheduled emails stay on the lead so you can edit or delete them before they go out.",
    },
    {
      q: "Do email templates support merge fields and attachments?",
      a: "Yes. Templates can include merge fields such as the lead's name and company, plus Cc, Bcc and attachments. Templates can be used by hand or in workflows.",
    },
    {
      q: "Can I use a mailbox other than Gmail?",
      a: "You can connect an SMTP mailbox for sending emails from TracktCRM. Gmail sync is used for two-way syncing of your inbox.",
    },
  ],
  cta: {
    title: "Keep every sales email in your CRM",
    body: "Connect Gmail in minutes and see your conversations on every lead. Free plan for 1 user, no credit card needed.",
  },
};
