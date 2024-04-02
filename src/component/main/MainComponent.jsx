import React from 'react';
import SiteInfo from "./siteinfo/SiteInfo";
import TodayPick from "./today/pick/TodayPick";
import SoupUpdate from "./soup/update/SoupUpdate";
import Cookingtip from "./cookingtip/Cookingtip";
import Mostread from "./mostread/Mostread";
import Cooking from "./cooking/Cooking";
import Recipe from "./recipe/Recipe";
import ConvenienceRecipe from "./convenience/recipe/ConvenienceRecipe";
import TopButton from "../common/top/button/TopButton";

const MainComponent = () => {
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
}

export default MainComponent;