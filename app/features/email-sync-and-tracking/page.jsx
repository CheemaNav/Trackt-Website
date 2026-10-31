import FeaturePage from "../feature-page";
import { DATA } from "./data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/features/email-sync-and-tracking");

export default function EmailSyncAndTrackingPage() {
  return <FeaturePage route="/features/email-sync-and-tracking" data={DATA} />;
}
