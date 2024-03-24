import React from 'react';
import Navbar from "../../../component/common/navbar/Navbar";
import MyPageComponent from "../../../component/my/page/MyPageComponent";

const MyPageLayout = () => {
  return (
    <div>
      <Navbar/>
      <MyPageComponent/>
    </div>
  );
}

export default MyPageLayout;