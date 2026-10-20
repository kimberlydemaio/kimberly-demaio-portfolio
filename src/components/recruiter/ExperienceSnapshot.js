import Image from "next/image";

const experienceItems = [
  {
    label: "Operations",
    value: "500+ employees",
    detail:
      "Building and managing analytics systems and internal tools across 16 locations",
  },
  {
    label: "Automation",
    value: "80+ hours saved",
    detail:
      "Eliminated manual work from each leadership-review cycle through automated processing, reporting, and document generation",
  },
  {
    label: "Systems",
    value: "10+ systems",
    detail:
      "Designing, developing, and maintaining operational analytics systems, automated workflows, and decision-support tools",
  },
  {
    label: "Development",
    value: "End-to-end",
    detail:
      "Taking projects from requirements and system design through development, testing, deployment, and ongoing improvements",
  },
];

export default function ExperienceSnapshot() {
  return (
    <section className="experience-snapshot" id="experience">
      <div className="experience-intro-layout">
        <div className="experience-intro">
          <p className="section-eyebrow">Experience at a glance</p>

          <h2>
            My work lives at the intersection of people, data, operations, and
            systems.
          </h2>

          <p>
            I combine big-picture thinking with hands-on building, from
            understanding the real problem to creating the workflows, reports,
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
