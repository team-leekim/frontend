// mocks/emotionNews.mock.ts

export type EmotionType = 'HAPPY' | 'SURPRISED' | 'EMPATHY' | 'SAD' | 'ANGRY';

export interface EmotionNewsItem {
  emotionType: EmotionType;
  article: {
    id: number;
    title: string;
    thumbnailUrl: string;
    publishedAt: string;
    editorName: string;
    targetReactionCount: number;
  };
}

export const emotionNewsMock: EmotionNewsItem[] = [
  {
    emotionType: 'HAPPY',
    article: {
      id: 205,
      title: '푸바오 동생 탄생',
      thumbnailUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',

      publishedAt: '2026-01-27 13:00',
      editorName: '에디터D',
      targetReactionCount: 850,
    },
  },
  {
    emotionType: 'SURPRISED',
    article: {
      id: 206,
      title: '우주에서 발견된 새로운 신호',
      thumbnailUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',

      publishedAt: '2026-01-27 11:20',
      editorName: '에디터B',
      targetReactionCount: 420,
    },
  },
  {
    emotionType: 'EMPATHY',
    article: {
      id: 207,
      title: '한 달 월세 밀린 이웃 도운 사연',
      thumbnailUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',

      publishedAt: '2026-01-27 10:10',
      editorName: '에디터A',
      targetReactionCount: 610,
    },
  },
  {
    emotionType: 'SAD',
    article: {
      id: 208,
      title: '산불로 사라진 마을, 복구 막막',
      thumbnailUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',

      publishedAt: '2026-01-27 09:40',
      editorName: '에디터E',
      targetReactionCount: 300,
    },
  },
  {
    emotionType: 'ANGRY',
    article: {
      id: 201,
      title: '지하철 요금 또 인상 논란',
      thumbnailUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',

      publishedAt: '2026-01-27 12:00',
      editorName: '에디터C',
      targetReactionCount: 500,
    },
  },
];
