import {useNavigate} from "react-router-dom";


const MyPageContainer = () => {
  const navigate = useNavigate()

  /**
   * (1) mypage 오른쪽 컴포넌트 헤더 부분 클릭 시 해당 페이지 이동
   * @param link : 이동 할 경로 설정
   */
  const onClickMyPageMenuBar = (link) => {
    navigate(link)
  }

  return {onClickMyPageMenuBar}
}

export default MyPageContainer