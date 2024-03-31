import React from 'react';
import styles from "../../../../css/my/page/mobile/myPage.mobile.module.css";
import MyPageUpComponent from "./item/MyPageUpComponent";
import MyPageDownComponent from "./item/MyPageDownComponent";

const MyPageMobileComponent = () => {
  return (
    <div className={`${styles?.myPageComponent}`}>

      {/* web 기준 - left : 프로필 소개 */}
      <MyPageUpComponent/>

      {/* web 기준 - right : 마이페이지 라우터 컴포넌트 부분 */}
      <MyPageDownComponent/>

    </div>
  );
}

export default MyPageMobileComponent;