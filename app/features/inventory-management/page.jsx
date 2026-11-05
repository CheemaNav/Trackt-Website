import FeaturePage from "../feature-page";
import { DATA } from "./data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/features/inventory-management");

export default function InventoryManagementPage() {
  return <FeaturePage route="/features/inventory-management" data={DATA} />;
}
