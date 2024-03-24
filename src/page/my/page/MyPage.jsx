import React from 'react';
import Navbar from "../../../component/common/navbar/Navbar";
import styles from '../../../css/my/page/myPage.module.css'

const MyPage = () => {
  return (
    <div>
      <Navbar />
      <div className={`${styles?.myPageComponent}`}>
        <div className={`${styles?.myPageLeftComponent} py-5 px-4`}>
          left : 메뉴를 고정으로 박는다.
          <div className={``}>
           본인 이미지
          </div>
          <div className={``}>
            닉네임
          </div>
          <div className={``}>
            간략 자기소개
          </div>
          <div className={``}>
            페이스북
            트위터
            유튜브 등록
          </div>
        </div>
        <div className={`${styles?.myPageRightComponent} py-5 px-4`}>
          right : 라우터 컴포넌트 영역
        {/*  이부분은 라우터 컴포넌트를 이용하여 제작하는 영역 */}
        </div>
      </div>
    </div>
  );
}

export default MyPage;