import {useNavigate} from "react-router-dom";
import AccountService from "../service/AccountService";
import {useQuery} from "react-query";
import {userinfoBookmarkState, userinfoCommentWriteState, userinfoRecipeWriteState} from "../recoil/userState";
import {useSetRecoilState} from "recoil";


const AccountContainer = () => {
  const navigate = useNavigate()

  const { connectUserInfoBookMark, connectUserInfoComment, connectUserInfoWrite} =AccountService();

  // 북마크 리스트 출력
  const setUserinfoBookmarkState = useSetRecoilState(userinfoBookmarkState);
  // 레시피 글 쓴 리스트 출력 한것 recoil state 로 관리
  const setUserInfoRecipeWrite = useSetRecoilState(userinfoRecipeWriteState);
  // 작성 댓글 recoil state로 리스트 관리
  const setUserInfoCommentWrite= useSetRecoilState(userinfoCommentWriteState);

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
          setUserinfoBookmarkState(data?.data?.results)
        }
      }
    );
  };

  /**
   * (3) 레시피 글 목록 리스트 출력
   * @param page
   * @return {Promise<void>}
   */
  const useUserinfoWrite = (page) => {
    return useQuery(
      ['userInfoWrite', {page}],
      connectUserInfoWrite,
      {
        keepPreviousData: true,
        onSuccess: (data) => {
          console.log(data)
          setUserInfoRecipeWrite(data?.results)
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
          setUserInfoCommentWrite(data?.data?.results)
        },
      }
    );
  };

  return {onClickMyPageMenuBar, useBookmark, useUserinfoWrite, useUserComment}
}

export default AccountContainer
