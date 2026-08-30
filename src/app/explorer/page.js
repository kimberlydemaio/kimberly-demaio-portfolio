import Image from "next/image";
import Link from "next/link";

export default function ExplorerHome() {
  return (
    <main className="explorer-foyer">
      <div className="foyer-scene">
        <Image
          src="/images/explorer-foyer-desktop.png"
          alt="An old, ivy-covered foyer welcoming visitors into Explorer View"
          fill
          priority
          className="foyer-background foyer-background-desktop"
          sizes="100vw"
        />

        <Image
          src="/images/explorer-foyer-mobile.png"
          alt=""
          fill
          priority
          className="foyer-background foyer-background-mobile"
          sizes="100vw"
        />

        <Link className="foyer-recruiter-link" href="/">
          ← Recruiter View
        </Link>

        <div className="foyer-overlay" />

        <section className="foyer-content">
          <p className="foyer-eyebrow">Hello, Explorer</p>

          <h1>Welcome in.</h1>

          <p className="foyer-intro">
            Curiosity is the compass here. The Map Room will help you choose
            where to go next.
          </p>

          <Link className="foyer-button" href="/explorer/map-room">
            Enter the Map Room →
          </Link>
        </section>

        <p className="foyer-clue">
          Not everything is on the map. Some things you have to find.
        </p>
      </div>
    </main>
  );
}
