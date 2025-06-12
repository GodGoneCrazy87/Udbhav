'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Spline = dynamic(() =>
  import('@splinetool/react-spline').then((mod) => mod.Spline),
  { ssr: false }
);

export default function TshirtPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set mobile flag for responsive Spline scaling
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video (only visible on non-mobile) */}
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/life.webm" type="video/webm" />
        </video>
      )}

      {/* Background Color for mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-black z-0" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-screen pt-4 sm:pt-0">
        {/* Mobile Heading */}
        <h1 className="md:hidden text-white font-ransom text-3xl mt-20 mb-2 text-center">
          TSHIRT
        </h1>

        {/* Spline Viewer */}
        <div
          className={`w-full h-full transition-transform duration-300 ${
            isMobile ? 'scale-[0.7]' : 'scale-[1.25]'
          } origin-center -mt-6 sm:mt-0`}
        >
          <Spline scene="https://prod.spline.design/To6dd7vMnlXwhol0/scene.splinecode" />
        </div>

        {/* CTA Button */}
        <div className="absolute inset-0 flex items-center justify-center mt-[42vh] pointer-events-none">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdlVWGr2QXiQINzx7lDttearfMlF5Jkri1wPrEfpAkGvdEANw/viewform"
            target="_blank"
            className="pointer-events-auto"
          >
            <button className="px-6 py-3 sm:px-10 sm:py-5 text-base sm:text-2xl border border-black hover:border-white bg-white text-black font-ys uppercase rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
