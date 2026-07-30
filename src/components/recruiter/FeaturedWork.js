import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Operations Analytics",
    title: "Leadership Review Automation",
    description:
      "Transformed thousands of survey responses into individualized leadership reviews, reducing delivery time from months to days.",
    result: "90%+ faster turnaround",
    href: "#",
  },
  {
    number: "02",
    category: "Business Systems",
    title: "Business Health Score",
    description:
      "Designed and built an interactive assessment that converts operational inputs into a scored report with prioritized recommendations.",
    result: "Live production tool",
    href: "#",
  },
  {
    number: "03",
  category: "Workforce Analytics",
  title: "Succession Planning System",
  description:
    "Designed a data-driven succession planning framework that evaluates readiness across performance, tenure, leadership feedback, skills, and role progression.",
  result: "Leadership proposal approved",
  href: "#",
  },
];

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="work">
      <div className="section-heading">
        <p className="section-eyebrow">Selected work</p>

        <div className="section-heading-row">
          <h2>Systems built to solve real problems.</h2>

          <p>
            A selection of analytics, operations, automation, and product
            projects designed around clarity, usability, and measurable impact.
          </p>
        </div>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">{project.number}</div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-meta">
              <span>{project.result}</span>

              <Link href={project.href} aria-label={`View ${project.title}`}>
                View project →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}