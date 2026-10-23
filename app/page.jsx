import { preload } from "react-dom";
import HomePageClient from "./home-page-client";
import { HomeFaqJsonLd, HomeJsonLd } from "./json-ld";
import { HOME_URL } from "./site";
import { buildMetadata } from "@/lib/seo";

// Next's metadata resolver drops the trailing slash from a root URL, so the
// homepage canonical and og:url are rendered below in their slash form instead.
const { alternates, openGraph, ...baseMetadata } = buildMetadata("/");
const { url, ...openGraphWithoutUrl } = openGraph;

export const metadata = { ...baseMetadata, openGraph: openGraphWithoutUrl };

export default function HomePage() {
  preload("/assets/hero-sunburst.svg", { as: "image", fetchPriority: "high" });

  return (
    <>
      <link rel="canonical" href={HOME_URL} />
      <meta property="og:url" content={HOME_URL} />
      <HomeJsonLd />
      <HomeFaqJsonLd />
      <HomePageClient />
    </>
  );
}
