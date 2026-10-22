import {
  LuBadgeCheck,
  LuGift,
  LuHandshake,
  LuImage,
  LuIndianRupee,
  LuMail,
  LuMessageCircle,
  LuMousePointerClick,
  LuZap,
} from "react-icons/lu";
import RevealInit from "../../components/reveal-init";
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

const ROUTE = "/partners/affiliate-partner-program";
const UPDATED = "2026-10-22";

export const metadata = buildMetadata(ROUTE);

const WHY_RECOMMEND = [
  {
    Icon: LuBadgeCheck,
    title: "Free plan to start",
    body: "Your referrals can start on our Free plan with no credit card, so saying yes is easy.",
  },
  {
    Icon: LuMessageCircle,
    title: "Built for Indian businesses",
    body: "WhatsApp integration and lead capture from portals like IndiaMART, Justdial and 99acres.",
  },
  {
    Icon: LuZap,
    title: "Simple to use",
    body: "Most small teams are up and running in a day, without training.",
  },
];

const BENEFITS = [
  { Icon: LuIndianRupee, title: "Commission on every sale", body: COPY.affiliateBenefitBody },
  { Icon: LuMousePointerClick, title: COPY.cookieTitle, body: COPY.cookieBody },
  { Icon: LuGift, title: "Free to join", body: "No joining fee, no minimum sales target." },
  {
    Icon: LuImage,
    title: "Ready-made content",
    body: "Banners, social posts, WhatsApp messages and product images you can share right away.",
  },
  {
    Icon: LuHandshake,
    title: "We handle the rest",
    body: "Demos, onboarding and customer support are done by our team.",
  },
  {
    Icon: LuMail,
    title: "Dedicated affiliate support",
    body: "A real person to answer your questions by email.",
  },
];

const WHO = [
  "Chartered Accountants",
  "Business consultants",
  "Freelancers",
  "Sales trainers & coaches",
  "YouTubers & bloggers",
  "LinkedIn creators",
  "Business community admins",
  "Web designers",
  "Existing TracktCRM customers",
];

const STEPS = [
  {
    title: "Sign up",
    body: "Fill in the short form below. We review applications within 2 working days.",
  },
  {
    title: "Share your link",
    body: "Once approved, you get your unique referral link and promotion material by email.",
  },
  { title: "Earn commission", body: COPY.affiliateStepEarn },
];

const FAQS = [
  {
    q: "What is the TracktCRM Affiliate Program?",
    a: "A free program where you earn commission by referring businesses to TracktCRM through your unique referral link.",
  },
  { q: "Who can I refer?", a: "Any business that is not already a paying TracktCRM customer." },
  { q: "How is a referral tracked?", a: COPY.cookieFaq },
  { q: "When do I get paid?", a: COPY.payoutFaq },
  {
    q: "Do I need to give demos or support customers?",
    a: "No. Our team handles demos, onboarding and support. You just share your link.",
  },
  {
    q: "Is there a joining fee or sales target?",
    a: "No. It's free to join and there is no minimum target.",
  },
  {
    q: "What's the difference between Affiliate and Reseller?",
    a: "Affiliates refer and earn. Resellers also sell, set up and support clients, and earn a higher recurring commission. See the comparison above.",
  },
  {
    q: "Can I promote using Google or Facebook ads?",
    a: "Please don't bid on the \"TracktCRM\" brand name in paid ads. Other promotion methods are welcome. Full guidelines are shared after approval.",
  },
];

export default function AffiliatePartnerProgramPage() {
  return (
    <div className="home pp-page">
      <PartnerSchema
        seo={PAGE_SEO[ROUTE]}
        route={ROUTE}
        breadcrumb="Affiliate Partner Program"
        faqs={FAQS}
        dateModified={UPDATED}
      />
      <RevealInit />

      <main>
        <PartnerHero
          breadcrumb="Affiliate Partner Program"
          h1={{
            lead: "Recommend TracktCRM.",
            highlight: "Earn Every Time Someone Signs Up and Pays.",
          }}
          tagline="Earn from your network by simply referring TracktCRM. Ready to start?"
          intro={`For consultants, CAs, freelancers, trainers, bloggers and creators who know business owners. Share your referral link, and ${COPY.affiliateHeroEarn}`}
          primaryLabel="Join the Affiliate Program"
          secondary={{
            href: "/partners/reseller-partner-program",
            label: "Want to sell and set up for clients? See Reseller Program",
          }}
        />

        <PartnerStory
          what={{
            id: "what",
            strong: "A Simple Way",
            rest: "to Earn From Your Network",
            body: (
              <>
                <p>
                  Every business owner you know has the same problem: leads coming
                  in from calls, WhatsApp and ads, and no proper system to follow
                  them up.
                </p>
                <p>
                  If you&apos;re the person they ask for advice — their CA,
                  consultant, trainer, or someone whose content they follow — you
                  can point them to TracktCRM.
                </p>
                <p>
                  You share your link. We handle the demo, onboarding and support.
                  You earn when they become a paying customer.
                </p>
              </>
            ),
          }}
          why={{
            id: "why-recommend",
            strong: "Easy to Recommend,",
            rest: "Easy for Them to Start",
            image: {
              src: "/assets/partners/affiliate-why.webp",
              alt: "A business consultant recommending TracktCRM to a small business owner over coffee",
            },
            body: (
              <ul className="pp-why-list">
                {WHY_RECOMMEND.map(({ Icon, title, body }) => (
                  <li key={title}>
                    <span className="pp-why-icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ),
          }}
        />

        <PartnerDarkBand
          benefits={{ title: "What You Get as a TracktCRM Affiliate", cards: BENEFITS }}
          steps={{
            title: "How the Affiliate Program Works",
            intro: "Once you're approved, we email you your referral link and everything you need to start sharing.",
            items: STEPS,
            buttonLabel: "Join Now",
          }}
        />

        <PartnerChips strong="Who" rest="Can Join?" chips={WHO} label="People who can join" />

        <PartnerCompareTable current="affiliate" />

        <PartnerFormSection
          programType="affiliate"
          title="Join the TracktCRM Affiliate Program"
          intro="It takes 2 minutes. We'll email you your referral link once you're approved."
        />

        <PartnerFaq faqs={FAQS} />

        <PartnerCta
          strong="Join the TracktCRM Affiliate Program"
          rest="and start earning from your network."
          text="Free to join. No targets. Just share and earn."
          buttonLabel="Join the Affiliate Program"
          note="Questions about the affiliate program? Write to"
        />
      </main>
    </div>
  );
}
