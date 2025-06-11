import Image from "next/image";
import Link from "next/link";

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
  eventPageLink,
}) {
  const isOnline = venue?.toLowerCase() === "online";
  const normalizedCategory = category?.toUpperCase?.() || "";

  const isInter = selectedType === "Inter College";
  const overlayBg = isInter
    ? "bg-gradient-to-b from-white/25 to-[#4b6cb7cc]"
    : "bg-gradient-to-b from-black/25 to-[#8a9cd8cc]";
  const textColor = isInter ? "text-[#6e6703]" : "text-[#8a9cd8]";
  const imageSrc = image || poster1 || "/placeholder.jpg";

  return (
    <Link
      href={eventPageLink || "#"}
      className="group w-[300px] text-inherit no-underline mb-12"
    >
      <div
        className={`relative w-full rounded-[15px] overflow-hidden shadow-md transition duration-300 ease-in-out ${
          isInter ? "bg-white/20 shadow-black/10" : "bg-black/30 shadow-white/10"
        }`}
      >
        {/* Poster Image */}
        <div className="w-[339px] h-[480px] overflow-hidden rounded-[15px]">
          <Image
            src={imageSrc}
            alt={eventname}
            width={339}
            height={480}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 group">
          <div
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-80 ${overlayBg}`}
          />
          <div className="relative z-10 hidden group-hover:flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h3 className="text-lg font-semibold mb-4">
              {short_description || "Event Information"}
            </h3>

            {/* ✅ Use button instead of <a> to avoid nested <a> issue */}
            {form && (
              <button
                onClick={(e) => {
                  e.preventDefault(); // prevent Link navigation
                  e.stopPropagation(); // prevent bubbling
                  window.open(form, "_blank");
                }}
                className="text-sm px-4 py-2 rounded-full bg-black text-white"
              >
                Register
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Event Name */}
      <h4 className="text-center text-2xl font-semibold mt-4 transition-all duration-300 ease-in-out uppercase text-white group-hover:scale-105">
        {eventname}
      </h4>
    </Link>
  );
}
