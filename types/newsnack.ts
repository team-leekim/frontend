export interface NewsSnackScript {
  startTime: number;
  endTime: number;
  title: string;
}

export interface NewsSnackArticle {
  id: number;
  title: string;
  publishedAt: string;
}

export interface TodayNewsSnackResponse {
  audioUrl: string;
  script: NewsSnackScript[];
  articles: (NewsSnackArticle & {
    imageUrl: string;
  })[];
}
