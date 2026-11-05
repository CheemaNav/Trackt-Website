export const PROBLEM_POINTS = [
  "Walk-in, website, Google Ads, Justdial and WhatsApp enquiries land in different places",
  "Nobody knows in real time which cabin, seat or meeting room is free",
  "Quotations, proformas and agreements are made by hand in Word and Excel",
  "Monthly member invoices miss extras such as printouts, add-ons and meeting room hours",
];

export const FEATURES = [
  {
    icon: "capture",
    title: "Capture Every Space Enquiry",
    body: "Website forms, Google Ads lead forms, Justdial and WhatsApp send prospects into one coworking CRM inbox, each tagged with its source, so you know which channel fills your desks.",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp for Tours and Pricing",
    body: "Reply to \"what is the price of a cabin?\" from a shared inbox, so tour requests and quotes are never stuck on one manager's phone. See the WhatsApp CRM for how shared threads work.",
    href: "/features/whatsapp-crm",
    linkLabel: "WhatsApp CRM",
  },
  {
    icon: "space",
    title: "Space Availability and Booking",
    body: "Track cabins, seats, meeting rooms and studios across floors and locations. Once a space is booked it cannot be booked again, so two members never get the same cabin.",
  },
  {
    icon: "quotes",
    title: "Quotation and Proforma",
    body: "Build a quotation or proforma invoice from the lead record with the space, price and terms, and send it while the prospect is still comparing coworking options.",
  },
  {
    icon: "agreement",
    title: "Lead to Agreement",
    body: "When a lead converts, the client's details fill in automatically, with optional company, GST and PAN. Add pricing, confirm the quotation and get the agreement ready to send by email or download.",
  },
  {
    icon: "billing",
    title: "Member Billing and Invoices",
    body: "Link each member to their space and generate monthly invoices automatically, including purchases such as extra hours or add-ons, so billing stops depending on a month-end spreadsheet.",
  },
];

export const SHOWCASE = [
  {
    id: "setup",
    kicker: "SET UP YOUR SPACE",
    title: "Set up locations, floors and spaces once",
    body: "Add each location with its city and timezone, then its floors, then every space on them. Each space keeps its type, floor, capacity and monthly price, so the whole team quotes from the same list.",
    points: [
      "Locations with city and timezone",
      "Floors with level and display order",
      "Private offices, dedicated desks, hot desks and meeting rooms with capacity and price",
      "Set a space to maintenance or deactivate it without deleting it",
    ],
    image: {
      src: "/assets/industries/coworking/coworking-setup-locations-floors-spaces.webp",
      alt: "TracktCRM coworking setup showing a location, its floors and a spaces list with type, floor, capacity and monthly price",
      width: 1080,
      height: 945,
    },
  },
  {
    id: "book",
    kicker: "BOOK FROM THE LEAD",
    title: "Book a space without leaving the lead",
    body: "Open the Spaces tab on a lead, click Book a space and choose from the cabins, desks and rooms on screen. Filter by location, floor and type, so a prospect asking for a four-seat cabin gets an answer while they are still on the call.",
    points: [
      "Every booking stays on the lead record",
      "Filter by location, floor and space type",
      "Each card shows the type, capacity, monthly price and availability",
    ],
    image: {
      src: "/assets/industries/coworking/coworking-book-space-from-lead.webp",
      alt: "TracktCRM lead record with the Book a space window open, showing available private offices, a dedicated desk, a hot desk and a meeting room",
      width: 1024,
      height: 480,
    },
  },
  {
    id: "price",
    kicker: "PRICE AND CONFIRM",
    title: "See exactly what the client pays before you confirm",
    body: "Add the guest or company name and a start date, then choose no end date for a rolling booking or set a fixed end date. Pick a discount if you offer one, and TracktCRM shows the list price, the tax and the monthly amount the client pays.",
    points: [
      "Rolling or fixed-term bookings",
      "Notes for anything agreed on the tour",
      "List price, discount, tax and final monthly price in one view",
    ],
    image: {
      src: "/assets/industries/coworking/coworking-booking-price.webp",
      alt: "TracktCRM Book space form with guest name, start date, end date options, notes, discount and the list price, tax and monthly amount the client pays",
      width: 566,
      height: 914,
      portrait: true,
    },
  },
];

export const SPACE_STATUSES = [
  {
    id: "available",
    label: "Available",
    body: "Free for the time window you picked, so you can offer it straight away.",
  },
  {
    id: "booked",
    label: "Booked",
    body: "Taken for those dates, so nobody on the team can promise it twice.",
  },
  {
    id: "hold",
    label: "On hold",
    body: "Marked on hold, so the team knows not to offer it yet.",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    body: "Out of use until you set it back, without losing its details.",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Enquiry arrives",
    body: "A form, ad, Justdial listing or WhatsApp message creates a lead with the source and the space they want.",
  },
  {
    n: "02",
    title: "Tour and quote",
    body: "Schedule the tour, then send a quotation or proforma for the cabin, seat or meeting room.",
  },
  {
    n: "03",
    title: "Agreement and booking",
    body: "Convert the lead, generate the agreement from the lead details and book the space so it is blocked for everyone else.",
  },
  {
    n: "04",
    title: "Bill and renew",
    body: "Monthly invoices go out automatically, and reminders help you speak to members before their term ends.",
  },
];

export const AUDIENCE = [
  {
    name: "Coworking spaces",
    href: "/industries",
    body: "Operators who rent seats, cabins and meeting rooms to freelancers and teams.",
  },
  {
    name: "Business centres",
    href: "/features/inventory-management",
    body: "Centres that manage offices, cabins and shared inventory across floors.",
  },
  {
    name: "Serviced offices",
    href: "/features/pipeline-management",
    body: "Teams that move companies from enquiry to signed agreement.",
  },
  {
    name: "Studios and event spaces",
    href: "/lead-management-software",
    body: "Spaces such as podcast studios that need clear bookings and quick replies.",
  },
];

export const FAQS = [
  {
    q: "What is a coworking space CRM?",
    a: "A coworking space CRM is software that captures enquiries for seats, cabins and meeting rooms, tracks tours and quotations, and manages the move from lead to signed agreement and monthly billing. TracktCRM puts these steps in one place instead of spreading them across sheets and chats.",
  },
  {
    q: "Can TracktCRM stop two members booking the same cabin?",
    a: "Yes. When a cabin, seat or room is booked it is no longer available to book again, so your team always sees real-time availability across floors and locations.",
  },
  {
    q: "Can I create quotations and proforma invoices?",
    a: "Yes. You can create a quotation or proforma from the lead, confirm the pricing and send it to the prospect, then carry the same details into the agreement.",
  },
  {
    q: "How does the lead to agreement flow work?",
    a: "When a lead converts, the client's details are filled in automatically from the lead record, with company, GST and PAN as optional fields. You then add pricing, finalise the quotation and get the agreement ready to send by email or download.",
  },
  {
    q: "Does TracktCRM create monthly invoices for members?",
    a: "Yes. Members are linked to their space and monthly invoices are generated automatically, including inventory items a member has bought.",
  },
  {
    q: "Can I try a coworking CRM before buying?",
    a: "Yes. Start free with 1 user and no credit card, run real enquiries, then upgrade when your team needs more users or features. See pricing for what each plan includes.",
  },
];
