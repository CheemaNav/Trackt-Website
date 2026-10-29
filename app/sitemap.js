import { readdirSync } from "fs";
import { join } from "path";
import { HOME_URL, SITE_URL } from "./site";
import { categoriesWithPosts, getAllPosts } from "@/lib/blog";

const PAGE_FILE = /^page\.(js|jsx|ts|tsx)$/;
const SKIP_DIRS = new Set([
  "api",
  "components",
  "icons",
  "lib",
  "utils",
  "hooks",
  "node_modules",
]);
const PRIVATE_ROUTE = /^\/(login|register|signup|dashboard|account|admin|checkout|thank-you)(\/|$)/;

/**
 * Walk app/ and collect every route that has a page.* file.
 * New marketing pages are included automatically — no manual sitemap edits.
 */
function collectPageRoutes(dir, urlPath = "") {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const routes = [];
  const hasPage = entries.some((entry) => entry.isFile() && PAGE_FILE.test(entry.name));
  if (hasPage) {
    routes.push(urlPath || "/");
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
    if (SKIP_DIRS.has(entry.name)) continue;
    // Dynamic segments are skipped on this static marketing site.
    if (entry.name.startsWith("[") && entry.name.endsWith("]")) continue;

    // Route groups: (marketing) — recurse without adding to the URL.
    if (entry.name.startsWith("(") && entry.name.endsWith(")")) {
      routes.push(...collectPageRoutes(join(dir, entry.name), urlPath));
      continue;
    }

    const nextPath = `${urlPath}/${entry.name}`;
    routes.push(...collectPageRoutes(join(dir, entry.name), nextPath));
  }

  return routes;
}

const PRIORITY = {
  "/": 1,
  "/crm-software": 0.95,
  "/industries": 0.9,
  "/industries/ai-crm": 0.9,
  "/industries/real-estate-crm": 0.9,
  "/industries/education-crm": 0.9,
  "/industries/crm-for-agencies": 0.9,
  "/industries/crm-for-recruitment": 0.9,
  "/industries/crm-for-insurance": 0.9,
  "/industries/crm-for-automotive": 0.9,
  "/industries/crm-for-healthcare": 0.9,
  "/industries/crm-for-travel": 0.9,
  "/lead-management-software": 0.9,
  "/crm-for-small-business": 0.8,
  "/cloud-based-crm": 0.85,
  "/features/sales-dashboard": 0.85,
  "/features/whatsapp-crm": 0.85,
  "/pipedrive-alternative": 0.85,
  "/bigin-alternative": 0.85,
  "/zoho-crm-alternative": 0.85,
  "/hubspot-alternative": 0.85,
  "/telecrm-alternative": 0.85,
  "/leadsquared-alternative": 0.85,
  "/crm-vs-excel": 0.85,
  "/pricing": 0.85,
  "/blog": 0.8,
  "/partners/reseller-partner-program": 0.7,
  "/partners/affiliate-partner-program": 0.7,
  "/contact": 0.8,
  "/about": 0.7,
  "/help": 0.5,
  "/privacy-policy": 0.3,
  "/terms": 0.3,
  "/refund-policy": 0.3,
  "/delivery-policy": 0.3,
};

export default function sitemap() {
  const appDir = join(process.cwd(), "app");
  const routes = [...new Set(collectPageRoutes(appDir))].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const lastModified = new Date();

  const posts = getAllPosts().filter((post) => !post.draft);
  const blogEntries = [
    ...categoriesWithPosts(posts).map((category) => ({
      url: `${SITE_URL}/blog/category/${category.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}${post.href}`,
      lastModified: new Date(`${post.updatedAt}T00:00:00Z`),
      changeFrequency: "monthly",
      priority: 0.75,
    })),
  ];

  return [
    ...routes.map((route) => ({
      url: route === "/" ? HOME_URL : `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: route === "/" || route === "/blog" ? "weekly" : "monthly",
      priority: PRIORITY[route] ?? 0.7,
    })),
    ...blogEntries,
  ];
}
