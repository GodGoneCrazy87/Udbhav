'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const coordinators = [
  { name: 'Vaishnavi', year: '4th Year', filename: 'Vaishnavi.jpg' },
  { name: 'Manu', year: '4th Year', filename: 'Manu.jpg' },
  { name: 'Riya', year: '4th Year', filename: 'Riya.jpg' },
  { name: 'Aishwarya', year: '3rd Year', filename: 'aishwarya.jpg' },
  { name: 'Goutham', year: '3rd Year', filename: 'Goutham.jpg' },
  { name: 'Saniya', year: '3rd Year', filename: 'Saniya.jpg' },
];

export default function Team() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center text-white px-4 py-24"
      style={{ backgroundImage: "url('/eventspeace.png')" }}
    >
      {/* Headings */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-ransom uppercase text-center mb-2"
      >
        Team
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl text-center mb-12 font-fceb"
      >
        Meet the Coordinators
      </motion.h2>

      {/* Coordinator Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coordinators.map((person, index) => {
          const bgImage = person.year === '4th Year' ? '/teambg1.png' : '/teambg2.png';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="
                relative overflow-hidden shadow-lg rounded-xl flex flex-col items-center 
                bg-center bg-no-repeat bg-contain
                h-[300px] sm:h-[420px] md:h-[500px]
                pt-4 sm:pt-6
              "
              style={{ backgroundImage: `url('${bgImage}')` }}
            >
              {/* Coordinator Image */}
              <div className="w-40 h-40 sm:w-80 sm:h-80 relative overflow-hidden border-4 mt-9 border-black shadow-xl">
                <Image
                  src={`/${person.filename}`}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <div className="sm:mt-3 text-center">
                <h3 className="text-white text-2xl sm:text-3xl font-ys font-semibold">
                  {person.name}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
