const IMG = "/assets/features/pipeline-management";

export const DATA = {
  schemaId: "schema-pipeline-management",
  name: "Pipeline management",
  badge: "PIPELINE MANAGEMENT",
  h1: ["Sales Pipeline Management Software That Keeps", "Every Deal Moving"],
  intro: [
    "Sales pipeline management is the daily habit of knowing where each deal stands, what has to happen next and which deals are about to slip. Done in a spreadsheet, it falls apart the week your team gets busy.",
    "TracktCRM gives you a visual sales pipeline with your own stages, drag-and-drop deal cards, follow-up reminders and alerts for deals that have gone quiet, so every opportunity keeps moving towards a close.",
  ],
  hero: {
    src: `${IMG}-hero.webp`,
    alt: "TracktCRM sales pipeline board with deal cards in New, Site Visit, Negotiation and Won stages, a stage change notification and a rotting deal alert",
  },
  what: {
    kicker: "THE BASICS",
    title: "What is sales pipeline management?",
    paras: [
      "A sales pipeline is the list of stages a buyer passes through, from the first enquiry to a signed deal. Pipeline management is how you run it: setting clear stages, keeping each deal's next step on the calendar and spotting where deals get stuck before they are lost.",
      "Good pipeline management answers three questions at any moment: how much is in play, what each rep should do today, and which stage is leaking the most deals. A pipeline CRM answers them from live data instead of a weekly report.",
    ],
    listTitle: "With TracktCRM pipeline management you can:",
    bullets: [
      "See every deal, its value and owner on one drag-and-drop board",
      "Build stages that match how your team actually sells",
      "Attach a follow-up to every stage so reps always know the next step",
      "Get alerts when a deal sits in one stage for too long",
    ],
  },
  features: {
    title: "Pipeline management features in TracktCRM",
    intro:
      "Everything you need to run a deal pipeline sits in one place, from setting up stages to reviewing why deals were won or lost.",
    items: [
      { icon: "customize", title: "Custom stages and fields", body: "Name your stages, set a win probability for each one and add custom fields such as budget, product or visit date." },
      { icon: "pipelines", title: "Multiple pipelines", body: "Run separate pipelines for new business, renewals, rentals or partner deals, each with its own stages and team." },
      { icon: "kanban", title: "Drag-and-drop board", body: "Move a deal to the next stage by dragging its card. Totals per stage update instantly, in your currency." },
      { icon: "bell", title: "Rotting deal alerts", body: "Choose how many days a deal can sit in a stage. Idle deals turn red so nobody forgets them." },
      { icon: "workflow", title: "Stage automations", body: "When a deal changes stage, TracktCRM can create a task, send a WhatsApp or email template and notify the owner." },
      { icon: "chart", title: "Pipeline reports", body: "Track deals won and lost, revenue won, lost reasons and performance by rep, pipeline and period." },
    ],
  },
  lookFor: {
    title: "What to look for in pipeline management software",
    intro: "Before you pick a pipeline management tool, check that it can do these five things without extra add-ons.",
    items: [
      { title: "Stages you control", body: "Your pipeline should mirror your sales process. Look for custom stages, win probabilities and fields you can add yourself, without a developer." },
      { title: "Easy switch from spreadsheets", body: "CSV import, Google Sheets import and a free plan let your team move over in an afternoon instead of a quarter." },
      { title: "Next steps on every deal", body: "Follow-ups, calls and meetings should live on the deal card with reminders, not in a separate to-do app." },
      { title: "Built-in communication", body: "Reps should be able to call, email and WhatsApp a buyer from the deal itself, with every message saved to its history." },
      { title: "Automation and alerts", body: "Workflows that react to stage changes and idle deals keep the pipeline moving even when the team is busy." },
      { title: "Reports managers trust", body: "Won and lost deals, lost reasons and rep activity should come from the same data reps update every day." },
    ],
  },
  sections: [
    {
      id: "customize",
      kicker: "CUSTOMIZE YOUR PIPELINE",
      title: "Build a sales pipeline that fits how you sell",
      paras: [
        "A real estate team needs a site visit stage. An agency needs proposal and retainer stages. When a CRM forces one generic pipeline on everyone, reps stop updating it.",
        "In TracktCRM you name every stage, drag stages into order and set a win probability for each. Add custom fields for the details your team asks on every call, such as budget, location or quantity.",
        "Start from a ready-made pipeline template for your industry, then change it whenever your process changes. Existing deals stay where they are.",
      ],
      link: { href: "/industries", label: "See pipeline templates by industry" },
      image: { src: `${IMG}-customize.webp`, alt: "TracktCRM pipeline editor with stages, win probability percentages, rotting alert settings and a custom fields panel" },
    },
    {
      id: "visualize",
      kicker: "VISUAL PIPELINE",
      title: "See every stage of your sales process at a glance",
      paras: [
        "When deals live in WhatsApp chats and notebooks, a manager only finds out a deal is stuck when it is already lost.",
        "TracktCRM shows your deal pipeline as a board. Each column is a stage with its deal count and total value, and each card shows the buyer, value, source and owner. Filter by owner, pipeline or period in one click.",
        "Run more than one pipeline from the same account and switch between them without losing your filters, so sales, renewals and partner deals each get a clean view.",
      ],
      link: { href: "/features/sales-dashboard", label: "Explore the sales dashboard" },
      image: { src: `${IMG}-visualize.webp`, alt: "TracktCRM pipeline board with open value, open deals, won this month and idle deals above stage columns, plus a list of team pipelines" },
    },
    {
      id: "next-steps",
      kicker: "ACTIVITY TRACKING",
      title: "Track every next step so no deal goes quiet",
      paras: [
        "Most lost deals are not lost to a competitor. They are lost to a follow-up nobody made.",
        "Every deal in TracktCRM carries its own follow-ups, calls, meetings, notes, files, emails and WhatsApp messages. Reps see what is due today, get a reminder before each call and can log the outcome in a few taps.",
        "Turn on rotting alerts per stage and TracktCRM flags any deal that has had no activity for the number of days you choose.",
      ],
      link: { href: "/lead-management-software", label: "Learn how follow-ups work" },
      image: { src: `${IMG}-next-steps.webp`, alt: "TracktCRM deal page showing stage progress, deal value and an activity list with a site visit, a call due today, a WhatsApp message and an opened email" },
    },
    {
      id: "automate",
      kicker: "WORKFLOW AUTOMATION",
      title: "Let workflows move routine work along the pipeline",
      paras: [
        "Updating owners, sending the same confirmation message and creating the same task after every stage change eats hours each week.",
        "With TracktCRM workflows, a stage change can send a WhatsApp or email template, create a task for the owner, move a deal, add a tag or notify a manager. Add conditions such as deal value, and delays such as one day after the visit date.",
        "Every run is logged, so you can see exactly what each workflow did and when.",
      ],
      link: { href: "/features/sales-automation", label: "See sales automation" },
      image: { src: `${IMG}-automation.webp`, alt: "TracktCRM workflow that runs when a deal moves to Site visit booked, sends a WhatsApp template, creates a task, waits a day and notifies the sales manager" },
    },
    {
      id: "win-rate",
      kicker: "PIPELINE ANALYTICS",
      title: "Find out why deals are won and lost",
      paras: [
        "If you cannot see why deals are lost, you keep losing them for the same reason.",
        "TracktCRM records a lost reason on every lost deal. Filter reports by pipeline, stage, status, owner and period to see how many deals were won, lost or are still open, and check revenue won per rep on the dashboard.",
        "Use what you learn to fix the stage that loses the most deals and coach the right rep.",
      ],
      link: { href: "/features/reporting-and-analytics", label: "Explore reporting and analytics" },
      image: { src: `${IMG}-win-rate.webp`, alt: "TracktCRM pipeline report filtered to lost deals, with total, won, lost and open deal counts and the stage, owner and lost reason for each deal" },
    },
  ],
  steps: {
    title: "Set up your pipeline in four steps",
    intro: "Most teams have a working pipeline on day one. Our team can set it up for you on a demo call.",
    items: [
      { title: "Pick a template", body: "Choose a pipeline for your industry or start blank, then rename stages and set win probabilities." },
      { title: "Bring in your deals", body: "Import a CSV or Google Sheet, or connect lead sources so new enquiries land in the first stage." },
      { title: "Add next steps", body: "Turn on rotting alerts and add workflows that create follow-ups when deals change stage." },
      { title: "Review weekly", body: "Use pipeline reports and lost reasons to see which stage needs attention." },
    ],
  },
  integrations: {
    title: "Connect your pipeline to the tools you already use",
    intro:
      "Leads from WhatsApp, ads, portals and your website land in the right pipeline automatically, and Gmail and Google Calendar keep every conversation and meeting on the deal.",
  },
  pairs: {
    title: "Fill your pipeline with better leads",
    intro: "Pipeline management works best when new enquiries arrive with their source and details already filled in.",
    items: [
      { title: "Lead capture forms", href: "/features/lead-management", body: "Build a form, choose its pipeline, stage and owner, and embed it on any website. Submissions become deals instantly." },
      { title: "WhatsApp CRM", href: "/features/whatsapp-crm", body: "New WhatsApp chats can create leads, and every message stays on the deal for the whole team to see." },
      { title: "AI lead replies", href: "/industries/ai-crm", body: "Answer new enquiries within seconds so they reach your pipeline while the buyer is still interested." },
    ],
  },
  faqTitle: "Pipeline management FAQs",
  faqs: [
    {
      q: "What is pipeline management in a CRM?",
      a: "Pipeline management in a CRM means tracking every deal through the stages of your sales process in one shared system. In TracktCRM you see deals on a drag-and-drop board, each with its value, owner, next step and full history, so the whole team works from the same live pipeline.",
    },
    {
      q: "How do you manage a sales pipeline effectively?",
      a: "Keep stages simple and specific to your process, make sure every open deal has a dated next step, review idle deals every week and record why deals are lost. TracktCRM helps with custom stages, follow-up reminders, rotting alerts and lost reason reports.",
    },
    {
      q: "Can I create more than one pipeline?",
      a: "Yes. You can run separate pipelines for different products, teams or regions, each with its own stages and win probabilities. Pipeline limits depend on your plan, which you can compare on the pricing page.",
    },
    {
      q: "Can I move my deals from Excel or another CRM?",
      a: "Yes. Import deals from a CSV file or Google Sheets and map columns to TracktCRM fields. If you are switching from another CRM, our team can help migrate your data during onboarding.",
    },
    {
      q: "What is a rotting deal?",
      a: "A rotting deal is one that has sat in the same stage with no activity for longer than you expect. In TracktCRM you set the number of days per stage, and deals that cross it are highlighted so the owner follows up.",
    },
    {
      q: "Does TracktCRM pipeline management work on mobile?",
      a: "TracktCRM runs in any modern browser, including phone browsers, so reps can check their pipeline, log a call or move a deal from the field.",
    },
    {
      q: "Is there a free plan?",
      a: "Yes. The Free plan is free forever for 1 user with no credit card needed. Upgrade to Pro, Premium or All-in-One when you need more users, pipelines, automations or AI.",
    },
  ],
  cta: {
    title: "Start managing your sales pipeline today",
    body: "Set up your stages, import your deals and see your whole pipeline in minutes. Free plan for 1 user, no credit card needed.",
  },
};
