import Image from "next/image";
import Link from "next/link";

export default function VisualizationCallout() {
  return (
    <section className="visualization-callout" id="visualizations">
      <div className="visualization-copy">
        <p className="section-eyebrow">Visualization</p>

        <h2>
          I love the point where data becomes something you can see and explore.
        </h2>

        <p>
          Interactive visualizations are especially exciting to me because they
          can make complicated information feel clearer, more approachable, and
          even a little surprising.
        </p>
      </div>

      <div className="visualization-preview">
        <Link
          className="visualization-home-card"
          href="/visualizations"
          aria-label="Explore visualizations"
        >
          <div className="visualization-home-image">
            <Image
              src="/images/where-the-hours-go-preview.png"
              alt="Preview of the Where the Hours Go visualization"
              width={900}
              height={900}
            />
          </div>

          <div className="visualization-home-copy">
            <p className="visualization-placeholder-label">
              Interactive visualization
            </p>

            <h3>Where the Hours Go</h3>

            <p>
              An exploratory look at how people spend their time across work,
              sleep, care, leisure, and everything in between.
            </p>

            <span>Explore visualizations →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
