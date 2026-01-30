export const editorsMock = [
  {
    id: 1,
    name: '웃수저쿼쿼카',
    description: 'IT 소식을 가장 쉽게 전달하는 에디터',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    keywords: ['#친절한', '#IT전문', '#쉽게설명'],
    recentNews: [
      {
        id: 101,
        title: '갤럭시 S26 출시 루머 총정리',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
        publishedAt: '2026-01-27 10:00',
      },
      {
        id: 102,
        title: '아이폰 17 Pro, 120Hz 디스플레이 탑재 확정',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1592286927505-ffd5b2c9c2d8?w=400&h=300&fit=crop',
        publishedAt: '2026-01-25 14:30',
      },
      {
        id: 103,
        title: 'ChatGPT-5 베타 테스트 시작, 성능 2배 향상',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
        publishedAt: '2026-01-23 09:15',
      },
    ],
  },
  {
    id: 2,
    name: '박수박사수달',
    description: '스타트업과 투자 소식을 빠르게 전하는 에디터',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    keywords: ['#스타트업', '#투자', '#트렌드분석'],
    recentNews: [
      {
        id: 201,
        title: '토스, 3조원 기업가치 평가 받으며 시리즈F 투자 유치',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
        publishedAt: '2026-01-28 16:00',
      },
      {
        id: 202,
        title: "AI 반도체 스타트업 '리벨리온', 美 시장 진출",
        thumbnailUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
        publishedAt: '2026-01-26 11:20',
      },
    ],
  },
  {
    id: 3,
    name: '게임 인사이더 박준호',
    description: '게임 업계의 숨은 이야기를 파헤치는 에디터',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    keywords: ['#게임', '#e스포츠', '#업계비하인드'],
    recentNews: [
      {
        id: 301,
        title: "넥슨, 신작 MMORPG '프로젝트 K' 첫 공개",
        thumbnailUrl:
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
        publishedAt: '2026-01-29 13:45',
      },
      {
        id: 302,
        title: 'LOL 월드 챔피언십, 한국 개최 확정',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        publishedAt: '2026-01-24 18:00',
      },
    ],
  },
  {
    id: 4,
    name: '글로벌 테크 최수진',
    description: '실리콘밸리 소식을 한국에 전하는 에디터',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    keywords: ['#글로벌', '#실리콘밸리', '#빅테크'],
    recentNews: [
      {
        id: 401,
        title: 'OpenAI, GPT-5 개발 완료... 올해 상반기 출시',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=400&h=300&fit=crop',
        publishedAt: '2026-01-30 08:00',
      },
      {
        id: 402,
        title: '테슬라, 완전 자율주행 FSD v13 베타 배포',
        thumbnailUrl:
          'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
        publishedAt: '2026-01-27 22:30',
      },
    ],
  },
];

// 단일 에디터 상세 조회용
export const editorDetailMock = editorsMock[0];
