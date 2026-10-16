// Set to false if deals do not carry a value field in the product.
export const SHOW_DEAL_VALUE = true;

export const PROBLEM_POINTS = [
  "Managers rebuild pipeline numbers in spreadsheets every Monday",
  "Nobody can see which ads or portals actually produce won deals",
  "Rep activity is guesses and chat screenshots, not a clear scorecard",
  "Follow-ups that should have happened yesterday stay invisible until a lead complains",
];

export const FEATURES = [
  {
    icon: "pipeline",
    title: "Pipeline Overview",
    body: `Your sales dashboard shows every stage${SHOW_DEAL_VALUE ? ", deal value" : ""} and stuck record in one view. A pipeline report updates as reps move leads, not after a manual export. Managers can spot bottlenecks before the week ends. If too many deals sit in one stage, you know where to look first, whether that is slow quotes, missed calls or leads that never got a reply.`,
  },
  {
    icon: "scorecard",
    title: "Rep Scorecards",
    body: "See activity, response habits and outcomes per person. A sales performance dashboard helps coaching without waiting for month-end, and without guessing from chat screenshots. You can see who replies fast, who has a pile of overdue follow-ups and who converts the most enquiries, then share what the best reps do with the rest of the team.",
  },
  {
    icon: "roi",
    title: "Source-Wise ROI",
    body: "Track which Meta ads, Google ads, portals and forms create won deals. Sales reporting software should answer where to spend next, not only how many leads arrived last week. Because every lead keeps its source from the first touch, you can compare cheap leads that never close with costlier ones that turn into real deals.",
  },
  {
    icon: "ai",
    title: "AI-Powered Reports",
    body: "AI reports summarise what is working and what needs attention, so managers spend less time building charts by hand and more time coaching the pipeline. Instead of reading every chart, you get a short plain-English summary of where deals are slowing down and which reps or sources need a closer look.",
    href: "/industries/ai-crm",
    linkLabel: "See the AI CRM",
  },
  {
    icon: "followup",
    title: "Follow-Up Tracking",
    body: "Open tasks and quiet leads show up on the CRM dashboard before they go cold. Automated reminders nudge the owner, and managers can see which follow-ups are overdue without asking each rep for an update. Pair this with lead management software to close the loop from capture to next step.",
    href: "/lead-management-software",
    linkLabel: "Lead management software",
  },
  {
    icon: "mobile",
    title: "Check Numbers Anywhere",
    body: "Open your sales dashboard in a browser on desktop or phone. No separate install required to review today’s pipeline while you are away from the desk.",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Connect your channels",
    body: "Bring leads from forms, WhatsApp, ads and portals into TracktCRM with sources attached.",
  },
  {
    n: "02",
    title: "Work the pipeline",
    body: "Reps move deals through stages and log chats, so the sales dashboard stays current.",
  },
  {
    n: "03",
    title: "Review the sales report",
    body: "Managers open pipeline, scorecard and source views to see what needs coaching today.",
  },
  {
    n: "04",
    title: "Act on the numbers",
    body: "Fix slow stages, reassign quiet leads and shift budget toward sources that close.",
  },
];

export const AUDIENCE = [
  {
    name: "Sales managers",
    href: "/crm-software",
    body: "Leaders who need a live CRM dashboard instead of weekly sheet dumps.",
  },
  {
    name: "Growing sales teams",
    href: "/lead-management-software",
    body: "Teams that already capture leads and need visibility on every stage.",
  },
  {
    name: "Real estate",
    href: "/industries/real-estate-crm",
    body: "Brokers who track portal ROI and site-visit conversion.",
  },
  {
    name: "Education",
    href: "/industries/education-crm",
    body: "Admission heads watching counsellor activity and enrolment stages.",
  },
  {
    name: "Agencies",
    href: "/industries/crm-for-agencies",
    body: "Founders reviewing pitch pipeline and retainer renewals.",
  },
  {
    name: "Recruitment",
    href: "/industries/crm-for-recruitment",
    body: "Desk heads comparing recruiter activity across client roles.",
  },
];

export const FAQS = [
  {
    q: "What is a sales dashboard?",
    a: "A sales dashboard is a live view of leads, deals, stages and rep activity. TracktCRM updates those views as your team works, so you do not rebuild numbers in a spreadsheet every Monday.",
  },
  {
    q: "What should a sales report include?",
    a: "A useful sales report shows pipeline by stage, activity by rep, follow-ups due and which sources win deals. TracktCRM covers those views inside the CRM next to the records themselves. Start with three questions: where are deals getting stuck, who needs help, and which channels bring buyers rather than just enquiries.",
  },
  {
    q: "Is a CRM dashboard different from a spreadsheet?",
    a: "A CRM dashboard pulls from live lead and deal data. Spreadsheets go stale the moment someone forgets to paste yesterday’s numbers, which is why managers switch to in-product reporting. When a rep moves a deal or logs a call, the numbers change with it, so everyone works from the same facts.",
  },
  {
    q: "What is a sales performance dashboard?",
    a: "A sales performance dashboard highlights how each rep is doing on activity, response and outcomes, so coaching is based on facts. TracktCRM includes rep scorecards for that without a separate BI tool.",
  },
  {
    q: "Do I need sales reporting software separately?",
    a: "Not if your CRM includes sales reporting software for pipeline, sources and follow-ups. TracktCRM keeps those reports next to the deals themselves so numbers match reality. That also means one less tool to pay for, set up and keep in sync with your lead data.",
  },
  {
    q: "Can I see a pipeline report on my phone?",
    a: "Yes. Open TracktCRM in a mobile browser to review your pipeline report and today’s follow-ups. Start free with no credit card needed.",
  },
];
