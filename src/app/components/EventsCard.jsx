import Image from "next/image";
import Link from "next/link";
import "./EventsCard.css"; // Assuming you have a CSS file for styles
export default function EventsCard({
  eventname,
  event,
  date,
  time,
  venue,
  category,
  poster1,
  image,
  form,
  short_description,
  selectedType,
}) {
  // Check if the venue is online
  const isOnline = venue?.toLowerCase() === "online";

  // Normalize category for consistency
  const normalizedCategory = typeof category === "string" ? category.toUpperCase() : "";

  // Function to determine background image based on event type or venue
  const getBackgroundImage = () => {
    if (isOnline) return "/eventbg4.png"; // Background for online events
    if (normalizedCategory === "INTRA") return "/eventbg2.png"; // Background for INTRA events
    if (normalizedCategory === "INTER") return "/eventbg1.png"; // Background for INTER events
    return "/eventbg1.png"; // Default background
  };

  const themeClass = selectedType === "Inter College" ? "day-theme" : "night-theme";

  return (
    <Link href={form || "#"} target="_blank" className={`event-card ${themeClass}`}>
      <div className="event-card-inner">
        {/* Poster Image */}
        <Image
          src={image || poster1 || "/placeholder.jpg"} // Fallback to a placeholder image
          alt={eventname}
          width={350}
          height={250}
          className="object-cover w-full h-full"
        />

        {/* Event Overlay */}
        <div className={`event-overlay ${themeClass}`}>
          <h3>{short_description || eventname}</h3>
          <span className="view-more">Click to know more</span>
        </div>
      </div>
      {/* Event Name */}
      <h3 className="event-name">{eventname}</h3>
    </Link>
  );
}