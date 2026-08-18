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
            Operations. Data. Analytics. Systems. Full-stack Dev.
          </p>

          <h1 id="hero-heading">I like making things make sense.</h1>

          <p className="hero-description">
            Hi, I&apos;m Kimberly! I love solving tricky problems and finding
            patterns in chaos. I enjoy turning scattered ideas into something
            clear and helpful—whether that&apos;s a system, a process, or a web
            app.
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
