import Link from "next/link";
import Image from "next/image";

const capabilities = [
  "Analytics",
  "Business Operations",
  "Workflows & Processes",
  "Software Development",
  "Creative Problem-Solving",
];

export default function RecruiterHero() {
  return (
    <>
      <section className="recruiter-hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            Operations, data, systems & a little curiosity
          </p>

          <h1 id="hero-heading">I like finding the pattern inside the mess.</h1>

          <p className="hero-description">
            I’m Kimberly. I’m drawn to complicated problems, hidden patterns,
            and the challenge of turning scattered information into something
            useful—whether that becomes a system, a visualization, a workflow,
            or a web application.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="#work">
              View My Work
            </Link>

            <Link className="button button-secondary" href="/explorer">
              Enter Explorer View
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <Link
            className="portal-scene"
            href="/explorer"
            aria-label="Enter Explorer View"
          >
            <div className="portal-frame">
              <Image
                src="/images/garden-entry-to-house.png"
                alt="An enchanted garden entrance leading into Explorer View"
                fill
                className="portal-image"
                sizes="(max-width: 960px) 90vw, 40vw"
                priority
              />
            </div>
            <p className="portal-caption">A different way in →</p>
          </Link>
        </div>
      </section>

      <div className="identity-strip">
        {capabilities.map((capability) => (
          <span key={capability}>{capability}</span>
        ))}
      </div>
    </>
  );
}
