import React from 'react';
import Navbar from "../../../component/common/navbar/Navbar";
import styles from '../../../css/my/page/myPage.module.css'

const MyPage = () => {
  return (
    <div>
      <Navbar />
      <div className={`${styles?.myPageComponent}`}>
        <div className={`${styles?.myPageLeftComponent}`}>
          left
        </div>
        <div className={`${styles?.myPageRightComponent}`}>
          right
        </div>
      </div>
    </div>
  );
}

export default MyPage;