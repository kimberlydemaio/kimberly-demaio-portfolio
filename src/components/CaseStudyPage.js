import Image from "next/image";
import Link from "next/link";

export default function CaseStudyPage({
  number,
  category,
  title,
  summary,
  status,
  role,
  stack,
  theme,
  board,
  sections,
  highlights,
  liveProject,
  sampleReport,
  nextProject,
}) {
  return (
    <main className={`case-study-page case-study-${theme}`}>
      <div className="case-study-shell">
        <Link className="case-study-back" href="/#work">
          ← Selected work
        </Link>

        <section className="case-study-hero">
          <div className="case-study-hero-copy">
            <p className="case-study-kicker">
              {number} / {category}
            </p>

            <h1>{title}</h1>

            <p className="case-study-summary">{summary}</p>

            {(liveProject || sampleReport) && (
              <div className="case-study-actions">
                {liveProject && (
                  <a
                    className="button button-primary"
                    href={liveProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {liveProject.label} ↗
                  </a>
                )}

                {sampleReport && (
                  <a
                    className="button case-study-secondary-button"
                    href={sampleReport.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sampleReport.label} ↗
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="case-study-board">
            <p className="case-study-board-label">{board.label}</p>

            <p className="case-study-board-primary">{board.primary}</p>

            <div className="case-study-flow">
              {board.flow.map((item, index) => (
                <div className="case-study-flow-item" key={item}>
                  <span>{item}</span>

                  {index < board.flow.length - 1 && (
                    <span className="case-study-flow-arrow">→</span>
                  )}
                </div>
              ))}
            </div>

            <p className="case-study-board-note">{board.note}</p>
          </div>
        </section>

        <section className="case-study-facts" aria-label="Project information">
          <div>
            <p>Status</p>
            <strong>{status}</strong>
          </div>

          <div>
            <p>My role</p>
            <strong>{role}</strong>
          </div>

          <div>
            <p>Built with</p>

            <div className="case-study-stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <div className="case-study-content">
          {sections.map((section, index) => (
            <section className="case-study-section" key={section.title}>
              <p className="case-study-section-number">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div>
                <h2>{section.title}</h2>

                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.image && (
                  <div
                    className={`case-study-visual case-study-visual-${section.visual}`}
                  >
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      width={1400}
                      height={900}
                      className="case-study-visual-image"
                    />
                  </div>
                )}

                {section.visual === "report" && sampleReport && (
                  <a
                    className="case-study-inline-link"
                    href={sampleReport.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View sample report ↗
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>

        <section className="case-study-highlights">
          {highlights.map((highlight) => (
            <div className="case-study-highlight" key={highlight.label}>
              <p>{highlight.label}</p>
              <strong>{highlight.value}</strong>
            </div>
          ))}
        </section>

        <footer className="case-study-footer">
          <Link href="/#work">← All projects</Link>

          {nextProject && (
            <Link href={nextProject.href}>Next: {nextProject.title} →</Link>
          )}
        </footer>
      </div>
    </main>
  );
}
