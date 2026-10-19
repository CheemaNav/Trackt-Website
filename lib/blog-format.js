/** "2026-10-19" → "19 October 2026" (or "19 Oct 2026" with month "short"). */
export function formatDate(iso, month = "long") {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month,
    year: "numeric",
    timeZone: "UTC",
  });
}
