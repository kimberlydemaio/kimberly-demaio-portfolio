import Link from "next/link";

export default function RecruiterHeader() {
  return (
    <header className="site-header">
      <Link className="site-name" href="/">
        Kimberly DeMaio
      </Link>

      <nav className="primary-nav" aria-label="Primary navigation">
        <Link href="#work">Work</Link>
        <Link href="#visualizations">Visualizations</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <div className="view-toggle" aria-label="Choose portfolio view">
        <span className="view-option view-option-active">Recruiter View</span>
        <Link className="view-option" href="/explorer">
          Explorer View
        </Link>
      </div>
    </header>
  );
}