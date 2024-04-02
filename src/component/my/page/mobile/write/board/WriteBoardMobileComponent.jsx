import React from 'react';
import styles from "../../../../../../css/my/page/mobile/writeBoard.mobile.module.css";

const WriteBoardMobileComponent = () => {
  let arr = ['', '', '', '', '', '']
  return (
    <div className={`${styles?.myPageRouterComponent}`}>
      <div className={`${styles?.writeBoardContents} w-full flex flex-wrap`}>
        {
          arr.map(() =>
            <div className={`flex flex-col border-4 w-full my-5 p-2`}>
              <img src={`/images/siteinfo/siteinfo.webp`} alt={`이미지`} className={`h-80 border-4`}/>
              <div className={`text-left text-xl py-1 ${styles?.commonEllipsis}`}>{`Easy and Quick Recipes with
Ingredients From Your Fridge`}</div>
              <div className={`text-left py-1 text-sm text-gray-400 ${styles?.commonEllipsis}`}>{`March 5, 2024`}</div>
              <div className={`text-left py-1 text-gray-500 ${styles?.commonEllipsis}`}>{`OBAB is a Korean food and recipe blog that
offers a unique…`}</div>
            </div>
          )
        }
      </div>

      <div className={`m-10 text-blue-400 cursor-pointer text-lg`}>{`더 보기`}</div>
    </div>
  );
}

export default WriteBoardMobileComponent;