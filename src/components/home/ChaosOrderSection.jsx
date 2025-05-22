'use client';

import { motion } from 'framer-motion';

export default function ChaosOrderSection() {
  return (
    <div className="relative w-full h-screen grid grid-cols-2">
      {/* Chaos */}
      <motion.div
        className="bg-red-800 text-white flex items-center justify-center p-8"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Chaos</h2>
          <p className="italic text-lg">Raw, unpredictable, emotional</p>
        </div>
      </motion.div>

      {/* Order */}
      <motion.div
        className="bg-blue-800 text-white flex items-center justify-center p-8"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Order</h2>
          <p className="italic text-lg">Structure, logic, control</p>
        </div>
      </motion.div>
    </div>
  );
}
