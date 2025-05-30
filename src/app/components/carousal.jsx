'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const imagePaths = Array.from({ length: 29 }, (_, i) => `/Carousel/img${i + 1}.jpg`);

export default function Carousel() {
  return (
    <div className="w-full mx-auto py-8 px-4">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={30}
        allowTouchMove={false}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {imagePaths.concat(imagePaths).map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center transition-transform duration-300 ease-in-out"
          >
            <div className="w-full max-w-[300px] h-[250px] rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={index < 4}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
