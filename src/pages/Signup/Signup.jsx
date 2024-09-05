import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import SignupAPI from 'APIs/SignupAPI';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { PICKLE_COLOR } from 'constants/pickleTheme';
import { useNavigate } from 'react-router-dom';
import galleryCover from 'assets/galleryCover.svg';
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onHandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    // API 호출
    SignupAPI(formData.email, formData.name, formData.password)
      .then((data) => {
        alert(formData.email + '님 반가워요!');
        console.log('Sign-up successful:', data);

        // 로그인 페이지로 이동
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message); // 에러 메시지를 alert로 표시
        console.error('Error during sign-up:', error);
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
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{
            fontWeight: 'bold',
            color: PICKLE_COLOR.darkGray,
            mb: 2,
          }}
        >
          회원가입
        </Typography>
        <Box component="form" onSubmit={onHandleSubmit}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="name"
            label="이름"
            name="name"
            autoComplete="name"
            autoFocus
            value={formData.name}
            onChange={onHandleChange}
            InputLabelProps={{ style: { color: '#bfbfbf' } }}
            InputProps={{
              style: { borderBottom: '1px solid #bfbfbf', backgroundColor: 'transparent' },
            }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={onHandleChange}
            InputLabelProps={{
              style: { color: '#bfbfbf' },
            }}
            InputProps={{
              style: { borderBottom: '1px solid #bfbfbf', backgroundColor: 'transparent' },
            }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            placeholder="(최소 8자 이상, 최대 20자 이하)"
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
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              mb: 2,
              color: 'PICKLE_COLOR.pointOrange',
              border: `2px solid ${PICKLE_COLOR.pointOrange}`,
              '&:hover': {
                border: `2px solid ${PICKLE_COLOR.pointOrange}`,
              },
              borderRadius: '20px',
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default Signup;
