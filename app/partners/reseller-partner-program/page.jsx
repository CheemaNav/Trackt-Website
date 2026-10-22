import Link from "next/link";
import {
  LuBadgeCheck,
  LuGraduationCap,
  LuHeadset,
  LuKeyRound,
  LuPresentation,
  LuRepeat,
  LuTrendingUp,
  LuWallet,
} from "react-icons/lu";
import { ArrowIcon } from "../../icons";
import RevealInit from "../../components/reveal-init";
import { INDUSTRY_ICONS } from "../../components/related-industries";
import PartnerCompareTable from "../../components/partners/partner-compare-table";
import {
  PartnerChips,
  PartnerCta,
  PartnerDarkBand,
  PartnerFaq,
  PartnerFormSection,
  PartnerHero,
  PartnerSchema,
  PartnerStory,
} from "../../components/partners/partner-sections";
import { COPY } from "@/lib/partner-program";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

const ROUTE = "/partners/reseller-partner-program";
const UPDATED = "2026-10-22";

export const metadata = buildMetadata(ROUTE);

const BENEFITS = [
  { Icon: LuRepeat, title: COPY.resellerBenefitTitle, body: COPY.resellerBenefitBody },
  {
    Icon: LuTrendingUp,
    title: "Earn more as they grow",
    body: "When your client adds users or upgrades from Pro to Premium or All-in-One, your earnings grow too.",
  },
  {
    Icon: LuWallet,
    title: "Charge for your services",
    body: "Keep 100% of what you charge clients for setup, training, data migration and customisation.",
  },
  {
    Icon: LuKeyRound,
    title: "Free partner account",
    body: "Get a free TracktCRM account to run demos and learn the product inside out.",
  },
  {
    Icon: LuGraduationCap,
    title: "Partner training",
    body: "Product walkthroughs and setup guides so you can implement TracktCRM confidently.",
  },
  {
    Icon: LuHeadset,
    title: "Priority support",
    body: "Faster help from our team when you're setting up a client account.",
  },
  {
    Icon: LuPresentation,
    title: "Sales & marketing material",
    body: "Ready-made brochures, demo decks and WhatsApp-ready product images.",
  },
  {
    Icon: LuBadgeCheck,
    title: "Partner listing",
    body: "Get listed as an official TracktCRM partner on our website.",
  },
];

const WHO = [
  "IT & software resellers",
  "Digital marketing agencies",
  "Business consultants",
  "System integrators",
  "Web development agencies",
  "ERP / Tally partners",
  "Sales training firms",
  "Freelance tech consultants",
];

const STEPS = [
  {
    title: "Apply",
    body: "Fill in the form below with details about your business and the clients you work with.",
  },
  {
    title: "Get onboarded",
    body: "Our team reviews your application, gets on a short call with you, and sets up your partner account and training.",
  },
  { title: "Sell & earn", body: COPY.resellerStepEarn },
];

const INDUSTRIES = [
  { name: "Real Estate", href: "/industries/real-estate-crm", icon: "realEstate" },
  { name: "Education", href: "/industries/education-crm", icon: "education" },
  { name: "Healthcare", href: "/industries/crm-for-healthcare", icon: "healthcare" },
  { name: "Insurance", href: "/industries/crm-for-insurance", icon: "insurance" },
  { name: "Travel", href: "/industries/crm-for-travel", icon: "travel" },
  { name: "Automotive", href: "/industries/crm-for-automotive", icon: "automotive" },
  { name: "Agencies", href: "/industries/crm-for-agencies", icon: "agency" },
  { name: "Recruitment", href: "/industries/crm-for-recruitment", icon: "recruitment" },
];

const FAQS = [
  {
    q: "What is the TracktCRM Reseller Partner Program?",
    a: "It's a program for agencies, consultants and resellers who want to sell TracktCRM to their clients, set it up for them, and earn recurring commission on every paying account.",
  },
  {
    q: "Who can apply?",
    a: "Any business that helps other businesses with software, marketing or sales processes — IT resellers, digital agencies, consultants, system integrators and freelancers.",
  },
  { q: "How much can I earn?", a: COPY.resellerFaqEarn },
  {
    q: "When and how do I get paid?",
    a: `${COPY.payoutFaq} GST invoice details will be shared during onboarding.`,
  },
  {
    q: "Do I need CRM experience to join?",
    a: "No. We give you a free partner account and training. Experience helps, but it isn't required.",
  },
  { q: "Is there any joining fee?", a: "No. Joining the program is free." },
  {
    q: "What's the difference between the Reseller and Affiliate programs?",
    a: "Resellers sell, set up and support clients, and earn higher recurring commission. Affiliates simply share a referral link and earn when someone signs up and pays. See the comparison table above.",
  },
  {
    q: "Who supports my clients after setup?",
    a: "You remain your client's first point of contact, and our support team is always available to help you and your clients with product issues.",
  },
];

