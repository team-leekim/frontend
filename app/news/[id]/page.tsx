// app/news/[id]/page.tsx
import NewsDetailClient from '@/components/NewsDetailClient';
import { newsDetailMock } from '@/mocks/newsDetail.mock';

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  return <NewsDetailClient id={params.id} data={newsDetailMock} />;
}
