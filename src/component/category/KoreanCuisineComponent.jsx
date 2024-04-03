import React, {useEffect} from 'react';
import WebCategoryComponent from "./item/WebCategoryComponent";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../recoil/commomState";
import MobileCategoryComponent from "./item/MobileCategoryComponent";

const KoreanCuisineComponent = () => {
  const innerWidth = useRecoilValue(innerWidthState)
  const setInnerWidth = useSetRecoilState(innerWidthState)
  // 반응형 웹 적용
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);
  return (
    <div>
      {
        innerWidth < 860 ?
          <MobileCategoryComponent/>
          :
          <WebCategoryComponent/>
      }
    </div>
  );
}

export default KoreanCuisineComponent;