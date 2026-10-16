import HomePageClient from "./home-page-client";
import { HomeFaqJsonLd, HomeJsonLd } from "./json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HomeFaqJsonLd />
      <HomePageClient />
    </>
  );
}
