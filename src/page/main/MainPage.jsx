import React from 'react';
import SiteInfo from "../../component/main/siteinfo/SiteInfo";
import TodayPick from "../../component/main/today/pick/TodayPick";
import SoupUpdate from "../../component/main/soup/update/SoupUpdate";
import Cookingtip from "../../component/main/cookingtip/Cookingtip";
import Mostread from "../../component/main/mostread/Mostread";
import Cooking from "../../component/main/cooking/Cooking";
import Recipe from "../../component/main/recipe/Recipe";
import ConvenienceRecipe from "../../component/main/convenience/recipe/ConvenienceRecipe";
import TopButton from "../../component/common/top/button/TopButton";


const MainPage = () => {
  return (
    <div>
      <SiteInfo/>
      <TodayPick/>
      <SoupUpdate/>
      <Cookingtip/>
      <Mostread/>
      <Cooking/>
      <Recipe/>
      <ConvenienceRecipe/>
      <TopButton/>
    </div>
  );
};

export default MainPage;
