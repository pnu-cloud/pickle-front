import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, Stack, Avatar } from '@mui/material';
import projectBackground from '../../assets/projectBackground.svg';
import ProjectPics from 'components/Project/ProjectPics';
import ProjectDomainAddress from 'components/Project/ProjectDomainAddress';
import ProjectComments from 'components/Project/ProjectComments';
import ProjectParticipants from 'components/Project/projectParticipants';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import ProjectTexts from 'components/Project/ProjectTexts';
import ProjectLikes from 'components/Project/ProjectLikes';
import ProjectOverviewAPI from 'APIs/ProjectOverviewAPI';
//json 만들기
// const ProjectJson = {
//   projectId: 1,
//   projectName: '모두의 자율학습',
//   //그룹
//   groupId: 1,
//   groupName: '구름',
//   groupProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',

//   projectCreatedTime: 20240817,
//   projectDomainAddress: 'cloud.pnu.app',

//   projectPictures: [
//     {
//       id: 1,
//       src: 'https://image.ajunews.com/content/image/2024/01/21/20240121132054894779.jpg',
//       alt: 'image 1',
//     },
//     {
//       id: 2,
//       src: 'https://i.namu.wiki/i/jbjz_ayvc05UOFKasgYQ6Fr7uodGlWzz-YPxRH7B0Gx6JPymVs1jKtGuscliMuldxCPHHwOWWCJEmVxEftPDIg.webp',
//       alt: 'image 2',
//     },
//     {
//       id: 3,
//       src: 'https://i.pinimg.com/originals/97/91/37/979137054da8a766f923707661dd687e.png',
//       alt: 'image 3',
//     },
//     {
//       id: 4,
//       src: 'https://i.namu.wiki/i/vVk4FYMre53TYpZZrZsgZONQen3X1EGWdRpg5r0IRh_AaDEzjPSqBOw0isjzx6G5SC4zLb_mtLZkf950YmAXzg.webp',
//       alt: 'image 4',
//     },
//     {
//       id: 5,
//       src: 'https://mblogthumb-phinf.pstatic.net/20160909_271/smiles115_1473404854327pFEAc_JPEG/Conan_387.jpg?type=w420',
//       alt: 'image 5',
//     },
//   ],
//   projectOverview:
//     '모든 웹사이트에 다크 모드를 적용합니다. 밤이나 일상적인 웹 브라우징을 할 때 어두운 테마를 사용하여 눈을 보호하십시오.',
//   projectDescription:
//     '이 눈 건강을 위한 확장 기능은 실시간으로 각 웹사이트에 어두운 테마를 적용해 야간 모드를 가능케 합니다. 다크 리더는 밝은 색상을 반전해 고대비로 만들어 밤에 읽기가 쉽도록 만듭니다.  밝기, 대비, 세피아 필터, 어두운 모드, 폰트와 예외 목록을 설정할 수 있습니다.  기부로 앱 개발 지원을 요청할 수 있습니다. 설정 팝업에서 Dark Reader에 대한 뉴스를 볼 수 있습니다. 숙련된 사용자를 위한 개발자 도구가 있습니다.  다크 리더는 광고를 보여주지 않으며 사용자의 데이터를 어디에도 보내지 않습니다. 완전히 오픈 소스입니다.',
//   projectParticipants: [
//     {
//       paticipantId: 1,
//       participantName: '예준',
//       participantProfile:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThigaxY2snSYaP2eKKe3qcOzR3oDQywhOc6A&s',
//     },
//     {
//       paticipantId: 2,
//       participantName: '승훈',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 3,
//       participantName: '라윤',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 4,
//       participantName: '지연',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 5,
//       participantName: '여원',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 1,
//       participantName: '예준',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 2,
//       participantName: '승훈',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 3,
//       participantName: '라윤',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 4,
//       participantName: '지연',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     {
//       paticipantId: 5,
//       participantName: '여원',
//       participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     },
//     // {
//     //   paticipantId: 1,
//     //   participantName: '예준',
//     //   participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     // },
//     // {
//     //   paticipantId: 2,
//     //   participantName: '승훈',
//     //   participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     // },
//     // {
//     //   paticipantId: 3,
//     //   participantName: '라윤',
//     //   participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     // },
//     // {
//     //   paticipantId: 4,
//     //   participantName: '지연',
//     //   participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     // },
//     // {
//     //   paticipantId: 5,
//     //   participantName: '여원',
//     //   participantProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//     // },
//   ],
//   projectLikeCnt: 77,
//   projectCommentCnt: 88,
//   projectComments: [
//     {
//       commentId: 1,
//       writerId: 9,
//       writerName: 'Nick',
//       writerProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//       createTime: '2024.08.11 17:40',
//       comment:
//         '이야... 이건 진짜 엔트리 역사에 남을 명작입니다. 노래부터 브금, 그래픽, 부드러운 동작까지 빼 놓을 것이 없네요... 너무 잘 플레이 했고, 명작 스선 축하드립니다.',
//     },
//     {
//       commentId: 2,
//       writerId: 9,
//       writerName: 'Nick',
//       writerProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//       createTime: '2024.08.11 17:40',
//       comment:
//         '이야... 이건 진짜 엔트리 역사에 남을 명작입니다. 노래부터 브금, 그래픽, 부드러운 동작까지 빼 놓을 것이 없네요... 너무 잘 플레이 했고, 명작 스선 축하드립니다.',
//     },
//     {
//       commentId: 3,
//       writerId: 9,
//       writerName: 'Nick',
//       writerProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//       createTime: '2024.08.11 17:40',
//       comment:
//         '이야... 이건 진짜 엔트리 역사에 남을 명작입니다. 노래부터 브금, 그래픽, 부드러운 동작까지 빼 놓을 것이 없네요... 너무 잘 플레이 했고, 명작 스선 축하드립니다.',
//     },
//     {
//       commentId: 4,
//       writerId: 9,
//       writerName: 'Nick',
//       writerProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//       createTime: '2024.08.11 17:40',
//       comment:
//         '이야... 이건 진짜 엔트리 역사에 남을 명작입니다. 노래부터 브금, 그래픽, 부드러운 동작까지 빼 놓을 것이 없네요... 너무 잘 플레이 했고, 명작 스선 축하드립니다.',
//     },
//     {
//       commentId: 5,
//       writerId: 9,
//       writerName: 'Nick',
//       writerProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//       createTime: '2024.08.11 17:40',
//       comment:
//         '이야... 이건 진짜 엔트리 역사에 남을 명작입니다. 노래부터 브금, 그래픽, 부드러운 동작까지 빼 놓을 것이 없네요... 너무 잘 플레이 했고, 명작 스선 축하드립니다.',
//     },
//     {
//       commentId: 6,
//       writerId: 9,
//       writerName: 'Nick',
//       writerProfile: 'https://m.kidsbuttershop.co.kr/web/product/big/202312/fb93fb13a6eb4c5d2035a70b9e2574b5.jpg',
//       createTime: '2024.08.11 17:40',
//       comment:
//         '이야... 이건 진짜 엔트리 역사에 남을 명작입니다. 노래부터 브금, 그래픽, 부드러운 동작까지 빼 놓을 것이 없네요... 너무 잘 플레이 했고, 명작 스선 축하드립니다.',
//     },
//   ],
//   projectViewCnt: 1000,
// };

const ContentsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: 22,
        fontWeight: 600,
        color: PICKLE_COLOR.pointOrange,
        marginBottom: 2,
      }}
    >
      {title}
    </Typography>
  );
};

const Project = () => {
  const { projectId } = useParams();
  const local_groupname = localStorage.getItem('groupName');

  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const data = await ProjectOverviewAPI(projectId); // API 호출
        console.log('API Response:', data.message); // 메시지 출력
        setProjectData(data.data); // groupData 상태 업데이트
        setLoading(false); // 로딩 종료
      } catch (error) {
        console.error('Error fetching group data:', error);
        setLoading(false); // 에러 발생 시 로딩 종료
      }
    };

    if (projectId) {
      fetchProjectData();
    }
  }, [projectId]);

  // groupData가 업데이트된 후 로그 출력
  useEffect(() => {
    if (projectId) {
      console.log('Updated groupData:', projectData); // groupData 로그 출력
    }
  }, [projectData]); // groupData가 변경될 때 실행

  if (loading) {
    return <p>Loading...</p>; // 로딩 중 표시
  }

  if (!projectData) {
    return <p>No group data available</p>; // groupData가 없을 때 표시
  }
  if (!loading && projectData) {
    return (
      <div
        style={{
          backgroundImage: `url(${projectBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid #BFBFBF',
          borderRadius: 20,
          padding: '25px',
          overflow: 'hidden', // Ensures background image respects the borderRadius
        }}
      >
        <Container
          sx={{
            width: '98%',
            // backgroundColor: 'red',
          }}
        >
          <Box sx={{ fontWeight: 600, fontSize: 28, marginTop: 1 }}>{projectData.projectName}</Box>
          <Stack
            direction="row"
            sx={{ marginTop: 1, marginBottom: 1, justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
              <Avatar
                alt={local_groupname}
                sx={{
                  width: 42,
                  height: 42,
                  border: '1px solid #BFBFBF',
                }}
              />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 18,
                }}
              >
                {local_groupname}
              </Typography>
              {/* <Typography sx={{ fontWeight: 400, fontSize: 18, color: '#858585' }}>
                Create - {projectData.projectCreatedTime}
              </Typography> */}
            </Stack>
            <ProjectDomainAddress {...projectData} />
          </Stack>
          <ProjectPics {...projectData}></ProjectPics>
        </Container>
        <Container
          sx={{
            width: '95%',
          }}
        >
          <Box>
            <ProjectLikes></ProjectLikes>
          </Box>
          <Box>
            <Box sx={{ marginBottom: 3 }}>
              <ContentsTitle title="Overview"></ContentsTitle>
              <ProjectTexts {...projectData}></ProjectTexts>
            </Box>
            <Box>
              <ContentsTitle title="Participants"></ContentsTitle>
              <ProjectParticipants {...projectData}></ProjectParticipants>
            </Box>
            <Box>
              <ProjectComments {...projectData}></ProjectComments>
            </Box>
          </Box>
        </Container>
      </div>
    );
  }
};
export default Project;
