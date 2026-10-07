export const PROBLEM_POINTS = [
  {
    title: "Leads message from personal numbers at all hours",
    body: "A generic CRM loses context when your team switches in and out of chat.",
  },
  {
    title: "Conversations are fast and informal",
    body: "Most CRMs were not built to log and organise that kind of thread.",
  },
  {
    title: "Teams juggle WhatsApp Web and the CRM",
    body: "One tab for chat, one for the CRM, and copy and paste between them.",
  },
  {
    title: "Follow-ups get missed when chats go quiet",
    body: "Nothing nudges a rep back into a conversation that stopped mid-deal.",
  },
];

export const WHAT_IS_POINTS = [
  {
    title: "Messages become leads",
    body: "New WhatsApp messages become leads automatically, with no manual entry.",
  },
  {
    title: "Reply from the CRM",
    body: "Replies go out from the CRM, with no switching to WhatsApp Web.",
  },
  {
    title: "Templates and automatic replies",
    body: "Templates and automatic replies handle common questions.",
  },
  {
    title: "Threads stay on the deal",
    body: "Every thread stays attached to the lead or deal.",
  },
  {
    title: "WhatsApp-based follow-ups",
    body: "Follow-up reminders are based on WhatsApp activity, not only email or calls.",
  },
];

export const FEATURES = [
  {
    icon: "capture",
    title: "Automatic Lead Capture From WhatsApp",
    body: "Every new WhatsApp message creates or updates a lead, so nobody has to add contacts by hand.",
  },
  {
    icon: "reply",
    title: "Reply Without Leaving TracktCRM",
    body: "Send and receive WhatsApp messages inside the CRM, synced with the customer's real WhatsApp thread.",
  },
  {
    icon: "templates",
    title: "Templates and Automatic Replies",
    body: "Set up quick replies for common questions, or let the AI send the first reply to a new enquiry.",
    href: "/industries/ai-crm",
    linkLabel: "See the AI CRM",
  },
  {
    icon: "history",
    title: "Conversation History on Every Deal",
    body: "The full thread stays on the lead record, so any rep can pick up with full context.",
  },
  {
    icon: "reminders",
    title: "Follow-Up Reminders",
    body: "If a chat goes quiet, TracktCRM flags it for follow-up before the lead goes cold.",
  },
  {
    icon: "inbox",
    title: "Shared Team Inbox",
    body: "If several people use one WhatsApp Business number, conversations are assigned and routed so none are answered twice or missed.",
  },
  {
    icon: "labels",
    title: "Labels on Every Lead",
    body: "Label leads and their chats, for example VIP or hot lead, so the team can see priority at a glance.",
  },
];

export const WA_RULES = [
  {
    title: "The 24-hour window",
    body: "You can send free-form replies to a customer for 24 hours after their last message. After that, you can only send an approved message template.",
  },
  {
    title: "Message templates",
    body: "Templates for follow-ups, reminders and other messages you start are approved by WhatsApp before you can use them.",
  },
  {
    title: "Opt-in and consent",
    body: "Customers should agree to receive your messages and be able to opt out. This also matters under India's Digital Personal Data Protection Act, 2023.",
  },
  {
    title: "Meta's message charges",
    body: "WhatsApp charges per delivered business message. Rates depend on the type of message and the customer's country, and each business number gets a monthly allowance of free replies.",
    href: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
    linkLabel: "See Meta's WhatsApp pricing",
  },
];

