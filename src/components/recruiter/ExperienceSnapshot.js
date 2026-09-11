import Image from "next/image";

const experienceItems = [
  {
    label: "Operations",
    value: "500+ employees",
    detail:
      "Reporting, workforce analytics, and operational systems across 16 locations",
  },
  {
    label: "Automation",
    value: "Under 1 hour",
    detail:
      "Reduced complex, manual leadership review delivery from two months to an hour or less",
  },
  {
    label: "Systems",
    value: "Built from scratch",
    detail:
      "Created reporting workflows, training trackers, assessment systems, and decision-support tools",
  },
  {
    label: "Development",
    value: "Full-stack growth",
    detail:
      "Building production web applications with JavaScript, React, Next.js, APIs, and modern deployment workflows.",
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
