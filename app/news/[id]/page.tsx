import NewsDetailClient from '@/components/NewsDetailClient';
import { getContentDetail } from '@/api/content';
import { ContentDetailResponse } from '@/types/contentDetail';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;

  let data: ContentDetailResponse | null = null;

  try {
    const res = await getContentDetail(Number(id));
    data = res.data;
  } catch (e) {
    console.error(e);
  }

  if (!data) {
    return <div>뉴스를 불러올 수 없습니다.</div>;
  }

  return <NewsDetailClient data={data} />;
}
