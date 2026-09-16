import { SITE_URL } from "./site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
