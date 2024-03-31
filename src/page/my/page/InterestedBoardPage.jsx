import React, {useEffect} from 'react';
import InterestedBoardWebComponent from "../../../component/my/page/web/interested/board/InterestedBoardWebComponent";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../../recoil/commomState";
import InterestedBoardMobileComponent
  from "../../../component/my/page/mobile/interested/board/InterestedBoardMobileComponent";

const InterestedBoardPage = () => {
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
        innerWidth < 500 ?
          <InterestedBoardMobileComponent/>
          :
          <InterestedBoardWebComponent/>
      }
    </div>
  )
}

export default InterestedBoardPage;