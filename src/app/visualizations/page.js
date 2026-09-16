import Image from "next/image";
import Link from "next/link";

export default function VisualizationsPage() {
  return (
    <main className="visualizations-page">
      <div className="visualizations-shell">
        <section className="visualizations-hero">
          <p className="section-eyebrow">Visualizations</p>

          <h1>Data becomes more interesting when you can explore it.</h1>

          <p className="visualizations-summary">
            Interactive visual experiments built from public data, curiosity,
            and the patterns hiding inside everyday life.
          </p>
        </section>

        <section className="visualizations-grid">
          <Link
            href="/visualizations/where-the-hours-go"
            className="visualization-card"
          >
            <div className="visualization-card-visual">
              <Image
                src="/images/where-the-hours-go-preview.png"
                alt="Preview of the Where the Hours Go visualization"
                width={1200}
                height={900}
                className="visualization-card-image"
              />
            </div>

            <div className="visualization-card-content">
              <p className="visualization-card-kicker">
                American Time Use Survey · 2025
              </p>

              <h2>Where the Hours Go</h2>

              <p>
                A week in American life, told hour by hour through an
                interactive radial view of work, sleep, care, leisure, travel,
                and everything in between.
              </p>

              <span className="visualization-card-link">
                Explore visualization →
              </span>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
