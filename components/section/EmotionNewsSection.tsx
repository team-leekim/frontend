'use client';
import EmotionButton from '../buttons/EmotionButton';
import EmotionContent from '../EmotionContent';
import { curationMock } from '@/mocks/curation.mock';

export default function EmotionNewsSection() {
  return (
    <div>
      <div className="w-[390px]">
        <h3 className="typo-h3 mx-auto mt-6 mb-4 max-w-97.5 px-4">오늘의 행복한 뉴스</h3>
        <div className="no-scrollbar mx-4 flex gap-3 overflow-x-auto whitespace-nowrap">
          <EmotionButton />
          <EmotionButton />
          <EmotionButton />
          <EmotionButton />
          <EmotionButton />
        </div>
        <div className="no-scrollbar mx-4 mt-[26px] mb-4 flex gap-4 overflow-x-auto whitespace-nowrap">
          {curationMock.map((news) => (
            <EmotionContent
              key={news.id}
              imageUrl={news.imageUrl}
              title={news.title}
              editorName={news.editorName}
              publishedAt={news.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
