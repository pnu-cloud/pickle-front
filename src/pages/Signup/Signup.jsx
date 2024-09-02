import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Signup = () => {
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
    // API
    alert('회원가입에 성공했습니다!');
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
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        align="center"
        sx={{
          fontWeight: 'bold',
          color: 'white',
          mb: 3,
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
            style: { color: '#fff', borderBottom: '1px solid #bfbfbf' },
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
          InputLabelProps={{ style: { color: '#bfbfbf' } }}
          InputProps={{
            style: { color: '#fff', borderBottom: '1px solid #bfbfbf' },
          }}
        />
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
          }}
        />
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
          SIGN UP
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
