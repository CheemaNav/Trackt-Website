import {
  AiLeadIcon,
  ArrowIcon,
  CaptureIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  ConversationIcon,
  ReminderIcon,
  RenewalIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL } from "../../site";
import { BreadcrumbJsonLd, TravelCrmJsonLd } from "../../json-ld";
import {
  AUDIENCE,
  FAQS,
  FEATURES,
  PROBLEM_POINTS,
  PROCESS_STEPS,
} from "./data";
import { buildMetadata } from "@/lib/seo";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  whatsapp: ChannelWhatsAppIcon,
  ai: AiLeadIcon,
  quotes: ConversationIcon,
  packages: ReminderIcon,
  repeat: RenewalIcon,
};

export const metadata = buildMetadata("/industries/crm-for-travel");

export default function TravelCrmPage() {
  return (
    <div className="home">
      <TravelCrmJsonLd faqs={FAQS} features={FEATURES} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Travel CRM", href: "/industries/crm-for-travel" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                TRAVEL CRM
              </div>
              <h1 className="re-banner-title">
                Travel CRM That Turns Every Enquiry Into{" "}
                <span>a Booked Trip</span>
              </h1>
              <p className="re-banner-sub">
                TracktCRM is a travel CRM for travel agencies and tour
                operators: capture Meta, Google, WhatsApp and form enquiries,
                follow up quotes and keep package pipelines clear through peak
                season. Start free – no credit card needed.
              </p>
              <div className="re-banner-ctas">
                <a
                  className="btn btn-primary"
                  href={APP_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start free
                  <span className="btn-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
                <a className="btn btn-outline" href="/contact">
                  Book a demo
                </a>
              </div>
              <p className="re-banner-trust">
                Built for travel desks · Free plan · WhatsApp included
              </p>
            </div>
            <figure className="re-banner-media">
              <img
                src="/assets/contact-banner.png"
                alt="Travel counsellor using TracktCRM travel CRM to follow up trip enquiries"
                width={1024}
                height={576}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="problem">
          <div className="re-split">
            <div className="re-split-copy">
              <p className="kicker">THE TRAVEL DESK PROBLEM</p>
              <h2 className="h2">
                Why travel enquiries slip during seasonal spikes
              </h2>
              <p className="re-section-intro">
                Indian travel agencies and tour operators see enquiry spikes
                around holidays and festivals. Without a travel CRM, quotes sit
                in personal WhatsApp threads and older travellers never hear
                about the next trip. Website forms, Meta ads and Google ads add
                more volume on the same day, so travel lead management has to
                assign owners and stages automatically—not after someone pastes
                a sheet at night.
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.png"
                alt="TracktCRM travel CRM pipeline for enquiry, quote and booking stages"
                width={1383}
                height={695}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="re-point-grid">
            {PROBLEM_POINTS.map((point) => (
              <article className="re-point-card industry-point-card" key={point}>
                <span className="re-point-check" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="features">
          <div className="re-section-head is-wide">
            <p className="kicker">FEATURES</p>
            <h2 className="h2">Travel CRM features for agencies and operators</h2>
            <p className="re-section-intro industry-wide-intro">
              Whether you need CRM for travel agency desks or tour operator CRM
              pipelines, TracktCRM covers travel lead management from first chat
              to repeat booking.
            </p>
          </div>
          <div className="re-feature-grid industry-feature-grid">
            {FEATURES.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon];
              return (
                <article className="re-feature-card" key={feature.title}>
                  <div className="re-feature-icon">
                    <Icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>
                    {feature.body}
                    {feature.href ? (
                      <>
                        {" "}
                        <a href={feature.href}>{feature.linkLabel}</a>.
                      </>
                    ) : null}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section re-band reveal" id="process">
          <div className="re-section-head">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">How a trip enquiry moves through TracktCRM</h2>
            <p className="re-section-intro">
              The same flow works for domestic packages, honeymoons, group tours
              and corporate travel requests. Counsellors keep dates, budget and
              destinations on the lead, so a handover never starts from a blank
              chat. Managers see which quotes are waiting and which bookings need
              payment follow-up.
            </p>
          </div>
          <div className="re-process-grid">
            {PROCESS_STEPS.map((step) => (
              <article className="re-process-card" key={step.n}>
                <b>{step.n}</b>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="who">
          <p className="kicker">WHO IT&apos;S FOR</p>
          <h2 className="h2">Who travel agency CRM software is for</h2>
          <p className="re-section-intro">
            Use TracktCRM as travel agency CRM software when counsellors sell on
            WhatsApp and forms, and as a tour operator CRM when you run several
            package pipelines at once. Travel lead management stays clear even
            when festive campaigns flood the inbox—each enquiry keeps an owner,
            a stage and a next follow-up.
          </p>
          <div className="re-choose-grid">
            {AUDIENCE.map((item) => (
              <article className="re-choose-card" key={item.name}>
                <h3>
                  <a href={item.href}>{item.name}</a>
                </h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="industry-page-links">
            Browse more industries on the{" "}
            <a href="/industries">CRM for every industry</a> hub, or see{" "}
            <a href="/lead-management-software">lead management software</a>.
          </p>
        </section>

        <section className="section re-band reveal" id="seasonal">
          <div className="re-section-head is-wide">
            <p className="kicker">SEASONAL SPIKES</p>
            <h2 className="h2">Handling holiday and festival enquiry waves</h2>
            <p className="re-section-intro industry-wide-intro">
              A travel CRM should not collapse when ads peak. TracktCRM assigns
              new Meta and Google enquiries quickly, keeps WhatsApp threads on
              the lead, and reminds counsellors about quotes that went quiet
              during the rush. After the trip, repeat-customer stages help your
              CRM for travel agency team offer the next holiday without starting
              from a blank chat.
            </p>
          </div>
        </section>

        <section className="section reveal" id="why">
          <div className="re-section-head is-wide">
            <p className="kicker">WHY TRACKTCRM</p>
            <h2 className="h2">Why travel desks choose this travel CRM</h2>
            <p className="re-section-intro industry-wide-intro">
              Travel agency CRM software fails when quotes live in personal chats
              and packages live in another sheet. TracktCRM is a travel CRM that
              keeps Meta, Google, WhatsApp and form enquiries on one record, with
              stages for quote, booking and repeat travel. Tour operator CRM teams
              can run package-wise pipelines without losing ownership during a
              festival spike. Travel lead management becomes a daily habit:
              capture, reply, follow up, book, then remind the traveller before
              the next season. Start free, connect the channels
              you already buy, and invite counsellors as the desk grows.
            </p>
          </div>
        </section>

        <RelatedIndustries current="travel" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Travel CRM FAQs</h2>
          <div className="faq-list re-faq-list">
            {FAQS.map((item, index) => (
              <details className="faq-item" key={item.q} open={index === 0}>
                <summary>
                  {item.q}
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-section reveal" id="demo">
          <div className="cta">
            <div>
              <h2>Run your travel CRM on live trip enquiries</h2>
              <p>
                Start free – no credit card needed. Or book a
                demo and we will map your packages inside TracktCRM.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="btn-dark"
                href={APP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free
              </a>
              <a className="btn-ghost" href="/contact">
                Book a demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
