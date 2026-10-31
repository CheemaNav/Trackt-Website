import FeaturePage from "../feature-page";
import { DATA } from "./data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/features/pipeline-management");

export default function PipelineManagementPage() {
  return <FeaturePage route="/features/pipeline-management" data={DATA} />;
}
