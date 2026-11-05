import { LuBuilding2, LuFilePen, LuReceiptIndianRupee } from "react-icons/lu";
import {
  ArrowIcon,
  CaptureIcon,
  ChannelWhatsAppIcon,
  CheckIcon,
  ConversationIcon,
} from "../../icons";
import RevealInit from "../../components/reveal-init";
import RelatedIndustries from "../../components/related-industries";
import { APP_REGISTER_URL } from "../../site";
import { BreadcrumbJsonLd, CoworkingCrmJsonLd } from "../../json-ld";
import {
  AUDIENCE,
  FAQS,
  FEATURES,
  PROBLEM_POINTS,
  PROCESS_STEPS,
  SHOWCASE,
  SPACE_STATUSES,
} from "./data";
import { buildMetadata } from "@/lib/seo";

const FEATURE_ICONS = {
  capture: CaptureIcon,
  whatsapp: ChannelWhatsAppIcon,
  space: LuBuilding2,
  quotes: ConversationIcon,
  agreement: LuFilePen,
  billing: LuReceiptIndianRupee,
};

export const metadata = buildMetadata("/industries/crm-for-coworking");

export default function CoworkingCrmPage() {
  return (
    <div className="home">
      <CoworkingCrmJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Coworking CRM", href: "/industries/crm-for-coworking" },
        ]}
      />
      <RevealInit />

      <main>
        <section className="re-banner reveal" id="top">
          <div className="re-banner-inner">
            <div className="re-banner-copy">
              <div className="badge re-banner-badge">
                <span className="pulse" aria-hidden="true" />
                COWORKING CRM
              </div>
              <h1 className="re-banner-title">
                Coworking Space CRM That Turns Every Tour Into{" "}
                <span>a Signed Member</span>
              </h1>
              <p className="re-banner-sub">
                TracktCRM is a coworking CRM for coworking spaces and business
                centres: capture enquiries, track cabin and seat availability,
                send quotations, create agreements and bill members every month
                in one place. Start free – no credit card needed.
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
                Built for coworking operators · Free plan · WhatsApp included
              </p>
            </div>
            <figure className="re-banner-media re-banner-media-ui">
              <img
                src="/assets/industries/coworking/coworking-floor-view.webp"
                alt="TracktCRM coworking floor view showing private offices, desks and a meeting room on two floors with available, booked, on hold and maintenance status"
                width={1024}
                height={484}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section re-band reveal" id="problem">
          <div className="re-split">
            <div className="re-split-copy">
              <p className="kicker">THE COWORKING OPERATOR PROBLEM</p>
              <h2 className="h2">
                Why coworking enquiries slip between tours and agreements
              </h2>
              <p className="re-section-intro">
                A coworking space sells the same few cabins, seats and rooms
                again and again, and every enquiry needs a quick answer on price
                and availability. Without a coworking space CRM, enquiries from
                forms, ads, Justdial and WhatsApp sit in different places, the
                availability sheet is out of date by lunchtime, and quotations
                and agreements are typed from scratch. The prospect who asked for
                a cabin on Monday signs with the space that replied first.
              </p>
            </div>
            <figure className="re-photo re-photo-contain">
              <img
                src="/assets/leadmanage.webp"
                alt="TracktCRM pipeline showing enquiry, tour, quotation and agreement stages for a coworking space"
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
            <h2 className="h2">Coworking CRM features for space operators</h2>
            <p className="re-section-intro industry-wide-intro">
              From the first enquiry to the monthly invoice, TracktCRM covers
              the steps a coworking space runs every day: leads, availability,
              quotations, agreements and billing.
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

        {SHOWCASE.map((row, index) => (
          <section className="section reveal fp-deep" id={row.id} key={row.id}>
            <div className={`re-split${index % 2 ? " re-split-reverse fp-flip" : ""}`}>
              <div className="re-split-copy">
                <p className="kicker">{row.kicker}</p>
                <h2 className="h2">{row.title}</h2>
                <p className="re-section-intro">{row.body}</p>
                <ul className="fp-checklist cw-checklist">
                  {row.points.map((point) => (
                    <li key={point}>
                      <span className="re-point-check" aria-hidden="true">
                        <CheckIcon size={14} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <figure
                className={`re-photo re-photo-contain cw-shot${row.image.portrait ? " cw-shot-portrait" : ""}`}
              >
                <img
                  src={row.image.src}
                  alt={row.image.alt}
                  width={row.image.width}
                  height={row.image.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </section>
        ))}

        <section className="section reveal" id="floor-view">
          <div className="re-section-head is-wide">
            <p className="kicker">LIVE FLOOR VIEW</p>
            <h2 className="h2">Know the status of every space at a glance</h2>
            <p className="re-section-intro industry-wide-intro">
              The floor view groups spaces by floor and counts how many are
              available, booked, on hold or under maintenance for any time
              window, from the next hour to the next 30 days.
            </p>
          </div>
          <div className="cw-status-grid">
            {SPACE_STATUSES.map((status) => (
              <article className="cw-status-card" key={status.id}>
                <h3 className={`cw-chip is-${status.id}`}>{status.label}</h3>
                <p>{status.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section re-band reveal" id="process">
          <div className="re-section-head">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="h2">How an enquiry becomes a member in TracktCRM</h2>
            <p className="re-section-intro">
              The same flow works for a single seat, a private cabin or a
              company taking several. The lead keeps the conversation, the tour
              notes, the quotation and the agreement together, so a handover
              never starts from a blank chat.
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
          <h2 className="h2">Who this coworking CRM is for</h2>
          <p className="re-section-intro">
            Use TracktCRM as your coworking space CRM when you rent seats,
            cabins and meeting rooms, and as a business centre CRM when you
            manage offices across floors. Every enquiry keeps an owner, a stage
            and a next follow-up, even in a busy month.
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

        <section className="section re-band reveal" id="availability">
          <div className="re-section-head is-wide">
            <p className="kicker">AVAILABILITY AND BILLING</p>
            <h2 className="h2">One system for spaces, agreements and invoices</h2>
            <p className="re-section-intro industry-wide-intro">
              A coworking CRM should know what is free before it promises it.
              TracktCRM tracks cabins, seats, meeting rooms and studios across
              floors and locations, blocks a space once it is booked and carries
              the client&apos;s details from lead to agreement. Members are then
              billed every month from the same record, including extras they
              bought, so your team spends the last day of the month on members,
              not on spreadsheets.
            </p>
          </div>
        </section>

        <section className="section reveal" id="why">
          <div className="re-section-head is-wide">
            <p className="kicker">WHY TRACKTCRM</p>
            <h2 className="h2">Why coworking operators choose this coworking CRM</h2>
            <p className="re-section-intro industry-wide-intro">
              Coworking software often splits sales from operations, so leads
              live in one tool and bookings and billing in another. TracktCRM
              keeps enquiries, tours, quotations, agreements, space bookings and
              invoices on one record. Start free, connect the channels you
              already use and invite your team as the space grows.
            </p>
          </div>
        </section>

        <RelatedIndustries current="coworking" />

        <section className="section faq reveal" id="faq">
          <p className="kicker is-centered">FAQ</p>
          <h2 className="h2 is-centered">Coworking CRM FAQs</h2>
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
              <h2>Run your coworking space on one CRM</h2>
              <p>
                Start free – no credit card needed. Or book a demo and we will
                set up your cabins, seats and pipeline inside TracktCRM.
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
