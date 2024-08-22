import React from 'react';
import { Typography, Stack, Paper, Button, Box } from '@mui/material';
import GroupInfo from './GroupInfo';
import GroupParticipants from './GroupParticipants';
import GalleryBox from '../Gallery/GalleryBox';
import GroupPayment from './GroupPayment';
import StyledIconButton from './StyledIconButton';
import AddIcon from '@mui/icons-material/Add';

import { PICKLE_COLOR, PICKLE_WIDTH } from 'constants/pickleTheme';
const JsonExample = {
  groupId: 9,
  // 그룹 정보 - 어드민이 전부 수정 가능
  groupName: '구름',
  groupProfileImage: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
  groupDescription:
    '구름은 2024 PNU SW 창업캠프 참가팀입니다. 제 9회 부산 ICT 융합 해커톤 대회 참가,  \
    2024년 제 1회 전국대학 소프트웨어 성과 공유 포럼 우수상, 제 11회 sw 융합 해커톤 대회 참여 ',

  // 그룹 참가자 : 어드민이 참가자별 권한 수정 가능 / 어드민이 삭제, 유저명과 이메일로 추가 가능
  groupParticipants: [
    // 참가자 순서가 owner -> admin -> member가 되도록 할 수 있나요?
    {
      participantId: 1,
      participantImage: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
      participantName: '예준',
      participantEmail: 'yejun@pusan.ac.kr',
      participantAuthority: 'owner',
    },
    {
      participantId: 2,
      participantImage: '',
      participantName: '승훈',
      participantEmail: 'seunghun@pusan.ac.kr',
      participantAuthority: 'admin',
    },
    {
      participantId: 3,
      participantImage: '',
      participantName: '라윤',
      participantEmail: 'rora@pusan.ac.kr',
      participantAuthority: 'member',
    },
    {
      participantId: 4,
      participantImage: '',
      participantName: '지연',
      participantEmail: 'red3zi@pusan.ac.kr',
      participantAuthority: 'member',
    },
    {
      participantId: 5,
      participantImage: '',
      participantName: '여원',
      participantEmail: 'myeowon@pusan.ac.kr',
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
    <Typography
      sx={{
        fontSize: 22,
        fontWeight: 600,
        color: PICKLE_COLOR.pointOrange,
      }}
    >
      {title}
    </Typography>
  );
};
const Group = () => {
  return (
    <div>
      <Stack spacing={2}>
        <ContentsTitle title="participant"></ContentsTitle>
        <Box
          sx={{
            border: '1px solid #BFBFBF',
            boxSizing: 'border-box',
            borderRadius: '10px',
          }}
        >
          <Stack direction="row" spacing={0}>
            <GroupParticipants {...JsonExample} />
            <GroupInfo {...JsonExample} />
          </Stack>
        </Box>
        <div>
          <ContentsTitle title="payment"></ContentsTitle>
          <GroupPayment />
        </div>
        <div>
          <Stack direction="row" aligndivs="center" spacing={2}>
            <ContentsTitle title="projects"></ContentsTitle>
            <StyledIconButton>
              <AddIcon />
            </StyledIconButton>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto', // X축으로 스크롤 가능
              flexWrap: 'nowrap', // 카드들이 한 줄에 계속 나열되도록 설정
            }}
          >
            <Stack direction="row" spacing={2}>
              {JsonExample.groupProjects.map((div) => (
                <GalleryBox {...div} />
              ))}
            </Stack>
          </Box>
        </div>
      </Stack>
    </div>
  );
};

export default Group;
