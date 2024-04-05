import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../../recoil/commomState";
import WebNavbarComponent from "./web/WebNavbarComponent";
import MobileNavbarComponent from "./mobile/MobileNavbarComponent";

function NavbarComponent() {
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
          <MobileNavbarComponent/>
          :
          <WebNavbarComponent/>
      }
    </div>
  );
}

export default NavbarComponent;
