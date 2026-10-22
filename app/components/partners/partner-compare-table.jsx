import Link from "next/link";
import { ArrowIcon } from "../../icons";
import { COPY } from "@/lib/partner-program";

const ROWS = [
  {
    label: "Best for",
    reseller: "Agencies & consultants who set up software for clients",
    affiliate: "Anyone with an audience or network who wants to recommend",
  },
  { label: "What you do", reseller: "Sell, set up and support clients", affiliate: "Share your referral link" },
  { label: "Commission", reseller: COPY.resellerTableCommission, affiliate: COPY.affiliateTableCommission },
  { label: "Setup / service income", reseller: "Yes, you keep 100%", affiliate: "No" },
  { label: "Training & partner account", reseller: "Yes", affiliate: "Marketing material only" },
  { label: "Effort", reseller: "Medium", affiliate: "Low" },
];

/**
 * Reseller vs Affiliate table shared by both partner pages. `current` is the
 * page's own program: its button scrolls to the form, the other links across.
 */
export default function PartnerCompareTable({ current }) {
  const isReseller = current === "reseller";

  return (
    <section className="section pp-center-section pp-compare reveal" id="compare">
      <h2 className="pp-split-title is-centered">
        <strong>Reseller or Affiliate</strong> <span>— Which One Fits You?</span>
      </h2>
      <div className="compare-table-wrap pp-compare-wrap" role="region" aria-label="Reseller and Affiliate program comparison" tabIndex={0}>
        <table className="compare-table pp-compare-table">
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">Comparison point</span>
              </th>
              <th scope="col" className={isReseller ? "is-current" : undefined}>
                Reseller
              </th>
              <th scope="col" className={isReseller ? undefined : "is-current"}>
                Affiliate
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.reseller}</td>
                <td>{row.affiliate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pp-compare-ctas">
        {isReseller ? (
          <>
            <a className="btn btn-primary" href="#apply">
              Apply as Reseller
            </a>
            <Link className="btn btn-outline" href="/partners/affiliate-partner-program">
              Join Affiliate Program
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </>
        ) : (
          <>
            <a className="btn btn-primary" href="#apply">
              Join as Affiliate
            </a>
            <Link className="btn btn-outline" href="/partners/reseller-partner-program">
              See Reseller Program
              <span className="btn-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
