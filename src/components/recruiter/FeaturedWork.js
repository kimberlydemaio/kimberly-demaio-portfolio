import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "AI + FULL-STACK DEVELOPMENT",
    title: "Experigraph",
    description:
      "I built and launched an AI-powered career intelligence platform that looks beyond job titles to uncover transferable skills, unexpected opportunities, and practical career paths. It combines structured AI analysis, relational data modeling, and full-stack development.",
    result: "Live platform",
    href: "/projects/experigraph",
    isExternal: true,
  },
  {
    number: "02",
    category: "BUSINESS SYSTEMS + WORKFORCE INTELLIGENCE",
    title: "Succession Planning & Leadership Readiness",
    description:
      "After leadership evaluated a costly third-party platform, I proposed building an internal solution. I developed a Streamlit prototype for evaluating leadership readiness and modeling staffing gaps, promotions, transfers, and cascading vacancies. The system also uses Firebase for employee career-interest and profile workflows.",
    result: "Functional prototype · Pilot in development",
    href: null,
  },
  {
    number: "03",
    category: "DATA ENGINEERING + WORKFORCE ANALYTICS",
    title: "Data Warehouse & Recruiting Analytics",
    description:
      "I architected a layered GCP/BigQuery warehouse to bring disconnected workforce, HR, recruiting, and operational data into a reliable reporting foundation. The work includes employee identity modeling, automated recruiting pipelines, and datasets for understanding hiring activity, workforce trends, and operational performance.",
    result: "Fully up and running",
    href: null,
  },
  {
    number: "04",
    category: "WORKFLOW AUTOMATION + PEOPLE ANALYTICS",
    title: "Leadership Review Automation",
    description:
      "I rebuilt a complicated leadership-review process into an automated system that processes approximately 4,000 survey responses each quarter, generates individualized reports, and eliminates more than 80 hours of manual work per cycle.",
    result: "80+ hours saved per quarter",
    href: null,
  },
  {
    number: "05",
    category: "FULL-STACK PRODUCT + DECISION SUPPORT",
    title: "Business Health Score",
    description:
      "I designed and launched an interactive assessment that turns business inputs into an operational health score, highlights areas for improvement, and gives users practical recommendations they can act on.",
    result: "Live application",
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
                <Link
                  href={project.href}
                  aria-label={`View ${project.title}`}
                  target={project.isExternal ? "_blank" : undefined}
                  rel={project.isExternal ? "noopener noreferrer" : undefined}
                >
                  {project.isExternal ? "Visit live site ↗" : "View project →"}
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
