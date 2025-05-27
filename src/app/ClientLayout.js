"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Detect page changes
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";

export default function ClientLayout({ children }) {

  return (
    <>
        
        <>
          <Navbar />
          <MusicPlayer />
          <main>{children}</main>
        </>
     
    </>
  );
}
