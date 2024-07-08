import RecipeService from "../service/RecipeService";
import {useSetRecoilState} from "recoil";
import {categoryTitleState, recipeFormState, recipesState} from "../recoil/recipeState";
import {useLocation} from "react-router-dom";
import {useQuery} from "react-query";

const RecipeContainer = () => {
  const {connectRecipesList, connectRecipesDetail} = RecipeService();
  const { pathname } = useLocation();
  const setRecipes= useSetRecoilState(recipesState);
  const setCategoryTitle = useSetRecoilState(categoryTitleState);
  const setRecipeForm = useSetRecoilState(recipeFormState);

  /**
   * 코드 북 : 경로의 따라 제목 매핑
   * @type {{"/broadcast-recipe": string, "/convenience-store-combination": string, "/food-recipe": string, "/seasoning-recipe": string, "/cooking-tip": string, "/menu-recommend": string}}
   */
  const categoryMapping = {
    '/menu-recommend': "메뉴 추천",
    '/food-recipe': "음식 레시피",
    '/broadcast-recipe': "방송 레시피",
    '/convenience-store-combination': "편의점 꿀조합",
    '/seasoning-recipe': "양념 레시피",
    '/cooking-tip': "요리 TIP"
  };

  /**
   * 경로의 따라 카테고리CD 대입
   * @param pathname 경로의 따른 카테고리명 설정
   * @return {string}
   */
  const getCategoryCD = (pathname) => {
    if (pathname.includes('/menu-recommend')) return 'menu_recommend';
    if (pathname.includes('/food-recipe')) return 'food_recipe';
    if (pathname.includes('/broadcast-recipe')) return 'broadcast_recipe';
    if (pathname.includes('/convenience-store-combination')) return 'convenience_store_combination';
    if (pathname.includes('/seasoning-recipe')) return 'seasoning_recipe';
    if (pathname.includes('/cooking-tip')) return 'cooking_tip';
    return '';
  };

  // 제목
  const categoryTitle = categoryMapping[pathname] || "기타 레시피";
  // 카테고리명 확정
  const categoryCD = getCategoryCD(pathname);

  // 데이터 가공 함수
  const processRecipesList = (data) => {
    return {
      count: data?.count,
      next: data?.next,
      previous: data?.previous,
      results: data?.results,
      // recipes: data.data,
      // page: data.page,
      // pageSize: data.pageSize,
      // total: data.total,
    };
  };

  const fetchRecipesList = async ({ queryKey }) => {
    // const response = await connectRecipesList(page, pageSize, categoryCD);
    const response = await connectRecipesList({queryKey});
    return processRecipesList(response);
  };

  /**
   * 1) category 별 제목과 Recipe에 해당하는 리스트 출력
   * @param page 페이지 인덱스 번호
   * @param pageSize 페이지 갯수
   * @return {Promise<*|string>} :
   */
  const useRecipesListQuery = (page, pageSize) => {
    return useQuery(
      ['recipes', { page, pageSize, categoryCD }],
      fetchRecipesList,
      {
        enabled: !!categoryCD,
        onSuccess: (data) => {
          console.log(data)
          setRecipes(data?.results);
          // setRecipes(data.recipes);
          setCategoryTitle(categoryTitle);
        }
      }
    );
  };

  /**
   * (2) api 호출 - 음식 레시피 detail 부분
   * @param id 카테고리 인덱스 번호
   * @return {Promise<*>} 인덱스 결과 값
   */
  const useRecipesDetailQuery = (id) => {
    return useQuery(
      ['recipeForm', {id}],
      connectRecipesDetail, {
        enabled: !!id,
        onSuccess: (data) =>  {
          setRecipeForm(data);
        }
      }
    )
  }


  // /**
  //  * (2) api 호출 - 음식 레시피 detail 부분
  //  * @param id 카테고리 인덱스 번호
  //  * @return {Promise<*>} 인덱스 결과 값
  //  */
  // const displayRecipesDetail = async (id) => {
  //   const response = await connectRecipesDetail(id);
  //   setRecipeForm(response)
  // }

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

  // return {displayRecipesList, displayRecipesDetail, handlerDateFormatter}
  return {useRecipesListQuery, useRecipesDetailQuery, handlerDateFormatter}
}

export default RecipeContainer;
