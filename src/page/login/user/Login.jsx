import React, {useState} from 'react';
import styles from '../../../css/login/user/loginUser.module.css'
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import UserContainer from "../../../hooks/UserContainer";

const Login = () => {
  const [inputs, setInputs] = useState({email: "", password: ""});
  const {handleLoginUser} = UserContainer();

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
            로그인
          </Typography>
          <Button
            startIcon={<ArrowBackIcon/>}
            onClick={() => {
              window.location.href = './'
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
              onClick={() => handleLoginUser(inputs?.email, inputs?.password)}
            >
              로그인
            </Button>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              sx={{mb: 2}}
              onClick={() => {
                window.location.href = './signup'
              }}
            >
              회원가입
            </Button>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    mb: 1,
                    backgroundColor: '#DB4437',
                    color: '#fff',
                    '&:hover': {backgroundColor: '#c33d2e'}
                  }}
                  startIcon={<GoogleIcon/>}
                >
                  구글
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    mb: 1,
                    backgroundColor: '#FEE500',
                    color: '#000',
                    '&:hover': {backgroundColor: '#e6c900'}
                  }}
                  startIcon={<ChatIcon/>}
                >
                  카카오톡
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    mb: 1,
                    backgroundColor: '#1EC800',
                    color: '#fff',
                    '&:hover': {backgroundColor: '#1aaf00'}
                  }}
                  startIcon={<ChatBubbleIcon/>}
                >
                  네이버
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
