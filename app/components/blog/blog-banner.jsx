export default function BlogBanner() {
  return (
    <section className="blog-banner" aria-labelledby="blog-banner-title">
      <div className="blog-banner-deco blog-banner-deco-left" aria-hidden="true">
        <div className="blog-banner-card">
          <p className="blog-banner-card-label">Pipeline</p>
          <div className="blog-banner-stage">
            <span className="blog-banner-dot" style={{ background: "var(--tc-blue)" }} />
            New lead
            <b>12</b>
          </div>
          <div className="blog-banner-stage">
            <span className="blog-banner-dot" style={{ background: "var(--tc-orange)" }} />
            Follow-up
            <b>8</b>
          </div>
          <div className="blog-banner-stage">
            <span className="blog-banner-dot" style={{ background: "var(--tc-green)" }} />
            Won
            <b>5</b>
          </div>
        </div>
      </div>

      <div className="blog-banner-inner">
        <span className="badge">
          <span className="pulse" />
          TracktCRM Blog
        </span>
        <h1 id="blog-banner-title" className="blog-banner-title">
          Sales Made <span className="blog-banner-accent">Simple</span>
          <span className="visually-hidden">: </span>
          <span className="blog-banner-subtitle">CRM Guides, Comparisons and Sales Tips</span>
        </h1>
        <p className="blog-banner-text">
          CRM guides, honest software comparisons and WhatsApp sales tips for growing teams.
        </p>
      </div>

      <div className="blog-banner-deco blog-banner-deco-right" aria-hidden="true">
        <div className="blog-banner-chat blog-banner-chat-in">Hi, can you share the price list?</div>
        <div className="blog-banner-chat blog-banner-chat-out">Sure, sending it now.</div>
      </div>
    </section>
  );
}
