import React from 'react';
import styles from "../../../../../../css/my/page/mobile/interestedBoard.mobile.module.css";
import data from './data'

const InterestedBoardMobileComponent = () => {
  // let arr = ['', '', '', '', '', '']
  return (
    <div className={`${styles?.myPageRouterComponent}`}>
      <div className={`${styles?.interestedBoardContents} w-full flex flex-wrap`}>
        {
          data?.map((d, index) =>
            <div key={index} className={`flex flex-col border-4 w-full my-5 p-2`}>
              <img src={d?.imgPath} alt={`이미지`} className={`h-80 border-4`}/>
              <div className={`text-left text-xl py-1 ${styles?.commonEllipsis}`}>{d?.title}</div>
              <div className={`text-left py-1 text-sm text-gray-400 ${styles?.commonEllipsis}`}>{d?.date}</div>
              <div className={`text-left py-1 text-gray-500 ${styles?.commonEllipsis}`}>{d?.caption}</div>
            </div>
          )
        }
      </div>

      <div className={`m-10 text-blue-400 cursor-pointer text-lg`}>{`더 보기`}</div>
    </div>
  );
}

export default InterestedBoardMobileComponent;