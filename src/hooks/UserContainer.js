import React from 'react';
import UserService from "../service/UserService";

const UserContainer = () => {
  const { connectSignOn, connectLoginUser } = UserService();

  /**
   * (1) 회원가입
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const handleSignOn = async (id, password) => {
    return await connectSignOn(id, password);
  }


  const handleLoginUser = async (id, password) => {
    return await connectLoginUser(id, password)
  }

  return { handleSignOn, handleLoginUser }
}

export default UserContainer;
