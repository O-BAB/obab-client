import UseApi from "../util/UseApi";

const UserService = () => {

  /**
   * (1) 회원가입 연동
   * @param email
   * @param password
   * @return {Promise<null>}
   */
  const connectSignUp = async (email, password) => {
    let response = await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/register/', {email: email, password: password})
      .then((res) => {
        alert('회원가입 성공!')
        return res;
      })
      .catch((e) => {
        alert('회원가입 실패!')
        return null;
      })
    return response.data;
  }


  /**
   * (2) 로그인 연동
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const connectLoginUser = async (email, password) => {
    let response = await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/login/', {email: email, password: password})
      .then((res) => {
        alert('로그인 성공')
        return res;
      })
      .catch((e) => {
        return null;
      })
    return response.data;
  }

  return { connectSignUp, connectLoginUser }
}

export default UserService;
