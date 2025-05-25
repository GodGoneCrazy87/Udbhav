"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Section 1: Chakra Overview */}
      <section className="min-h-screen px-4 md:px-16 py-20 mt-[5vh] md:mt-[0vh] flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[5vh] md:text-[6vh] font-bold font-fceb mb-6 leading-tight">
            <span className="text-[#D66937]">The Seven Chakras:</span>
            <br />
            <span className="text-white">Energy Centers of the Human Body</span>
          </h2>
          <p className="text-[2.2vh] text-gray-300 leading-relaxed font-extrabold">
            Chakras are spiritual energy centers aligned along the spine. Each chakra governs
            different physical, emotional, and spiritual aspects of our being.
            <br />
            A balanced chakra system supports holistic health, emotional stability, and inner harmony.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="md:w-2/5 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/chakra.jpg"
            alt="Chakra Illustration"
            className="max-w-full h-auto rounded-3xl shadow-xl"
          />
        </motion.div>
      </section>

{/* Section 2: Chakra Details */}
<section className="px-4 md:px-16 py-20 space-y-16">
  <motion.h2
    className="text-[4vh] md:text-[5vh] font-bold text-center text-white font-fceb"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    Chakra Insights and Energetic Manifestations
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {chakraData.map((chakra, index) => (
      <motion.div
        key={index}
        className="group rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-800 bg-[#13151D] transition duration-300 cursor-pointer"
        style={{ transition: '0.3s' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ boxShadow: `0 0 20px ${chakra.color}` }}
      >
        <h3 className="text-[2.5vh] font-extrabold font-fceb text-white mb-4">
          Chakra {chakra.id}:{' '}
          <span className="relative inline-block text-white">
            <span style={{ color: chakra.color }}>{chakra.name}</span>
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#D66937] origin-left transition-all duration-500 group-hover:w-full"></span>
          </span>
        </h3>

        <div className="text-[2vh] text-white font-extrabold space-y-3">
          <div><strong className="text-cyan-400">Theme:</strong> {chakra.theme}</div>
          <div><strong className="text-cyan-400">Keywords:</strong> {chakra.keywords.join(", ")}</div>
          <div><strong className="text-cyan-400">Physical Aspects:</strong> {chakra.physicalAspects}</div>
          <div><strong className="text-cyan-400">Psychological Aspects:</strong> {chakra.psychologicalAspects}</div>
          <div><strong className="text-cyan-400">Functional Manifestations:</strong> {chakra.functions}</div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  );
}

const chakraData = [
  {
    id: 1,
    name: "Muladhara (Root)",
    color: "#FF0000",
    theme: "Stability, vitality, grounding",
    keywords: ["vital force", "power", "stamina"],
    physicalAspects: "Adrenal gland, skeleton, backbone, spinal cord, kidney, rectum",
    psychologicalAspects: "Safety, prudence, patience, vigilance, selfishness, self-defense, struggle",
    functions: "Movement functions, endurance, vital capacity, inner strength, love of living via body fitness",
  },
  {
    id: 2,
    name: "Svadhisthana (Sacral)",
    color: "#FF7F00",
    theme: "Creativity, desire, adaptability",
    keywords: ["attractiveness", "material creativity"],
    physicalAspects: "Digestive apparatus, bowels, urogenital system",
    psychologicalAspects: "Passion, self-appraisal, fear, authority, aggressiveness, contempt, egoism, thrift",
    functions: "Sexual power, will of destruction, high sensitivity of taste",
  },
  {
    id: 3,
    name: "Manipura (Solar Plexus)",
    color: "#FFFF00",
    theme: "Power, confidence, willpower",
    keywords: ["will", "persistence", "resolution"],
    physicalAspects: "Stomach, pancreas, excretory glands, liver, solar plexus",
    psychologicalAspects: "Self-expression, self-affirmation, courage, emotionality, enthusiasm, guile, fear",
    functions: "Coordination of movements, self-body perception, drive to achieve self-satisfaction",
  },
  {
    id: 4,
    name: "Anahata (Heart)",
    color: "#00FF00",
    theme: "Love, compassion, harmony",
    keywords: ["love", "kindness", "compassion"],
    physicalAspects: "Cardiovascular system, blood circulation, lungs, thyroid gland, mammary glands",
    psychologicalAspects: "Obligation, responsibility, empathy, love for others, indecision",
    functions: "Love to self and others, tactile sensitivity, capability to obtain the desirable",
  },
  {
    id: 5,
    name: "Vishuddha (Throat)",
    color: "#ADD8E6",
    theme: "Expression, truth, clarity",
    keywords: ["creativity", "harmony", "self-actualization"],
    physicalAspects: "Spinal cord, throat, neck, esophagus, heart, lungs",
    psychologicalAspects: "Emotion, inspiration, sociability, spiritual activity",
    functions: "Breathing, sound, swallowing, represents creativity of all kinds",
  },
  {
    id: 6,
    name: "Ajna (Third Eye)",
    color: "#0000FF",
    theme: "Insight, wisdom, intuition",
    keywords: ["wisdom", "will"],
    physicalAspects: "Brain, hypophysis, hypothalamus, head, nervous system",
    psychologicalAspects: "Reason, intellect, logic, empathy, imagination, directivity",
    functions: "Creative imagination, responsibility, understanding concepts, clairvoyance",
  },
  {
    id: 7,
    name: "Sahasrara (Crown)",
    color: "#FF00FF",
    theme: "Enlightenment, unity, transcendence",
    keywords: ["cosmic perception", "super consciousness", "unity"],
    physicalAspects: "Brain, pineal gland, skin, hormone balance",
    psychologicalAspects: "Spirituality, self-actualization, unselfishness, integrity",
    functions: "Abstract/philosophical thinking, super-consciousness, transforms thought into energy",
  },
];
