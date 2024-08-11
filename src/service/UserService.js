import UseApi from "../util/UseApi";

const UserService = () => {

  /**
   * (1) 회원가입 연동
   * @param email
   * @param password
   * @return {Promise<null>}
   */
  // const connectSignUp = async (email, password) => {
  const connectSignUp = async (data) => {
    const response = await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/register/', data, { headers: { 'Content-Type': 'multipart/form-interestedBoardData' } });

    return response?.data;
  }


  /**
   * (2) 로그인 연동
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const connectLoginUser = async (data) => {
    const response = await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/login/', data, { headers: { 'Content-Type': 'multipart/form-interestedBoardData' } })
      .then((res) => {
        alert("로그인 성공")
        return res;
      }).catch((e) => {
        alert("로그인 실패")
      })

    return response?.data;
  }

  /**
   * (3) 카카오 로그인 연동
   * @param code
   * @return {Promise<*>}
   */
  const connectLoginKakao = async (code) => {
    const response = await UseApi.get(process.env.REACT_APP_API_ROOT + 'accounts/kakao/callback', {code: code})
      .then((res) => {
        return res
      })
      .catch(((e) => {
        return null
      }))
    return response.data;
  }

  /**
   * (4) 구글 로그인 연동
   * @param code
   * @return {Promise<*>}
   */
  const connectLoginGoogle = async (code) => {
    const response = await UseApi.get(process.env.REACT_APP_API_ROOT + 'accounts/google/callback', {code: code})
    return response.data;
  }

  /**
   * (5) 네이버 로그인 연동
   * @param code
   * @return {Promise<*>}
   */
  const connectLoginNaver = async (code) => {
    const response = await UseApi.get(process.env.REACT_APP_API_ROOT + 'accounts/naver/callback', {code: code})
    return response.data;
  }

  /**
   * (6) 로그아웃 - 토큰 끊기 API
   * @param code
   * @return {Promise<any>}
   */
  const connectLogout = async (code) => {
    const response = await UseApi.get(process.env.REACT_APP_API_ROOT + 'accounts/users/logout/');
    console.log(response)
    return response?.data;
  }


  return { connectSignUp, connectLoginUser, connectLoginKakao, connectLoginGoogle, connectLoginNaver, connectLogout }
}

export default UserService;
