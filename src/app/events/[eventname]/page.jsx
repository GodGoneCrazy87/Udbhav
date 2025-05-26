// app/events/[eventname]/page.jsx
import Image from 'next/image';
import events from '../../components/Events.json';

export function generateStaticParams() {
  return events.map((event) => ({
    eventname: (event.slug || event.eventname).toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function EventPage({ params }) {
  const { eventname } = params;

  const event = events.find(
    (e) =>
      (e.slug || e.eventname).toLowerCase().replace(/\s+/g, '-') === eventname
  );

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <h2 className="text-3xl font-bold">Event not found 😢</h2>
      </div>
    );
  }

  const {
    eventname: name,
    event: type,
    tagline,
    description,
    time,
    venue,
    day,
    category,
    team,
    rules,
    // poster, // ignore dynamic for now
  } = event;

  return (
    <div className="min-h-screen px-6 py-16 bg-black text-white font-castleton">
      {/* Title */}
      <h1 className="text-5xl font-ransom text-center mb-4">{name}</h1>

      {/* Tagline */}
      {tagline && <p className="text-center text-xl text-gray-300 mb-10 italic">{tagline}</p>}

      {/* Main section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto mb-12">
        {/* Left Side: Details */}
        <section className="flex-1 max-w-md space-y-6">
          {type && (
            <div>
              <h2 className="text-xl font-semibold uppercase">Event Type</h2>
              <p className="mt-1 text-lg">{type}</p>
            </div>
          )}

          {day && (
            <div>
              <h2 className="text-xl font-semibold uppercase">Day</h2>
              <p className="mt-1 text-lg">{day}</p>
            </div>
          )}

          {time && (
            <div>
              <h2 className="text-xl font-semibold uppercase">Time</h2>
              <p className="mt-1 text-lg">{time}</p>
            </div>
          )}

          {venue && (
            <div>
              <h2 className="text-xl font-semibold uppercase">Venue</h2>
              <p className="mt-1 text-lg">{venue}</p>
            </div>
          )}

          {category && (
            <div>
              <h2 className="text-xl font-semibold uppercase">Category</h2>
              <p className="mt-1 text-lg">{category}</p>
            </div>
          )}

          {team && (
            <div>
              <h2 className="text-xl font-semibold uppercase">Team</h2>
              <p className="mt-1 text-lg">{team}</p>
            </div>
          )}
        </section>

        {/* Right Side: Poster */}
        <section className="flex-1 max-w-sm relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/postereg1.png"
            alt={name}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </section>
      </div>

      {/* Description */}
      {description && (
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold uppercase mb-2">Description</h2>
          <p className="text-lg text-gray-200">{description}</p>
        </div>
      )}

      {/* Rules */}
      {rules && rules.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold uppercase mb-4">Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
