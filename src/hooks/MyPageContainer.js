import {useNavigate} from "react-router-dom";
import AccountService from "../service/AccountService";


const MyPageContainer = () => {
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
  const handleBookmark = async (page) => {
    const data = connectUserInfoBookMark(page);


  }


  return {onClickMyPageMenuBar}
}

export default MyPageContainer
