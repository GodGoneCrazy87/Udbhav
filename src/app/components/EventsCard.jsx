import Image from 'next/image';

export default function EventsCard({
  eventname,
  event,
  day,
  time,
  venue,
  category,
  poster,
  image,
  form, // NEW PROP
}) {
  const isOnline = venue?.toLowerCase() === 'online';
  const normalizedCategory = category?.toUpperCase();

  const getBackgroundImage = () => {
    if (isOnline) return '/eventcardbg4.svg';
    if (normalizedCategory === 'INTRA') return '/eventcardbg2.svg';
    if (normalizedCategory === 'INTER') return '/eventcardbg3.svg';
    return '/eventcardbg1.svg';
  };

  const backgroundImage = getBackgroundImage();

  return (
    <div className="relative w-[280px] h-[490px] rounded-xl overflow-hidden transition duration-300">
      
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="Card Background"
        fill
        className="object-cover rounded-xl"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10 font-castleton">

        {/* Poster */}
        <div className="absolute top-[18px] left-[30px] w-[220px] h-[220px] rounded-lg overflow-hidden ">
          <Image
            src={image || poster || "/postereg1.png"}
            alt="Poster"
            fill
            className="object-cover"
          />
        </div>

        {/* Category Badge */}
        <div className="absolute top-[2px] left-[8px] z-20">
          <Image
            src={normalizedCategory === 'INTRA' ? '/INTRA.svg' : '/INTER.svg'}
            alt={category}
            width={12}
            height={32}
            className="object-contain"
          />
        </div>

        {/* Event Details */}
        <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center w-[300px]">
          <h3 className="text-2xl uppercase whitespace-nowrap overflow-hidden text-ellipsis">
            {eventname}
          </h3>
          <p className="mt-2 text-lg capitalize">{event}</p>
          <p className="mt-5 text-lg">🕒 {time}</p>
          <p className="mt-6 text-lg">📍{venue}</p>
        </div>

        {/* Register Button */}
        {/* Register Button */}
<div className="absolute bottom-[0px] left-[85px] transform -translate-x-1/2">
  <button
  onClick={(e) => {
    e.stopPropagation(); // prevent outer click
    if (form) {
      window.open(form, '_blank', 'noopener,noreferrer');
    }
  }}
  className="relative hover:scale-110 transition-transform duration-300 cursor-pointer block"
>
  <Image src="/Register.svg" alt="Register" width={160} height={60} />
  <span className="absolute inset-0 flex left-[-15px] items-center justify-center font-ransom text-black text-lg">
    REGISTER
  </span>
</button>

</div>

      </div>
    </div>
  );
}
