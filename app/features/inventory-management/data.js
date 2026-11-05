const IMG = "/assets/features/inventory-management";

export const DATA = {
  schemaId: "schema-inventory-management",
  name: "Inventory management",
  badge: "INVENTORY MANAGEMENT · PRO PLAN",
  h1: ["CRM with Inventory Management for", "Properties, Rentals and More"],
  intro: [
    "When your listings sit in one spreadsheet and your leads sit in another, every enquiry starts with the same question: is it still available? Prices change, statuses go stale and photos get lost in WhatsApp groups.",
    "TracktCRM keeps your inventory next to your leads. Add properties with price, area, photos and status, search and filter them in seconds, and see what is available, on hold, rented or sold without opening a single sheet.",
  ],
  hero: {
    src: `${IMG}-hero.webp`,
    alt: "TracktCRM Properties inventory in cards view showing listing photos, status badges for available, on hold, rented and draft, locality, size, facing and price, with search and filters above",
  },
  what: {
    kicker: "THE BASICS",
    title: "What is inventory management in a CRM?",
    paras: [
      "Inventory management in a CRM means the things you sell or rent, such as flats, plots, shops, equipment or tour packages, live inside the same system as your leads and deals. Your team looks up an item, checks its status and talks to the buyer without switching tools.",
      "For brokers, builders and rental businesses this removes the double work of keeping a listings sheet and a lead tracker in step. One record per item, one status everyone trusts.",
    ],
    listTitle: "With TracktCRM inventory management you can:",
    bullets: [
      "Add properties with owner, location, size, price, facing, floor and possession details",
      "Keep a status on every item, from Draft and Available to On Hold, Rented and Sold",
      "Upload photos and choose a cover image",
      "Search and filter by type, city, address, status, price and area",
    ],
  },
  features: {
    title: "Inventory features in TracktCRM",
    intro: "A complete listing record for every item, with the search and filters your team needs to find it fast.",
    items: [
      { icon: "building", title: "Property records", body: "Store type, purpose, builder, project, city, locality, address, area, price or rent, facing, floor and possession for each listing." },
      { icon: "status", title: "Live status", body: "Mark every listing as Draft, Available, On Hold, Rented or Sold, shown as a clear badge on the card and in the table." },
      { icon: "images", title: "Photo galleries", body: "Add multiple photos to a listing, pick the cover image and see the photo count on the card." },
      { icon: "search", title: "Search and filters", body: "Search by type, city or address and filter by purpose, property type, status, maximum price and minimum area." },
      { icon: "table", title: "Cards and table views", body: "Switch between a photo-led cards view for browsing and a compact table for scanning many listings at once." },
      { icon: "users", title: "Owner and landlord link", body: "Attach an owner or landlord to a listing by searching your contacts by name or phone number." },
    ],
  },
  lookFor: {
    title: "What to look for in a CRM with inventory management",
    intro: "A listings tool is only useful if your team keeps it up to date. Check these points before you choose.",
    items: [
      { title: "Fields that match your business", body: "A property needs facing, floor and possession. A rental item needs different details. The form should fit what you actually sell." },
      { title: "Clear status", body: "A single status per item stops two reps promising the same flat to two buyers." },
      { title: "Photos on the record", body: "Buyers ask for pictures first. Photos should live on the listing, not in a chat you have to scroll." },
      { title: "Fast search and filters", body: "Finding a 2 BHK under a budget in one sector should take seconds, not a spreadsheet filter." },
      { title: "Linked to contacts", body: "Owners and landlords are contacts too. Linking them saves you retyping names and phone numbers." },
      { title: "Fair pricing", body: "Inventory should not need a separate subscription. Look for it inside the plan you already pay for." },
    ],
  },
  sections: [
    {
      id: "modules",
      kicker: "CHOOSE WHAT YOU MANAGE",
      title: "Set up inventory for the way your business works",
      paras: [
        "A broker does not manage the same things as a car dealer or a tour operator, and one fixed form never fits all of them.",
        "When you open Inventory, TracktCRM asks what you manage. Pick one or more of Properties, Rental Items, Vehicles, Event Inventory and Tour Packages, and you can change the choice later as your business grows.",
        "Each option comes with a description so your team knows where things belong, from flats, plots and offices to cameras, tents, venues and holiday packages.",
      ],
      link: { href: "/pricing", label: "See which plan includes inventory" },
      image: { src: `${IMG}-modules.webp`, alt: "TracktCRM What do you manage screen with Properties selected and options for Rental Items, Vehicles, Event Inventory and Tour Packages" },
    },
    {
      id: "browse",
      kicker: "BROWSE AND FILTER",
      title: "Find the right listing in seconds",
      paras: [
        "Every enquiry has a budget, a location and a type. Scrolling a long sheet to match them wastes the time you have to reply while the buyer is still interested.",
        "Use the table view to scan many listings in one screen, with property, purpose, type, bedrooms, city, locality, area, price and status in columns. Search by type, city or address and narrow results with the purpose, type, status, price and area filters.",
        "Sort by newest first so fresh listings are always on top.",
      ],
      link: { href: "/features/lead-management", label: "See lead management" },
      image: { src: `${IMG}-table.webp`, alt: "TracktCRM Properties table view listing property, purpose, type, bedrooms, city, locality, area, price and status columns with search and filters above" },
    },
    {
      id: "details",
      kicker: "COMPLETE LISTINGS",
      title: "Capture every detail once, in one form",
      paras: [
        "Missing details create the same follow-up call again and again: what floor is it, which way does it face, when is possession?",
        "The Add Property form covers the owner or landlord, purpose, property type, builder or developer, project or building, city, locality, address, area with its unit, price or rent, facing, floor and total floors, possession, status and a free description.",
        "Fill it once and your whole team has the answer, whether they are at their desk or on a site visit.",
      ],
      link: { href: "/features/pipeline-management", label: "See pipeline management" },
      image: { src: `${IMG}-details.webp`, alt: "TracktCRM Edit Property form with owner or landlord search, purpose, property type, builder, project, city, locality, address, area, unit and price fields" },
    },
    {
      id: "photos",
      kicker: "PHOTOS AND STATUS",
      title: "Keep photos and status on the listing, not in a chat",
      paras: [
        "Photos sent on WhatsApp get buried within a day, and nobody remembers which flat was already sold.",
        "Add photos straight to the listing, choose the cover image and remove the ones you do not need. Update the status from the same form as the deal moves along, from Available to On Hold, Rented or Sold.",
        "Cards show the cover photo, the photo count and the status badge, so a glance tells you what you can still offer.",
      ],
      link: { href: "/features/whatsapp-crm", label: "See WhatsApp CRM" },
      image: { src: `${IMG}-photos.webp`, alt: "TracktCRM Edit Property form with facing, floor, possession, status set to On Hold, description and a photo gallery with a cover image and an add photos button" },
    },
  ],
  steps: {
    title: "Set up inventory in four steps",
    intro: "Start with the listings you are actively selling or renting and add the rest over time.",
    items: [
      { title: "Choose what you manage", body: "Pick Properties, Rental Items, Vehicles, Event Inventory or Tour Packages from the Inventory screen." },
      { title: "Add your first listings", body: "Fill in the details, link the owner and upload photos with a cover image." },
      { title: "Set the status", body: "Mark each listing as Draft, Available, On Hold, Rented or Sold and keep it current." },
      { title: "Search and share", body: "Use filters and the cards or table view to find the right listing for each enquiry." },
    ],
  },
  integrations: {
    title: "Inventory sits alongside your lead sources and channels",
    intro: "Leads from portals, ads, forms and WhatsApp arrive in the same CRM where your listings live, so matching a buyer to a property stays in one place.",
  },
  pairs: {
    title: "Put your inventory to work",
    intro: "Listings are the product. These features help you turn enquiries into closed deals.",
    items: [
      { title: "Lead management", href: "/features/lead-management", body: "Capture leads from portals and ads and assign them to the right rep." },
      { title: "Pipeline management", href: "/features/pipeline-management", body: "Move each buyer from first enquiry to site visit to closed deal." },
      { title: "WhatsApp CRM", href: "/features/whatsapp-crm", body: "Chat with buyers on WhatsApp and keep every conversation on the lead." },
    ],
  },
  faqTitle: "Inventory management FAQs",
  faqs: [
    {
      q: "Is inventory management available on the Free plan?",
      a: "No. Inventory management is part of the Pro plan and the plans above it, Premium and All-in-One. The Free plan stays free forever for 1 user, with a single pipeline and unlimited records.",
    },
    {
      q: "What can I manage with TracktCRM inventory?",
      a: "When you open Inventory you choose what you manage: Properties, Rental Items, Vehicles, Event Inventory or Tour Packages. You can pick more than one and change your choice later.",
    },
    {
      q: "What details can I store for a property?",
      a: "You can store the owner or landlord, purpose such as sale, rent or lease, property type, builder or developer, project or building, city, locality, address, area and unit, price or rent, facing, floor, total floors, possession, status, a description and photos.",
    },
    {
      q: "Can I add photos to a listing?",
      a: "Yes. You can upload several photos to each listing and choose a cover image. The card view shows the cover photo and how many photos the listing has.",
    },
    {
      q: "How do I show which listings are still available?",
      a: "Every listing has a status. Set it to Draft, Available, On Hold, Rented or Sold and the badge appears on the card and in the table, so your team can see what is still open.",
    },
    {
      q: "Can I search and filter my listings?",
      a: "Yes. Search by type, city or address, filter by purpose, property type, status, maximum price and minimum area, and sort by newest first. You can switch between cards and table views.",
    },
    {
      q: "Is inventory management a good fit for real estate brokers?",
      a: "Yes. Brokers can keep sale, rent and lease listings with owner details, photos and status next to their leads. See our real estate CRM page for a pipeline built for brokers.",
    },
  ],
  cta: {
    title: "Keep your listings and leads in one CRM",
    body: "Start free with 1 user, no credit card needed, and upgrade to Pro when you are ready to add inventory.",
  },
};
