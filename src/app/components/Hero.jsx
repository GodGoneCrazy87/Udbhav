"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const fireVideoRef = useRef(null);
  const iceVideoRef = useRef(null);
  const [iceEnded, setIceEnded] = useState(false);
  const [showUdbhav, setShowUdbhav] = useState(false);
  const [fireEnded, setFireEnded] = useState(false);

  const [fireTextVisible, setFireTextVisible] = useState(false);
  const [iceTextVisible, setIceTextVisible] = useState(false);

  useEffect(() => {
    const fireVideo = fireVideoRef.current;
    const iceVideo = iceVideoRef.current;

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
        <div className="flex flex-col items-center text-center mt-[15vh] md:mt-[5vh] w-full">
          <motion.div
  className="flex items-center justify-center space-x-6"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  {/* On mobile, show both logos same size */}
  <div className="flex space-x-6 md:hidden">
    <Image
      src="/udbh.png"
      alt="Udbhav Logo"
      width={70}
      height={70}
      className="h-[7vh] w-auto object-contain"
      priority
    />
    <Image
      src="/av25.png"
      alt="AV'25 Logo"
      width={70}
      height={70}
      className="h-[7vh] w-auto object-contain"
      priority
    />
  </div>

  {/* On desktop, show Udbhav logo bigger and AV25 bigger side by side */}
  <div className="hidden md:flex space-x-6 items-center">
    <Image
      src="/udbh.png"
      alt="Udbhav Logo"
      width={120}
      height={120}
      className="h-[16vh] w-auto object-contain"
      priority
    />
    <Image
      src="/av25.png"
      alt="AV'25 Logo"
      width={120}
      height={120}
      className="h-[16vh] w-auto object-contain"
      priority
    />
  </div>
</motion.div>

          <motion.h2
            className="mt-10 px-4 text-3xl md:text-5xl uppercase font-thin text-white font-ransom tracking-wide"
            style={{ WebkitTextStroke: "1px black" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Coexistence of Contrasts
          </motion.h2>

          <motion.button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-12 px-6 py-3 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Udbhav
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
<section
  id="about"
  className="relative z-20 w-screen h-[100vh] overflow-hidden"
  style={{
    backgroundImage: "url('/icefirereveal.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Mobile-only overlay with 60% black transparent */}
  <div className="block md:hidden absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
  {/* Bottom overlay for mobile only */}
  <div className="block md:hidden pointer-events-none absolute bottom-0 left-0 w-full h-[100vh] bg-black opacity-20 z-30" />

        {/* Fire Section - About MSRIT (1/3 height) */}
        <div className="relative w-full h-[42vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-6 md:gap-0">
    <motion.video
      ref={fireVideoRef}
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
        iceEnded ? "opacity-0" : "opacity-60"
      }`}
      src="/FireReveal.mp4"
      onEnded={() => setIceEnded(true)}
    />
          {fireTextVisible && (
            <motion.div
              className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/msritlogo.png"
                alt="MSRIT Logo"
                width={200}
                height={200}
                className="object-contain"
              />
              <div className="basis-2/3 text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#D66937] uppercase font-ransom mb-2">
                  About MSRIT
                </h2>
                <p className="text-sm md:text-lg text-white leading-relaxed font-iso font-semibold">
                  M. S. Ramaiah Institute of Technology (MSRIT), established in
                  1962 in Bengaluru, is one of India's premier engineering
                  institutions. Affiliated with VTU and accredited by NAAC with
                  an A+ grade, MSRIT offers a wide range of UG, PG, and Ph.D.
                  programs. With strong industry partnerships and a legacy of
                  innovation, MSRIT fosters excellence in education, research,
                  and student-driven initiatives like Udbhav.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Udbhav Section (2/3 height) */}
        
  {/* Ice/Udbhav Section */}
  <div className="relative w-full h-2/3 flex flex-col md:flex-row items-center justify-center px-6 md:px-0 gap-10 md:gap-0">
    <motion.video
      ref={iceVideoRef}
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
        iceEnded ? "opacity-0" : "opacity-60"
      }`}
      src="/IceReveal.mp4"
      onEnded={() => setIceEnded(true)}
    />

          {showUdbhav && (
            <motion.div
              className="relative z-10 flex flex-col md:flex-row items-center justify-between px-0 md:px-20 w-full gap-8 md:gap-10"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Text on the left */}
              <div className="md:w-[56vh] text-left px-2 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-[#67C7E6] uppercase font-ransom mb-4">
                  About Udbhav 2025
                </h2>
                <p className="text-base md:text-2xl text-white leading-relaxed font-iso font-semibold mb-4">
                  Udbhav is the flagship cultural fest of Ramaiah Institute of Technology (MSRIT), Bengaluru, and one of South India’s most anticipated student festivals.
                </p>
                <p className="text-sm md:text-lg text-white leading-relaxed font-iso font-semibold mb-2">
                  With 30+ cultural events from music, dance, drama, fashion to literary arts, Udbhav draws participants from 40+ colleges.
                </p>
                <p className="text-sm md:text-lg text-white leading-relaxed font-iso font-semibold mb-2">
                  Theme 2025: <em>"Duality – The Coexistence of Contrasts"</em>.
                </p>
                <p className="text-sm md:text-lg text-white leading-relaxed font-iso font-semibold">
                  Udbhav celebrates diversity, creativity, and student leadership.
                </p>
              </div>

              {/* Logo on the right - hidden on mobile */}
              <div className="md:w-[58vh] flex justify-center hidden md:flex">
                <Image
                  src="/logo.png"
                  alt="Udbhav Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
