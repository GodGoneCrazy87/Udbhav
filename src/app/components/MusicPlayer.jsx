'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.muted = true;

      const play = () => {
        audio.play().catch(err => console.warn('Autoplay failed:', err));
        window.removeEventListener('click', play);
      };

      window.addEventListener('click', play); // Start on user interaction
    }
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      const newMuted = !audio.muted;
      audio.muted = newMuted;
      setIsMuted(newMuted);
      if (!newMuted) {
        audio.play().catch(err => console.warn('Play failed:', err));
      }
    }
  };

  return (
    <div className="fixed top-20 left-4 z-50">
      <audio ref={audioRef} src="/Greenpath.mp3" loop autoPlay />
      <button
        onClick={toggleMute}
        className="flex items-center justify-center bg-black text-white hover:bg-white hover:text-black p-1 rounded-full shadow-md transition-colors duration-300 ease-in-out"
        style={{ width: '32px', height: '32px' }}
      >
        <div className="transition-transform duration-200 ease-out">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </div>
      </button>
    </div>
  );
};

export default MusicPlayer;
