import Image from "next/image";

const experienceItems = [
  {
    label: "Operations",
    value: "500+ employees",
    detail:
      "Building data infrastructure, analytics, and internal applications supporting operations across 16 locations.",
  },
  {
    label: "Automation",
    value: "80+ hours saved",
    detail:
      "Eliminated manual work each quarterly leadership-review cycle through automated processing, reporting, and document generation.",
  },
  {
    label: "Systems",
    value: "10+ systems",
    detail:
      "Developed tools spanning employee records, qualifications, recruiting integrations, leadership reviews, and operational reporting.",
  },
  {
    label: "Development",
    value: "End-to-end",
    detail:
      "Taking solutions from business requirements and architecture through development, testing, deployment, and ongoing improvements.",
  },
];

export default function ExperienceSnapshot() {
  return (
    <section className="experience-snapshot" id="experience">
      <div className="experience-intro-layout">
        <div className="experience-intro">
          <p className="section-eyebrow">Experience at a glance</p>

          <h2>
            From understanding operations to building the systems behind them.
          </h2>

          <p>
            My career began in operations leadership, evolved into business
            intelligence, and led me into data engineering, internal
            applications, and independent product development.
          </p>

          <p>
            That background shapes how I build. I understand the people and
            processes behind a problem before designing the systems, workflows,
            and tools that help solve it.
          </p>
        </div>

        <div className="experience-workspace">
          <Image
            src="/images/workspace-experience.png"
            alt="A warm workspace with a wooden desk, books, vintage details, and a cognac leather chair"
            width={1200}
            height={960}
            className="experience-workspace-image"
            sizes="(max-width: 960px) 100vw, 42vw"
          />
        </div>
      </div>

      <div className="experience-grid">
        {experienceItems.map((item) => (
          <article key={item.label} className="experience-card">
            <p className="experience-label">{item.label}</p>

            <h3>{item.value}</h3>

            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
