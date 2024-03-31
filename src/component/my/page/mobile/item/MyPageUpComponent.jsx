import React from 'react';
import styles from "../../../../../css/my/page/mobile/myPage.mobile.module.css";
import {PersonCircle} from "react-bootstrap-icons";

const MyPageUpComponent = () => {
  return (
    <div className={`${styles?.myPageUpComponent} px-7`}>
      <div className={`w-36 py-4`}>
        <div className={`${styles?.myPageUpProfileImageComponent}`}>
          <PersonCircle className={`${styles?.myPageUpProfileImage}`}/>
        </div>
        <div className={`font-bold text-xl my-4`}>
          {`닉네임`}
        </div>
      </div>
      <div className={`justify-items-start w-70 text-left px-5 my-4`}>
        {`간단한 자기소개 두줄 정도 가나다라마바사 아자차`}
      </div>
      <div className={`justify-items-start w-36 text-left px-5 my-4`}>
        <div className={`flex-col cursor-pointer my-2`}>
          {`페이스북`}
        </div>
        <div className={`flex-col cursor-pointer my-2`}>
          {`트위터`}
        </div>
        <div className={`flex-col cursor-pointer my-2`}>
          {`유튜브`}
        </div>
      </div>
    </div>
  );
}

export default MyPageUpComponent;