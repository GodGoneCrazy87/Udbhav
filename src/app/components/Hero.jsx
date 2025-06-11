"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const fireVideoRef = useRef(null);
  const iceVideoRef = useRef(null);

  const [iceEnded, setIceEnded] = useState(false);
  const [fireEnded, setFireEnded] = useState(false);
  const [showUdbhav, setShowUdbhav] = useState(false);

  const [fireTextVisible, setFireTextVisible] = useState(false);
  const [iceTextVisible, setIceTextVisible] = useState(false);

  const [exploreActive, setExploreActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExplore = () => {
    setExploreActive((prev) => !prev);
  };
const scrollToAbout = () => {
  // Unlock scroll
  document.body.style.overflow = 'auto';

  // Scroll after a brief delay to allow scroll unlock to take effect
  setTimeout(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};
  useEffect(() => {
  const fireVideo = fireVideoRef.current;
  const iceVideo = iceVideoRef.current;
  document.body.style.overflow = 'hidden';

  const fireObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        fireVideo.play();
        setTimeout(() => setFireTextVisible(true), 1500);
      }
    },
    { threshold: 0.5 }
  );

  const iceObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        iceVideo.play();
        setTimeout(() => {
          setIceTextVisible(true);
          setShowUdbhav(true);
        }, 1500);
      }
    },
    { threshold: 0.5 }
  );

  if (fireVideo) fireObserver.observe(fireVideo);
  if (iceVideo) iceObserver.observe(iceVideo);

  return () => {
    if (fireVideo) fireObserver.unobserve(fireVideo);
    if (iceVideo) iceObserver.unobserve(iceVideo);
  };
}, []);


  return (
    <main className="relative w-screen overflow-x-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-bottom scale-[1.02] z-0"
        style={{ backgroundImage: "url('/bg1.png')" }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative z-10 flex min-h-screen items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center text-center mt-[0vh] md:mt-[5vh] w-full">
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Mobile */}
            <div className="flex space-x-6 md:hidden">
              <Image src="/udbh.png" alt="Udbhav Logo" width={70} height={70} className="h-[6.5vh] w-auto object-contain" priority />
              <Image src="/av25.png" alt="AV'25 Logo" width={70} height={70} className="h-[6.5vh] w-auto object-contain" priority />
            </div>
            {/* Desktop */}
            <div className="hidden md:flex space-x-6 items-center">
              <Image src="/udbh.png" alt="Udbhav Logo" width={120} height={120} className="h-[16vh] w-auto object-contain" priority />
              <Image src="/av25.png" alt="AV'25 Logo" width={120} height={120} className="h-[16vh] w-auto object-contain" priority />
            </div>
          </motion.div>

          <motion.h2
            className="mt-10 px-4 text-2xl md:text-5xl uppercase font-thin text-white font-ransom tracking-wide"
            style={{ WebkitTextStroke: "1px black" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Coexistence of Contrasts
          </motion.h2>

          <motion.button
            onClick={scrollToAbout}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group mt-12 relative px-6 py-3 font-bold rounded-full shadow-md overflow-hidden cursor-pointer text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{ backgroundImage: "url('/dayImage.jpg')", opacity: isHovered ? 0 : 1 }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{ backgroundImage: "url('/nightImage.jpg')", opacity: isHovered ? 1 : 0 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent pointer-events-none" />
            <span className="relative z-10 select-none uppercase font-ransom font-thin text-black group-hover:text-white transition-colors duration-300">
              Explore Udbhav
            </span>
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
<section
  id="about"
  className="relative z-20 w-[100vw] h-[95vh] overflow-hidden"
  style={{
    backgroundImage: "url('/icefirereveal.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="block md:hidden absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
  <div className="block md:hidden pointer-events-none absolute bottom-0 left-0 w-full h-[100vh] bg-black opacity-20 z-30" />

  {/* Fire Section */}
  <div className="relative w-full h-[42vh] flex flex-col md:flex-row items-start justify-start px-6 md:px-20 gap-6 md:gap-0 pt-6">
    <motion.video
      ref={fireVideoRef}
      muted
      playsInline
      autoPlay
      className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
        fireEnded ? "opacity-0" : "opacity-60"
      }`}
      src="/FireReveal.mp4"
      onEnded={() => setFireEnded(true)}
    />
    {fireTextVisible && (
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-start justify-start gap-6 w-full"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/msritlogo.png"
          alt="MSRIT Logo"
          width={300}
          height={200}
          className="object-contain hidden md:block"
        />
        <div className="w-full md:basis-[50vw] md:ml-40 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D66937] uppercase font-ransom mb-2">
            About MSRIT
          </h2>
          <p className="text-lg md:text-lg text-white leading-relaxed font-iso font-semibold">
            M. S. Ramaiah Institute of Technology (MSRIT), established in 1962 in Bengaluru, is one of India’s premier engineering institutions. Known for its high academic standards, exceptional faculty, and state-of-the-art infrastructure.
          </p>
        </div>
      </motion.div>
    )}
  </div>

  {/* Ice Section */}
  <div className="relative w-full h-2/3 flex flex-col md:flex-row items-start justify-start px-6 md:px-20 gap-10 pt-6">
    <motion.video
      ref={iceVideoRef}
      muted
      playsInline
      autoPlay
      className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
        iceEnded ? "opacity-0" : "opacity-60"
      }`}
      src="/IceReveal.mp4"
      onEnded={() => setIceEnded(true)}
    />
    {showUdbhav && (
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full gap-8"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-[56vh] text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#67C7E6] uppercase font-ransom mb-4">
            About Udbhav 2025
          </h2>
          <p className="text-lg text-white leading-relaxed font-iso font-semibold mb-4">
            Udbhav is the flagship cultural fest of Ramaiah Institute of Technology (MSRIT), Bengaluru. An exuberant celebration of talent, culture, and creativity, Udbhav brings together students from all over the country for a diverse range of competitions, workshops, and performances across music, dance, theatre, fashion, literature, and fine arts.  
          </p>
        </div>
      </motion.div>
    )}
  </div>
</section>

    </main>
  );
}
