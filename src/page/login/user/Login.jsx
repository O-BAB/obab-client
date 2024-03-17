import React from 'react';
import styles from '../../../css/login/user/loginUser.module.css'
import LoginUser from "../../../component/login/user/LoginUser";

const Login = () => {
  return (
    <div className={`${styles.loginContainer}`}>
      <LoginUser />
    </div>
  );
}

export default Login;