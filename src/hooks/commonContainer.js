import {useSetRecoilState} from "recoil";
import {categoriesState} from "../recoil/commomState";

const CommonContainer = () => {
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
  // const handleCategoryClick = (category) => {
  //   onCategorySelect(category.name);
  // };

  /**
   * react hook 으로 반환할 값
   */
  return {handleCategorySelect};
}

export default CommonContainer;