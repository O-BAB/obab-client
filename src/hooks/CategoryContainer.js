import CategoryService from "../service/CategoryService";

const CategoryContainer = () => {
  const {connectReceiptList} = CategoryService();
  /**
   * (1) 카테고리에 경로의 따라 제목을 삽입한다.
   * @returns {{displayCategoryTitle: ((function(): string)|*)}} : 제목명 반환
   */
  const displayCategoryTitle = (pathname) => {
    if (pathname === '/korean/cuisine') {
      return "Korean Cuisine"
    } else if (pathname === '/food/recipe') {
      return "Food recipe"
    } else if (pathname === '/cooking/tips') {
      return "Cooking Tips"
    } else if (pathname === '/recipe') {
      return "Recipe"
    } else if (pathname === '/soup/recipe') {
      return "Soup Recipe"
    } else {
      return "";
    }
  }

  // 레시피 목록 출력
  const displayReceiptList = (page, pageSize, categoryCD) => {
    console.log(page, pageSize, categoryCD)
    if (categoryCD === 'Korean Cuisine') {
      return connectReceiptList(page, pageSize, 'korean_cuisine')
    } else if (categoryCD === 'Food recipe') {
      return connectReceiptList(page, pageSize, 'food_recipe')
    } else if (categoryCD === 'Cooking Tips') {
      return connectReceiptList(page, pageSize, 'cooking_tip')
    } else if (categoryCD === 'Recipe') {
      return connectReceiptList(page, pageSize, 'recipe')
    } else if (categoryCD === 'Soup Recipe') {
      return connectReceiptList(page, pageSize, 'soup_recipe')
    } else {
      return "";
    }
  }
  return {displayCategoryTitle, displayReceiptList}
}

export default CategoryContainer;