import Link from "next/link";
import { formatDate } from "@/lib/blog-format";

export default function BlogCard({ post, headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <article className="blog-card">
      <Link href={post.href} className="blog-card-media" tabIndex={-1} aria-hidden="true">
        {post.heroImage ? (
          <img
            src={post.heroImage}
            alt={post.heroAlt}
            width={1200}
            height={630}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </Link>
      <div className="blog-card-body">
        <p className="blog-card-time">{post.readingTime} min read</p>
        <Heading className="blog-card-title">
          <Link href={post.href}>{post.title}</Link>
        </Heading>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-meta">
          <Link href={`/blog/category/${post.category.slug}`} className="blog-chip">
            {post.category.label}
          </Link>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, "short")}</time>
        </div>
      </div>
    </article>
  );
}
