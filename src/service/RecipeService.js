import UseApi from "../util/UseApi";

const RecipeService = () => {

  /**
   * (1) API 연동 : GET /recipes/food-recipes, 카테고리별 목록 보기
   * @queryKey 리액트 쿼리에서 파라미터 받아오고 해당 파라미터 적용
   * @return {Promise<axios.AxiosResponse<any>>} : 성공 결과 값
   */
  const connectRecipesList = async ({queryKey}) => {
    const [_key, { page, pageSize, categoryCD }] = queryKey;
    const response = await UseApi.get(`${process.env.REACT_APP_API_ROOT}recipes/food-recipes`,{
      params: {page, pageSize, categoryCD}
    })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.error(e);
        return e;
      });

    return response.data;
  }


  /**
   * (2) API 연동 : GET /recipes/food-recipes/{id}, 레시피 상세 조회
   * @param queryKey 쿼리키 받아옴
   * @return {Promise<axios.AxiosResponse<any>>}
   */
  const connectRecipesDetail = async ({queryKey}) => {
    const [_key, { id }] = queryKey;

    // ReactQuery가 실행 안되게 수행함
    // URL이 /recipe/form/create 일 때!
    // 추가인경우만 id 값이 create, 나머지는 숫자로 표시
    // 이는 파라미터에 해당함
    if (id === 'create') {
      return null;
    }

    const response = await UseApi.get(`${process.env.REACT_APP_API_ROOT}recipes/food-recipes/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.error(e);
        return e;
      })

    return response.data;
  }

  /**
   * (3) 레시피 삭제
   * @param id
   * @return {Promise<void>}
   */
  const connectRecipesDelete = async (id) => {
    const response = await UseApi.delete(`${process.env.REACT_APP_API_ROOT}recipes/food-recipes/${id}`)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return null;
      })

    return response.data;
  }

  /**
   * (4) 편의점 레시피 생성
   * @param data
   * @return {Promise<any>}
   */
  const connectConvenienceCreate = async (data) => {
    const response = await UseApi.post(`${process.env.REACT_APP_API_ROOT}recipes/convenience`, data)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return null;
      })

    return response.data;
  }

  /**
   * (5) 편의점 레시피 수정
   * @param data
   * @return {Promise<any>}
   */
  const connectConvenienceUpdate = async (id, data) => {
    const response = await UseApi.put(`${process.env.REACT_APP_API_ROOT}recipes/convenience${id}`, data)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return null
      })

    return response.data;
  }

  /**
   * (6) 일반 레시피 생성
   * @param data
   * @return {Promise<any>}
   */
  const connectBasicCreate = async (data) => {
    const response = await UseApi.post(`${process.env.REACT_APP_API_ROOT}recipes/basic`, data)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return null;
      })

    return response.data;
  }

  /**
   * (7) 일반 레시피 수정
   * @param id
   * @param data
   * @return {Promise<any>}
   */
  const connectBasicUpdate = async (id, data) => {
    const response = await UseApi.put(`${process.env.REACT_APP_API_ROOT}recipes/basic`, data)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return null
      })
    return response.data;
  }

  return {
    connectRecipesList,
    connectRecipesDetail,
    connectRecipesDelete,
    connectConvenienceCreate,
    connectConvenienceUpdate,
    connectBasicCreate,
    connectBasicUpdate
  }
}

export default RecipeService;
