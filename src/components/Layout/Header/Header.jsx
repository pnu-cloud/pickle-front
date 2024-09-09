import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchUserInfo from '../../../APIs/homeApi';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PICKLE_HEIGHT, PICKLE_COLOR } from 'constants/pickleTheme';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Header = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: '', userImage: '' });
  const [loading, setLoading] = useState(true);

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
    navigate('/Mypage');
  };

  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (!token) {
      console.warn('Token not found. Redirecting to login page.');
      navigate('/login');
      return;
    }

    const getUserInfo = async () => {
      try {
        const data = await fetchUserInfo();
        setUserInfo(data);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    getUserInfo();
  }, [navigate]);

  if (loading) {
    return null;
  }

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
            <Avatar alt="U" src={userInfo?.userImage} />
            <Typography variant="body1" sx={{ color: '#000', fontWeight: 600 }}>
              {userInfo?.username || 'User Name'}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
