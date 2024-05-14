import UseApi from "../util/UseApi";

const CategoryService = () => {
  const connectReceiptList = async (page, pageSize, categoryCD) => {
    return await UseApi.get(`${process.env.REACT_APP_API_ROOT}recipes/food-recipes/?page=${page}&pageSize=${pageSize}&categoryCD=${categoryCD}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.error(e);
        return e;
      });
  }
  return {connectReceiptList}
}

export default CategoryService;