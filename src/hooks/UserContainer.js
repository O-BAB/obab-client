import React from 'react';
import UserService from "../service/UserService";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {userState} from "../recoil/userState";

const UserContainer = () => {
  const { connectSignUp, connectLoginUser } = UserService();
  const setUser = useSetRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

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
    /**
     *    "userInfo": {
     *       "id": number,
     *       "email": string,
     *       "name": null,
     *       "nickname": null,
     *       "profileImg": null,
     *       "selfInfo": null,
     *       "createdAt":
     *       "updatedAt":
     *     }
     */
    if (!!response) {
      sessionStorage.setItem('accessToken', response?.data?.accessToken)
      sessionStorage.setItem('refreshToken', response?.data?.refreshToken)
      setUser(response?.data?.userInfo);
      window.location.href = '/'
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken');
    resetUser();
  }



  return { handleSignUp, handleLoginUser, handleLogout }
}

export default UserContainer;
