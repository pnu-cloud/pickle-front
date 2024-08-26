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
import styled from '@emotion/styled';

import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { PICKLE_COLOR } from 'constants/pickleTheme';

const GalleryBox = (props) => {
  const ProjectCnt = styled(Typography)(() => ({
    marginLeft: 10,
    fontWeight: 400,
    fontSize: 15,
    width: 25,
    textAlign: 'left',
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
      <CardActionArea>
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
            sx: { fontSize: 22, fontWeight: 'bold' }, // 원하는 글자 크기와 굵기 설정
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
            <Typography sx={{ fontSize: 28, fontWeight: 700 }}>{props.projectName}</Typography>
            <Typography sx={{ fontSize: 18, fontWeight: 400 }}>{props.projectDescription}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      <Stack direction="row" sx={{ width: 408, boxSizing: 'border-box', padding: 0, margin: '0 auto' }}>
        <IconButton aria-label="views">
          <VisibilityIcon />
          <ProjectCnt>{props.views}</ProjectCnt>
        </IconButton>
        <IconButton aria-label="likes">
          <FavoriteIcon />
          <ProjectCnt>{props.views}</ProjectCnt>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton aria-label="comments">
          <ChatBubbleIcon />
          <ProjectCnt>{props.comments}</ProjectCnt>
        </IconButton>
      </Stack>
    </Card>
  );
};

export default GalleryBox;
