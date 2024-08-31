import React, {useState} from 'react';
import styles from '../../../css/login/user/loginUser.module.css'
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UserContainer from "../../../hooks/UserContainer";

const SignUp = () => {
  const [inputs, setInputs] = useState({email: "", password: ""});
  const {handleSignUp} = UserContainer();

  const toggleUserInfoOnchange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <div className={`${styles.loginContainer}`}>
      <Container maxWidth="sm">
        <Box sx={{mt: 8}}>
          <Typography variant="h4" component="div" gutterBottom>
            회원가입
          </Typography>
          <Button
            startIcon={<ArrowBackIcon/>}
            onClick={() => {
              window.location.href = '/login'
            }}
            sx={{mb: 2}}
          >
            뒤로가기
          </Button>
          <Box component="form" noValidate sx={{mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="아이디"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={toggleUserInfoOnchange}
              value={inputs.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              onChange={toggleUserInfoOnchange}
              value={inputs.password}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
              onClick={() => {
                handleSignUp(inputs?.email, inputs?.password)
              }}
            >
              회원가입
            </Button>
          </Box>
        </Box>
      </Container></div>
  );
}

export default SignUp;
