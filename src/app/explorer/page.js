import Image from "next/image";
import Link from "next/link";

export default function ExplorerHome() {
  return (
    <main className="explorer-foyer">
      <Image
        src="/images/explorer-foyer-v3.png"
        alt="An old, ivy-covered foyer welcoming visitors into Explorer View"
        fill
        priority
        className="foyer-background"
      />

      <div className="foyer-overlay" />

      <section className="foyer-content">
        <p className="foyer-eyebrow">Welcome, Explorer</p>

        <h1>Welcome in.</h1>

        <p className="foyer-intro">
          This is where curiosity leads and details tell stories. The Map Room
          is your guide to everything within.
        </p>

        <Link className="foyer-button" href="/explorer/map-room">
          Enter the Map Room →
        </Link>
      </section>
      <p className="foyer-clue">
        Not everything is on the map. Some things you have to find.
      </p>
    </main>
  );
}
