import React, {useState} from 'react';
import Navbar from 'component/common/navbar/Navbar';
import Siteinfo from 'component/siteinfo/Siteinfo';
import TopButton from 'component/common/top/button/TopButton';
import SoupUpdate from "../../component/main/soup/update/SoupUpdate";
import Cookingtip from "../../component/main/cookingtip/Cookingtip";
import Mostread from "../../component/main/mostread/Mostread";
import Cooking from "../../component/main/cooking/Cooking";
import Recipe from "../../component/main/recipe/Recipe";
import TodayPick from "../../component/main/today/pick/TodayPick";
import ConvenienceRecipe from "../../component/main/convenience/recipe/ConvenienceRecipe";
import Category from "../../component/category/Category";
import Footer from "../../component/common/footer/Footer";
import {useRecoilValue} from "recoil";
import {categoriesState} from "../../recoil/commomState";


const Main = () => {
  /**
   * CommonContainer 로 옮김
   */
  // const [selectedCategory, setSelectedCategory] = useState(null);
  //
  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };
  /**
   * 아래는 recoil로 상태 관리로 전역 변수로 선언
   */
  const selectedCategory = useRecoilValue(categoriesState)
  /**
   * 아래는 handleCategorySelect를 commonContainer.js로 빼고, react hook에서 불려온다.
   */


  /**
   * 이 부분은 개발이 끝나면 제거 할 것!
   * console.log는 가급적이면 사용자가 보이지 않게 한다.
   */
  // console.log('Selected Category:', selectedCategory); // 이 부분을 추가하여 selectedCategory 값을 콘솔에 출력합니다.

  return (
    <>
      {/*<Navbar onCategorySelect={handleCategorySelect}/>*/}
      <Navbar />
      {/*{selectedCategory === null ? (*/}
      {!!!selectedCategory ? (
        <>
          <Siteinfo/>
          <TodayPick/>
          <SoupUpdate/>
          <Cookingtip/>
          <Mostread/>
          <Cooking/>
          <Recipe/>
          <ConvenienceRecipe/>
          <TopButton/>
        </>
      ) : (
        <Category />
        // <Category category_title={selectedCategory}/>
      )}
      <Footer/>
    </>
  );
};

export default Main;