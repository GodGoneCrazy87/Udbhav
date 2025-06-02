'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const leftLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
  ];

  const rightLinks = [
    { href: "/tshirt", label: "T-shirt" },
    //{ href: "/about", label: "About" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[5vh] z-50 flex items-center font-ransom text-2xl uppercase w-full">
        {/* Desktop Left Section */}
        <div
          className="relative w-1/2 h-full bg-orange-600 text-white items-center justify-evenly pl-6 overflow-hidden hidden md:flex"
        >
          <div className="absolute top-0 left-0 w-[6vh] h-full bg-orange-600 clip-left" />
          {leftLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="group relative z-10 px-3 transition-transform duration-300"
            >
              <span className="inline-block transform transition-transform duration-300 group-hover:scale-[1.1]">
                {label}
              </span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Center Logo Section */}
        <div
          className="relative z-20 -mx-[8vh] h-[5vh] w-[36vh] items-center justify-center hidden md:flex"
        >
          <div className="clip-center-notch bg-white h-full w-full shadow-md absolute inset-0 z-0" />
          <div className="absolute inset-0 clip-center-notch flex items-center justify-center z-10">
            <Image
              src="/logo.png"
              alt="UDBHAV"
              width={72}
              height={72}
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Right Section */}
        <div
          className="relative w-1/2 h-full bg-blue-900 text-white items-center justify-evenly pr-6 overflow-hidden hidden md:flex"
        >
          <div className="absolute top-0 right-0 w-[6vh] h-full bg-blue-900 clip-right" />
          {rightLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="group relative z-10 px-3 transition-transform duration-300"
            >
              <span className="inline-block transform transition-transform duration-300 group-hover:scale-[1.1]">
                {label}
              </span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex md:hidden items-center justify-between w-full px-4 bg-black text-white h-[5vh]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="UDBHAV"
              width={40}
              height={40}
              className="object-contain cursor-pointer"
            />
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="space-y-1.5 focus:outline-none"
          >
            <span
              className={`block h-0.5 w-8 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black text-white font-ransom uppercase flex flex-col items-center justify-center space-y-12 py-0 px-4 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ fontSize: "4rem" }}
      >
        {allLinks.map(({ href, label }, index) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline w-full text-center transform transition-all duration-[900ms] ease-out ${
              isOpen ? "opacity-100 translate-y-0 scale-[1.1]" : "opacity-0 translate-y-12 scale-100"
            }`}
            onClick={() => setIsOpen(false)}
            style={{
              transitionDelay: `${index * 180}ms`,
              transformOrigin: "center",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
