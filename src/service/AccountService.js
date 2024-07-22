import UseApi from "../util/UseApi";

function AccountService(props) {

  /**
   * 북마크 리스트 출력
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoBookMark = async (page) => {
    const response = UseApi.get(`${process.env.REACT_APP_API_URL}/account/userinfo/bookmark?page=${page}`);

    return response?.data;
  }

  /**
   * 작성 댓글 리스트 출력
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoComment = async (page) => {
    const response = UseApi.get(`${process.env.REACT_APP_API_URL}/account/userinfo/comment?page=${page}`);

    return response?.data;
  }

  /**
   * 작성 글 목록
   * @param page
   * @return {Promise<*>}
   */
  const connectUserInfoWrite = async (page) => {
    const response = UseApi.get(`${process.env.REACT_APP_API_URL}/account/userinfo/write/${page}`);

    return response?.data
  }

  return { connectUserInfoBookMark, connectUserInfoComment, connectUserInfoWrite }
}

export default AccountService;
