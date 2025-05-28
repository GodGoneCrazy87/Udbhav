import Image from "next/image";
import events from "../../components/Events.json";

export function generateStaticParams() {
  return events.map((event) => ({
    eventname: (event.slug || event.eventname)?.toLowerCase().replace(/\s+/g, "-") || "",
  }));
}

export default function EventPage({ params }) {
  const { eventname } = params;

  const event = events.find(
    (e) =>
      (e.slug || e.eventname)?.toLowerCase().replace(/\s+/g, "-") === eventname
  );

  if (!event) {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-white bg-black px-6 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6f61] to-[#6b5b95] opacity-20 animate-chaos z-[-1]" />
        <h2 className="text-3xl font-bold">Event not found 😢</h2>
      </div>
    );
  }

  const {
    eventname: name = "",
    event: type = "",
    tagline = "",
    description = "",
    time = "",
    venue = "",
    day = "",
    date = "",
    category = "",
    team = event.team || event.teamSize || "Individual",
    rules = [],
    poster,
    image,
    form = "",
    event_details = {},
    prizes,
    registration_fee,
    contact,
  } = event;

  const eventImage = image || poster || "/postereg1.png";

  // Normalize rules into an array
  const normalizedRules =
    typeof rules === "string"
      ? rules.split("\n").filter(Boolean)
      : Array.isArray(rules)
      ? rules
      : [];

  return (
    <div className="relative min-h-screen bg-[#0b0b0b] text-white px-6 py-16 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6f61] to-[#6b5b95] opacity-20 animate-chaos z-[-1]" />

      <div className="flex flex-col md:flex-row gap-10 items-start max-w-6xl mx-auto">
        <div className="w-full max-w-sm">
          <Image
            src={eventImage}
            alt={name}
            width={400}
            height={400}
            className="rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            priority
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl mb-4 text-[#ff6f61] font-bold">{name}</h1>
          {tagline && <p className="italic text-lg mb-4 text-gray-300">{tagline}</p>}
          {description && <p className="text-base mb-4">{description}</p>}

          {type && <p><strong className="text-[#6b5b95]">Event Type:</strong> {type}</p>}
          {category && <p><strong className="text-[#6b5b95]">Category:</strong> {category}</p>}
          {day && <p><strong className="text-[#6b5b95]">Day:</strong> {day}</p>}
          {date && <p><strong className="text-[#6b5b95]">Date:</strong> {date}</p>}
          {time && <p><strong className="text-[#6b5b95]">Time:</strong> {time}</p>}
          {venue && <p><strong className="text-[#6b5b95]">Venue:</strong> {venue}</p>}
          {team && <p><strong className="text-[#6b5b95]">Team Size:</strong> {team}</p>}
          {registration_fee && <p><strong className="text-[#6b5b95]">Fee:</strong> {registration_fee}</p>}

          {event_details?.genre && <p><strong className="text-[#6b5b95]">Genre:</strong> {event_details.genre}</p>}
          {event_details?.dance_forms && <p><strong className="text-[#6b5b95]">Dance Forms:</strong> {event_details.dance_forms}</p>}
          {event_details?.time_limit && (
            <p>
              <strong className="text-[#6b5b95]">Time Limit:</strong>{" "}
              {typeof event_details.time_limit === "string"
                ? event_details.time_limit
                : `${event_details.time_limit.min} - ${event_details.time_limit.max} mins`}
            </p>
          )}

         {form && (
  <a
    href={form}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative  mt-6 w-[240px] h-[60px] bg-[url('/Register.svg')] bg-contain bg-no-repeat bg-center text-black font-ransom text-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
  >
    <span className="z-10 uppercase font-md relative right-5px ">Register Now</span>
  </a>
)}


        </div>
      </div>

      {normalizedRules.length > 0 && (
        <div className="mt-16 max-w-4xl mx-auto p-6 bg-[#1f1f1f] rounded-xl shadow-xl">
          <h2 className="text-3xl text-[#ff6f61] font-semibold mb-4">Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            {normalizedRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

      {prizes && (
        <div className="mt-8 max-w-4xl mx-auto bg-[#1f1f1f] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-[#6b5b95] mb-4">Prizes</h2>
          <ul className="space-y-2">
            {prizes.first_prize && <li>🥇 First Prize: {prizes.first_prize}</li>}
            {prizes.second_prize && <li>🥈 Second Prize: {prizes.second_prize}</li>}
          </ul>
        </div>
      )}

      {contact && (
        <div className="mt-8 max-w-4xl mx-auto bg-[#1f1f1f] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-[#6b5b95] mb-4">Contacts</h2>
          <ul className="space-y-1">
            {Object.entries(contact).map(([name, phone]) => (
              <li key={name}><strong>{name}</strong>: {phone}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
