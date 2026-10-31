import FeaturePage from "../feature-page";
import { DATA } from "./data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/features/reporting-and-analytics");

export default function ReportingAndAnalyticsPage() {
  return <FeaturePage route="/features/reporting-and-analytics" data={DATA} />;
}
