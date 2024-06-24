import {useSetRecoilState} from "recoil";
import {categoriesState} from "../recoil/commomState";
import {useNavigate} from "react-router-dom";

const CommonContainer = () => {
  const navigate = useNavigate();
  // 메인에서 가져옴
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const setSelectedCategory = useSetRecoilState(categoriesState)

  /**
   * (1) Header 메뉴에서 각 카테고리 클릭 시 메뉴 변경
   * @param category : 카테고리 목록 정보의 대해 불려옴
   */
  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
  };

  // navbar 에서 가져옴
  // const handleCategoryClick = (recipe) => {
  //   onCategorySelect(recipe.name);
  // };


  /**
   * (2) Header 메뉴 클릭 시 해당 페이지 출력
   * @param link
   */
  const onClickMovingMenu = (link) => {
    navigate(link)
  }


  /**
   * react hook 으로 반환할 값
   */
  return {handleCategorySelect, onClickMovingMenu};
}

export default CommonContainer;
