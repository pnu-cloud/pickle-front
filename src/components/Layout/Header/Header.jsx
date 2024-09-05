import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PICKLE_HEIGHT, PICKLE_COLOR } from 'constants/pickleTheme';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import exImage from 'assets/bluee.svg';

const Header = () => {
  const navigate = useNavigate();

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: PICKLE_COLOR.pointOrange,
    border: `1px solid ${PICKLE_COLOR.pointOrange}`,
  }));

  const handleLogout = () => {
    // localStorage.removeItem('Token');
    localStorage.clear();
    navigate('/login');
  };
  const handleGotoMypage = () => {
    navigate('/mypage');
  };
  return (
    <AppBar
      position="absolute"
      className="h-14 sm:h-header"
      sx={{
        height: PICKLE_HEIGHT.header,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar className="flex items-center justify-end h-full mr-2 sm:mr-4">
        <Box className="flex items-center gap-2">
          <StyledIconButton onClick={handleGotoMypage} target="_blank">
            <PersonOutlineOutlinedIcon />
          </StyledIconButton>
          <StyledIconButton onClick={handleLogout} target="_blank">
            <LogoutOutlinedIcon />
          </StyledIconButton>
          <Box className="flex items-center gap-3 ml-4">
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
