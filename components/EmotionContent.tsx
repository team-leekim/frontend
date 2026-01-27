'use client';
import { formatPublishedAt } from '@/utils/time';

interface EmotionContentProps {
  title: string;
  imageUrl: string;
  editorName: string;
  publishedAt: string;
}

export default function EmotionContent({
  title,
  editorName,
  imageUrl,
  publishedAt,
}: EmotionContentProps) {
  return (
    <div className="flex h-[262px] w-[230px]">
      <div className="w-[50px]"></div>
      <div className="flex w-[180px] flex-col gap-2">
        <img src={imageUrl} className="h-[180px] w-[180px] rounded-lg" />
        <h4 className="typo-body-2-m line-clamp-2 w-[180px] break-words whitespace-normal">
          {title}
        </h4>
        <div className="typo-body-4-r text-navy-300 flex">
          <p>{editorName}</p>
          <span className="mx-1">·</span>
          <span>{formatPublishedAt(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
}
