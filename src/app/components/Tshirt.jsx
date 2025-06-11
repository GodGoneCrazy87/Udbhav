'use client';

import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function TshirtPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/life.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-start pt-4 sm:pt-0">
        {/* Mobile-only Heading (moved outside -mt) */}
        <h1 className="block md:hidden text-center text-white font-ransom text-3xl mt-6 mb-2 z-10">
          TSHIRT
        </h1>

        {/* Spline Scene */}
        <div className="w-full h-full scale-[0.7] md:scale-[1.25] origin-center sm:mt-0 -mt-6">
          <Spline scene="https://prod.spline.design/To6dd7vMnlXwhol0/scene.splinecode" />
        </div>

        {/* Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center mt-[45vh] pointer-events-none">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdlVWGr2QXiQINzx7lDttearfMlF5Jkri1wPrEfpAkGvdEANw/viewform"
            target="_blank"
            className="pointer-events-auto"
          >
            <button className="px-6 py-3 text-base sm:px-10 sm:py-5 sm:text-2xl border border-black hover:border-white bg-white text-black font-ys uppercase rounded-md transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
