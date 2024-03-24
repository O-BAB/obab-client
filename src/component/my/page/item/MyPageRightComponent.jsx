import React from 'react';
import styles from "../../../../css/my/page/myPage.module.css";
import {Outlet} from "react-router-dom";

const MyPageRightComponent = () => {
  return (
    <div className={`${styles?.myPageRightComponent} py-5 px-4`}>
      right : 라우터 컴포넌트 영역
      {/*  이부분은 라우터 컴포넌트를 이용하여 제작하는 영역 */}
      <Outlet/>
    </div>
  );
}

export default MyPageRightComponent;