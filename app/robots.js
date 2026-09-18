import { SITE_URL } from "./site";

/**
 * Site-wide crawl policy.
 *
 * Uses a single Allow: / for every user-agent so ANY current or future
 * public path (e.g. /ai-crm, /contact, /whatever-comes-next) is allowed
 * without editing this file again.
 *
 * Private prefixes that do not exist yet are still reserved via Disallow
 * so accidental admin/account routes would stay out of indexes.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
];

const PUBLIC_ALLOW = "/";
const PRIVATE_DISALLOW = ["/admin/", "/account/", "/checkout/", "/api/private/"];

function allowAllRule(userAgent) {
  return {
    userAgent,
    allow: PUBLIC_ALLOW,
    disallow: PRIVATE_DISALLOW,
  };
}

export default function robots() {
  return {
    rules: [
      allowAllRule("*"),
      allowAllRule("Googlebot"),
      allowAllRule("Bingbot"),
      ...AI_CRAWLERS.map(allowAllRule),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
