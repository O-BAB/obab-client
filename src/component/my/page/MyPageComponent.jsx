import React from 'react';
import styles from "../../../css/my/page/myPage.module.css";
import MyPageLeftComponent from "./item/MyPageLeftComponent";

const MyPageComponent = () => {
  return (
    <div className={`${styles?.myPageComponent}`}>

      {/* web 기준 - left : 프로필 소개 */}
      <MyPageLeftComponent/>
      <div className={`${styles?.myPageRightComponent} py-5 px-4`}>
        right : 라우터 컴포넌트 영역
        {/*  이부분은 라우터 컴포넌트를 이용하여 제작하는 영역 */}
      </div>
    </div>
  );
}

export default MyPageComponent;