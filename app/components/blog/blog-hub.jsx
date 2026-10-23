"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import BlogCard from "./blog-card";

const PAGE_SIZE = 9;

export default function BlogHub({ posts, categories, active = null }) {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const heading = active ? active.label : "All Posts";

  const filtered = useMemo(() => {
    const inTab = active ? posts.filter((post) => post.category.slug === active.slug) : posts;
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return inTab;
    return inTab.filter((post) => {
      const haystack = `${post.title} ${post.excerpt} ${post.category.label}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [posts, active, query]);

  const shown = filtered.slice(0, visible);

  return (
    <>
      <div className="blog-toolbar">
        <nav className="blog-tabs" aria-label="Blog categories">
          <ul>
            <li>
              <Link href="/blog" aria-current={active ? undefined : "page"}>
                All posts
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  aria-current={active?.slug === category.slug ? "page" : undefined}
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="blog-search" role="search">
          <label htmlFor="blog-search-input" className="visually-hidden">
            Search articles
          </label>
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
            <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="m13.5 13.5 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            id="blog-search-input"
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible(PAGE_SIZE);
            }}
          />
        </div>
      </div>

      <h2 className="blog-hub-title">{heading}</h2>
      {active?.intro ? <p className="blog-hub-intro">{active.intro}</p> : null}

      {shown.length ? (
        <div className="blog-grid">
          {shown.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="blog-empty" role="status">
          No articles match &ldquo;{query}&rdquo;. Try a different word.
        </p>
      )}

      {filtered.length > visible ? (
        <div className="blog-more">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
          >
            Load more
          </button>
        </div>
      ) : null}
    </>
  );
}
