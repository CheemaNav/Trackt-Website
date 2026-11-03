import Link from "next/link";
import BlogCard from "../../components/blog/blog-card";
import { BreadcrumbJsonLd, PersonJsonLd } from "../../json-ld";
import { getAuthor } from "@/lib/authors";
import { getAllPosts, toCard } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

const ROUTE = "/authors/navdeep-singh";

export const metadata = buildMetadata(ROUTE);

export default function NavdeepSinghAuthorPage() {
  const author = getAuthor("navdeep-singh");
  const posts = getAllPosts().filter((post) => post.author.slug === author.slug);

  return (
    <main className="author-page">
      <PersonJsonLd author={author} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: author.name, href: ROUTE },
        ]}
      />

      <header className="author-head">
        <div className="author-head-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <span aria-current="page">{author.name}</span>
              </li>
            </ol>
          </nav>
          <h1 className="author-name">{author.name}</h1>
          <p className="author-role">{author.jobTitle}</p>
          <p className="author-bio">{author.bio}</p>
        </div>
      </header>

      <section className="blog-related author-posts" aria-labelledby="author-posts">
        <h2 id="author-posts" className="h2-sm">
          Articles by {author.name}
        </h2>
        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={toCard(post)} headingLevel="h3" />
          ))}
        </div>
      </section>
    </main>
  );
}
