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
          {mapRooms.map((room) => (
            <Link
              key={room.id}
              href={room.href}
              className={`map-hotspot map-hotspot-${room.id}`}
            >
              <span>{room.label}</span>
            </Link>
          ))}
        </div>

        <Link className="map-back-link" href="/explorer">
          ← Back to the Foyer
        </Link>
      </div>
    </main>
  );
}
