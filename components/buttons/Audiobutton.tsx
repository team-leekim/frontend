'use client';

const AudioButton = () => {
  return (
    <div className="mt-4 ml-[23px] box-border flex h-[48px] w-[127px] items-center justify-center gap-2 rounded-full border border-[#DBDBDB] bg-white px-[16px] py-[12px]">
      <img src="/headphones.svg" alt="info" className="h-6 w-6" />
      <p className="typo-btn-1-b text-text-1">뉴스 듣기</p>
    </div>
  );
};

export default AudioButton;
