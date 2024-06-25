import RecipeService from "../service/RecipeService";
import {useSetRecoilState} from "recoil";
import {categoryTitleState, recipeFormState, recipesState} from "../recoil/recipeState";
import {useLocation} from "react-router-dom";

const RecipeContainer = () => {
  const {connectRecipesList, connectRecipesDetail} = RecipeService();
  const { pathname } = useLocation();
  const setRecipes= useSetRecoilState(recipesState);
  const setCategoryTitle = useSetRecoilState(categoryTitleState);
  const setRecipeForm = useSetRecoilState(recipeFormState);
  /**
   * 1) category 별 제목과 Recipe에 해당하는 리스트 출력
   * @param page 페이지 인덱스 번호
   * @param pageSize 페이지 갯수
   * @param categoryCD 카테코리 코드(제목으로 검색)
   * @return {Promise<*|string>} :
   */
  const displayRecipesList = async (page, pageSize) => {
    let response = '';
    /**
     * data(Array=1) :
     * {id: 2, categoryCD: 'food_recipe', user: 'hunsik416@naver.com', title: '음식레시피', thumnailUrl: 'img/broadcast_recipe/2024/4/21/user_1/thumnail_20240421_admin_337221_.jpg', …}
     * links :
     * { next: null, previous: null }
     * page: 1
     * pageSize: 10
     * total: 1
     */
    if (pathname.includes('/menu/recommend')) {
      setCategoryTitle("메뉴 추천")
    } else if (pathname.includes('/korean/cuisine')) {
      response = await connectRecipesList(page, pageSize, 'korean_cuisine')
      setRecipes(response.data);
      setCategoryTitle("Korean Cuisine")
    } else if (pathname.includes('/food/recipe')) {
      response = await connectRecipesList(page, pageSize, 'food_recipe')
      setRecipes(response.data);
      setCategoryTitle("Food recipe")
    } else if (pathname.includes('/cooking/tips')) {
      response = await connectRecipesList(page, pageSize, 'cooking_tip')
      setRecipes(response.data);
      setCategoryTitle("Cooking Tips")
    } else if (pathname.includes('/soup/recipe')) {
      response = await connectRecipesList(page, pageSize, 'recipe')
      setRecipes(response.data);
      setCategoryTitle("Soup Recipe")
    } else if (pathname.includes('/recipe')) {
      response = await connectRecipesList(page, pageSize, 'soup_recipe')
      setRecipes(response.data);
      setCategoryTitle("Recipe")
    }
  }

  /**
   * (2) api 호출 - 음식 레시피 detail 부분
   * @param id 카테고리 인덱스 번호
   * @return {Promise<*>} 인덱스 결과 값
   */
  const displayRecipesDetail = async (id) => {
    const response = await connectRecipesDetail(id);
    setRecipeForm(response)
  }

  /**
   * (3) 날짜 형 변환
   * @param date
   * @return {string}
   */
  const handlerDateFormatter = (date) => {
    return new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  return {displayRecipesList, displayRecipesDetail, handlerDateFormatter}
}

export default RecipeContainer;