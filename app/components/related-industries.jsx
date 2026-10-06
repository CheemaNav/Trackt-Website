import Link from "next/link";
import {
  AgencyIcon,
  ArrowIcon,
  AutomotiveIcon,
  EducationIcon,
  HealthcareIcon,
  InsuranceIcon,
  RealEstateIcon,
  RecruitmentIcon,
} from "../icons";
import { LIVE_INDUSTRIES } from "../industries/data";

export const INDUSTRY_ICONS = {
  realEstate: RealEstateIcon,
  education: EducationIcon,
  agency: AgencyIcon,
  recruitment: RecruitmentIcon,
  insurance: InsuranceIcon,
  automotive: AutomotiveIcon,
  healthcare: HealthcareIcon,
};

/** Cross-links to the other live industry pages, plus a link back to the hub. */
export default function RelatedIndustries({ current }) {
  const others = LIVE_INDUSTRIES.filter((item) => item.id !== current);

  return (
    <section className="section reveal related-industries" id="related-industries">
      <div className="related-industries-head">
        <div>
          <p className="kicker">MORE INDUSTRIES</p>
          <h2 className="h2">TracktCRM for other industries</h2>
        </div>
        <Link className="related-industries-back" href="/industries">
          Back to all industries <ArrowIcon size={13} />
        </Link>
      </div>
      <div className="related-industries-grid">
        {others.map((item) => {
          const Icon = INDUSTRY_ICONS[item.icon];
          return (
            <Link className="related-industry-card" href={item.href} key={item.id}>
              <span className="related-industry-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <span className="related-industry-copy">
                <strong>{item.name}</strong>
                <span>{item.body}</span>
              </span>
              <span className="related-industry-arrow" aria-hidden="true">
                <ArrowIcon size={14} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
