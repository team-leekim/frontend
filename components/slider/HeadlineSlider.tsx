'use client';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

interface HeadlineSliderProps {
  titles: string[];
}

export default function HeadlineSlider({ titles }: HeadlineSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Swiper 인스턴스가 생성되면 autoplay 강제 시작
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  }, []);
  return (
    <div className="bg-navy-200 mt-6 ml-4 flex h-[147px] w-[326px] justify-center overflow-hidden rounded-lg p-2">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        direction="vertical"
        slidesPerView={3}
        centeredSlides
        loop
        allowTouchMove={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Autoplay]}
        className="h-full"
        speed={800}
        spaceBetween={10}
      >
        {titles.map((title, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`flex w-full items-center justify-center rounded-lg ${
                  isActive
                    ? 'shadow-card border-navy-100 h-[48px] w-[300px] border bg-white px-3 py-3 text-[16px] opacity-100'
                    : 'h-[38.4px] bg-transparent px-1 py-[9.6px] text-[12.8px] opacity-40'
                }`}
              >
                <p className="typo-body-2-m w-[278px] truncate text-center whitespace-nowrap">
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
