import React from 'react';
import { Box, Stack } from '@mui/material';
import GalleryBox from 'components/Gallery/GalleryBox';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import styled from '@emotion/styled';
const GroupProjects = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        flexWrap: 'nowrap',
        height: 450,
        '&::-webkit-scrollbar': {
          height: 8,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: PICKLE_COLOR.pointOrange,
          borderRadius: 999,
          width: 200,
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: 999,
          backgroundColor: PICKLE_COLOR.lightGray,
        },
      }}
    >
      <Stack direction="row" spacing={4}>
        {props.groupProjects.map((project) => (
          <GalleryBox key={project.projectId} {...project} />
        ))}
      </Stack>
    </Box>
  );
};

export default GroupProjects;
