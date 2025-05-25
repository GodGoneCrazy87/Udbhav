'use client';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const Loader = ({ onFinish }) => {
  const [slideUp, setSlideUp] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true); // Trigger slide-up animation
      // Wait for animation to finish (e.g., 1s) before unmount
      setTimeout(() => {
        setShowLoader(false);
        onFinish();
      }, 1000); // must match animation duration
    }, 5000); // Duration of your loader video

    return () => clearTimeout(timer);
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
        src="/loader1.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-[100vw] object-cover md:h-full"
      />
    </div>
  );
};

export default Loader;
