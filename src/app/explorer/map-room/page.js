import Image from "next/image";
import Link from "next/link";

const mapRooms = [
  {
    id: "foyer",
    label: "Foyer",
    href: "/explorer",
  },
  {
    id: "map-room",
    label: "Map Room",
    href: "/explorer/map-room",
  },
  {
    id: "reading-room",
    label: "Reading Room",
    href: "/explorer/reading-room",
  },
  {
    id: "glasshouse",
    label: "Glasshouse",
    href: "/explorer/glasshouse",
  },
  {
    id: "office",
    label: "Office",
    href: "/explorer/office",
  },
  {
    id: "visualizations",
    label: "Visualizations",
    href: "/explorer/visualizations",
  },
  {
    id: "filing-cabinet",
    label: "Filing Cabinet",
    href: "/explorer/filing-cabinet",
  },
  {
    id: "observatory",
    label: "Observatory",
    href: "/explorer/observatory",
  },
];

export default function MapRoomPage() {
  return (
    <main className="map-room">
      <div className="map-scene">
        <Image
          src="/images/map-room-desktop.png"
          alt="An illustrated map of the Explorer View rooms"
          fill
          priority
          className="map-background map-background-desktop"
          sizes="100vw"
        />

        <Image
          src="/images/map-room-mobile.png"
          alt=""
          fill
          priority
          className="map-background map-background-mobile"
          sizes="100vw"
        />

        <div className="map-overlay" />

        <div className="map-hotspots">
          <Link className="map-hotspot map-hotspot-foyer" href="/explorer">
            Foyer
          </Link>
          <Link
            className="map-hotspot map-hotspot-reading-room"
            href="/reading-room"
          >
            Reading Room
          </Link>
          <Link className="map-hotspot map-hotspot-glasshouse" href="#">
            Glasshouse
          </Link>
          <Link className="map-hotspot map-hotspot-office" href="#">
            Office
          </Link>
          <Link className="map-hotspot map-hotspot-map-room" href="/map-room">
            Map Room
          </Link>
          <Link
            className="map-hotspot map-hotspot-observatory"
            href="/observatory"
          >
            Observatory
          </Link>
          <Link
            className="map-hotspot map-hotspot-filing-cabinet"
            href="/filing-cabinet"
          >
            Filing Cabinet
          </Link>
        </div>
        <div className="map-key">
          <div className="map-key-row map-key-primary">
            <span className="map-key-line"></span>
            <span>Primary Path</span>
          </div>

          <div className="map-key-row map-key-secondary">
            <span className="map-key-line"></span>
            <span>Secondary Path</span>
          </div>

          <div className="map-key-row map-key-secret">
            <span className="map-key-line"></span>
            <span>Secret</span>
          </div>
        </div>
      </div>
    </main>
  );
}
