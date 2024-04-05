import React from 'react';
import NavbarComponent from "../../../component/common/navbar/NavbarComponent";
import MyPageComponent from "../../../component/my/page/MyPageComponent";

const MyPageLayout = () => {
  return (
    <div>
      <NavbarComponent/>
      <MyPageComponent/>
    </div>
  );
}

export default MyPageLayout;