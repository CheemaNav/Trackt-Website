import FeaturePage from "../feature-page";
import { DATA } from "./data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/features/lead-management");

export default function LeadManagementPage() {
  return <FeaturePage route="/features/lead-management" data={DATA} />;
}
