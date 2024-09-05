const groupInfo = [
  {
    id: 1,
    name: '구름',
    auth: 'admin',
    participants: [
      {
        id: 201,
        name: '김철수',
        email: 'chulsoo@example.com',
        image: 'example.png',
        auth: 'editor',
        
      },
      {
        id: 202,
        name: '이영희',
        email: 'younghee@example.com',
        image: 'example.png',
        auth: 'viewer',
        
      },
      {
        id: 203,
        name: '박민수',
        email: 'minsoo@example.com',
        image: 'example.png',
        auth: 'editor',
      },
      {
        id: 204,
        name: '최지현',
        email: 'jihyun@example.com',
        image: 'example.png',
        auth: 'viewer',
      },
    ],
    project: [
      {
        id: 101,
        name: 'ict 융합',
        auth: 'editor',
        participants: [
          {
            id: 203,
            name: '박지훈',
            email: 'jihoon@example.com',
            image: 'example.png',
            auth: 'editor',
          },
          {
            id: 204,
            name: '최수민',
            email: 'sumin@example.com',
            image: 'example.png',
            auth: 'viewer',
          },
        ],
      },
      {
        id: 102,
        name: '전국 포럼',
        auth: 'editor',
        participants: [
          {
            id: 205,
            name: '정민수',
            email: 'minsoo@example.com',
            image: 'example.png',
            auth: 'editor',
          },
          {
            id: 206,
            name: '한지혜',
            email: 'jihye@example.com',
            image: 'example.png',
            auth: 'viewer',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'replay',
    auth: 'member',
    participants: [
      {
        id: 207,
        name: '박상현',
        email: 'sanghyun@example.com',
        image: 'example.png',
        auth: 'viewer',
      },
      {
        id: 208,
        name: '김나영',
        email: 'nayoung@example.com',
        image: 'example.png',
        auth: 'viewer',
      },
    ],
    project: [
      {
        id: 103,
        name: 'pnu sw 창업',
        auth: 'viewer',
        participants: [
          {
            id: 209,
            name: '이준호',
            email: 'junho@example.com',
            image: 'example.png',
            auth: 'editor',
          },
          {
            id: 210,
            name: '서민지',
            email: 'minji@example.com',
            image: 'example.png',
            auth: 'viewer',
          },
        ],
      },
    ],
  },
];

export default groupInfo;
