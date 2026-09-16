import Link from "next/link";

export default function WhereTheHoursGoPage() {
  return (
    <main className="visualization-detail-page">
      <div className="visualization-detail-shell">
        <Link className="visualization-detail-back" href="/visualizations">
          ← All visualizations
        </Link>

        <section className="visualization-detail-hero">
          <p className="section-eyebrow">American Time Use Survey · 2025</p>

          <h1>Where the Hours Go</h1>

          <p className="visualization-detail-summary">
            A week in American life, told hour by hour through an interactive
            radial view of how work, sleep, care, leisure, travel, and everyday
            routines shift across the week.
          </p>
        </section>
        <section className="visualization-detail-feature">
          <div className="visualization-detail-frame">
            <p className="section-eyebrow">Interactive visualization</p>

            <div className="visualization-detail-embed">
              <iframe
                src="https://data-visualization-lab.vercel.app/where-the-hours-go/embed"
                title="Where the Hours Go interactive visualization"
                className="visualization-detail-iframe"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
