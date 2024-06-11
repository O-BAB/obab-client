import React from 'react';
import UserService from "../service/UserService";

const UserContainer = () => {
  const { connectSignUp, connectLoginUser } = UserService();

  /**
   * (1) 회원가입
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const handleSignUp = async (id, password) => {
    return await connectSignUp(id, password);
  }


  const handleLoginUser = async (id, password) => {
    return await connectLoginUser(id, password)
  }

  return { handleSignUp, handleLoginUser }
}

export default UserContainer;
