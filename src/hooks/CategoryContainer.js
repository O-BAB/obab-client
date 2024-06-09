import CategoryService from "../service/CategoryService";

const CategoryContainer = () => {
  const {connectRecipesList, connectRecipesDetail} = CategoryService();
  /**
   * (1) 카테고리에 경로의 따라 제목을 삽입한다.
   * @returns {{displayCategoryTitle: ((function(): string)|*)}} : 제목명 반환
   */
  const displayCategoryTitle = (pathname) => {
    if (pathname.includes('/menu/recommend')) {
      return "메뉴 추천"
    } else if (pathname.includes('/korean/cuisine')) {
      return "Korean Cuisine"
    } else if (pathname.includes('/food/recipe')) {
      return "Food recipe"
    } else if (pathname.includes('/cooking/tips')) {
      return "Cooking Tips"
    } else if (pathname.includes('/soup/recipe')) {
      return "Soup Recipe"
    } else if (pathname.includes('/recipe')) {
      return "Recipe"
    } else {
      return "";
    }
  }

  /**
   * 2) url 경로의 따라 category 형변환 후 API 호출 후 결과 값 반환
   * @param page 페이지 인덱스 번호
   * @param pageSize 페이지 갯수
   * @param categoryCD 카테코리 코드(제목으로 검색)
   * @return {Promise<*|string>} :
   */
  const displayRecipesList = async (page, pageSize, categoryCD) => {
    if (categoryCD === 'Korean Cuisine') {
      return await connectRecipesList(page, pageSize, 'korean_cuisine')
    } else if (categoryCD === 'Food recipe') {
      return await connectRecipesList(page, pageSize, 'food_recipe')
    } else if (categoryCD === 'Cooking Tips') {
      return await connectRecipesList(page, pageSize, 'cooking_tip')
    } else if (categoryCD === 'Recipe') {
      return await connectRecipesList(page, pageSize, 'recipe')
    } else if (categoryCD === 'Soup Recipe') {
      return await connectRecipesList(page, pageSize, 'soup_recipe')
    } else {
      return "";
    }
  }

  /**
   * (3) api 호출 - 음식 레시피 detail 부분
   * @param id 카테고리 인덱스 번호
   * @return {Promise<*>} 인덱스 결과 값
   */
  const displayRecipesDetail = async (id) => {
    return await connectRecipesDetail(id);
  }

  return {displayCategoryTitle, displayRecipesList, displayRecipesDetail}
}

export default CategoryContainer;
