import React from 'react';
import styles from "../../../../../css/my/page/writeComment.module.css";
import {CardList} from "react-bootstrap-icons";

const WriteBoardComponent = () => {
  let arr = ['', '', '', '', '', '']
  return (
    <div className={`${styles?.myPageRouterComponent} py-5 px-5`}>
      <div className={``}>
        {
          arr.map(() =>
            <div className={`flex flex-col flex-wrap border-4 border-b-black`}>
              <div className={`flex flex-wrap flex-row items-center justify-items-center py-2`}>
                <div className={`flex flex-col px-10 text-xl text-orange-600`}>곰돌이곰곰</div>
                <div className={`flex flex-col px-10 text-lg text-gray-400`}>111.111.xxx.111</div>
                <div className={`flex flex-col px-10 text-lg text-gray-400`}>2024-01-11 21:59</div>
              </div>
              <div className={`flex flex-wrap flex-row px-10 py-2`}>
                {`오늘도 양질의 포스터를 보고 갑니다.`}
              </div>
              <div className={`flex flex-wrap flex-row px-10 py-3 items-center`}>
                <CardList className={`mr-2`}/> {`  소프트웨어 아키텍처`}
              </div>
            </div>
          )
        }
      </div>

      <div className={`m-10 text-blue-400 cursor-pointer text-lg`}>{`더 보기`}</div>
    </div>
  );
}

export default WriteBoardComponent;