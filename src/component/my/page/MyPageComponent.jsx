import React from 'react';
import styles from "../../../css/my/page/myPage.module.css";
import MyPageLeftComponent from "./item/MyPageLeftComponent";
import MyPageRightComponent from "./item/MyPageRightComponent";

const MyPageComponent = () => {
  return (
    <div className={`${styles?.myPageComponent}`}>

      {/* web 기준 - left : 프로필 소개 */}
      <MyPageLeftComponent/>

      {/* web 기준 - right : 마이페이지 라우터 컴포넌트 부분 */}
      <MyPageRightComponent/>

    </div>
  );
}

export default MyPageComponent;