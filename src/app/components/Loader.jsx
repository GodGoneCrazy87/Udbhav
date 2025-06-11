'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Loader = ({ onFinish }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setSlideUp(true);
      const finishTimer = setTimeout(() => {
        onFinish(); // trigger parent callback
      }, 900); // Match animation duration

      return () => clearTimeout(finishTimer);
    }, 4800); // Shorten video length if possible

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [onFinish]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-transform duration-1000 ease-in-out will-change-transform pointer-events-none',
        {
          'translate-y-0': !slideUp,
          '-translate-y-full': slideUp,
        }
      )}
    >
      <video
        src={isMobile ? '/loaderm.webm' : '/loader1.webm'}
        autoPlay
        muted
        playsInline
        preload="auto"
        loading="eager"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Loader;
