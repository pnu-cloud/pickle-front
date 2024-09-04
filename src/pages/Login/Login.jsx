import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import LoginAPI from 'APIs/LoginAPI';
import { PICKLE_COLOR } from 'constants/pickleTheme';
const Login = () => {
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
    LoginAPI(formData.email, formData.password);
    alert(`${formData.email}님 로그인에 성공했습니다!`);
    console.log(formData);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        mt: 8,
      }}
    >
      <Box component="form" onSubmit={onHandleSubmit}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{
            fontWeight: 'bold',
            color: PICKLE_COLOR.pointOrange,
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
        <Link href="#" underline="hover" sx={{ color: '#bfbfbf', mr: 1 }}>
          회원가입
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
