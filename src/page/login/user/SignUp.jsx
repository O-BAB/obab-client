import React from 'react';
import styles from '../../../css/login/user/loginUser.module.css'
import SignOnUser from "../../../component/login/user/SignUpUser";

const SignUp = () => {
  return (
    <div className={`${styles.loginContainer}`}>
      <SignOnUser/>
    </div>
  );
}

export default SignUp;
