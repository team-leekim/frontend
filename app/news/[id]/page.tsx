// app/news/[id]/page.tsx
import MainViewer from '@/components/viewer/MainViewer';
import { newsDetailMock } from '@/mocks/newsDetail.mock';

const formatDateTime = (value: string) => {
  const [date, time] = value.split(' ');
  const formattedDate = date.replace(/-/g, '.');
  return `${formattedDate}. ${time}`;
};

type Props = {
  params: {
    id: string;
  };
};

export default function NewsDetailPage({ params }: Props) {
  const data = newsDetailMock; // 나중에 fetch로 교체

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-[390px] p-4">
        {/* Webtoon */}
        <section className="w-full">
          <MainViewer
            items={data.content.images.map((img) => (
              <img
                key={img.order}
                src={img.imageUrl}
                alt={`content-image-${img.order}`}
                className="h-[358px] w-[358px] rounded-2xl object-cover"
              />
            ))}
          />
        </section>

        {/* Emotion */}
        <section>
          <p className="text-base">{data.userReaction ?? '아직 감정 표현 없음'}</p>
        </section>

        {/* Title, Editor */}
        <header className="space-y-2">
          <h1 className="typo-h2">{data.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img
              src={data.editor.imageUrl}
              alt={data.editor.name}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-text-1 typo-subtitle-1 flex items-center">
              {data.editor.name}
            </span>
            <span> {formatDateTime(data.publishedAt)}</span>
          </div>
        </header>

        {/* Summary */}
        <section className="bg-navy-0">
          <h2 className="text-text-1 typo-subtitle-1 rounded-sm p-4">
            💡 바쁜 당신을 위한 팩트체크! AI 3줄 핵심 브리핑
          </h2>
          <ul className="">
            {data.summary.map((s, i) => (
              <li key={i} className="typo-body-4-r">
                • {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Body */}
        <article className="text-base whitespace-pre-line">{data.body}</article>

        {/* Editor Info */}
        <section className="space-y-2 rounded-lg border p-4">
          <img
            src={data.editor.imageUrl}
            alt={data.editor.name}
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-text-1 flex items-center text-[14px] leading-[17px] font-bold">
            {data.editor.name}
          </span>
          <p className="text-sm text-gray-600">{data.editor.description}</p>
        </section>

        {/* Reaction Stats */}
        <section>
          <h2 className="mb-2 text-sm font-semibold text-gray-700">감정 통계</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(data.reactionStats).map(([key, value]) => (
              <li key={key} className="flex justify-between rounded bg-gray-100 px-3 py-1">
                <span>{key}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Origin Articles */}
        <section>
          <h2 className="mb-2 text-sm font-semibold text-gray-700">원본 기사</h2>
          <ul className="space-y-2">
            {data.originArticles.map((article, i) => (
              <li key={i}>
                <a
                  href={article.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {article.title}
                </a>
                <p className="text-xs text-gray-500">{formatDateTime(article.publishedAt)}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
