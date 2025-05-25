'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative w-screen min-h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-no-repeat bg-bottom bg-cover scale-[1.02] min-h-screen"
        style={{ backgroundImage: "url('/bg1.png')" }}
      />

      {/* Animated Text Container */}
      <motion.div
        className="relative z-10 flex h-full w-full items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="flex flex-col items-center text-center 
          mt-[15vh] md:mt-[25vh] w-full"
        >
          {/* Title Images with Animation */}
          <motion.div
            className="flex space-x-4 items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/udbh.png"
              alt="UDBHAV"
              className="h-[12vh] md:h-[16vh] object-contain min-w-[80px]"
            />
            <img
              src="/av25.png"
              alt="AV'25"
              className="h-[12vh] md:h-[16vh] object-contain min-w-[80px]"
            />
          </motion.div>

          {/* Subtitle Image with Animation */}
          <motion.h2
  className="mt-[6vh] px-4 text-3xl md:text-5xl uppercase font-thin text-white font-ransom tracking-wide"
  style={{
    WebkitTextStroke: '1px black',
    color: 'white',
  }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.8 }}
>
  Coexistence of Contrasts
</motion.h2>


        </div>
      </motion.div>
    </main>
  );
}
