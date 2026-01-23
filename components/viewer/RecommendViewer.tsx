'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface RecommendViewerProps {
  items: React.ReactNode[];
}

export default function RecommendViewer({ items }: RecommendViewerProps) {
  return (
    <div className="mx-auto w-full max-w-[390px] overflow-hidden">
      <Swiper
        slidesPerView={1.45}
        centeredSlides
        spaceBetween={0}
        loop
        watchSlidesProgress
        className="flex justify-center overflow-visible!"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper {
          overflow: visible !important;
        }

        .swiper-wrapper {
          align-items: center;
        }

        .swiper-slide {
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
          transform: scale(0.9);
          opacity: 0.3;
        }

        .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
