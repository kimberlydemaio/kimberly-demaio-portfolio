import Link from "next/link";

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
          <div className="portal-scene">
            <div className="portal-frame">
              <div className="portal-opening">
                <div className="portal-trees"></div>
                <div className="portal-trunk portal-trunk-left"></div>
                <div className="portal-trunk portal-trunk-right"></div>
                <div className="portal-glow"></div>
                <div className="portal-path"></div>

                <span className="portal-light light-one"></span>
                <span className="portal-light light-two"></span>
                <span className="portal-light light-three"></span>
                <span className="portal-light light-four"></span>
                <span className="portal-light light-five"></span>
              </div>
              <div className="portal-vine portal-vine-left">
                <span className="vine-leaf leaf-one"></span>
                <span className="vine-leaf leaf-two"></span>
                <span className="vine-leaf leaf-three"></span>
              </div>
              <div className="portal-vine portal-vine-right">
                <span className="vine-leaf leaf-one"></span>
                <span className="vine-leaf leaf-two"></span>
                <span className="vine-leaf leaf-three"></span>
              </div>
              <div className="portal-crown">
                <span className="crown-leaf crown-leaf-one"></span>
                <span className="crown-leaf crown-leaf-two"></span>
                <span className="crown-leaf crown-leaf-three"></span>
                <span className="crown-leaf crown-leaf-four"></span>
                <span className="crown-leaf crown-leaf-five"></span>
              </div>
            </div>
          </div>
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
