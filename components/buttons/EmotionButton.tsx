'use client';

interface EmotionButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const EmotionButton = ({ label, active, onClick }: EmotionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-[40px] items-center rounded-full px-4 ${
        active ? 'bg-black-900 typo-btn-1-b text-white' : 'bg-black-0 text-black-400 typo-btn-1-r'
      }`}
    >
      <p>{label}</p>
    </button>
  );
};

export default EmotionButton;
