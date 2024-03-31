import React, {useEffect} from 'react';
import WriteBoardWebComponent from "../../../component/my/page/web/write/board/WriteBoardWebComponent";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../../recoil/commomState";
import WriteBoardMobileComponent from "../../../component/my/page/mobile/write/board/WriteBoardMobileComponent";

const WriteBoardPage = () => {
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
          <WriteBoardMobileComponent/>
          :
          <WriteBoardWebComponent/>
      }
    </div>
  )
}

export default WriteBoardPage;