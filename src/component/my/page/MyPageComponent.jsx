import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../../recoil/commomState";
import MyPageWebComponent from "./web/MyPageWebComponent";
import MyPageMobileComponent from "./mobile/MyPageMobileComponent";

const MyPageComponent = () => {
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
          <MyPageMobileComponent/>
          :
          <MyPageWebComponent/>
      }
    </div>
  )
}

export default MyPageComponent;