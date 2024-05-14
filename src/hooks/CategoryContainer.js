import CategoryService from "../service/CategoryService";

const CategoryContainer = () => {
  const {connectReceiptList} = CategoryService();
  /**
   * (1) 카테고리에 경로의 따라 제목을 삽입한다.
   * @returns {{displayCategoryTitle: ((function(): string)|*)}} : 제목명 반환
   */
  const displayCategoryTitle = (pathname) => {
    if (pathname.includes('/korean/cuisine')) {
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

  // 레시피 목록 출력
  const displayReceiptList = async (page, pageSize, categoryCD) => {
    if (categoryCD === 'Korean Cuisine') {
      return await connectReceiptList(page, pageSize, 'korean_cuisine')
    } else if (categoryCD === 'Food recipe') {
      return await connectReceiptList(page, pageSize, 'food_recipe')
    } else if (categoryCD === 'Cooking Tips') {
      return await connectReceiptList(page, pageSize, 'cooking_tip')
    } else if (categoryCD === 'Recipe') {
      return await connectReceiptList(page, pageSize, 'recipe')
    } else if (categoryCD === 'Soup Recipe') {
      return await connectReceiptList(page, pageSize, 'soup_recipe')
    } else {
      return "";
    }
  }
  return {displayCategoryTitle, displayReceiptList}
}

export default CategoryContainer;