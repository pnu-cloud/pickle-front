import React, { useState, useEffect } from 'react';
import { Divider, Stack, Button, TextField, Typography, Avatar, Box, Grid, Container } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import StyledIconButton from 'components/Group/StyledIconButton';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GalleryBox2 from 'components/Gallery/GalleryBox2';
import friends from 'assets/friends.svg';
import bluee from 'assets/bluee.svg';
import galleryCover from 'assets/galleryCover.svg';
import fetchUserInfo from 'APIs/homeApi';
import UserInfoAPI from 'APIs/UserInfoAPI';
import UserAPI from 'APIs/UserApi';
import MyGroups from 'components/Mypage/MyGroups';
import MyProjects from 'components/Mypage/MyProjects';
const JsonExample = {
  userId: 1,
  username: '김피클',
  userProfileImage:
    'https://i.namu.wiki/i/NHwDBf6H1jECcAe5OMq2EGGW5UQkt1gYITM9usAr0LZCvlsHl7h69IgP-xU2jKK-GnF2M3ZDHBYx6qJwI8rb4A.webp',
  userAbout: 'Building innovative solutions, one line of code at a time. 🚀',
  location: '부산, 대한민국',
  role: 'developer',
  stack: 'html, css, js, react',
  company: '부산대학교 정보컴퓨터공학부',
  email: 'kimpickle@pusan.ac.kr',
  link: 'https://github.com/kimpickle',
  history:
    '제 9회 부산 ICT 융합 해커톤 \n 제 1회 전국대학 소프트웨어 성과 공유 포럼 행사 우수상 및 인기상 \n 제 11회 대한민국 SW융합 해커톤 대상 \n 제 5회 PNU 창의융합SW해커톤 \n 2024 PNU SW창업 캠프',
  groups: [
    {
      id: 1,
      name: '구름',
      src: '',
    },
    {
      id: 2,
      name: 'replay',
      src: '',
    },
  ],
  projects: [
    {
      projectId: 1,
      groupName: '구름',
      groupImage: 'https://images.unsplash.com/photo-1506748686214e9df14f6b2de4b82e2b3f7e3e1c4f7b?fit=crop&w=600&h=400',
      projectName: '모두의 자율',
      projectImage: 'https://milieupaint.com/cdn/shop/products/Milieu-paint-wall-in-010-Polar-Grey.jpg?v=1681140611',
      projectDescription:
        '모두의 자율학습, 모자는 생성형 AI를 통해 맞춤형 문제를 생성합니다. 모두의 자율학습, 모자는 생성형 AI를 통해 맞춤형 문제를 생성합니다. 모두의 자율학습, 모자는 생성형 AI를 통해 맞춤형 문제를 생성합니다.',
      views: 55,
      likes: 77,
      comments: 11,
    },
    {
      projectId: 4,
      groupName: '구름',
      groupImage: 'https://images.unsplash.com/photo-1534763572-f3c0e9d87e38?fit=crop&w=600&h=400',
      projectName: '피클',
      projectImage: 'https://milieupaint.com/cdn/shop/products/Milieu-paint-wall-in-010-Polar-Grey.jpg?v=1681140611',
      projectDescription: '피클은 클라우드 배포 서비스입니다.',
      views: 55,
      likes: 77,
      comments: 11,
    },
    {
      projectId: 9,
      groupName: '구름',
      groupImage: 'https://images.unsplash.com/photo-1608567070616-382e84e44a83?fit=crop&w=600&h=400',
      projectName: '로컬 라이프',
      projectImage: 'https://milieupaint.com/cdn/shop/products/Milieu-paint-wall-in-010-Polar-Grey.jpg?v=1681140611',
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

const Mypage = () => {
  const [userData, setUserData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    UserInfoAPI()
      .then((data) => {
        console.log('info' + data.data);
        setUserData(data.data);
        setEditableData(data.data);
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during load UserData:', error);
      });
  }, []);
  const [memberGroups, setMemberGroups] = useState([]);
  useEffect(() => {
    let email_Token = localStorage.getItem('email');
    UserAPI(email_Token)
      .then((data) => {
        console.log(data);
        setMemberGroups(data.data.userGroupInfoList);
        // console.log('memberGroup ' + memberGroups[0].id);
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during load UserData:', error);
      });
  }, []);

  if (!userData) {
    // userData가 null일 때 로딩 중 표시
    return <div>Loading...</div>;
  }
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setEditableData(userData);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    //api
    setUserData(editableData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };
  const DetailsComponent = ({ name, value, typo }) => {
    return (
      <>
        {isEditing ? (
          <TextField
            name={name}
            placeholder={name}
            value={value}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            sx={{
              height: 30,
              color: PICKLE_COLOR.middleGray,
              padding: 0,

              '& .MuiOutlinedInput-root': {
                borderRadius: '5px',
                backgroundColor: PICKLE_COLOR.lightGray,
                fontSize: 12,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: PICKLE_COLOR.lightGray,
              },
            }}
            inputProps={{
              style: {
                padding: '5px',
              },
            }}
          />
        ) : (
          <>
            {/* // <Typography sx={{ height: 32, marginTop: 3, fontWeight: 300, fontSize: 15 }}>{typo}</Typography> */}
            <Typography sx={{ fontWeight: 300, fontSize: 15 }}>{typo}</Typography>
          </>
        )}
      </>
    );
  };

  return (
    <div className="mt-10">
      {/* 버튼 */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        {isEditing ? (
          <Box>
            <StyledIconButton onClick={handleCancelClick} sx={{ width: 80 }}>
              cancel
            </StyledIconButton>
            <StyledIconButton
              onClick={handleSaveClick}
              sx={{ width: 80, marginLeft: 1, backgroundColor: PICKLE_COLOR.pointOrange, color: 'white' }}
            >
              save
            </StyledIconButton>
          </Box>
        ) : (
          <StyledIconButton variant="outlined" aria-label="edit" onClick={handleEditClick}>
            <EditIcon sx={{ width: 18, height: 18 }} />
            <Typography sx={{ fontWeight: 500, fontSize: 15, marginLeft: 1 }}> edit</Typography>
          </StyledIconButton>
        )}
      </Box>
      {/* 내용 */}

      <Stack
        direction="row"
        mt={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'flex-start',
          border: `1px solid ${PICKLE_COLOR.middleGray}`,
          borderRadius: '10px',
          boxSizing: 'border-box',
        }}
      >
        {/* 프로필 */}
        <Box
          mt={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            width: '33%',
          }}
        >
          <Avatar
            alt={editableData.username}
            //src={editableData.userImage}
            src={bluee}
            sx={{
              width: 72,
              height: 72,
              margin: '0 auto',
              border: `1px solid ${PICKLE_COLOR.middleGray}`,
              boxShadow: `0px 4px 10px 2px ${PICKLE_COLOR.lightGray}`,
            }}
          />
          {isEditing ? (
            <TextField
              variant="outlined"
              name="username"
              // label="Username"
              placeholder="username"
              value={editableData.userImage}
              onChange={handleChange}
              sx={{
                marginTop: 2,
                width: 260,
                height: 32,
                color: PICKLE_COLOR.middleGray,
                padding: 0,

                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  backgroundColor: PICKLE_COLOR.lightGray,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: PICKLE_COLOR.lightGray,
                },
              }}
              inputProps={{
                style: {
                  padding: '10px 12px',
                },
              }}
            />
          ) : (
            <Typography
              sx={{
                marginTop: 1,
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              {userData.username}
            </Typography>
          )}
          {isEditing ? (
            <TextField
              name="userAbout"
              // label="userAbout"
              placeholder="userAbout"
              value={JsonExample.userAbout}
              onChange={handleChange}
              sx={{
                marginTop: 2,
                width: 260,
                height: 57,
                overflow: 'auto',

                fontWeight: 300,
                fontSize: 15,
                padding: 0,
                textAlign: 'center',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  backgroundColor: PICKLE_COLOR.lightGray,
                  fontWeight: 300,
                  fontSize: 15,
                  height: 57,
                  overflow: 'hidden',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: PICKLE_COLOR.lightGray,
                },
              }}
              multiline
              rows={2}
            />
          ) : (
            <Typography sx={{ marginTop: 1, fontWeight: 300, fontSize: 15, width: 260 }}>
              {JsonExample.userAbout}
            </Typography>
          )}
        </Box>

        {/* <Stack direction="row" sx={{ justifyContent: 'space-between' }}> */}
        {/* //DETAIL */}

        <Stack
          spacing={0.6}
          sx={{
            borderLeft: `1px solid ${PICKLE_COLOR.middleGray}`,
            borderRight: `1px solid ${PICKLE_COLOR.middleGray}`,
            padding: 2,
            width: '33%',
          }}
        >
          <ContentsTitle title="Details"></ContentsTitle>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <InfoOutlinedIcon sx={{ fontSize: 15 }}></InfoOutlinedIcon>
            <DetailsComponent name="role" value={JsonExample.role} typo={JsonExample.role} />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <BusinessCenterOutlinedIcon sx={{ fontSize: 15 }}></BusinessCenterOutlinedIcon>
            <DetailsComponent name="company" value={JsonExample.company} typo={JsonExample.company} />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <LanguageOutlinedIcon sx={{ fontSize: 15 }}></LanguageOutlinedIcon>
            <DetailsComponent name="location" value={JsonExample.location} typo={JsonExample.location} />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <SettingsOutlinedIcon sx={{ fontSize: 15 }}></SettingsOutlinedIcon>
            <DetailsComponent name="stack" value={JsonExample.stack} typo={JsonExample.stack} />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <EmailOutlinedIcon sx={{ fontSize: 15 }}></EmailOutlinedIcon>
            <DetailsComponent name="email" value={JsonExample.email} typo={JsonExample.email} />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <InsertLinkOutlinedIcon sx={{ fontSize: 15 }}></InsertLinkOutlinedIcon>
            <DetailsComponent name="link" value={JsonExample.link} typo={JsonExample.link} />
          </Stack>
        </Stack>
        {/* History */}
        <Stack
          spacing={1}
          sx={{
            // borderLeft: `1px solid ${PICKLE_COLOR.middleGray}`,
            padding: 2,
            width: '33%',
            height: '100%',
          }}
        >
          <ContentsTitle title="History"></ContentsTitle>
          <Box item xs={12}>
            {isEditing ? (
              <TextField
                name="history"
                placeholder="History"
                value={JsonExample.history}
                onChange={handleChange}
                fullWidth
                multiline
                rows={8}
                sx={{
                  height: 30,
                  color: PICKLE_COLOR.middleGray,
                  padding: 0,

                  fontWeight: 300,
                  fontSize: 15,

                  '& .MuiOutlinedInput-root': {
                    borderRadius: '5px',
                    backgroundColor: PICKLE_COLOR.lightGray,
                    fontSize: 12,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: PICKLE_COLOR.lightGray,
                  },
                }}
                inputProps={{
                  style: {
                    padding: '5px',
                  },
                }}
              />
            ) : (
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: JsonExample.history.replace(/\n/g, '<br />'),
                }}
              />
            )}
          </Box>
        </Stack>
      </Stack>
      {/* </Stack> */}
      {/* group */}
      <Box>
        <ContentsTitle title="My Groups"></ContentsTitle>
        <MyGroups></MyGroups>
      </Box>
      {/* projects */}
      <Box>
        <ContentsTitle title="My Projects"></ContentsTitle>
        <MyProjects></MyProjects>
      </Box>
    </div>
  );
};

export default Mypage;
