export const AUTHORS = [
  {
    slug: "navdeep-singh",
    name: "Navdeep Singh",
    jobTitle: "Founder, TracktCRM",
    bio: "Navdeep Singh is the founder of TracktCRM. He writes about CRM, lead management and WhatsApp selling for small and growing sales teams in India.",
  },
];

export const DEFAULT_AUTHOR_SLUG = "navdeep-singh";

export function getAuthor(slug) {
  return AUTHORS.find((author) => author.slug === slug) ?? null;
}

export function getAuthorByName(name) {
  return AUTHORS.find((author) => author.name === name) ?? null;
}

export function authorHref(author) {
  return `/authors/${author.slug}`;
}
