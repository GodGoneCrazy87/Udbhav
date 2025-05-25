"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Detect page changes
import Navbar from "./components/Navbar";

export default function ClientLayout({ children }) {

  return (
    <>
        
        <>
          <Navbar />
          <main>{children}</main>
        </>
     
    </>
  );
}
