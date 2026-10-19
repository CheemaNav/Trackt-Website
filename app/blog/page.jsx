import BlogBanner from "../components/blog/blog-banner";
import BlogHub from "../components/blog/blog-hub";
import { BlogCollectionJsonLd, BreadcrumbJsonLd } from "../json-ld";
import { categoriesWithPosts, getAllPosts, toCard } from "@/lib/blog";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

const ROUTE = "/blog";

const baseMetadata = buildMetadata(ROUTE);

export const metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const seo = PAGE_SEO[ROUTE];

  return (
    <main className="blog-hub-page">
      <BlogCollectionJsonLd name={seo.title} description={seo.description} path={ROUTE} posts={posts} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTE },
        ]}
      />
      <BlogBanner />
      <div className="blog-hub">
        <BlogHub posts={posts.map(toCard)} categories={categoriesWithPosts(posts)} />
      </div>
    </main>
  );
}
