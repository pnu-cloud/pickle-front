import React from 'react';
import { Typography, Stack, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import GroupInfo from './GroupInfo';
import GroupParticipants from './GroupParticipants';
import GalleryBox from '../Gallery/GalleryBox';
import GroupPayment from './GroupPayment';

const JsonExample = {
  groupId: 9,
  // 그룹 정보 - 어드민이 전부 수정 가능
  groupName: '구름',
  groupProfileImage: '/images/goorm.png',
  groupDescription:
    '구름은 2024 PNU SW 창업캠프 참가팀입니다. 제 9회 부산 ICT 융합 해커톤 대회 참가,  \
    2024년 제 1회 전국대학 소프트웨어 성과 공유 포럼 우수상, 제 11회 sw 융합 해커톤 대회 참여 ',

  // 그룹 참가자 : 어드민이 참가자별 권한 수정 가능 / 어드민이 삭제, 유저명과 이메일로 추가 가능
  groupParticipants: [
    // 참가자 순서가 owner -> admin -> member가 되도록 할 수 있나요?
    {
      participantId: 1,
      participantName: '예준',
      participantEmail: 'yejun@pusan.ac.kr',
      participantAuthority: 'owner',
    },
    {
      participantId: 2,
      participantName: '승훈',
      participantEmail: 'senghun@pusan.ac.kr',
      participantAuthority: 'admin',
    },
    {
      participantId: 3,
      participantName: '라윤',
      participantEmail: 'rora@pusan.ac.kr',
      participantAuthority: 'member',
    },
  ],

  //결제 수단
  groupPayment: [
    //여기는 잘 모르겠어요....
    {
      cardBrand: 'first project is free',
      cardNumber: '-',
      cardOwner: '-',
      payProjectId: 1, //결제하는 프로젝트의 아이디????
    },
    {
      cardBrand: '롯데카드',
      cardNumber: '1234567890',
      cardOwner: '예준',
      payProjectId: 4, //결제하는 프로젝트의 아이디????
    },
    {
      cardBrand: '롯데카드',
      cardNumber: '1234567890',
      cardOwner: '예준',
      payProjectId: 9, //결제하는 프로젝트의 아이디????
    },
  ],
  //

  //그룹 프로젝트들 : 어드민이 추가 삭제 가능
  groupProjects: [
    {
      projectId: 1,
      groupName: '구름',
      groupImage: '/images/group-image.jpg',
      projectName: '모두의 자율',
      projectImage: '/public/logo512.png',
      projectDescription: '모두의 자율학습, 모자는 생성형 AI를 통해 맞춤형 문제를 생성합니다.',
      views: 55,
      likes: 77,
      comments: 11,
    },
    {
      projectId: 4,
      groupName: '구름',
      groupImage: '/images/group-image.jpg',
      projectName: '피클',
      projectImage: 'path/to/project-image.jpg',
      projectDescription: '피클은 클라우드 배포 서비스입니다.',
      views: 55,
      likes: 77,
      comments: 11,
    },
    {
      projectId: 9,
      groupName: '구름',
      groupImage: '/images/group-image.jpg',
      projectName: '로컬 라이프',
      projectImage: 'path/to/project-image.jpg',
      projectDescription: '로컬라이프는 지방에서 한달살기 프로젝트.',
      views: 55,
      likes: 77,
      comments: 11,
    },
  ],
};

const ContentsTitle = ({ title }) => {
  return (
    <Typography variant="h3" color="text.primary">
      {title}
    </Typography>
  );
};
const Group = () => {
  return (
    <Stack spacing={2}>
      <div>
        <ContentsTitle title="participant"></ContentsTitle>
        <Stack direction="row" spacing={0}>
          <GroupParticipants {...JsonExample} />
          <GroupInfo {...JsonExample} />
        </Stack>
      </div>
      <div>
        <ContentsTitle title="payment"></ContentsTitle>
        {JsonExample.groupPayment.map((div) => (
          <GroupPayment {...div} />
        ))}
      </div>
      <div>
        <Stack direction="row" aligndivs="center" spacing={2}>
          <ContentsTitle title="projects"></ContentsTitle>
          <Button
            variant="outlined"
            href="#contained-buttons"
            sx={{ width: 105, height: 28, borderRadius: 999, border: 1.5 }}
          >
            +
          </Button>
        </Stack>
        <div>
          <Stack direction="row" spacing={2}>
            {JsonExample.groupProjects.map((div) => (
              <GalleryBox {...div} />
            ))}
          </Stack>
        </div>
      </div>
    </Stack>
  );
};

export default Group;