export const APP_VS_API_ROWS = [
  {
    label: "Who it suits",
    app: "Small teams on a phone",
    api: "Teams that need scale and automation",
    tracktcrm: "Teams that want WhatsApp and a CRM together",
  },
  {
    label: "Team access",
    app: "Limited devices",
    api: "Many agents through software",
    tracktcrm: "Shared inbox with assignment",
  },
  {
    label: "Automation",
    app: "Basic quick replies",
    api: "Templates, bots, workflows",
    tracktcrm: "Templates, AI first replies and reminders",
  },
  {
    label: "CRM records",
    app: "None",
    api: "Needs software on top",
    tracktcrm: "Lead and deal record built in",
  },
  {
    label: "Set-up",
    app: "Download and verify",
    api: "Needs Meta approval and a provider",
    tracktcrm: "We help you connect",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Message arrives",
    body: "A customer messages your WhatsApp Business number and TracktCRM creates the lead instantly.",
  },
  {
    n: "02",
    title: "First reply goes out",
    body: "A template or AI reply is sent within seconds, so no enquiry sits unanswered. After 24 hours, an approved template is used.",
  },
  {
    n: "03",
    title: "Conversation continues in the CRM",
    body: "Reps reply from TracktCRM and every message is logged on the lead.",
  },
  {
    n: "04",
    title: "Deal moves through the pipeline",
    body: "Stage, notes and next steps update next to the thread.",
  },
  {
    n: "05",
    title: "Follow-up reminders trigger",
    body: "If a chat goes quiet, the rep is nudged before the lead is lost.",
  },
  {
    n: "06",
    title: "Deal closes",
    body: "The full conversation stays on the record for reporting or hand-over.",
  },
];

export const CHOOSING_POINTS = [
  {
    title: "Native, not bolted on",
    body: "Is WhatsApp core to the product or a limited plug-in?",
  },
  {
    title: "Two-way messaging inside the CRM",
    body: "Can you reply from the CRM itself?",
  },
  {
    title: "Official WhatsApp Business API support",
    body: "Is it a proper API connection, not an unofficial workaround that puts your number at risk?",
  },
  {
    title: "Automation that does not feel robotic",
    body: "Can you edit templates and AI replies so conversations stay personal?",
  },
  {
    title: "Team routing for shared numbers",
    body: "Does it stop duplicate or missed replies when several people use one number?",
  },
];

/** FAQ copy must match schema markup word-for-word. */
export const WA_FAQS = [
  {
    q: "Is this the official WhatsApp Business API?",
    a: "Yes. TracktCRM connects through the official WhatsApp Business API, which follows WhatsApp's rules. Account approval and message limits are decided by Meta.",
  },
  {
    q: "Can several team members reply from one WhatsApp number?",
    a: "TracktCRM assigns and routes conversations, so several people can work from one WhatsApp Business number without duplicate replies.",
  },
  {
    q: "Do I need the WhatsApp Business app as well?",
    a: "No. Once your number is connected, your team sends and receives messages from TracktCRM.",
  },
  {
    q: "Can I automate replies to common questions?",
    a: "Set up template quick replies, or let the AI send the first reply to new enquiries. Outside the 24-hour window, approved templates are used.",
  },
  {
    q: "Can I use my existing WhatsApp number?",
    a: "Often yes, but it depends on how the number is registered with WhatsApp. We guide you through the options.",
  },
  {
    q: "Will customers see that I am a business?",
    a: "Customers see your business name and profile. A verified badge is decided by Meta and is not guaranteed.",
  },
  {
    q: "Can I try this before committing?",
    a: "TracktCRM offers a free 1 month trial with no credit card required.",
  },
  {
    q: "What is a WhatsApp CRM?",
    a: "Software that turns WhatsApp messages into leads, lets a team reply from a shared inbox, and keeps every conversation on the lead or deal record.",
  },
  {
    q: "How is a WhatsApp CRM different from the WhatsApp Business app?",
    a: "The app is a phone tool for small teams. A WhatsApp CRM connects through the API, supports many agents, automation and lead records, and tracks deals.",
  },
  {
    q: "What is the 24-hour rule?",
    a: "You can send free-form replies for 24 hours after a customer's last message. After that you need an approved message template.",
  },
  {
    q: "Do I pay Meta for WhatsApp messages?",
    a: "Meta charges per delivered business message, with rates that depend on the message type and the customer's country. Each business number gets a monthly allowance of free replies. Ask us how these charges are billed with your TracktCRM plan.",
  },
];
