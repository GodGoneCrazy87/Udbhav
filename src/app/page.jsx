'use client';

import { motion } from 'framer-motion';
import ChaosOrderSection from '@/components/home/ChaosOrderSection';
import AbstractGeometricSection from '@/components/home/AbstractGeometricSection';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background - Duality */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-black" />
        <div className="w-1/2 bg-white" />
      </div>
       <ChaosOrderSection />
      <AbstractGeometricSection />
      {/* Animated Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-black">
          Duality
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          The Coexistence of Contrasts
        </p>
      </motion.div>
    </main>
  );
}
