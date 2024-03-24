import React from 'react';
import styles from "../../../../css/my/page/myPage.module.css";
import {PersonCircle} from "react-bootstrap-icons";

const MyPageLeftComponent = () => {
  return (
    <div className={`${styles?.myPageLeftComponent} py-5 px-7`}>
      <div className={`${styles?.myPageLeftProfileImageComponent}`}>
        <PersonCircle className={`${styles?.myPageLeftProfileImage}`}/>
      </div>
      <div className={`font-bold text-xl my-4`}>
        {`닉네임`}
      </div>
      <div className={`justify-items-start text-left px-7 my-5`}>
        {`간단한 자기소개 두줄 정도 가나다라마바사 아자차`}
      </div>
      <div className={`justify-items-start text-left px-7 my-5`}>
        <div className={`flex-col cursor-pointer my-3 `}>
          {`페이스북`}
        </div>
        <div className={`flex-col cursor-pointer my-3`}>
          {`트위터`}
        </div>
        <div className={`flex-col cursor-pointer my-3`}>
          {`유튜브`}
        </div>
      </div>
    </div>
  );
}

export default MyPageLeftComponent;