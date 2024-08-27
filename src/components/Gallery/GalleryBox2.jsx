import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  CardActionArea,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import exImg from 'assets/friends.svg';

const GalleryBox2 = (props) => {
  const ProjectCnt = styled(Typography)(() => ({
    marginLeft: 10,
    fontWeight: 400,
    fontSize: 15,
    width: 25,
    textAlign: 'left',
  }));
  const ProjectCntIconBtn = styled(IconButton)(({}) => ({
    color: PICKLE_COLOR.middleBlack,
    '&.Mui-disabled': {
      color: PICKLE_COLOR.middleBlack,
      opacity: 0.7,
    },
  }));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${PICKLE_COLOR.middleGray}`,
        boxShadow: 'none',
        borderRadius: '20px',
        width: '330px',
        height: '290px',
        alignItems: 'center',
        marginBottom: '25px',
      }}
    >
      <CardHeader
        sx={{ width: '95%', height: '20%' }}
        avatar={<Avatar alt={props.groupName} src={props.groupImage} sx={{ width: '40px', height: '40px' }} />}
        title={props.groupName}
        titleTypographyProps={{
          sx: { fontSize: '18px', fontWeight: 400 },
        }}
      ></CardHeader>
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '65%',
          width: '90%',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            borderRadius: '10px',
            width: '100%',
            height: '50%',
            background: PICKLE_COLOR.lightGray,
          }}
          src={props.projectImage}
          alt="Project image"
        />
        <CardContent sx={{ width: '100%', height: '45%', padding: '0' }}>
          <Typography sx={{ fontSize: 17, fontWeight: 700 }}>{props.projectName}</Typography>
          <Typography sx={{ fontSize: 13 }}>{props.projectDescription}</Typography>
        </CardContent>
      </CardActionArea>
      <Stack
        direction="row"
        sx={{
          height: '15%',
          width: '90%',
          boxSizing: 'border-box',
          padding: 0,
          margin: '0 auto',
          alignItems: 'center',
        }}
      >
        <ProjectCntIconBtn aria-label="views" disabled>
          <VisibilityOutlinedIcon />
          <ProjectCnt>{props.views}</ProjectCnt>
        </ProjectCntIconBtn>
        <ProjectCntIconBtn aria-label="likes" disabled>
          <FavoriteBorderOutlinedIcon />
          <ProjectCnt>{props.views}</ProjectCnt>
        </ProjectCntIconBtn>
        <Box sx={{ flexGrow: 1 }} />
        <ProjectCntIconBtn aria-label="comments" disabled>
          <ChatBubbleOutlineOutlinedIcon />
          <ProjectCnt>{props.comments}</ProjectCnt>
        </ProjectCntIconBtn>
      </Stack>
    </Card>
  );
};
export default GalleryBox2;
