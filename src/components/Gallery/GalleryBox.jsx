import React from 'react';
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { PICKLE_COLOR } from 'constants/pickleTheme';

const GalleryBox = (props) => {
  const navigate = useNavigate(); // React Router에서 페이지 이동을 위한 hook

  const handleCardClick = () => {
    localStorage.setItem('groupName', props.groupName);
    localStorage.setItem('likes', props.likes);
    navigate(`/project/${props.projectId}`);
  };
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
        width: 442,
        minWidth: 349,
        height: 413,
        border: `1px solid ${PICKLE_COLOR.middleGray}`,
        boxShadow: '0px 3px 7px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
      }}
    >
      <CardActionArea onClick={handleCardClick}>
        <CardHeader
          avatar={
            <Avatar
              alt={props.groupName}
              src={props.groupImage}
              sx={{ width: 50, height: 50, background: PICKLE_COLOR.lightGray }}
            ></Avatar>
          }
          title={props.groupName}
          titleTypographyProps={{
            sx: { fontSize: 22, fontWeight: 400 }, // 원하는 글자 크기와 굵기 설정
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component="img"
            sx={{ borderRadius: '10px', width: 394, height: 140, background: PICKLE_COLOR.lightGray }}
            src={props.projectImage}
            alt="Project"
          />
        </Box>
        <Box sx={{ width: 394, height: 140, boxSizing: 'border-box', padding: 0, margin: '0 auto' }}>
          <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
            <Typography sx={{ fontSize: 28, fontWeight: 500 }}>{props.projectName}</Typography>
            <Typography sx={{ fontSize: 18, fontWeight: 400, color: PICKLE_COLOR.middleBlack }}>
              {props.projectDescription}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      <Stack direction="row" sx={{ width: 408, boxSizing: 'border-box', padding: 0, margin: '0 auto' }}>
        <ProjectCntIconBtn aria-label="views" disabled>
          <VisibilityOutlinedIcon />
          <ProjectCnt>{props.views}</ProjectCnt>
        </ProjectCntIconBtn>
        <ProjectCntIconBtn aria-label="likes" disabled>
          <FavoriteBorderOutlinedIcon />
          <ProjectCnt>{props.likes}</ProjectCnt>
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

export default GalleryBox;
