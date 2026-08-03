import Image from "next/image";
export default function AboutApproach() {
  return (
    <section className="about-approach" id="about">
      <div className="about-profile">
        <div className="about-photo">
          <Image
            src="/images/kimberly-demaio.jpg"
            alt="Kimberly DeMaio"
            className="profile-image"
            width={600}
            height={750}
          />
        </div>

        <div className="about-intro">
          <p className="section-eyebrow">About my approach</p>
          <h2>I look beneath the surface before I start building.</h2>
          <p>
            Outside of work, I’m a puzzler, a gamer, a photographer, and someone
            who is, at times, exploring down a rabbit hole of curiosity.
          </p>
        </div>
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
