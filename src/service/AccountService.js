import UseApi from "../util/UseApi";

function AccountService(props) {

  /**
   * 북마크 리스트 출력
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoBookMark = async ({queryKey}) => {
    const [_key, { page }] = queryKey;
    const response = UseApi.get(`${process.env.REACT_APP_API_ROOT}accounts/userinfo/bookmark?page=${page}`);
    return response?.data;
  }

  /**
   * 작성 댓글 리스트 출력
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoComment = async ({queryKey}) => {
    const [_key, { page }] = queryKey;
    const response = UseApi.get(`${process.env.REACT_APP_API_ROOT}accounts/userinfo/comment?page=${page}`);

    return response?.data;
  }

  /**
   * 작성 글 목록
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoWrite = async ({queryKey}) => {
    const [_key, { page }] = queryKey;
    return await UseApi.get(`${process.env.REACT_APP_API_ROOT}accounts/userinfo/write?page=${page}`)
      .then((res) => {
        console.log("조회 성공")
        return res?.data;
      })
      .catch((err) => {
        console.log("조회 실패!!")
        return err;
      });


  }

  return { connectUserInfoBookMark, connectUserInfoComment, connectUserInfoWrite }
}

export default AccountService;
