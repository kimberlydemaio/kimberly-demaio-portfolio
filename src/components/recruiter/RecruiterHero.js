import Link from "next/link";
import Image from "next/image";

const capabilities = [
  "Analytics Engineering",
  "Business Systems",
  "Internal Tools",
  "Workflow Automation",
  "Data Visualization",
];

export default function RecruiterHero() {
  return (
    <>
      <section className="recruiter-hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            Business Systems Analyst · Internal Tools · Analytics Engineering
          </p>

          <h1 id="hero-heading">I like making things make sense.</h1>

          <p className="hero-description">
            Hi, I&apos;m Kimberly! I turn ambiguous and messy operational
            problems into data models, analytics systems, automated workflows,
            and internal tools. My work spans requirements and process design
            through BigQuery/SQL modeling, automation, reporting, and
            application development. Currently building and owning analytics and
            operational systems supporting ~500 employees across 16 locations.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="#work">
              View My Work
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/images/hero-visual-v2.png"
              alt="A warm editorial workspace with books, vintage details, and creative tools"
              fill
              className="hero-image"
              sizes="(max-width: 960px) 90vw, 42vw"
              priority
            />
          </div>

          <p className="hero-image-note">
            Curious by nature. Builder by habit.
          </p>
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
