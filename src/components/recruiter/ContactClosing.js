import Link from "next/link";

export default function ContactClosing() {
  return (
    <section className="contact-closing" id="contact">
      <div className="contact-copy">
        <p className="section-eyebrow">Let&apos;s connect</p>
        <h2>Have a problem worth solving?</h2>
        <p>
          I&apos;m interested in roles and projects where I can combine
          operations analytics, systems thinking, and software development to
          build something genuinely useful.
        </p>
      </div>
      <div className="contact-actions">
        <a
          className="button button-primary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kimberly@kimberlydemaio.com"
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
      </div>
    </section>
  );
}
