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

const GalleryBox2 = (props) => {
  const ProjectCnt = styled(Typography)(() => ({
    marginLeft: 10,
    fontWeight: 400,
    fontSize: 13,
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
        border: `0.7px solid ${PICKLE_COLOR.middleGray}`,
        boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: '20px',
        width: '330px',
        height: '300px',
        alignItems: 'center',
        marginBottom: '25px',
      }}
    >
      <CardHeader
        sx={{ width: '95%', height: '20%' }}
        avatar={<Avatar alt={props.groupName} src={props.groupImage} sx={{ width: '35px', height: '35px' }} />}
        title={props.groupName}
        titleTypographyProps={{
          sx: { fontSize: '15px', fontWeight: 400 },
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
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            width: '95%',
            height: '45%',
            padding: '0',
            overflow: 'hidden',
          }}
        >
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            {props.projectName}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '16px',
              whiteSpace: 'normal',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {props.projectDescription}
          </Typography>
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
          <VisibilityOutlinedIcon sx={{ fontSize: '18px' }} />
          <ProjectCnt>{props.views}</ProjectCnt>
        </ProjectCntIconBtn>
        <ProjectCntIconBtn aria-label="likes" disabled>
          <FavoriteBorderOutlinedIcon sx={{ fontSize: '18px' }} />
          <ProjectCnt>{props.views}</ProjectCnt>
        </ProjectCntIconBtn>
        <Box sx={{ flexGrow: 1 }} />
        <ProjectCntIconBtn aria-label="comments" disabled>
          <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: '18px' }} />
          <ProjectCnt>{props.comments}</ProjectCnt>
        </ProjectCntIconBtn>
      </Stack>
    </Card>
  );
};
export default GalleryBox2;
