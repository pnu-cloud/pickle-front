import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import LoginAPI from 'APIs/LoginAPI';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import { useNavigate } from 'react-router-dom';
import galleryCover from 'assets/galleryCover.svg';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // API
    LoginAPI(formData.email, formData.password)
      .then((data) => {
        console.log(data);
        // alert(formData.email + '님 안녕하세요!');
        console.log('Sign-in successful:', data);
        localStorage.clear();
        localStorage.setItem('Token', data.data.jwt);
        localStorage.setItem('email', formData.email);
        // let ACCESS_TOKEN = localStorage.getItem("Token");
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error during sign-in:', error);
      });
  };

  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // Important for positioning the pseudo-element
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${galleryCover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5, // Adjust the opacity as needed
          zIndex: -1, // Keep the background behind the content
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '15%',
          justifyContent: 'center',
          mt: 3,
        }}
      >
        <Logo></Logo>
      </Box>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          mt: 2,
          background: 'white',
        }}
      >
        <Box component="form" onSubmit={onHandleSubmit}>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            sx={{
              fontWeight: 'bold',
              color: PICKLE_COLOR.darkGray,
              mb: 3,
            }}
          >
            로그인
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
            <Email sx={{ color: '#bfbfbf', mr: 1, my: 0.5, mb: 2 }} />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일"
              placeholder="test@test.com"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={onHandleChange}
              InputLabelProps={{ style: { color: '#bfbfbf' } }}
              InputProps={{
                style: { borderBottom: '1px solid #bfbfbf' },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
            <Lock sx={{ color: '#bfbfbf', mr: 1, my: 0.5, mb: 2 }} />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              placeholder="test"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={onHandleChange}
              InputLabelProps={{ style: { color: '#bfbfbf' } }}
              InputProps={{
                style: { borderBottom: '1px solid #bfbfbf' },
              }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              mb: 2,
              color: PICKLE_COLOR.pointOrange,
              border: `2px solid ${PICKLE_COLOR.pointOrange}`,
              '&:hover': {
                border: `2px solid ${PICKLE_COLOR.pointOrange}`,
              },
              borderRadius: '20px',
            }}
          >
            LOG IN
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Link href="/signup" underline="hover" sx={{ color: PICKLE_COLOR.darkGray, mr: 1 }}>
            회원가입
          </Link>
        </Box>
      </Container>
    </Container>
  );
};

export default Login;
