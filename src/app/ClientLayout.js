'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <MusicPlayer /> {/* ✅ Now globally available and fixed */}
      <main>{children}</main>
    </>
  );
}
