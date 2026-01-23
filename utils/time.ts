export function formatPublishedAt(publishedAt: string): string {
  const publishedDate = new Date(publishedAt);
  const now = new Date();

  const diffMs = now.getTime() - publishedDate.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);

  // 24시간 이상이면 날짜로
  if (diffHours >= 24) {
    const year = publishedDate.getFullYear();
    const month = String(publishedDate.getMonth() + 1).padStart(2, '0');
    const day = String(publishedDate.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  // 1시간 이상
  if (diffHours >= 1) {
    return `${diffHours}시간 전`;
  }

  // 1시간 미만
  return `${Math.max(diffMinutes, 1)}분 전`;
}
