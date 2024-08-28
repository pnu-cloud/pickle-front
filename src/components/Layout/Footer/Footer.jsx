import React from 'react';
import { Box } from '@mui/material';
import { PICKLE_COLOR, PICKLE_HEIGHT } from 'constants/pickleTheme';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: PICKLE_COLOR.pointOrange, height: PICKLE_HEIGHT.footer }}>
      <Box></Box>
    </Box>
  );
};

export default Footer;
