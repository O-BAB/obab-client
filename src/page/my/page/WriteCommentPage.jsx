import React, {useEffect} from 'react';
import WriteCommentWebComponent from "../../../component/my/page/web/write/comment/WriteCommentWebComponent";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../../recoil/commomState";
import WriteCommentMobileComponent from "../../../component/my/page/mobile/write/comment/WriteCommentMobileComponent";

const WriteCommentPage = () => {
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
          <WriteCommentMobileComponent/>
          :
          <WriteCommentWebComponent/>
      }
    </div>
  )
}

export default WriteCommentPage;