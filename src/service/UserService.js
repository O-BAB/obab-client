import UseApi from "../util/UseApi";

const UserService = () => {

  /**
   * (1) 회원가입 연동
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const connectSignUp = async (id, password) => {
    let response = null;
    await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/register/', {id: id, password: password})
      .then((res) => {
        response = res;
      })
      .catch((e) => {
        response = null;
      })
    return response;
  }


  /**
   * (2) 로그인 연동
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const connectLoginUser = async (id, password) => {
    let response = null;
    await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/login/', {id: id, password: password})
      .then((res) => {
        response = res;
      })
      .catch((e) => {
        response = null;
      })
    return response;
  }

  return { connectSignUp, connectLoginUser }
}

export default UserService;
