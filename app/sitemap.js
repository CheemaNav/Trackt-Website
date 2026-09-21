import { readdirSync } from "fs";
import { join } from "path";
import { SITE_URL } from "./site";

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
  "/ai-crm": 0.9,
  "/real-estate-crm": 0.9,
  "/whatsapp-crm": 0.85,
  "/pipedrive-alternative": 0.85,
  "/pricing": 0.85,
  "/contact": 0.8,
  "/about": 0.7,
  "/blog": 0.6,
  "/help": 0.5,
  "/privacy-policy": 0.3,
  "/terms": 0.3,
};

export default function sitemap() {
  const appDir = join(process.cwd(), "app");
  const routes = [...new Set(collectPageRoutes(appDir))].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const lastModified = new Date();

  return routes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: PRIORITY[route] ?? 0.7,
  }));
}
