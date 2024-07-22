import UserService from "../service/UserService";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {userState} from "../recoil/userState";

const UserContainer = () => {
  const {connectSignUp, connectLoginUser, connectLogout} = UserService();
  const setUser = useSetRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  /**
   * (1) 회원가입
   * @param id
   * @param password
   * @return {Promise<null>}
   */
  const handleSignUp = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await connectSignUp(formData);
    // const response = await connectSignUp(email, password)

    if (!!response) {
      window.location.href = '/'
    }
  }


  /**
   * (2) 로그인
   * @param email
   * @param password
   * @return {Promise<void>}
   */
  const handleLoginUser = async (email, password) => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);


    const response = await connectLoginUser(formData)
    // const response = await connectLoginUser(email, password)
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
      sessionStorage.setItem('accessToken', response?.accessToken)
      sessionStorage.setItem('refreshToken', response?.refreshToken)

      // const accessJwtDecoded = jwtDecode(response?.accessToken);
      // const refreshJwtDecoded = jwtDecode(response?.accessToken);

      setUser({
        id: response?.id,
        nickname: response?.nickname,
        email: response?.email,
      });
      // window.location.href = '/'
    }
  }

  const handleLogout = async () => {
    await connectLogout()
      .then(() => {
        alert("로그아웃 성공")
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken');
        resetUser();
      })
      .catch((e) => {
        alert("로그아웃 실패")
        throw e;
      });
  }


  return {handleSignUp, handleLoginUser, handleLogout}
}

export default UserContainer;
