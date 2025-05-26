"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const msritInfo = {
  title: "About MSRIT",
  description:
    "M. S. Ramaiah Institute of Technology (MSRIT), established in 1962 in Bengaluru, is one of India's premier engineering institutions. Affiliated with VTU and accredited by NAAC with an A+ grade, MSRIT offers a wide range of UG, PG, and Ph.D. programs. With strong industry partnerships and a legacy of innovation, MSRIT fosters excellence in education, research, and student-driven initiatives like Udbhav.",
};

const aboutInfo = {
  title: "About Udbhav 2025",
  intro:
    "Udbhav is the flagship cultural fest of Ramaiah Institute of Technology (MSRIT), Bengaluru, and stands as one of South India’s most anticipated student festivals. Rooted in MSRIT’s belief in holistic student development, Udbhav is entirely conceptualized and executed by its students — combining creativity, coordination, and leadership.",
  highlights:
    "With over 30+ cultural events spanning music, dance, drama, fashion, literary arts, and fine arts, Udbhav brings together talent from MSRIT (intra-college) and 40+ colleges (inter-college) across the region.",
  theme:
    'Udbhav 2025 explores the theme "Duality – The Coexistence of Contrasts," showcasing how tradition and innovation, emotion and intellect, can harmoniously coexist through curated events, fusion art, and paired performances.',
  closing:
    "A celebration of expression, diversity, and youth culture — Udbhav reflects MSRIT’s vibrant spirit and continues to raise the bar with every edition.",
};

export default function About() {
  return (
    <div className="bg-black text-white px-6 md:px-20 pt-32 pb-20 space-y-40">
      
      {/* Section 1: MSRIT Info */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="basis-1/2 flex justify-center">
          <Image
            src="/msritlogo.png"
            alt="MSRIT Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="basis-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#D66937] mb-4 font-fceb">{msritInfo.title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed font-semibold">
            {msritInfo.description}
          </p>
        </div>
      </motion.div>

      {/* Section 2: Udbhav Info */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="basis-1/2 flex justify-center">
          <Image
            src="/logo.png" // Replace with actual image path
            alt="Udbhav Image"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="basis-1/2 text-left max-w-2xl">
          <h2 className="text-4xl font-bold text-[#D66937] mb-6 font-fceb">{aboutInfo.title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed font-semibold mb-4">{aboutInfo.intro}</p>
          <p className="text-lg text-gray-300 leading-relaxed font-semibold mb-4">{aboutInfo.highlights}</p>
          <p className="text-lg text-gray-300 leading-relaxed font-semibold mb-4">{aboutInfo.theme}</p>
          <p className="text-lg text-gray-300 leading-relaxed font-semibold">{aboutInfo.closing}</p>
        </div>
      </motion.div>

      {/* Section 3: Coordinators */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-[#D66937] mb-6 font-fceb">Meet the Coordinators</h2>
        <p className="text-lg text-gray-300 font-semibold">
          Meet the core team driving Udbhav 2025 — the visionaries, creators, and coordinators who bring it all to life.
        </p>
      </motion.div>
    </div>
  );
}
