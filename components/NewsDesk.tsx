'use client';
import AudioButton from './buttons/Audiobutton';
import HeadlineSlider from './slider/HeadlineSlider';

export default function NewsDesk() {
  const headlines = [
    '젠슨 황 "AI 열풍, 배관공·전기공·건설 노동자',
    '미 연준, 기준금리 동결 시사',
    '삼성전자, 차세대 반도체 투자 확대',
    '[속보] ​​​​​​​지하철 1호선 종로3가역서 바퀴 과열 연기…승객 전원 하차',
    '체포 방해 경호처 전 간부 첫 재판‥"정당행위" 주장',
  ];

  return (
    <div className="bg-navy-500 h-101.5 w-89.5 rounded-2xl">
      <p className="text-text-1-w mt-8 ml-6 h-[108px] w-[215px] text-left text-[26px] leading-[36px] font-extrabold">
        오늘의 핵심 뉴스
        <br />
        지금 바로
        <br />
        들어보세요
      </p>

      <AudioButton />

      {/* 👇 여기 */}
      <HeadlineSlider titles={headlines} />
    </div>
  );
}