export default function ResellerPartnerProgramPage() {
  return (
    <div className="home pp-page">
      <PartnerSchema
        seo={PAGE_SEO[ROUTE]}
        route={ROUTE}
        breadcrumb="Reseller Partner Program"
        faqs={FAQS}
        dateModified={UPDATED}
      />
      <RevealInit />

      <main>
        <PartnerHero
          breadcrumb="Reseller Partner Program"
          h1={{
            lead: "Sell TracktCRM to Your Clients.",
            highlight: "Earn on Every Account You Bring.",
          }}
          tagline="Build a recurring income stream by bringing TracktCRM to the businesses you work with."
          intro={`For IT consultants, digital agencies, software resellers and system integrators who help Indian businesses get organised. Bring TracktCRM to your clients, set it up for them, and ${COPY.resellerHeroEarn}`}
          primaryLabel="Apply to Become a Reseller"
          secondary={{
            href: "/partners/affiliate-partner-program",
            label: "Looking to just refer? See Affiliate Program",
          }}
        />

        <PartnerStory
          what={{
            id: "why",
            strong: "Your Clients Need a CRM.",
            rest: "Most CRMs Are Too Heavy for Them.",
            body: (
              <>
                <p>
                  Most small businesses in India still run sales on Excel sheets,
                  WhatsApp chats and diaries. Leads from IndiaMART, Justdial, 99acres
                  or Facebook ads get missed, and follow-ups depend on someone
                  remembering.
                </p>
                <p>
                  They know they need a CRM, but big CRMs feel expensive and
                  complicated to set up. That is where you come in.
                </p>
                <p>
                  TracktCRM is simple enough for a small team to start using in a
                  day, and flexible enough for you to customise pipelines, stages and
                  automations for each client. You bring the client relationship and
                  setup skills. We bring the product, updates and support.
                </p>
              </>
            ),
          }}
          why={{
            id: "industries",
            strong: "Ready-Made",
            rest: "for the Industries Your Clients Are In",
            image: {
              src: "/assets/partners/reseller-why.webp",
              alt: "A TracktCRM reseller partner training a client team on their new sales pipeline",
            },
            body: (
              <>
                <p>
                  TracktCRM already has pages and pipelines for these industries, so
                  you don&apos;t start from zero.
                </p>
                <ul className="pp-industry-list">
                  {INDUSTRIES.map((item) => {
                    const Icon = INDUSTRY_ICONS[item.icon];
                    return (
                      <li key={item.href}>
                        <Link className="pp-industry-link" href={item.href}>
                          <span className="pp-why-icon" aria-hidden="true">
                            <Icon size={18} />
                          </span>
                          <strong>{item.name}</strong>
                          <span className="pp-industry-arrow" aria-hidden="true">
                            <ArrowIcon size={14} />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ),
          }}
        />

        <PartnerDarkBand
          benefits={{ title: "What You Get as a TracktCRM Reseller", cards: BENEFITS }}
          steps={{
            title: "How the Reseller Program Works",
            intro: "Our partner team will get back to you within 2 working days to talk about your clients and plans.",
            items: STEPS,
            buttonLabel: "Apply Now",
          }}
        />

        <PartnerChips strong="Who Is This" rest="Program For?" chips={WHO} label="Businesses that can apply" />

        <PartnerCompareTable current="reseller" />

        <PartnerFormSection
          programType="reseller"
          title="Apply to Become a TracktCRM Reseller"
          intro="Tell us a little about your business. Our partner team will get back to you within 2 working days."
        />

        <PartnerFaq faqs={FAQS} />

        <PartnerCta
          strong="Let's Grow Together"
          rest="and build a recurring income stream."
          text="Help more Indian businesses move from spreadsheets to a CRM they'll actually use."
          buttonLabel="Apply to Become a Reseller"
          note="Have another partnership idea? Write to us at"
        />
      </main>
    </div>
  );
}
