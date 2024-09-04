import React, { useState } from 'react';
import { Stack, Button, TextField, Typography, Avatar, Box, Grid, Container } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import StyledIconButton from 'components/Group/StyledIconButton';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const JsonExample = {
  userId: 1,
  username: '여원',
  userProfileImage:
    'https://i.namu.wiki/i/NHwDBf6H1jECcAe5OMq2EGGW5UQkt1gYITM9usAr0LZCvlsHl7h69IgP-xU2jKK-GnF2M3ZDHBYx6qJwI8rb4A.webp',
  userAbout: '정보컴퓨터공학부 화이팅',
  location: '부산, 대한민국',
  role: 'developer',
  stack: 'react, c++',
  company: '부산대학교 정보컴퓨터공학부 컴퓨터전공',
  email: 'myw@pusan.ac.kr',
  link: 'https://github.com/myeowon',
  history: '11회 대한민국 해커톤 대상',
  groups: [],
  projects: [],
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
  const [userData, setUserData] = useState(JsonExample);
  const [editableData, setEditableData] = useState(JsonExample);
  const [isEditing, setIsEditing] = useState(false);

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
              marginTop: 1,
              height: 32,
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
          <Typography sx={{ height: 32, marginTop: 3, fontWeight: 300, fontSize: 17 }}>{typo}</Typography>
        )}
      </>
    );
  };

  return (
    <div className="mt-10">
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

      <Box mt={1}>
        <Box
          mt={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: `1px solid ${PICKLE_COLOR.middleGray}`,
            padding: 3,
            borderRadius: '10px',
            width: '49%',
          }}
        >
          <Avatar
            alt={editableData.username}
            src={editableData.userProfileImage}
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
              label="Username"
              value={editableData.username}
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
            <Typography sx={{ marginTop: 1, fontWeight: 600, fontSize: 28 }}>{userData.username}</Typography>
          )}
          {isEditing ? (
            <TextField
              name="userAbout"
              label="userAbout"
              value={editableData.userAbout}
              onChange={handleChange}
              sx={{
                marginTop: 4,
                width: 260,
                overflow: 'auto',

                fontWeight: 300,
                fontSize: 15,
                padding: 0,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  backgroundColor: PICKLE_COLOR.lightGray,
                  fontWeight: 300,
                  fontSize: 15,

                  overflow: 'hidden',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: PICKLE_COLOR.lightGray,
                },
              }}
              multiline
              rows={4}
            />
          ) : (
            <Typography sx={{ marginTop: 3, fontWeight: 300, fontSize: 15 }}>{userData.userAbout}</Typography>
          )}
        </Box>
        <Stack mt={2} direction="row" sx={{ justifyContent: 'space-between' }}>
          {/* //DETAIL */}

          <Stack
            spacing={2}
            sx={{
              border: `1px solid ${PICKLE_COLOR.middleGray}`,
              padding: 3,
              borderRadius: '10px',
              width: '49%',
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
              <InfoOutlinedIcon></InfoOutlinedIcon>
              <DetailsComponent name="role" value={editableData.role} typo={userData.role} />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <BusinessCenterOutlinedIcon></BusinessCenterOutlinedIcon>
              <DetailsComponent name="company" value={editableData.company} typo={userData.company} />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <LanguageOutlinedIcon></LanguageOutlinedIcon>
              <DetailsComponent name="location" value={editableData.location} typo={userData.location} />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <SettingsOutlinedIcon></SettingsOutlinedIcon>
              <DetailsComponent name="stack" value={editableData.stack} typo={userData.stack} />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <EmailOutlinedIcon></EmailOutlinedIcon>
              <DetailsComponent name="email" value={editableData.email} typo={userData.email} />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <InsertLinkOutlinedIcon></InsertLinkOutlinedIcon>
              <DetailsComponent name="link" value={editableData.link} typo={userData.link} />
            </Stack>
          </Stack>
          {/* History */}
          <Stack
            spacing={2}
            sx={{
              border: `1px solid ${PICKLE_COLOR.middleGray}`,
              padding: 3,
              borderRadius: '10px',
              width: '49%',
            }}
          >
            <ContentsTitle title="History"></ContentsTitle>
            <Box item xs={12}>
              {isEditing ? (
                <TextField
                  name="history"
                  label="History"
                  value={editableData.history}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              ) : (
                <Typography variant="body1">{userData.history}</Typography>
              )}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Mypage;
