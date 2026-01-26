'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface MainViewerProps {
  items: React.ReactNode[];
}

export default function MainViewer({ items }: MainViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full flex-col items-center">
      <Swiper
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-[350px] w-[358px]"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-3 flex gap-2">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
