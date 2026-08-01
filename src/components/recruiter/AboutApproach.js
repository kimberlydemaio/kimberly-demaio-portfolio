export default function AboutApproach() {
  return (
    <section className="about-approach" id="about">
      <div className="about-intro">
        <p className="section-eyebrow">About my approach</p>
        <h2>I look beneath the surface before I start building.</h2>
      </div>
      <div className="approach-grid">
        <article className="approach-card">
          <p className="approach-number">01</p>
          <h3>Start with the full picture</h3>
          <p>
            I trace how the work actually happens, who is involved, where things
            get stuck, and what decisions need to be made.
          </p>
        </article>
        <article className="approach-card">
          <p className="approach-number">02</p>
          <h3>Build around real people</h3>
          <p>
            I design tools and workflows around how people actually work, not
            how the process is supposed to look on paper.
          </p>
        </article>
        <article className="approach-card">
          <p className="approach-number">03</p>
          <h3>Make the next step clearer</h3>
          <p>
            I organize scattered information into something people can
            understand, use, and act on.
          </p>
        </article>
      </div>
    </section>
  );
}
