import React from 'react';
import { Box } from '@mui/material';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import galleryCover from 'assets/galleryCover.svg';

const Home = () => {
  return (
    <Box>
      <img src={galleryCover} style={{ width: '100%' }} />
    </Box>
  );
};

export default Home;
