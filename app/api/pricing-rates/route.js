import { COUNTRY_CURRENCY } from "../../pricing/currency";

export const runtime = "nodejs";

const RATE_SOURCES = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
  "https://latest.currency-api.pages.dev/v1/currencies/usd.json",
];

const COUNTRY_HEADERS = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "cloudfront-viewer-country",
  "x-country-code",
  "x-geo-country",
];

const ONE_DAY = 60 * 60 * 24;
const SUPPORTED = new Set(Object.values(COUNTRY_CURRENCY));

let memoryCache = null;

async function loadRates() {
  if (memoryCache && Date.now() - memoryCache.at < ONE_DAY * 1000) {
    return memoryCache.data;
  }
  for (const url of RATE_SOURCES) {
    try {
      const response = await fetch(url, { next: { revalidate: ONE_DAY } });
      if (!response.ok) continue;
      const payload = await response.json();
      const rates = { USD: 1 };
      for (const [code, value] of Object.entries(payload.usd || {})) {
        const upper = code.toUpperCase();
        if (SUPPORTED.has(upper) && Number.isFinite(value) && value > 0) {
          rates[upper] = value;
        }
      }
      const data = { date: payload.date || null, rates };
      memoryCache = { at: Date.now(), data };
      return data;
    } catch {}
  }
  return { date: null, rates: { USD: 1 } };
}

function countryFromHeaders(headers) {
  for (const name of COUNTRY_HEADERS) {
    const value = headers.get(name);
    if (value && /^[A-Za-z]{2}$/.test(value) && value.toUpperCase() !== "XX") {
      return value.toUpperCase();
    }
  }
  return null;
}

export async function GET(request) {
  const { date, rates } = await loadRates();
  return Response.json(
    { country: countryFromHeaders(request.headers), date, rates },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
