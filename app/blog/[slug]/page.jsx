import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "../../components/blog/blog-card";
import BlogToc from "../../components/blog/blog-toc";
import ShareButtons from "../../components/blog/share-buttons";
import { BlogCtaBox, MDX_COMPONENTS } from "../../components/blog/mdx-components";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "../../json-ld";
import { compilePost, getAllPosts, getPost, getRelatedPosts, toCard } from "@/lib/blog";
import { formatDate } from "@/lib/blog-format";
import { absoluteUrl, buildBlogPostMetadata, PAGE_SEO } from "@/lib/seo";
import { APP_REGISTER_URL } from "../../site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? buildBlogPostMetadata(post) : {};
}

function relatedPageLink(page) {
  if (typeof page === "string") {
    const label = PAGE_SEO[page]?.primaryKeyword ?? page;
    return { href: page, label: label.charAt(0).toUpperCase() + label.slice(1) };
  }
  return page;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Content = await compilePost(post);
  const related = getRelatedPosts(post).map(toCard);
  const relatedPages = post.relatedPages.map(relatedPageLink);
  const url = absoluteUrl(post.href);
  const tocHeadings = [
    ...post.headings,
    ...(post.faqs.length ? [{ id: "faq", text: "FAQs" }] : []),
    ...(post.sources.length ? [{ id: "sources", text: "Sources" }] : []),
  ];

  return (
    <main className="blog-post">
      <BlogPostingJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.category.label, href: `/blog/category/${post.category.slug}` },
          { name: post.title, href: post.href },
        ]}
      />
      {post.faqs.length ? <FaqJsonLd id="schema-blog-faq" faqs={post.faqs} /> : null}

      <header className="blog-post-head">
        <div className="blog-post-head-inner">
          <div className="blog-post-head-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href={`/blog/category/${post.category.slug}`}>{post.category.label}</Link>
                </li>
                <li>
                  <span aria-current="page">{post.title}</span>
                </li>
              </ol>
            </nav>
            <Link href={`/blog/category/${post.category.slug}`} className="blog-chip">
              {post.category.label}
            </Link>
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-excerpt">{post.excerpt}</p>
            <p className="blog-post-meta">
              <span>
                Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
              </span>
              <span>{post.readingTime} min read</span>
            </p>
          </div>
          {post.heroImage ? (
            <figure className="blog-post-hero">
              <img
                src={post.heroImage}
                alt={post.heroAlt}
                width={1200}
                height={630}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          ) : null}
        </div>
      </header>

      <div className="blog-post-layout">
        <aside className="blog-post-aside">
          <BlogToc headings={tocHeadings} />
        </aside>

        <article className="blog-prose">
          <Content components={MDX_COMPONENTS} />

          {post.faqs.length ? (
            <section className="blog-faq" aria-labelledby="faq">
              <h2 id="faq">Frequently Asked Questions</h2>
              <div className="faq-list">
                {post.faqs.map((item, index) => (
                  <details className="faq-item" key={item.q} open={index === 0}>
                    <summary>
                      {item.q}
                      <span className="faq-toggle" aria-hidden="true" />
                    </summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {post.sources.length ? (
            <section className="blog-sources" aria-labelledby="sources">
              <h2 id="sources">Sources</h2>
              {post.sourcesCheckedAt ? (
                <p>
                  Checked on <time dateTime={post.sourcesCheckedAt}>{formatDate(post.sourcesCheckedAt)}</time>{" "}
                  from each vendor&apos;s official pages. Plans and prices change, so confirm current details on
                  these links before you buy.
                </p>
              ) : null}
              <ul>
                {post.sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noopener noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <BlogCtaBox
            title="Put your leads and WhatsApp chats in one pipeline"
            text="Start on the Free plan for 1 user. WhatsApp is included and Meta message charges apply. No credit card needed."
          />

          <ShareButtons url={url} title={post.title} />

          {relatedPages.length ? (
            <nav className="blog-related-pages" aria-label="Related TracktCRM pages">
              <p className="blog-callout-title">Related TracktCRM pages</p>
              <ul>
                {relatedPages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </article>

        <aside className="blog-post-rail" aria-label="Get started with TracktCRM">
          <div className="blog-rail-card">
            <p className="blog-rail-title">Sell more on WhatsApp</p>
            <p className="blog-rail-text">
              Keep every lead, chat and deal in one pipeline. Free plan for 1 user, no credit card needed.
            </p>
            <a className="btn btn-primary" href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer">
              Start free
            </a>
            <Link className="btn btn-outline" href="/contact">
              Book a demo
            </Link>
          </div>
        </aside>
      </div>

      {related.length ? (
        <section className="blog-related" aria-labelledby="related-posts">
          <h2 id="related-posts" className="h2-sm">
            Related Articles
          </h2>
          <div className="blog-grid">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} headingLevel="h3" />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
