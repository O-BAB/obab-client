import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../recoil/commomState";
import MobileCategoryComponent from "../../component/recipe/MobileCategoryComponent";
import WebCategoryComponent from "../../component/recipe/WebCategoryComponent";
import RecipeContainer from "../../hooks/RecipeContainer";
import {useLocation} from "react-router-dom";

const RecipeListPage = () => {
  const {displayRecipesList} = RecipeContainer();
  const { pathname } = useLocation();
  const innerWidth = useRecoilValue(innerWidthState)
  const setInnerWidth = useSetRecoilState(innerWidthState)
  // 반응형 웹 적용
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  useEffect(() => {
    // 아래는 1~10 페이지로 먼저 하드코딩으로 테스트
    // 페이지 네이션은 다음 스탭으로 이룰 예정
    displayRecipesList(1, 10);
  }, [pathname]);
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

export default RecipeListPage;
