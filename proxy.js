import { NextResponse } from "next/server";

/** Permanent redirects for URLs moved under /features and /industries. */
const REDIRECTS = new Map([
  ["/whatsapp-crm", "/features/whatsapp-crm"],
  ["/ai-crm", "/industries/ai-crm"],
  ["/real-estate-crm", "/industries/real-estate-crm"],
  ["/education-crm", "/industries/education-crm"],
  ["/crm-for-agencies", "/industries/crm-for-agencies"],
  ["/agency-crm", "/industries/crm-for-agencies"],
  ["/crm-for-recruitment", "/industries/crm-for-recruitment"],
  ["/recruitment-crm", "/industries/crm-for-recruitment"],
  ["/crm-for-insurance", "/industries/crm-for-insurance"],
  ["/insurance-crm", "/industries/crm-for-insurance"],
  ["/crm-for-automotive", "/industries/crm-for-automotive"],
  ["/automotive-crm", "/industries/crm-for-automotive"],
  ["/crm-for-healthcare", "/industries/crm-for-healthcare"],
  ["/healthcare-crm", "/industries/crm-for-healthcare"],
  ["/whatsapp", "/features/whatsapp-crm"],
  ["/ai", "/industries/ai-crm"],
  ["/real-estate", "/industries/real-estate-crm"],
  ["/education", "/industries/education-crm"],
  ["/privacy-policies", "/privacy-policy"],
  ["/terms-conditions", "/terms"],
]);

/** No /partners hub yet; the breadcrumb level lands on the reseller page. */
const TEMPORARY_REDIRECTS = new Map([["/partners", "/partners/reseller-partner-program"]]);

const CANONICAL_ORIGIN = "https://tracktcrm.com";
const HSTS = "max-age=31536000";

// next.config headers() are not applied to proxy responses, so redirects set HSTS themselves.
function redirectWithHsts(url, status) {
  const response = NextResponse.redirect(url, status);
  response.headers.set("Strict-Transport-Security", HSTS);
  return response;
}

export function proxy(request) {
  if (request.headers.get("host") === "www.tracktcrm.com") {
    const { pathname: path, search } = request.nextUrl;
    return redirectWithHsts(`${CANONICAL_ORIGIN}${path}${search}`, 301);
  }

  const pathname = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
  const permanent = REDIRECTS.get(pathname);
  const destination = permanent ?? TEMPORARY_REDIRECTS.get(pathname);

  if (!destination) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return redirectWithHsts(url, permanent ? 308 : 307);
}

export const config = {
  matcher: [
    { source: "/:path*", has: [{ type: "host", value: "www.tracktcrm.com" }] },
    "/whatsapp-crm",
    "/whatsapp-crm/",
    "/ai-crm",
    "/ai-crm/",
    "/real-estate-crm",
    "/real-estate-crm/",
    "/education-crm",
    "/education-crm/",
    "/crm-for-agencies",
    "/crm-for-agencies/",
    "/agency-crm",
    "/agency-crm/",
    "/crm-for-recruitment",
    "/crm-for-recruitment/",
    "/recruitment-crm",
    "/recruitment-crm/",
    "/crm-for-insurance",
    "/crm-for-insurance/",
    "/insurance-crm",
    "/insurance-crm/",
    "/crm-for-automotive",
    "/crm-for-automotive/",
    "/automotive-crm",
    "/automotive-crm/",
    "/crm-for-healthcare",
    "/crm-for-healthcare/",
    "/healthcare-crm",
    "/healthcare-crm/",
    "/whatsapp",
    "/whatsapp/",
    "/ai",
    "/ai/",
    "/real-estate",
    "/real-estate/",
    "/education",
    "/education/",
    "/privacy-policies",
    "/privacy-policies/",
    "/terms-conditions",
    "/terms-conditions/",
    "/partners",
    "/partners/",
  ],
};
