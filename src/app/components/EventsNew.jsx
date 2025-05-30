import ParallaxBG from '@/components/ParallaxBG';

export default function AboutPage() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0">
        <ParallaxBG />
      </div>

      {/* Your actual page content */}
      <div className="relative z-10 min-h-screen p-10 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          This is a test page with a beautiful parallax background.
        </p>
        {/* ...more content */}
      </div>
    </div>
  );
}
