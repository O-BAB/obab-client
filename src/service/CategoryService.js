import UseApi from "../util/UseApi";

const CategoryService = () => {

  /**
   * (1) API 연동 : GET /recipes/food-recipes
   * @param page 페이지 index 번호
   * @param pageSize 페이지 출력 최대 갯수
   * @param categoryCD 카테고리
   * @return {Promise<axios.AxiosResponse<any>>} : 성공 결과 값
   */
  const connectRecipesList = async (page, pageSize, categoryCD) => {
    return await UseApi.get(`${process.env.REACT_APP_API_ROOT}recipes/food-recipes/?page=${page}&pageSize=${pageSize}&categoryCD=${categoryCD}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.error(e);
        return e;
      });
  }


  /**
   * (2) API 연동 : GET /recipes/food-recipes/{id}
   * @param id
   * @return {Promise<axios.AxiosResponse<any>>}
   */
  const connectRecipesDetail = async (id) => {
    return await UseApi.get(`${process.env.REACT_APP_API_ROOT}recipes/food-recipes/${id}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.error(e);
        return e;
      })
  }

  return {connectRecipesList, connectRecipesDetail}
}

export default CategoryService;
