// app/home/page.jsx

import Navbar from './components/Navbar';
import Hero from '@/app/components/Hero';

const HomeLayout = ({ children }) => (
  <div className="relative bg-black text-white min-h-screen">
    <Navbar />
    {children}
  </div>
);

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
    </HomeLayout>
  );
}
