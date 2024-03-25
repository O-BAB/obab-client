import React from 'react';
import styles from "../../../../../css/my/page/writeBoard.module.css";

const WriteBoardComponent = () => {
  let arr = ['', '', '', '', '', '']
  return (
    <div className={`${styles?.myPageRouterComponent} py-5 px-5`}>
      <div className={`${styles?.writeBoardContents} flex flex-wrap`}>
        {
          arr.map(() =>
            <div className={`flex flex-col h-96 w-1/4 border-4 mx-12 my-5 p-2`}>
              <img src={`/images/siteinfo/siteinfo.webp`} alt={`이미지`} className={`h-52 border-4`}/>
              <div className={`text-left text-xl py-1`}>{`Easy and Quick Recipes with
Ingredients From Your Fridge`}</div>
              <div className={`text-left py-1 text-sm text-gray-400`}>{`March 5, 2024`}</div>
              <div className={`text-left py-1 text-gray-500`}>{`OBAB is a Korean food and recipe blog that
offers a unique…`}</div>
            </div>
          )
        }
      </div>

      <div className={`m-10 text-blue-400 cursor-pointer text-lg`}>{`더 보기`}</div>
    </div>
  );
}

export default WriteBoardComponent;