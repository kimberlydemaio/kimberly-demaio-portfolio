export default function AboutApproach() {
  return (
    <section className="about-approach" id="about">
      <div className="about-intro">
        <p>About my approach</p>
        <h2>I look for the system underneath the problem.</h2>
      </div>
      <div className="approach-grid">
        <article className="approach-card">
          <p className="approach-number">01</p>
          <h3>Understand before building</h3>
          <p>
            I start by tracing the process, the people involved, and the
            decisions the system needs to support.
          </p>
        </article>
        <article className="approach-card">
          <p className="approach-number">02</p>
          <h3>Build for the people using it</h3>
          <p>
            s I design tools and workflows around how people actually work, not
            how a process looks on paper.
          </p>
        </article>
        <article className="approach-card">
          <p className="approach-number">03</p>
          <h3>Make complexity easier to act on</h3>
          <p>
            I turn scattered information into clear systems, useful decisions,
            and practical next steps.
          </p>
        </article>
      </div>
    </section>
  );
}
