const experienceItems = [
  {
    label: "Operations",
    value: "500+ employees",
    detail: "Reporting, workforce analytics, and operational systems acrosss16 locations",
  },
  {
    label: "Automation",
    value: "90%+ Faster",
    detail: "Reduced complex leadership review delivery from one to two months to half a day",
  },
  {
    label: "Systems",
    value: "Built from scratch",
    detail: "Created reporting workflows, training trackers, assessment systems, and decision-suppoort tools",
  },
  {
    label: "Development",
    value: "Full-stack growth",
    detail: "Building production web applications with JavaScript, React, Next.js, APIs, and modern deployment workflows.",
  },
];

export default function ExperienceSnapshot() {
  return (
    <section className="experience-snapshot" id="experience">
      <div className="experience-intro">
        <p className="section-eyebrow">Experience at a glance</p>
        <h2>I work where operations, data, systems, and people intersect.</h2>
        <p> My work combines strategic, yet creative, thinking with hands-on 
          execution, from identifying operational challenges to building the
          systems, workflows, and reporting tools to solve them.</p>
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