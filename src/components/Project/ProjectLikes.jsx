import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Typography, Stack } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
const ProjectLikes = (props) => {
  const local_likes = localStorage.getItem('likes');
  const [likesCount, setLikesCount] = useState(local_likes); // Initial count

  const handleLikeClick = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Stack direction="row" sx={{ alignItems: 'flex-end', fontWeight: 500, fontSize: 15 }}>
        <Typography sx={{ marginRight: 1 }}>좋아요</Typography>
        <Typography
          sx={{
            fontSize: 18,
            color: PICKLE_COLOR.pointOrange,
          }}
        >
          {local_likes}
        </Typography>
        <Typography>개</Typography>
      </Stack>
      <IconButton
        onClick={handleLikeClick}
        sx={{
          height: 34,

          border: '1px solid #858585',
          borderRadius: '5px',
        }}
      >
        <FavoriteBorderOutlinedIcon outlined style={{ fontSize: 18, color: '#858585', marginRight: 2 }} />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 15,

            color: '#858585',
          }}
        >
          좋아요
        </Typography>
      </IconButton>
    </Stack>
  );
};
export default ProjectLikes;
