// app/news/[id]/page.tsx
import NewsDetailClient from '@/components/NewsDetailClient';
import { newsDetailMock } from '@/mocks/newsDetail.mock';

type Props = {
  params: {
    id: string;
  };
};

export default function NewsDetailPage({ params }: Props) {
  return <NewsDetailClient id={params.id} data={newsDetailMock} />;
}
