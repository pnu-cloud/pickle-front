import React from 'react';
import { Box, Typography, Container } from '@mui/material';
const ProjectTexts = (props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 15,
          color: '#000000',
          marginBottom: 3,
        }}
      >
        {props.projectOverview}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 15,
          color: '#858585',
          lineHeight: 1.5,
        }}
      >
        {props.projectDescription}
      </Typography>
    </Box>
  );
};

export default ProjectTexts;
