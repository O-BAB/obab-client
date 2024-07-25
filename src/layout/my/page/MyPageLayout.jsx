import React, {useEffect} from 'react';
import NavbarComponent from "../../../component/common/navbar/NavbarComponent";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../../recoil/commomState";
import MyPageUpComponent from "../../../component/my-page/mobile/item/MyPageUpComponent";
import MyPageDownComponent from "../../../component/my-page/mobile/item/MyPageDownComponent";
import MyPageLeftComponent from "../../../component/my-page/web/item/MyPageLeftComponent";
import MyPageRightComponent from "../../../component/my-page/web/item/MyPageRightComponent";

const MyPageLayout = () => {
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
          <div>
            <NavbarComponent/>
            <div className={`max-w-full mx-auto`}>
              {/* web 기준 - left : 프로필 소개 */}
              <MyPageUpComponent/>

              {/* web 기준 - right : 마이페이지 라우터 컴포넌트 부분 */}
              <MyPageDownComponent/>
            </div>
          </div>
          :
          <div>
            <NavbarComponent/>
            <div className="flex flex-row max-w-[1440px] mx-auto">
              {/* web 기준 - left : 프로필 소개 */}
              <MyPageLeftComponent/>

              {/* web 기준 - right : 마이페이지 라우터 컴포넌트 부분 */}
              <MyPageRightComponent/>
            </div>
          </div>
      }
    </div>
  );
}

export default MyPageLayout;
