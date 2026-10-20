import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "DATA ENGINEERING + WORKFORCE ANALYTICS",
    title: "Recruiting Analytics & Workforce Forecasting",
    description:
      "I’m rebuilding recruiting analytics from the data up, connecting historical and current hiring systems, interview activity, headcount, turnover, and retention into a more reliable foundation for reporting and workforce forecasting.",
    result: "In development",
    href: null,
  },
  {
    number: "02",
    category: "AI + FULL-STACK DEVELOPMENT",
    title: "Experigraph",
    description:
      "I’m bbuilding a career intelligence platform that looks beyond job titles to understand what people actually know how to do. It connects professional experience to transferable skills, unexpected career opportunities, and practical paths forward.",
    result: "In development",
  },
  {
    number: "03",
    category: "BUSINESS SYSTEMS + WORKFORCE INTELLIGENCE",
    title: "Succession Planning & Leadership Readiness",
    description:
      "After leadership explored a costly third-party platform, I proposed building our own. I'm designing a system that brings together employee qualifications, performance, training, and leadership input to make promotion readiness more consistent, transparent, and useful.",
    result: "In development",
    href: null,
  },
  {
    number: "04",
    category: "WORKFLOW AUTOMATION + PEOPLE ANALYTICS",
    title: "Leadership Review Automation",
    description:
      "I rebuilt a complicated leadership-review process into an automated system that processes thousands of survey responses, generates individualized reports, and removes more than 80 hours of manual work per cycle.",
    result: "80+ hours to minutes",
    href: null,
  },
  {
    number: "05",
    category: "FULL-STACK PRODUCT + DECISION SUPPORT",
    title: "Business Health Score",
    description:
      "I designed and launched an interactive assessment that turns business inputs into an operational health score, highlights areas for improvement, and gives users practical recommendations they can act on.",
    result: "Built and launched",
    href: "/projects/business-health-score",
  },
];

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="work">
      <div className="section-heading">
        <p className="section-eyebrow">Selected work</p>

        <div className="section-heading-row">
          <h2>Built to make complicated things more useful.</h2>

          <p>
            My work spans analytics engineering, internal tools, automation, and
            product development. Different problems, same approach: understand
            the system, find what is getting in the way, and build something
            better.
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
