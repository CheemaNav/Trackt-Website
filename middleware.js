import { NextResponse } from "next/server";

/** Permanent redirects for URLs moved under /features and /industries. */
const REDIRECTS = new Map([
  ["/whatsapp-crm", "/features/whatsapp-crm"],
  ["/ai-crm", "/industries/ai-crm"],
  ["/real-estate-crm", "/industries/real-estate-crm"],
  ["/whatsapp", "/features/whatsapp-crm"],
  ["/ai", "/industries/ai-crm"],
  ["/real-estate", "/industries/real-estate-crm"],
  ["/privacy-policies", "/privacy-policy"],
  ["/terms-conditions", "/terms"],
]);

export function middleware(request) {
  const pathname = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
  const destination = REDIRECTS.get(pathname);

  if (!destination) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/whatsapp-crm",
    "/whatsapp-crm/",
    "/ai-crm",
    "/ai-crm/",
    "/real-estate-crm",
    "/real-estate-crm/",
    "/whatsapp",
    "/whatsapp/",
    "/ai",
    "/ai/",
    "/real-estate",
    "/real-estate/",
    "/privacy-policies",
    "/privacy-policies/",
    "/terms-conditions",
    "/terms-conditions/",
  ],
};
