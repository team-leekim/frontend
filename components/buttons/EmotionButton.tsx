'use client';
//활성화 됐을때랑 안 됐을 때랑 구분해서 디자인 확정되면 수정하기
const EmotionButton = () => {
  return (
    <div className="bg-black-500 box-border flex h-[40px] items-center rounded-full p-4">
      <p className="typo-btn-1-b text-text-1-w">행복해요</p>
    </div>
  );
};

export default EmotionButton;
