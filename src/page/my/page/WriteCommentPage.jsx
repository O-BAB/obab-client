import React, {useEffect} from 'react';
import WriteCommentComponent from "../../../component/my/page/web/write/comment/WriteCommentWebComponent";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../../recoil/commomState";
import WriteBoardMobileComponent from "../../../component/my/page/mobile/write/board/WriteBoardMobileComponent";
import WriteBoardWebComponent from "../../../component/my/page/web/write/board/WriteBoardWebComponent";
import WriteCommentMobileComponent from "../../../component/my/page/mobile/write/comment/WriteCommentMobileComponent";
import WriteCommentWebComponent from "../../../component/my/page/web/write/comment/WriteCommentWebComponent";

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
        innerWidth < 500 ?
          <WriteCommentMobileComponent/>
          :
          <WriteCommentWebComponent/>
      }
    </div>
  )
}

export default WriteCommentPage;