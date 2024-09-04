import React, { useEffect, useState } from 'react';
import { Typography, Stack, Paper, Button, Box } from '@mui/material';

import GroupInfo from '../../components/Group/GroupInfo';
import GroupParticipants from '../../components/Group/GroupParticipants';
import GroupPayment from 'components/Group/GroupPayment';
import GroupProjects from 'components/Group/GroupProjects';
import StyledIconButton from '../../components/Group/StyledIconButton';
import AddIcon from '@mui/icons-material/Add';
import GroupAPI from 'APIs/GroupAPI';

import { useParams } from 'react-router-dom';

import { PICKLE_COLOR, PICKLE_WIDTH } from 'constants/pickleTheme';
// const JsonExample = {
//   groupId: 9,
//   // 그룹 정보 - 어드민이 전부 수정 가능
//   groupName: '구름',
//   groupProfileImage: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
//   groupDescription: 'Hello, We are developers from Republic of Korea! Welcome~🍊',

//   // 그룹 참가자 : 어드민이 참가자별 권한 수정 가능 / 어드민이 삭제, 유저명과 이메일로 추가 가능
//   groupParticipants: [
//     // 참가자 순서가 owner -> admin -> member가 되도록 할 수 있나요?
//     {
//       participantId: 1,
//       participantImage: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
//       participantName: '예준',
//       participantEmail: 'yejun@pusan.ac.kr',
//       participantAuthority: 'owner',
//     },
//     {
//       participantId: 2,
//       participantImage: '',
//       participantName: '승훈',
//       participantEmail: 'seunghun@pusan.ac.kr',
//       participantAuthority: 'admin',
//     },
//     {
//       participantId: 3,
//       participantImage: '',
//       participantName: '라윤',
//       participantEmail: 'rora@pusan.ac.kr',
//       participantAuthority: 'member',
//     },
//     {
//       participantId: 4,
//       participantImage: '',
//       participantName: '지연',
//       participantEmail: 'red3zi@pusan.ac.kr',
//       participantAuthority: 'member',
//     },
//     {
//       participantId: 5,
//       participantImage: '',
//       participantName: '여원',
//       participantEmail: 'myeowon@pusan.ac.kr',
//       participantAuthority: 'member',
//     },
//   ],

//   //결제 수단
//   groupPayment: [
//     //여기는 잘 모르겠어요....
//     {
//       cardBrand: 'first project is free',
//       cardNumber: '-',
//       cardOwner: '-',
//       payProjectId: 1, //결제하는 프로젝트의 아이디????
//     },
//     {
//       cardBrand: '롯데카드',
//       cardNumber: '1234567890',
//       cardOwner: '예준',
//       payProjectId: 4, //결제하는 프로젝트의 아이디????
//     },
//     {
//       cardBrand: '롯데카드',
//       cardNumber: '1234567890',
//       cardOwner: '예준',
//       payProjectId: 9, //결제하는 프로젝트의 아이디????
//     },
//   ],
//   //

//   //그룹 프로젝트들 : 어드민이 추가 삭제 가능
//   groupProjects: [
//     {
//       projectId: 1,
//       groupName: '구름',
//       groupImage: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
//       projectName: '모두의 자율',
//       projectImage: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
//       projectDescription: '모두의 자율학습, 모자는 생성형 AI를 통해 맞춤형 문제를 생성합니다.',
//       views: 55,
//       likes: 77,
//       comments: 11,
//     },
//     {
//       projectId: 4,
//       groupName: '구름',
//       groupImage: '/images/group-image.jpg',
//       projectName: '피클',
//       projectImage: 'path/to/project-image.jpg',
//       projectDescription: '피클은 클라우드 배포 서비스입니다.',
//       views: 55,
//       likes: 77,
//       comments: 11,
//     },
//     {
//       projectId: 9,
//       groupName: '구름',
//       groupImage: '/images/group-image.jpg',
//       projectName: '로컬 라이프',
//       projectImage: 'path/to/project-image.jpg',
//       projectDescription: '로컬라이프는 지방에서 한달살기 프로젝트.',
//       views: 55,
//       likes: 77,
//       comments: 11,
//     },
//     {
//       projectId: 99,
//       groupName: '구름',
//       groupImage: '/images/group-image.jpg',
//       projectName: '로컬 라이프',
//       projectImage: 'path/to/project-image.jpg',
//       projectDescription: '로컬라이프는 지방에서 한달살기 프로젝트.',
//       views: 55,
//       likes: 77,
//       comments: 11,
//     },
//     {
//       projectId: 100,
//       groupName: '구름',
//       groupImage: '/images/group-image.jpg',
//       projectName: '로컬 라이프',
//       projectImage: 'path/to/project-image.jpg',
//       projectDescription: '로컬라이프는 지방에서 한달살기 프로젝트.',
//       views: 55,
//       likes: 77,
//       comments: 11,
//     },
//   ],
// };

const ContentsTitle = ({ title1, title2 }) => {
  return (
    <Typography
      sx={{
        fontSize: 22,
        fontWeight: 600,
        color: PICKLE_COLOR.pointOrange,
      }}
    >
      {title1} {title2}
    </Typography>
  );
};
const Group = () => {
  const { groupId } = useParams();
  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const data = await GroupAPI(groupId); // API 호출
        console.log('API Response:', data.message); // 메시지 출력
        setGroupData(data.data); // groupData 상태 업데이트
        setLoading(false); // 로딩 종료
      } catch (error) {
        console.error('Error fetching group data:', error);
        setLoading(false); // 에러 발생 시 로딩 종료
      }
    };

    if (groupId) {
      fetchGroupData(); // groupId가 있을 때만 API 호출
    }
  }, [groupId]); // groupId가 변경될 때마다 API 호출

  // groupData가 업데이트된 후 로그 출력
  useEffect(() => {
    if (groupData) {
      console.log('Updated groupData:', groupData); // groupData 로그 출력
      console.log('Updated groupDataId:', groupData.groupId); // groupId 로그 출력
    }
  }, [groupData]); // groupData가 변경될 때 실행

  if (loading) {
    return <p>Loading...</p>; // 로딩 중 표시
  }

  if (!groupData) {
    return <p>No group data available</p>; // groupData가 없을 때 표시
  }
  if (!loading && groupData) {
    const participantsCnt = groupData.groupParticipants.length;
    return (
      <div className="mt-4">
        <Stack spacing={3}>
          <Stack spacing={1}>
            <ContentsTitle title1={participantsCnt} title2="participant"></ContentsTitle>
            <Box
              sx={{
                border: `1px solid ${PICKLE_COLOR.middleGray}`,
                boxSizing: 'border-box',
                borderRadius: '10px',
              }}
            >
              <Stack direction="row" spacing={0}>
                {/* <GroupParticipants {...groupData} /> */}
                <GroupInfo {...groupData} />
              </Stack>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <ContentsTitle title1="payment"></ContentsTitle>
            <Box
              sx={{
                boxSizing: 'border-box',
              }}
            >
              <GroupPayment />
            </Box>
          </Stack>

          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <ContentsTitle title1="projects"></ContentsTitle>
              <StyledIconButton>
                <AddIcon sx={{ fontSize: 30 }} />
              </StyledIconButton>
            </Stack>
            {/* <GroupProjects {...groupData} /> */}
          </Stack>
        </Stack>
      </div>
    );
  }
};

export default Group;
