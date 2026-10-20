const skillGroups = [
  {
    number: "01",
    title: "Data & Engineering",
    skills: [
      "SQL",
      "BigQuery",
      "Google Cloud",
      "Python",
      "PostgreSQL",
      "Data Modeling",
      "Data Warehousing",
    ],
  },
  {
    number: "02",
    title: "Development",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Git / GitHub",
    ],
  },
  {
    number: "03",
    title: "Analytics & Automation",
    skills: [
      "Looker",
      "Looker Studio",
      "Google Apps Script",
      "Workflow Automation",
      "Data Visualization",
    ],
  },
  {
    number: "04",
    title: "Product & Infrastructure",
    skills: ["Vercel", "AWS S3", "Neon", "Clerk", "OpenAI APIs"],
  },
];

export default function TechnicalSkills() {
  return (
    <section
      id="technical-skills"
      className="technical-skills-section"
      aria-labelledby="technical-skills-title"
    >
      <div className="technical-skills-intro">
        <p className="section-eyebrow">Tools & Technologies</p>

        <h2 id="technical-skills-title">The tools behind the work.</h2>

        <p className="technical-skills-description">
          I don&apos;t have one favorite technology for every problem. I like
          understanding what needs to be built and choosing tools that make
          sense for the job.
        </p>
      </div>

      <div className="technical-skills-grid">
        {skillGroups.map((group) => (
          <div className="technical-skill-card" key={group.number}>
            <span className="technical-skill-number">{group.number}</span>

            <h3>{group.title}</h3>

            <div className="technical-skill-tags">
              {group.skills.map((skill) => (
                <span className="technical-skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
