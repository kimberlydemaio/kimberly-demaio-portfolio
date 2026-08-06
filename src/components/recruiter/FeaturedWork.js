import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Automation + People Data",
    title: "Leadership Review Automation",
    description:
      "I built a system that turns thousands of survey responses into individualized leadership reviews—cutting a process that once took months down to just a few days.",
    result: "From months to days",
    href: null,
  },
  {
    number: "02",
    category: "Product + Operations",
    title: "Business Health Score",
    description:
      "I designed and built an interactive assessment that helps business owners make sense of their operations and see which areas deserve attention first.",
    result: "Built and launched",
    href: null,
  },
  {
    number: "03",
    category: "Workforce Analytics",
    title: "Succession Planning System",
    description:
      "I’m building a framework that brings performance, tenure, feedback, skills, and career progression together to make leadership readiness easier to explore.",
    result: "In development",
    href: null,
  },
];

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="work">
      <div className="section-heading">
        <p className="section-eyebrow">Selected work</p>

        <div className="section-heading-row">
          <h2>Built from real problems and a lot of curiosity.</h2>

          <p>
            These projects span analytics, operations, automation, and product
            work—but they all started with the same question: how can this be
            clearer, easier, or more useful?
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

              {project.href ? (
                <Link href={project.href} aria-label={`View ${project.title}`}>
                  View project →
                </Link>
              ) : (
                <span className="project-status">Case study coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
