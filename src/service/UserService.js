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
    let response = await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/register/', data, { headers: { 'Content-Type': 'multipart/form-data' } });

    return response?.data;
  }


  /**
   * (2) 로그인 연동
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const connectLoginUser = async (data) => {
    let response = await UseApi.post(process.env.REACT_APP_API_ROOT + 'accounts/login/', data, { headers: { 'Content-Type': 'multipart/form-data' } })
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
    let response = await UseApi(process.env.REACT_APP_API_ROOT + 'accounts/kakao/callback', {code: code})
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
    let response = await UseApi(process.env.REACT_APP_API_ROOT + 'accounts/google/callback', {code: code})
    return response.data;
  }

  /**
   * (5) 네이버 로그인 연동
   * @param code
   * @return {Promise<*>}
   */
  const connectLoginNaver = async (code) => {
    let response = await UseApi(process.env.REACT_APP_API_ROOT + 'accounts/naver/callback', {code: code})
    return response.data;
  }


  return { connectSignUp, connectLoginUser, connectLoginKakao, connectLoginGoogle, connectLoginNaver }
}

export default UserService;
