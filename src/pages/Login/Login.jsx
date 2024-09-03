import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';

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
    alert(`${formData.email}님 로그인에 성공했습니다!`);
    console.log(formData);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        backgroundColor: '#333',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        mt: 8,
        color: 'white',
      }}
    >
      <Box component="form" onSubmit={onHandleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
          <Email sx={{ color: 'white', mr: 1, my: 0.5 }} />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={onHandleChange}
            InputLabelProps={{ style: { color: '#bfbfbf' } }}
            InputProps={{
              style: { color: '#fff', borderBottom: '1px solid #bfbfbf' },
              disableUnderline: true,
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
          <Lock sx={{ color: 'white', mr: 1, my: 0.5 }} />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={onHandleChange}
            InputLabelProps={{ style: { color: '#bfbfbf' } }}
            InputProps={{
              style: { color: '#fff', borderBottom: '1px solid #bfbfbf' },
              disableUnderline: true,
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
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: '#bfbfbf',
            },
            borderRadius: '20px',
          }}
        >
          LOG IN
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Link href="#" underline="hover" sx={{ color: '#bfbfbf' }}>
          회원가입
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
