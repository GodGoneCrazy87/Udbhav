'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const coordinators = [
  { name: 'Vaishnavi', year: '4th Year', filename: 'Vaishnavi.webp' },
  { name: 'Manu', year: '4th Year', filename: 'Manu.webp' },
  { name: 'Rhea', year: '4th Year', filename: 'Riya.webp' },
  { name: 'Aishwarya', year: '3rd Year', filename: 'aishwarya.jpg' },
  { name: 'Goutham', year: '3rd Year', filename: 'Goutham.webp' },
  { name: 'Saniya', year: '3rd Year', filename: 'Saniya.webp' },
];

const coreTeamImages = [
  'team/campaign.webp',
  'team/creativity.webp',
  'team/document.webp',
  'team/ep.png',
  'team/events.webp',
  'team/finance.webp',
  'team/FM.webp',
  'team/hospitality.png',
  'team/hostel.png',
  'team/iclick.png',
  'team/production.webp',
  'team/public.png',
  'team/register.webp',
  'team/results.webp',
  'team/sm.webp',
  'team/sponsor.webp',
  'team/studio.png',
  'team/tshirt.png',
  'team/vm.png',
  'team/web.png',
];

export default function Team() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-center bg-fixed text-white px-4 py-16 sm:py-24"
      style={{ backgroundImage: "url('/eventspeace.webp')" }}
    >
      {/* Headings */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-ransom uppercase text-center mb-2"
      >
        Team
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl sm:text-4xl text-center mb-12 font-fceb"
      >
        Meet the Coordinators
      </motion.h2>

      {/* Coordinator Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coordinators.map((person, index) => {
          const bgImage = person.year === '4th Year' ? '/teambg1.webp' : '/teambg2.webp';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="relative overflow-hidden shadow-lg rounded-xl flex flex-col items-center bg-center bg-no-repeat bg-contain h-[320px] sm:h-[420px] md:h-[500px] pt-4 sm:pt-6"
              style={{ backgroundImage: `url('${bgImage}')` }}
            >
              {/* Coordinator Image */}
              <div className="w-52 h-52 md:w-80 md:h-80 relative overflow-hidden border-4 mt-4 md:mt-8 border-black shadow-xl">
                <Image
                  src={`/${person.filename}`}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <div className="mt-3 text-center">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-ys font-semibold">
                  {person.name}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Core Team Grid */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl text-center mt-24 mb-8 font-fceb"
      >
        Meet Our Core Team
      </motion.h2>

      <div className="flex flex-col items-center gap-6 w-full px-2">
        {coreTeamImages.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[1200px] aspect-[16/9] bg-center bg-cover bg-no-repeat rounded-xl overflow-hidden"
          >
            <div className="w-full h-full relative">
              <Image
                src={`/${img}`}
                alt={img}
                fill
                className="object-contain p-4"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final Web Development Text */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-ransom uppercase text-center "
      >
        WEB DEVELOPMENT
      </motion.h2>
    </div>
  );
}
