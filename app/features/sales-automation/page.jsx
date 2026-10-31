import FeaturePage from "../feature-page";
import { DATA } from "./data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/features/sales-automation");

export default function SalesAutomationPage() {
  return <FeaturePage route="/features/sales-automation" data={DATA} />;
}
