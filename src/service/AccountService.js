import UseApi from "../util/UseApi";

function AccountService(props) {

  /**
   * 북마크 리스트 출력
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoBookMark = async ({queryKey}) => {
    const [_key, { page }] = queryKey;
    const response = UseApi.get(`${process.env.REACT_APP_API_ROOT}account/userinfo/bookmark?page=${page}`);
    return response?.data;
  }

  /**
   * 작성 댓글 리스트 출력
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoComment = async ({queryKey}) => {
    const [_key, { page }] = queryKey;
    const response = UseApi.get(`${process.env.REACT_APP_API_ROOT}account/userinfo/comment?page=${page}`);

    return response?.data;
  }

  /**
   * 작성 글 목록
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoWrite = async ({queryKey}) => {
    const [_key, { page }] = queryKey;
    const response = UseApi.get(`${process.env.REACT_APP_API_ROOT}account/userinfo/write?page=${page}`);

    return response?.data
  }

  return { connectUserInfoBookMark, connectUserInfoComment, connectUserInfoWrite }
}

export default AccountService;
