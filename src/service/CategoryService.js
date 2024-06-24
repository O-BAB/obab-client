import UseApi from "../util/UseApi";

const CategoryService = () => {

  /**
   * (1) API 연동 : GET /recipes/food-recipes, 카테고리별 목록 보기
   * @param page 페이지 index 번호
   * @param pageSize 페이지 출력 최대 갯수
   * @param categoryCD 카테고리
   * @return {Promise<axios.AxiosResponse<any>>} : 성공 결과 값
   */
  const connectRecipesList = async (page, pageSize, categoryCD) => {
    const response = await UseApi.get(`${process.env.REACT_APP_API_ROOT}recipes/food-recipes/?page=${page}&pageSize=${pageSize}&categoryCD=${categoryCD}`)
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
   * @param id
   * @return {Promise<axios.AxiosResponse<any>>}
   */
  const connectRecipesDetail = async (id) => {
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

export default CategoryService;
