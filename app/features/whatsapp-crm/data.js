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

export const CHATBOT_POINTS = [
  "Ready-made chatbots you can edit in minutes",
  "No coding: build the menu step by step",
  "Every bot chat saved on the lead in TracktCRM",
];

export const CHATBOT_FEATURES = [
  {
    icon: "templates",
    title: "Ready-Made Chatbots",
    body: "Start from Main menu, Product enquiry or Appointments & visits, change the text to match your business and turn it on.",
  },
  {
    icon: "menu",
    title: "Menus, Buttons and Links",
    body: "Send a menu of up to 10 options, up to 3 reply buttons, a link button or a plain message, with an image if you want one. Customers can tap an option or type it.",
  },
  {
    icon: "start",
    title: "Starts on Its Own",
    body: "The bot can greet every new conversation, or start when a customer types a keyword such as hi, hello or menu.",
  },
  {
    icon: "handover",
    title: "Your Team Can Take Over",
    body: "Once someone on your team replies by hand, the bot stays quiet in that chat for 24 hours, so the customer never gets two answers.",
  },
  {
    icon: "lead",
    title: "Every Chat Saved on the Lead",
    body: "Bot messages and customer replies show in the team inbox and on the lead, so your rep sees what was asked before replying.",
  },
  {
    icon: "shield",
    title: "Respects Opt-Outs",
    body: "If a customer sends STOP, the bot stops messaging them. Built-in limits also stop two bots from replying to each other in a loop.",
  },
];

export const CHATBOT_TEMPLATES = [
  {
    icon: "whatsapp",
    name: "Main menu",
    body: "Welcome customers with a menu: about your business, your products and a way to reach your team.",
    options: ["About us", "Products", "Talk to our team"],
  },
  {
    icon: "tag",
    name: "Product enquiry",
    body: "Answer product questions with buttons for features and price, and pass interested buyers to sales.",
    options: ["Features", "Price", "Talk to sales"],
  },
  {
    icon: "calendar",
    name: "Appointments & visits",
    body: "Share your timings and location, and send a booking link when someone wants an appointment.",
    options: ["Book an appointment", "Timings", "Location", "Talk to us"],
  },
];

export const CHATBOT_STEPS = [
  {
    title: "Connect WhatsApp Business",
    body: "Connect your number through the official WhatsApp Business API from Integrations, then WhatsApp Business.",
  },
  {
    title: "Pick a template and edit it",
    body: "Change the welcome message, menu options and replies. Add an image, reply buttons or a booking link where you need one.",
  },
  {
    title: "Turn it on",
    body: "Choose when it starts, on every new conversation or on keywords like hi, hello and menu, and switch it on.",
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
    body: "Customers should agree to receive your messages and be able to opt out. This also matters under data protection laws.",
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
    tracktcrm: "Templates, chatbot, AI first replies and reminders",
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
    q: "Does TracktCRM have a WhatsApp chatbot?",
    a: "Yes. You can build a WhatsApp chatbot that replies with a menu, reply buttons, links and images, starting from a ready-made template or from scratch. It runs on the official WhatsApp Business API, which is included on the Pro, Premium and All-in-One plans.",
  },
  {
    q: "Will the chatbot keep replying after my team answers?",
    a: "No. Once someone on your team replies by hand, the chatbot stays quiet in that chat for 24 hours, so your rep can carry on the conversation.",
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
    a: "Yes. WhatsApp integration is included in the Free plan, with no credit card required.",
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
