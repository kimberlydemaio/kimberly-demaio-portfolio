import Link from "next/link";

export default function ContactClosing() {
  return (
    <section className="contact-closing" id="contact">
      <div className="contact-copy">
        <p className="section-eyebrow">Let&apos;s connect</p>
        <h2>
          Let&apos;s make something useful, thoughtful, and worth exploring.
        </h2>
        <p>
          I’m interested in thoughtful work that brings together operations,
          analytics, systems thinking, and software—especially when the result
          is something people genuinely enjoy using.
        </p>
      </div>
      <div className="contact-actions">
        <a
          className="button button-primary"
          href="mailto:kimberly@kimberlydemaio.com"
          target="_blank"
          rel="noreferrer"
        >
          Email me
        </a>
        <Link
          className="button button-secondary"
          href="https://www.linkedin.com/in/kdemaio11"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          className="button button-secondary"
          href="https://www.github.com/kimberlydemaio"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
