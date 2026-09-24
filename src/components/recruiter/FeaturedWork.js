import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Analytics Engineering + Forecasting",
    title: "Recruiting Analytics & Workforce Forecasting",
    description:
      "I’m rebuilding recruiting and workforce analytics into a modeled data system that connects interviews, hiring, headcount, turnover, and new-hire retention—and extends historical reporting into forward-looking staffing forecasts.",
    result: "In development",
    href: null,
  },
  {
    number: "02",
    category: "AI + Full-Stack Product",
    title: "Jobnostic",
    description:
      "I’m building a job discovery platform that turns a resume into a structured candidate profile, finds better-fit opportunities, explains match strength and skill gaps, and keeps the job search organized without forcing users through another traditional job board.",
    result: "In development",
    href: "/projects/jobnostic",
  },
  {
    number: "03",
    category: "Internal Tools + Workforce Analytics",
    title: "Succession Planning & Leadership Readiness",
    description:
      "I’m building an internal decision-support system that brings performance, qualifications, training, tenure, leadership feedback, and eligibility rules together to create a clearer and more consistent view of promotion readiness.",
    result: "In development",
    href: null,
  },
  {
    number: "04",
    category: "Workflow Automation + People Analytics",
    title: "Leadership Review Automation",
    description:
      "I built a system that turns thousands of survey responses into individualized leadership reviews—automating analysis, document generation, and delivery for a process that previously took weeks or months.",
    result: "80+ hours to minutes",
    href: null,
  },
  {
    number: "05",
    category: "Internal Tool + Product Development",
    title: "Business Health Score",
    description:
      "I designed and launched an interactive assessment that turns structured business inputs into a 0–100 operational health score, prioritized recommendations, and a shareable report.",
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
