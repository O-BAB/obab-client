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
      .then((res) => {
        return res
      })
      .catch(((e) => {
        return null
      }))
    return response.data;
  }

  /**
   * (5) 네이버 로그인 연동
   * @param code
   * @return {Promise<*>}
   */
  const connectLoginNaver = async (code) => {
    let response = await UseApi(process.env.REACT_APP_API_ROOT + 'accounts/naver/callback', {code: code})
      .then((res) => {
        return res
      })
      .catch(((e) => {
        return null
      }))
    return response.data;
  }


  return { connectSignUp, connectLoginUser, connectLoginKakao, connectLoginGoogle, connectLoginNaver }
}

export default UserService;
