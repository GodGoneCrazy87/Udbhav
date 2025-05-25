import Image from 'next/image';

export default function EventsCard({ eventname, event, day, time, venue, category, poster }) {
  // Normalize
  const isOnline = venue?.toLowerCase() === 'online';
  const normalizedCategory = category?.toUpperCase();

  const getBackgroundImage = () => {
    if (isOnline) return '/eventcardbg4.svg';
    if (normalizedCategory === 'INTRA') return '/eventcardbg2.svg';
    if (normalizedCategory === 'INTER') return '/eventcardbg3.svg';
    return '/eventcardbg1.svg'; // fallback
  };

  const backgroundImage = getBackgroundImage();

  return (
    <div className="relative w-[360px] h-[640px] rounded-xl overflow-hidden transition duration-300">
      
      {/* Dynamic Background Image */}
      <Image
        src={backgroundImage}
        alt="Card Background"
        fill
        className="object-cover rounded-xl transform scale-[0.75] origin-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10">
        <div className="space-y-1 mt-2 font-castleton">

          {/* Poster at the Top */}
          <div className="w-full h-full left-[13.5vw] top-[8.5vh] md:left-[3.6vw] md:top-[7vh] relative rounded-lg overflow-hidden">
            <Image
              src={ '/postereg1.png'}
              alt="Poster"
              width={215}
              height={60}
              className="object-cover"
            />
          </div>

          {/* Event Name & Details */}
<div className="absolute top-[37vh] md:top-[31vh] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
  <div className="max-w-[300px] text-center">
  <h3 className="text-xl capitalize text-white whitespace-nowrap overflow-hidden text-ellipsis">
    {eventname}
  </h3>
</div>

            <div className="mt-2 space-y-1 text-lg text-white">
              <p className="relative top-[1vh] capitalize">{event}</p>
              <p className="relative top-[2.5vh]">🕒 {time}</p>
              <p className="relative top-[5vh] md:top-[4vh]">📍{venue}</p>
            </div>
          </div>

          {/* Category Badge (INTRA/INTER) */}
          <div className="absolute top-[10vh] left-[11vw] md:top-[8vh] md:left-[3.1vw] z-20">
            <Image
              src={normalizedCategory === 'INTRA' ? '/INTRA.svg' : '/INTER.svg'}
              alt={category}
              width={12}
              height={32}
              className="object-contain"
            />
          </div>

        </div>

        {/* Register Button */}
        <div className="flex justify-around items-center top-[-7.4vh] md:top-[-6.4vh] relative right-[6.4vh] md:right-[5.3vh]">
          <div className="relative hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Image
              src="/Register.svg"
              alt="Register"
              width={160}
              height={60}
            />
            <span className="absolute md:right-[2vh] inset-0 flex items-center justify-center font-ransom text-black text-lg">
              REGISTER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
