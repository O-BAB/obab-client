import NavbarComponent from 'component/common/navbar/NavbarComponent';
import Footer from 'component/common/footer/Footer';
// import CategoryFormComponent from "../../component/recipe/form/CategoryFormComponent";
import styles from '../../css/recipe/category.view.module.css';
import MainImageSection from "../../component/recipe/form/MainImageSection";
import IngredientsSection from "../../component/recipe/form/IngredientsSection";
import SeasoningsSection from "../../component/recipe/form/SeasoningsSection";
import SubItemsSection from "../../component/recipe/form/SubItemsSection";
import CategoryContainer from "../../hooks/CategoryContainer";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


const RecipeFormPage = () => {
  const {displayRecipesDetail} = CategoryContainer();
  const params = useParams();

  useEffect(() => {
    if (params?.id !== 'create') {
      console.log(params?.id)
      displayRecipesDetail(params?.id)
    }
  }, []);

  return (
    <>
      <NavbarComponent/>
      {/*<CategoryFormComponent/>*/}
      <div className={styles.post_con}>
        <div className="max-w-7xl mx-auto p-8">
          <MainImageSection/>
          <IngredientsSection/>
          <SeasoningsSection/>
          <SubItemsSection/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RecipeFormPage;
