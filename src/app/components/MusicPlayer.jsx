'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';



const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.muted = true;
      const play = () => {
        audioRef.current.play().catch(err => console.warn('Autoplay failed:', err));
        window.removeEventListener('click', play);
      };
      window.addEventListener('click', play); // Start on user interaction
    }
  }, []);

const toggleMute = () => {
  if (audioRef.current) {
    const newMuted = !audioRef.current.muted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
    if (!newMuted) {
      // If unmuting, ensure audio plays
      audioRef.current.play().catch(err => console.warn('Play failed:', err));
    }
  }
};


  return (
    <div className="fixed top-20 left-4 z-50">
  <audio ref={audioRef} src="/Greenpath.mp3" loop autoPlay />
  <button
  className="flex items-center justify-center bg-black text-white hover:bg-white hover:text-black p-1 rounded-full shadow-md transition-colors duration-300 ease-in-out"
  style={{ width: '32px', height: '32px' }}
>
  <div
    className={`transition-transform duration-200 ease-out ${isMuted ? '' : 'pulsing-glow'} group-hover:scale-110`}
    style={{ width: '20px', height: '20px' }}
  >
    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
  </div>
</button>

</div>

  );
};

export default MusicPlayer;
