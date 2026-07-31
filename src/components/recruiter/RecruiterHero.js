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
            Business Operations · Analytics · Systems · Software Development
          </p>

          <h1 id="hero-heading">
            I turn complex problems into systems that work.
          </h1>

          <p className="hero-description">
            I combine analytics, operations, process improvement, software
            development, and creative thinking to build clearer, more useful
            ways of working.
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
                <div className="portal-glow"></div>
                <div className="portal-path"></div>

                <span className="portal-light light-one"></span>
                <span className="portal-light light-two"></span>
                <span className="portal-light light-three"></span>
                <span className="portal-light light-four"></span>
                <span className="portal-light light-five"></span>
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
