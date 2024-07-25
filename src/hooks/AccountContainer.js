import {useNavigate} from "react-router-dom";
import AccountService from "../service/AccountService";
import {useQuery} from "react-query";


const AccountContainer = () => {
  const navigate = useNavigate()

  const { connectUserInfoBookMark, connectUserInfoComment, connectUserInfoWrite} =AccountService();

  /**
   * (1) mypage 오른쪽 컴포넌트 헤더 부분 클릭 시 해당 페이지 이동
   * @param link : 이동 할 경로 설정
   */
  const onClickMyPageMenuBar = (link) => {
    navigate(link)
  }

  /**
   * (2) 북마크 리스트 출력
   * @param page
   * @return {Promise<void>}
   */
  const useBookmark = (page) => {
    console.log(page)
    return useQuery(
      ['bookmark', {page}],
      connectUserInfoBookMark,
      {
        keepPreviousData: true,
        onSuccess: (data) => {
          console.log(data)
        }
      }
    );
  };

  /**
   * (3) 북마크 리스트 출력
   * @param page
   * @return {Promise<void>}
   */
  const useUserinfoWrite = (page) => {
    console.log(page)
    return useQuery(
      ['userInfoWrite', {page}],
      connectUserInfoWrite,
      {
        keepPreviousData: true,
        onSuccess: (data) => {
          console.log(data)
        }
      }
    );
  };

  /**
   * (4) 작성 댓글 리스트 출력
   * @param page
   * @return {Promise<void>}
   */
  const useUserComment = (page) => {
    console.log(page)
    return useQuery(
      ['userComment', {page}],
      connectUserInfoComment,
      {
        keepPreviousData: true,
        onSuccess: (data) => {
          console.log(data)
        }
      }
    );
  };

  return {onClickMyPageMenuBar, useBookmark, useUserinfoWrite, useUserComment}
}

export default AccountContainer
