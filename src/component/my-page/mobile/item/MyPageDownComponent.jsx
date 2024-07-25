import React from 'react';
import {Outlet} from "react-router-dom";
import MyPageContainer from "../../../../hooks/MyPageContainer";

const MyPageDownComponent = () => {
  const {onClickMyPageMenuBar} = MyPageContainer();
  return (
    <div className={`w-full min-h-[50vh] py-5 px-4`}>
      {/*  이부분은 라우터 컴포넌트를 이용하여 제작하는 영역 */}
      <div className={`flex justify-between flex-row px-5 py-3 mx-8`}>
        <div className={`cursor-pointer`} onClick={() => {
          onClickMyPageMenuBar('interested/board')
        }}>관심 글
        </div>
        <div className={`cursor-pointer`} onClick={() => {
          onClickMyPageMenuBar('write/board')
        }}>작성 글
        </div>
        <div className={`cursor-pointer`} onClick={() => {
          onClickMyPageMenuBar('write/comment')
        }}>작성 댓글
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default MyPageDownComponent;
