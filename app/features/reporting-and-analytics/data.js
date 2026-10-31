const IMG = "/assets/features/reporting-and-analytics";

export const DATA = {
  schemaId: "schema-reporting",
  name: "Reporting and analytics",
  badge: "REPORTING AND ANALYTICS",
  h1: ["CRM Reporting and Sales Analytics for", "Clear, Confident Decisions"],
  intro: [
    "Most sales teams find out how the month went when it is already over. Numbers sit in spreadsheets, each rep reports differently and nobody is sure why deals were lost.",
    "TracktCRM builds your sales reports from the same live data your team updates every day. See revenue won, deals won and lost, lost reasons and revenue per rep, then filter by pipeline, stage, owner and period in a few clicks.",
  ],
  hero: {
    src: `${IMG}-hero.webp`,
    alt: "TracktCRM sales dashboard with revenue won, deals won, new leads and deals lost compared with last month, a revenue won chart, revenue by user and latest activity",
  },
  what: {
    kicker: "THE BASICS",
    title: "What is CRM reporting?",
    paras: [
      "CRM reporting turns the deals, leads and activities in your CRM into numbers you can act on: how much you won, how many deals you lost and why, and which reps are closing.",
      "Because the data comes from the CRM itself, reports stay up to date without anyone exporting, cleaning and pasting spreadsheets every Friday.",
    ],
    listTitle: "With TracktCRM reporting and analytics you can:",
    bullets: [
      "Track revenue won and deals won and lost against the last period",
      "Filter reports by pipeline, stage, status, owner and period",
      "See every lost deal with its lost reason",
      "Compare revenue per rep and export leads to CSV",
    ],
  },
  features: {
    title: "Reporting features in TracktCRM",
    intro: "The numbers managers ask for most, ready from the first day and updated as your team works.",
    items: [
      { icon: "dashboard", title: "Live sales dashboard", body: "Revenue won, deals won and lost, new leads and contacts, each compared with the previous period." },
      { icon: "filter", title: "Filterable reports", body: "Filter deals by pipeline, stage, status and owner, for daily, weekly, monthly or yearly periods." },
      { icon: "pie", title: "Lost reasons", body: "Every lost deal keeps its lost reason, date and pipeline, so patterns are easy to spot." },
      { icon: "users", title: "Revenue by user", body: "See how much each rep has won in the selected period, side by side." },
      { icon: "line", title: "Trends over time", body: "Charts of revenue won and new leads show whether the month is heading up or down." },
      { icon: "send", title: "CSV export", body: "Export leads, contacts, organisations and products to CSV for your own analysis." },
    ],
  },
  lookFor: {
    title: "What to look for in CRM reporting software",
    intro: "Good sales reporting saves time every week. Check for these before you choose.",
    items: [
      { title: "Live data", body: "Reports should update as reps move deals, not after someone remembers to refresh a spreadsheet." },
      { title: "Simple filters", body: "Pipeline, stage, owner and period filters answer most questions without building a custom report." },
      { title: "Lost deal insight", body: "Knowing why deals are lost matters as much as knowing how many you won." },
      { title: "Rep-level numbers", body: "Revenue per rep and recent activity help managers coach the right person." },
      { title: "Period comparisons", body: "Comparing this month with last month shows whether things are improving." },
      { title: "Access control", body: "Roles and permissions decide who can view reports, so sensitive numbers stay with the right people." },
    ],
  },
  sections: [
    {
      id: "reports",
      kicker: "SALES REPORTS",
      title: "Answer sales questions with a few filters",
      paras: [
        "Most questions a manager asks sound like this: how many deals did we win in this pipeline this month, and how many are still open?",
        "The Reports page in TracktCRM answers them with simple filters. Choose a pipeline, stage, status and owner, pick a daily, weekly, monthly or yearly period, and see total, won, lost and open deal counts with the list of deals behind them.",
        "Because reports read the same data your team updates, there is nothing to export or reconcile.",
      ],
      link: { href: "/features/pipeline-management", label: "See pipeline management" },
      image: { src: `${IMG}-reports.webp`, alt: "TracktCRM Reports page filtered by pipeline, status and monthly period, with total, won, lost and open deal counts and a list of won deals" },
    },
    {
      id: "lost-deals",
      kicker: "LOST DEAL ANALYSIS",
      title: "Learn why deals are lost and fix it",
      paras: [
        "Every team loses deals. The teams that improve are the ones that know why.",
        "When a deal is marked lost in TracktCRM, the rep picks a lost reason from your list. The dashboard shows how many deals were lost compared with the last period, and opens the full list of lost deals with each date, reason and pipeline.",
        "If most deals are lost on budget, look at pricing. If they are lost to no response, tighten your follow-up workflows.",
      ],
      link: { href: "/features/sales-automation", label: "Automate follow-ups" },
      image: { src: `${IMG}-lost.webp`, alt: "TracktCRM lost deals list with deal, lost date, lost reason and pipeline, below deals lost compared with last month" },
    },
    {
      id: "team",
      kicker: "TEAM PERFORMANCE",
      title: "See how each rep is performing",
      paras: [
        "A team total hides a lot. One rep may be carrying the month while another needs help.",
        "Revenue by user on the TracktCRM dashboard shows how much each rep has won in the selected period. The latest activity feed shows what is happening across the team as it happens.",
        "Filter reports by owner to see any rep's won, lost and open deals before your next one-to-one.",
      ],
      link: { href: "/features/sales-dashboard", label: "Explore the sales dashboard" },
      image: { src: `${IMG}-team.webp`, alt: "TracktCRM team performance view with revenue won per rep and a latest activity feed showing a won deal, a sent quote, a booked visit and a logged call" },
    },
    {
      id: "trends",
      kicker: "TRENDS",
      title: "Spot trends before the month is over",
      paras: [
        "Waiting for month-end to see results leaves no time to change them.",
        "The dashboard charts new leads and revenue won over time, compares each number with the previous period and counts deals per country. Switch between today, this week, this month, this year or a custom date range.",
        "A drop in new leads in week two is a signal to act in week three, not a surprise at month-end.",
      ],
      link: { href: "/features/lead-management", label: "See lead management" },
      image: { src: `${IMG}-trends.webp`, alt: "TracktCRM dashboard with new leads, new contacts, deals won and deals lost compared with last month, a weekly new leads chart and deal count per country" },
    },
    {
      id: "export",
      kicker: "EXPORT",
      title: "Take your data anywhere with CSV export",
      paras: [
        "Sometimes you need the raw data, for a board deck, an accountant or your own pivot table.",
        "Export leads from TracktCRM to a CSV file with their owner, source, value and status, and open it in Excel or Google Sheets. Contacts, organisations and products can be exported too.",
        "Your data is always yours to take with you.",
      ],
      link: { href: "/integrations", label: "See Google Sheets and other integrations" },
      image: { src: `${IMG}-export.webp`, alt: "TracktCRM leads list using a saved view of deals won this month, with an Export CSV button and a download prompt" },
    },
  ],
  integrations: {
    title: "Reports that include every channel",
    intro: "Leads from WhatsApp, ads, portals and forms, and activity from Gmail and Google Calendar, all feed the same reports.",
  },
  pairs: {
    title: "Get more from your reports",
    intro: "Reports are only as good as the data behind them. These features keep it complete.",
    items: [
      { title: "Sales dashboard", href: "/features/sales-dashboard", body: "Learn how a live sales dashboard helps managers see the pipeline at a glance." },
      { title: "Pipeline management", href: "/features/pipeline-management", body: "Clear stages and lost reasons give your reports something useful to measure." },
      { title: "Sales automation", href: "/features/sales-automation", body: "Workflows log follow-ups and activities automatically, so reports reflect real work." },
    ],
  },
  faqTitle: "Reporting and analytics FAQs",
  faqs: [
    {
      q: "What is CRM reporting?",
      a: "CRM reporting turns the deals, leads and activities stored in your CRM into reports such as revenue won, deals won and lost, lost reasons and revenue per rep. Because the data comes from the CRM, reports stay current without manual spreadsheets.",
    },
    {
      q: "Which sales reports does TracktCRM include?",
      a: "The dashboard shows revenue won, revenue by user, deals won and lost, new leads and contacts, deal count per country, lost deals with reasons and the latest activity. The Reports page lists deals filtered by pipeline, stage, status, owner and period.",
    },
    {
      q: "Can I filter reports by rep or pipeline?",
      a: "Yes. Filter reports by pipeline, stage, status and owner, and choose a daily, weekly, monthly or yearly period. The dashboard can be set to today, this week, this month, this year or a custom date range.",
    },
    {
      q: "How does TracktCRM track lost reasons?",
      a: "When a deal is marked lost, the rep chooses a lost reason. The dashboard lists every lost deal with its date, reason and pipeline, so you can see the most common reasons.",
    },
    {
      q: "Can I export my data?",
      a: "Yes. You can export leads, contacts, organisations and products to CSV files and open them in Excel or Google Sheets.",
    },
    {
      q: "What is the difference between this page and the sales dashboard page?",
      a: "This page covers every report and analytics feature in TracktCRM. The sales dashboard page focuses on how managers use the live dashboard to watch the pipeline day to day.",
    },
  ],
  cta: {
    title: "See your sales numbers clearly",
    body: "Start tracking revenue, lost reasons and rep performance today. Free plan for 1 user, no credit card needed.",
  },
};
