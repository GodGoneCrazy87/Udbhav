'use client';

import { motion } from 'framer-motion';

export default function AbstractGeometricSection() {
  return (
    <div className="relative w-full h-screen grid grid-cols-2">
      {/* Abstract */}
      <motion.div
        className="bg-gradient-to-br from-purple-800 to-pink-700 text-white flex items-center justify-center p-8"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Abstract</h2>
          <p className="italic text-lg">Fluid, emotional, undefined</p>
        </div>
      </motion.div>

      {/* Geometric */}
      <motion.div
        className="bg-gray-900 text-white flex items-center justify-center p-8"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Geometric</h2>
          <p className="italic text-lg">Structured, shapes, precision</p>
        </div>
      </motion.div>
    </div>
  );
}
