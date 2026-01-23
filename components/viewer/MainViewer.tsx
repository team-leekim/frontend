'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface MainViewerProps {
  items: React.ReactNode[];
}

export default function MainViewer({ items }: MainViewerProps) {
  return (
    <div className="h-full w-full">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-full w-full"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
