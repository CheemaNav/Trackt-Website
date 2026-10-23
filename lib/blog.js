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
  {
    slug: "crm-guides",
    label: "CRM Guides",
    intro:
      "CRM guides for small and growing sales teams in India. These articles explain what a CRM does, which features matter at your size and how much you should expect to pay, with every plan limit and price checked against the vendor's own pricing page. You will find buying guides such as our list of the best CRM software in India and the best free CRM for small business, plus practical advice on moving leads out of spreadsheets and WhatsApp chats into one pipeline. Each guide ends with a short checklist, so you can shortlist two or three tools, test them on a free plan with real leads and pick the one your team will actually use every day.",
  },
  {
    slug: "comparisons",
    label: "Comparisons",
    intro:
      "Side-by-side CRM comparisons for teams that have narrowed their choice down to two or three tools. Each comparison looks at the details that change the decision for a small team: per-user price in INR, what the free plan really includes, WhatsApp and lead portal integrations, user and record limits, and how long set-up takes. Prices and limits come from each vendor's official pricing and help pages and are dated, because plans change often. We also say plainly when a competitor is the better fit, for example if you already run your business on Zoho apps. Use these comparisons alongside a hands-on test of each shortlisted tool rather than as a final verdict.",
  },
  {
    slug: "whatsapp-sales",
    label: "WhatsApp Sales",
    intro:
      "WhatsApp sales guides for businesses whose customers would rather chat than call. Many enquiries in India now arrive on WhatsApp, from click-to-WhatsApp ads, website buttons and portal leads, and they are easy to lose on a busy phone. These articles cover how to choose a WhatsApp CRM, the difference between the WhatsApp Business app and the WhatsApp Business Platform, how template messages and opt-ins work, and how a team can share one business number without double replies. You will also find honest comparisons of WhatsApp CRM tools used by Indian businesses, with pricing and message charges explained, so you can reply faster and keep every chat linked to a lead.",
  },
  {
    slug: "sales-tips",
    label: "Sales Tips",
    intro:
      "Practical sales tips for small teams who follow up by email, phone and WhatsApp. These articles focus on the everyday work that decides whether a lead turns into a customer: writing follow-ups that get replies, timing your second and third reminder, handling \"send me the price\" enquiries and keeping track of promises made on calls. Most posts include ready-to-use templates that you can copy, edit and send in a few minutes, such as gentle reminder emails for quotes, proposals, invoices and meetings. The advice is written for owners and sales reps without a large sales operations team, so every tip can be used the same day, with or without a CRM.",
  },
  {
    slug: "industry-guides",
    label: "Industry Guides",
    intro:
      "Industry guides for businesses whose sales process a generic CRM does not cover well. Real estate brokers juggle portal leads and site visits, clinics need to turn patient enquiries into booked appointments, and education teams track applicants from first call to admission. These guides explain how leads arrive in each industry, which follow-ups matter most and what to look for in software, with examples from Indian businesses. You will find our guide to the best real estate CRM for brokers and our hospital marketing guide with practical ideas for getting more patients. Each article links to the matching industry page, so you can see a ready-made pipeline for your type of business.",
  },
  {
    slug: "lead-sources",
    label: "Lead Sources",
    intro:
      "Guides to the places your leads come from and how to capture them without copying and pasting. Indian businesses get enquiries from Meta and Google lead ads, IndiaMART, Justdial, property portals, website forms and WhatsApp, and each source has its own format and delays. These articles explain how each lead source works, how to connect it to a CRM so new leads arrive in seconds, and how to measure which source brings customers rather than just enquiries. They also cover common problems such as duplicate leads, missing phone numbers and slow first replies, with simple fixes that a small team can set up in an afternoon.",
  },
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
    author: data.author ?? null,
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
  const { slug, href, title, excerpt, category, publishedAt, updatedAt, heroImage, heroAlt } = post;
  return {
    slug,
    href,
    title,
    excerpt,
    category: toCategoryTab(category),
    publishedAt,
    updatedAt,
    heroImage,
    heroAlt,
  };
}

export function toCategoryTab({ slug, label }) {
  return { slug, label };
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
