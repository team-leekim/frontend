// mocks/webtoonFeed.mock.ts

export interface Editor {
  id: number;
  name: string;
  imageUrl: string;
}

export interface ContentImage {
  order: number;
  imageUrl: string;
}

export interface WebtoonContent {
  editor: Editor;
  title: string;
  publishedAt: string;
  content: {
    images: ContentImage[];
  };
}

export interface WebtoonFeedResponse {
  contents: WebtoonContent[];
  nextCursor: number;
  hasNext: boolean;
}

export const webtoonFeedMock: WebtoonFeedResponse = {
  contents: [
    {
      editor: {
        id: 1,
        name: '에디터A',
        imageUrl:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',
      },
      title: 'AI가 바꾼 하루, 웹툰으로 보는 미래 이야기',
      publishedAt: '2026-01-22 09:30',
      content: {
        images: [
          {
            order: 1,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MDRfMTg3%2FMDAxNzEyMjE5MzM4NTE0.1wQ_s3DiszczjWw7ivmMi2s-4npgnpAgjpQCwQf4_4Eg.nAKOHKojSmjHuJSHOFr8c7xkDxmSL8nzUSa9mN5qAukg.PNG%2Fimage.png&type=a340',
          },
          {
            order: 2,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MjFfMjY5%2FMDAxNzU4NDI0NzA3MzA0.tzdTWRxxru7vsY-7GOAH-HrqqKuhT2axUrS7BiP2Lbog.BCcljARu8-jaBmADIlAnLg2giOfymqJKYwgvmSbI6F8g.PNG%2Fimage.png&type=a340',
          },
          {
            order: 3,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTJfMjI0%2FMDAxNzI4NzEzNDkzMTgz.0hT6ISzuCMl4iPN6Wtj6Jl3m-d7NLnMnbT_Xl7OmjzYg.SFlouxKP2FBrvEMoFahvXeQvUaOK-wx2O3VTgq_0xFYg.PNG%2Fimage.png&type=sc960_832',
          },
          {
            order: 4,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjdfMTMz%2FMDAxNjY5NTU5OTg2MTE4.8U6-gDsjL1pbB63ngBNWEo_UC9E3lxvrSC4cWgcd340g.kUQQsfP_gMwf9m_J_ohF9ObVftQfVRIaJ-bauM1A-L4g.JPEG.rlachdnjs28%2FScreenshot%25A3%25DF20221109%25A3%25DF172506%25A3%25DFSamsung_Internet.jpg&type=a340',
          },
        ],
      },
    },
    {
      editor: {
        id: 2,
        name: '에디터B',
        imageUrl:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',
      },
      title: '출근길 3분, 오늘의 경제 웹툰 요약',
      publishedAt: '2026-01-22 08:10',
      content: {
        images: [
          {
            order: 1,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MDRfMTg3%2FMDAxNzEyMjE5MzM4NTE0.1wQ_s3DiszczjWw7ivmMi2s-4npgnpAgjpQCwQf4_4Eg.nAKOHKojSmjHuJSHOFr8c7xkDxmSL8nzUSa9mN5qAukg.PNG%2Fimage.png&type=a340',
          },
          {
            order: 2,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MjFfMjY5%2FMDAxNzU4NDI0NzA3MzA0.tzdTWRxxru7vsY-7GOAH-HrqqKuhT2axUrS7BiP2Lbog.BCcljARu8-jaBmADIlAnLg2giOfymqJKYwgvmSbI6F8g.PNG%2Fimage.png&type=a340',
          },
          {
            order: 3,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTJfMjI0%2FMDAxNzI4NzEzNDkzMTgz.0hT6ISzuCMl4iPN6Wtj6Jl3m-d7NLnMnbT_Xl7OmjzYg.SFlouxKP2FBrvEMoFahvXeQvUaOK-wx2O3VTgq_0xFYg.PNG%2Fimage.png&type=sc960_832',
          },
          {
            order: 4,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjdfMTMz%2FMDAxNjY5NTU5OTg2MTE4.8U6-gDsjL1pbB63ngBNWEo_UC9E3lxvrSC4cWgcd340g.kUQQsfP_gMwf9m_J_ohF9ObVftQfVRIaJ-bauM1A-L4g.JPEG.rlachdnjs28%2FScreenshot%25A3%25DF20221109%25A3%25DF172506%25A3%25DFSamsung_Internet.jpg&type=a340',
          },
        ],
      },
    },
    {
      editor: {
        id: 3,
        name: '에디터C',
        imageUrl:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTZfMTUz%2FMDAxNzI5MDUzMTY2MzUw.LogQtODfY6TgUCBh_w_XvYl9Xi_EXAs11ElsRWK3Fm0g.e71EMKo9UQaNIwJB5oaYIK28Uo9adCLaHpITn18-UWEg.PNG%2Fimage.png&type=a340',
      },
      title: '환경 이슈를 가장 쉽게 설명하는 방법',
      publishedAt: '2026-01-21 21:40',
      content: {
        images: [
          {
            order: 1,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MDRfMTg3%2FMDAxNzEyMjE5MzM4NTE0.1wQ_s3DiszczjWw7ivmMi2s-4npgnpAgjpQCwQf4_4Eg.nAKOHKojSmjHuJSHOFr8c7xkDxmSL8nzUSa9mN5qAukg.PNG%2Fimage.png&type=a340',
          },
          {
            order: 2,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MjFfMjY5%2FMDAxNzU4NDI0NzA3MzA0.tzdTWRxxru7vsY-7GOAH-HrqqKuhT2axUrS7BiP2Lbog.BCcljARu8-jaBmADIlAnLg2giOfymqJKYwgvmSbI6F8g.PNG%2Fimage.png&type=a340',
          },
          {
            order: 3,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTJfMjI0%2FMDAxNzI4NzEzNDkzMTgz.0hT6ISzuCMl4iPN6Wtj6Jl3m-d7NLnMnbT_Xl7OmjzYg.SFlouxKP2FBrvEMoFahvXeQvUaOK-wx2O3VTgq_0xFYg.PNG%2Fimage.png&type=sc960_832',
          },
          {
            order: 4,
            imageUrl:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjdfMTMz%2FMDAxNjY5NTU5OTg2MTE4.8U6-gDsjL1pbB63ngBNWEo_UC9E3lxvrSC4cWgcd340g.kUQQsfP_gMwf9m_J_ohF9ObVftQfVRIaJ-bauM1A-L4g.JPEG.rlachdnjs28%2FScreenshot%25A3%25DF20221109%25A3%25DF172506%25A3%25DFSamsung_Internet.jpg&type=a340',
          },
        ],
      },
    },
  ],
  nextCursor: 91,
  hasNext: true,
};
