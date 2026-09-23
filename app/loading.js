export default function Loading() {
  return (
    <div className="route-loading" aria-busy="true" aria-live="polite">
      <span className="route-loading-bar" />
      <span className="visually-hidden">Loading page…</span>
    </div>
  );
}
