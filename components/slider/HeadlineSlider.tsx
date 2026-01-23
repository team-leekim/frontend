'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface HeadlineSliderProps {
  titles: string[];
}

export default function HeadlineSlider({ titles }: HeadlineSliderProps) {
  return (
    <div className="bg-navy-200 mt-6 ml-4 h-[147px] w-[326px] overflow-hidden rounded-lg p-2">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        centeredSlides
        loop
        loopAdditionalSlides={6}
        initialSlide={0}
        allowTouchMove={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="h-full"
      >
        {titles.map((title, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`border-navy-100 flex w-full items-center justify-center rounded-lg border ${
                  isActive
                    ? 'shadow-card h-[48px] border bg-white py-3 text-[16px] opacity-100'
                    : 'h-[38.4px] bg-transparent py-[9.6px] text-[12.8px] opacity-40'
                }`}
              >
                <p className="typo-body-2-m w-[300px] truncate text-center whitespace-nowrap">
                  {title}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
