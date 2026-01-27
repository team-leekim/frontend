import { formatPublishedAt } from '@/utils/time';
import MainViewer from './viewer/MainViewer';

interface WebtoonImage {
  order: number;
  imageUrl: string;
}

interface Editor {
  id: number;
  name: string;
  imageUrl: string;
}

interface WebtoonItemProps {
  editor: Editor;
  title: string;
  publishedAt: string;
  images: WebtoonImage[];
}

export default function WebtoonItem({ editor, title, publishedAt, images }: WebtoonItemProps) {
  return (
    <article className="flex flex-col gap-3">
      {/* editor info */}
      <div className="flex items-center gap-3">
        <img
          src={editor.imageUrl}
          alt={editor.name}
          className="h-[48px] w-[48px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="typo-h4 text-sm text-gray-700">{editor.name}</span>
          <span className="typo-body-4-r text-[#757575]">{formatPublishedAt(publishedAt)}</span>
        </div>
      </div>

      <section className="w-full overflow-hidden">
        <MainViewer
          items={images
            .sort((a, b) => a.order - b.order)
            .map((img) => (
              <img
                key={img.order}
                src={img.imageUrl}
                alt={`webtoon-${img.order}`}
                className="h-[358px] w-[358px] rounded-2xl object-cover"
              />
            ))}
        />
      </section>
      {/* title */}
      <h2 className="text-black-900 typo-body-1-m">{title}</h2>
    </article>
  );
}
