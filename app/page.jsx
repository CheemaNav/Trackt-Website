import HomePageClient from "./home-page-client";
import { HomeFaqJsonLd } from "./json-ld";

export default function HomePage() {
  return (
    <>
      <HomeFaqJsonLd />
      <HomePageClient />
    </>
  );
}
