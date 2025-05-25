'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';

const HomeLayout = ({ children }) => (
  <div className="relative bg-black text-white min-h-screen">
    <Navbar />
    {children}
  </div>
);

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      <HomeLayout>
        <Hero />
      </HomeLayout>

      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
    </>
  );
}
