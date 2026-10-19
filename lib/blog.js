import "server-only";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const BLOG_DIR = join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

export const BLOG_CATEGORIES = [
  { slug: "crm-guides", label: "CRM Guides" },
  { slug: "comparisons", label: "Comparisons" },
  { slug: "whatsapp-sales", label: "WhatsApp Sales" },
  { slug: "sales-tips", label: "Sales Tips" },
  { slug: "industry-guides", label: "Industry Guides" },
  { slug: "lead-sources", label: "Lead Sources" },
];

export function getCategory(slug) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug) ?? null;
}

function toIsoDate(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

/** Markdown/JSX source → plain words, for reading time and word counts. */
export function plainText(source) {
  return source
    .replace(/^import .*$/gm, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|~-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function headingText(raw) {
  return raw
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

/** H2s in source order, slugged the same way rehype-slug slugs them. */
function extractHeadings(source) {
  const slugger = new GithubSlugger();
  const headings = [];
  let inFence = false;
  for (const line of source.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const text = headingText(match[2]);
    const id = slugger.slug(text);
    if (match[1].length === 2) headings.push({ id, text });
  }
  return headings;
}

function readPostFile(file) {
  const raw = readFileSync(join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = data.slug ?? file.replace(/\.mdx$/, "");
  const words = plainText(content).split(" ").filter(Boolean).length;
  const category = getCategory(data.category);
  if (!category) {
    throw new Error(`Blog post "${slug}" has unknown category "${data.category}"`);
  }

  return {
    slug,
    href: `/blog/${slug}`,
    title: data.title,
    metaTitle: data.metaTitle ?? data.title,
    metaDescription: data.metaDescription ?? data.excerpt,
    primaryKeyword: data.primaryKeyword ?? "",
    category,
    excerpt: data.excerpt ?? "",
    publishedAt: toIsoDate(data.publishedAt),
    updatedAt: toIsoDate(data.updatedAt ?? data.publishedAt),
    heroImage: data.heroImage ?? null,
    heroAlt: data.heroAlt ?? data.title,
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    relatedPages: Array.isArray(data.relatedPages) ? data.relatedPages : [],
    sources: Array.isArray(data.sources) ? data.sources : [],
    sourcesCheckedAt: data.sourcesCheckedAt ? toIsoDate(data.sourcesCheckedAt) : null,
    draft: Boolean(data.draft),
    words,
    readingTime: Math.max(1, Math.ceil(words / WORDS_PER_MINUTE)),
    headings: extractHeadings(content),
    content,
  };
}

function listPostFiles() {
  try {
    return readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
  } catch {
    return [];
  }
}

/** Published posts, newest first. Drafts only appear in `next dev`. */
export function getAllPosts() {
  return listPostFiles()
    .map(readPostFile)
    .filter((post) => SHOW_DRAFTS || !post.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));
}

export function getPost(slug) {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

/** Card-safe fields only (no MDX source), for client components. */
export function toCard(post) {
  const { slug, href, title, excerpt, category, publishedAt, updatedAt, heroImage, heroAlt, readingTime } = post;
  return { slug, href, title, excerpt, category, publishedAt, updatedAt, heroImage, heroAlt, readingTime };
}

export function categoriesWithPosts(posts = getAllPosts()) {
  return BLOG_CATEGORIES.map((category) => ({
    ...category,
    count: posts.filter((post) => post.category.slug === category.slug).length,
  })).filter((category) => category.count > 0);
}

export function getRelatedPosts(post, limit = 3) {
  const others = getAllPosts().filter((item) => item.slug !== post.slug);
  const sameCategory = others.filter((item) => item.category.slug === post.category.slug);
  const rest = others.filter((item) => item.category.slug !== post.category.slug);
  return [...sameCategory, ...rest].slice(0, limit);
}

export async function compilePost(post) {
  const { default: Content } = await evaluate(post.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  });
  return Content;
}
