import {useSetRecoilState} from "recoil";
import {categoriesState} from "../recoil/commomState";

const CommonContainer = () => {
  // 메인에서 가져옴
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const setSelectedCategory = useSetRecoilState(categoriesState)

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