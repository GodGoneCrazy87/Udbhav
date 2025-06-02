'use client';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const Loader = ({ onFinish }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Detect screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setSlideUp(true);
      setTimeout(() => {
        setShowLoader(false);
        onFinish();
      }, 1000); // Match animation duration
    }, 5000); // Match video length

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [onFinish]);

  if (!showLoader) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-1000',
        {
          'translate-y-0': !slideUp,
          '-translate-y-full': slideUp,
        }
      )}
    >
      <video
        ref={videoRef}
        src={isMobile ? '/loaderm.mp4' : '/loader1.mp4'}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Loader;
