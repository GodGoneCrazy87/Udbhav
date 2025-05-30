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
    poster1,
    image,
    form = "",
    event_details = {},
    prizes,
    registration_fee,
    contact,
  } = event;

  const eventImage = image || poster1 || "/postereg1.png";

  const normalizedRules =
    typeof rules === "string"
      ? rules.split("\n").filter(Boolean)
      : Array.isArray(rules)
      ? rules
      : [];

  return (
   <div
  className="relative w-full text-white px-6 py-16 font-sans bg-no-repeat bg-top"
  style={{
    backgroundImage: "url('/eventinfobgfinal.jpg')",
    backgroundSize: "110% auto", // Full width, auto height
    backgroundPosition: "top center",
  }}
>

  {/* Your content here */}


      <div className="bg-black bg-opacity-70 absolute inset-0 z-[-1]" />

      <div className="flex flex-col md:flex-row gap-10 items-start max-w-6xl mx-auto relative z-10">
       <div className="relative w-[270px] h-[340px] transform rotate-[-3deg] translate-x-48 translate-y-11 shadow-xl">
  <Image
    src={eventImage}
    alt={name}
    fill
    className="object-cover  shadow-2xl"
  />
</div>



  <div className="flex-1 max-w-[36vw] translate-x-[20vw] translate-y-[3vh]">
  <h1 className="text-5xl md:text-6xl mb-6 text-[#ff6f61] font-bold font-ransom">{name}</h1>

  {tagline && <p className="italic text-xl mb-4 text-gray-300">{tagline}</p>}
  {description && <p className="text-lg mb-6">{description}</p>}

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base md:text-lg">
    {type && <p><strong className="text-[#6b5b95]">Event Type:</strong> {type}</p>}
    {date && <p><strong className="text-[#6b5b95]">Date:</strong> {date}</p>}
    {time && <p><strong className="text-[#6b5b95]">Time:</strong> {time}</p>}
    {venue && <p><strong className="text-[#6b5b95]">Venue:</strong> {venue}</p>}
    {team && <p><strong className="text-[#6b5b95]">Team Size:</strong> {team}</p>}
    {registration_fee && <p><strong className="text-[#6b5b95]">Fee:</strong> {registration_fee}</p>}
  </div>



  {event_details?.genre && (
    <p className="mt-2">
      <strong className="text-[#6b5b95]">Genre:</strong> {event_details.genre}
    </p>
  )}

  {event_details?.dance_forms && (
    <p>
      <strong className="text-[#6b5b95]">Dance Forms:</strong> {event_details.dance_forms}
    </p>
  )}

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
    className="group relative mt-3 w-[240px] h-[80px] bg-[url('/register2.png')] bg-contain bg-no-repeat bg-center text-white font-ransom text-xl flex items-center justify-center transition-transform duration-300 hover:scale-105"
  >
    {/* Optional semi-transparent dark overlay for better text visibility */}
    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl group-hover:bg-opacity-50 transition-opacity duration-300 z-0" />

    <span className="z-10 uppercase relative group-hover:text-[#ff6f61] transition-colors duration-300 drop-shadow-lg">
      Register Now
    </span>
  </a>
)}
 </div>
      </div>

      {normalizedRules.length > 0 && (
        <div className="mt-28 max-w-[550px] mx-auto p-6 translate-x-[20vw] rounded-xl  relative z-10">
          <ul className="list-disc space-y-2 text-black text-lg">
            {normalizedRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

{(prizes || contact) && (
  <div className="relative mt-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
    
    {/* Prizes Section */}
    {prizes && (
      <div className="flex flex-row items-start gap-4 w-full md:w-1/2">
        {/* Trophy Icon */}
        <div className="z-10">
          <Image
            src="/trophy.png"
            alt="Trophy"
            width={80}
            height={80}
            className="mt-2"
          />
        </div>

        {/* Prizes Info */}
        <div className="z-10 text-left p-4 text-white">
          <h2 className="text-2xl font-semibold text-[#6b5b95] mb-2">Prizes</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
            {prizes.first_prize && <div>🥇 First Prize: {prizes.first_prize}</div>}
            {prizes.second_prize && <div>🥈 Second Prize: {prizes.second_prize}</div>}
          </div>
        </div>
      </div>
    )}

    {/* Contacts Section */}
    {contact && (
      <div className="flex flex-row items-start gap-4 w-full md:w-1/2">
        {/* Call Icon */}
        <div className="z-10">
          <Image
            src="/callbutton.png"
            alt="Call Button"
            width={80}
            height={80}
            className="mt-2"
          />
        </div>

        {/* Contact Info */}
        <div className="z-10 text-left p-4 text-white">
  <h2 className="text-2xl font-semibold text-[#6b5b95] mb-2">Contacts</h2>
  <div className="flex flex-wrap gap-x-6 gap-y-2">
    {Object.entries(contact).map(([name, phone]) => (
      <div key={name} className="whitespace-nowrap">
        <strong>{name}</strong>: {phone}
      </div>
    ))}
  </div>
</div>

      </div>
    )}
  </div>
)}




    </div>
  );
}
