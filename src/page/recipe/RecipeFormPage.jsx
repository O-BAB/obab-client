import NavbarComponent from 'component/common/navbar/NavbarComponent';
import Footer from 'component/common/footer/Footer';
import styles from '../../css/recipe/category.view.module.css';
import MainImageSection from "../../component/recipe/form/MainImageSection";
import IngredientsSection from "../../component/recipe/form/IngredientsSection";
import SeasoningsSection from "../../component/recipe/form/SeasoningsSection";
import SubItemsSection from "../../component/recipe/form/SubItemsSection";
import RecipeContainer from "../../hooks/RecipeContainer";
import {useParams} from "react-router-dom";


const RecipeFormPage = () => {
  const {useRecipesDetailQuery} = RecipeContainer();
  const params = useParams();
  const {isLoading, isError} = useRecipesDetailQuery(params?.id);

  if (isError) return <div>Error loading recipes</div>;
  if (isLoading) return <div>Loading...</div>;
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
