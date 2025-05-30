'use client';

import Image from 'next/image';

export default function BrochurePage() {
  const totalPages = 24;
  const basePath = "/UDBHAV'25 BROCHURE/UDBHAV'25 BROCHURE-";

  const imageUrls = Array.from({ length: totalPages }, (_, i) => {
    const pageNum = String(i + 1).padStart(2, '0');
    return `${basePath}${pageNum}.png`;
  });

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <div className="flex flex-col items-center">
        {imageUrls.map((src, index) => {
          const isPriority = index < 2;

          return (
            <div key={index} className="w-full max-w-4xl">
              <Image
                src={src}
                alt={`Brochure Page ${index + 1}`}
                width={1080}
                height={1440} // 3:4 aspect ratio
                className="w-full h-auto object-contain"
                priority={isPriority}
                {...(!isPriority && { loading: 'lazy' })}
                unoptimized
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
