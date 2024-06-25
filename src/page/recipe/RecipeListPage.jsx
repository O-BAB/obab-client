import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {innerWidthState} from "../../recoil/commomState";
import MobileCategoryComponent from "../../component/recipe/MobileCategoryComponent";
import WebCategoryComponent from "../../component/recipe/WebCategoryComponent";
import RecipeContainer from "../../hooks/RecipeContainer";

const RecipeListPage = () => {
  const {useRecipesListQuery} = RecipeContainer();
  const {isLoading, isError} = useRecipesListQuery(1, 10);

  const innerWidth = useRecoilValue(innerWidthState)
  const setInnerWidth = useSetRecoilState(innerWidthState)
  // 반응형 웹 적용
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading recipes</div>;
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
