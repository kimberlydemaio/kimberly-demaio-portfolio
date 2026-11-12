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
            Business Systems · Data Engineering · Internal Tools · AI
            Development
          </p>

          <h1 id="hero-heading">I like making things make sense.</h1>

          <p className="hero-description">
            Hi, I&apos;m Kimberly! I build the systems, data infrastructure, and
            applications that make complicated operations easier to understand
            and manage.
          </p>

          <p className="hero-description">
            My background is in business operations, but my work has evolved
            into data engineering, automation, and software development. I like
            understanding how things work, figuring out what&apos;s missing, and
            building solutions that make a measurable difference.
          </p>

          <p className="hero-description">
            I currently design, build, and manage systems supporting 500+
            employees across 16 locations. I&apos;m naturally curious,
            comfortable figuring things out as I go, and rarely satisfied with
            &quot;that&apos;s just how we&apos;ve always done it.&quot;
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
