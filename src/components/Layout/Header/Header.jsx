import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PICKLE_HEIGHT, PICKLE_COLOR } from 'constants/pickleTheme';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import exImage from 'assets/bluee.svg';

const Header = () => {
  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: PICKLE_COLOR.pointOrange,
    border: `1px solid ${PICKLE_COLOR.pointOrange}`,
  }));
  return (
    <AppBar
      position="sticky"
      className="h-14 sm:h-header"
      sx={{ height: PICKLE_HEIGHT.header, backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <StyledIconButton target="_blank">
            <PersonOutlineOutlinedIcon />
          </StyledIconButton>
          <StyledIconButton target="_blank">
            <SettingsOutlinedIcon />
          </StyledIconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar alt="U" src={exImage} />
            <Typography variant="body1" sx={{ color: '#000', fontWeight: 600 }}>
              User Name
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
