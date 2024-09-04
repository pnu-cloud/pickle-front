import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import SignupAPI from 'APIs/SignupAPI';
import { PICKLE_COLOR } from 'constants/pickleTheme';
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
    SignupAPI(formData.email, formData.name, formData.password);
    //alert('회원가입에 성공했습니다!');
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
  );
};

export default Signup;
