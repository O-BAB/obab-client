import React from 'react';
import UserService from "../service/UserService";
import {useSetRecoilState} from "recoil";
import {userState} from "../recoil/userState";

const UserContainer = () => {
  const { connectSignUp, connectLoginUser } = UserService();
  const setUser = useSetRecoilState(userState);

  /**
   * (1) 회원가입
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const handleSignUp = async (email, password) => {
    const response = await connectSignUp(email, password)
    if (!!response) {
      window.location.href = '/'
    }
  }


  const handleLoginUser = async (email, password) => {
    const response = await connectLoginUser(email, password)
    console.log(response)
    if (!!response) {
      sessionStorage.setItem('accessToken', response?.data?.accessToken)
      sessionStorage.setItem('refreshToken', response?.data?.refreshToken)
      window.location.href = '/'
      // setUser({email: response?.data?.email})
    }
  }

  return { handleSignUp, handleLoginUser }
}

export default UserContainer;
