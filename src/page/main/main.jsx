import React, {useState} from 'react';
import Navbar from 'component/navbar/navbar';
import SiteInfo from 'component/siteinfo/siteinfo';
import TodayPick from 'component/main_today_pick/main_today_pick';
import SoupUpdate from 'component/main_soup_update/soup_update';
import CookingTip from 'component/main_cookingtip/cookingtip';
import MostRead from 'component/main_mostread/mostread';
import Cooking from 'component/main_cooking/cooking';
import Recipe from 'component/main_recipe/recipe';
import ConvenienceRecipe from 'component/main_convenience_recipe/convenience_recipe';
import TopButton from 'component/top_button/TopButton';
import Footer from 'component/footer/footer';
import CategoryList from 'component/category/category';


const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  /**
   * 이 부분은 개발이 끝나면 제거 할 것!
   * console.log는 가급적이면 사용자가 보이지 않게 한다.
   */
  // console.log('Selected Category:', selectedCategory); // 이 부분을 추가하여 selectedCategory 값을 콘솔에 출력합니다.

  return (
    <>
      <Navbar onCategorySelect={handleCategorySelect}/>
      {selectedCategory === null ? (
        <>
          <SiteInfo/>
          <TodayPick/>
          <SoupUpdate/>
          <CookingTip/>
          <MostRead/>
          <Cooking/>
          <Recipe/>
          <ConvenienceRecipe/>
          <TopButton/>
        </>
      ) : (
        <CategoryList category_title={selectedCategory}/>
      )}
      <Footer/>
    </>
  );
};

export default Main;