'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/50 fixed top-0 z-50">
      <div className="text-xl font-bold">Duality</div>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/tshirt">T-Shirt</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}
