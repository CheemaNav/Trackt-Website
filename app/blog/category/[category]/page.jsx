import { notFound } from "next/navigation";
import BlogBanner from "../../../components/blog/blog-banner";
import BlogHub from "../../../components/blog/blog-hub";
import { BlogCollectionJsonLd, BreadcrumbJsonLd } from "../../../json-ld";
import { categoriesWithPosts, getAllPosts, getCategory, toCard, toCategoryTab } from "@/lib/blog";
import { buildBlogCategoryMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoriesWithPosts().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return category ? buildBlogCategoryMetadata(category) : {};
}

export default async function BlogCategoryPage({ params }) {
  const { category: slug } = await params;
  const posts = getAllPosts();
  const categories = categoriesWithPosts(posts);
  const active = categories.find((category) => category.slug === slug);
  if (!active) notFound();

  const route = `/blog/category/${active.slug}`;
  const meta = buildBlogCategoryMetadata(active);
  const categoryPosts = posts.filter((post) => post.category.slug === active.slug);

  return (
    <main className="blog-hub-page">
      <BlogCollectionJsonLd
        name={meta.title.absolute}
        description={meta.description}
        path={route}
        posts={categoryPosts}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: active.label, href: route },
        ]}
      />
      <BlogBanner />
      <div className="blog-hub">
        <BlogHub
          posts={categoryPosts.map(toCard)}
          categories={categories.map(toCategoryTab)}
          active={{ slug: active.slug, label: active.label, intro: active.intro }}
        />
      </div>
    </main>
  );
}
