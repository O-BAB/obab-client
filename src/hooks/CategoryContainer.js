const CategoryContainer = () => {
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
  return {displayCategoryTitle}
}

export default CategoryContainer;