import React, { useState } from 'react';
import NavbarComponent from 'component/common/navbar/NavbarComponent';
import Footer from 'component/common/footer/Footer';
import styles from '../../css/recipe/category.view.module.css';
import MainImageSection from "../../component/recipe/form/MainImageSection";
import IngredientsSection from "../../component/recipe/form/IngredientsSection";
import SeasoningsSection from "../../component/recipe/form/SeasoningsSection";
import SubItemsSection from "../../component/recipe/form/SubItemsSection";
import RecipeContainer from "../../hooks/RecipeContainer";
import { useParams } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { mainImageFormState, ingredientsFormState, recipeFormState, seasoningsFormState, subItemsFormState } from "../../recoil/recipeState";
import { Button } from "@mui/material";

const RecipeFormPage = () => {
  const { useRecipesDetailQuery } = RecipeContainer();
  const params = useParams();
  const { data: recipeForm, isLoading, isError } = useRecipesDetailQuery(params?.id);

  const [mainImageForm, setMainImageForm] = useRecoilState(mainImageFormState);
  const [ingredientsForm, setIngredientsForm] = useRecoilState(ingredientsFormState);
  const [seasoningsForm, setSeasoningsForm] = useRecoilState(seasoningsFormState);
  const [subItemsForm, setSubItemsForm] = useRecoilState(subItemsFormState);

  const [mainImageFile, setMainImageFile] = useState(null);  // State to hold the image file

  const [inputs, setInputs] = useState({
    mainImageForm,
    ingredientsForm,
    seasoningsForm,
    subItemsForm,
  });

  // Handle save action to send data to the server
  const handleSave = async () => {
    const formData = new FormData();
    if (mainImageFile) {
      formData.append('mainImageForm', mainImageFile);
    }
    formData.append('ingredientsForm', JSON.stringify(inputs.ingredientsForm));
    formData.append('seasoningsForm', JSON.stringify(inputs.seasoningsForm));

    inputs.subItemsForm.forEach((item, index) => {
      formData.append(`subItemsForm[${index}][description]`, item.description);
      if (item.imageFile) {
        formData.append(`subItemsForm[${index}][image]`, item.imageFile);
      }
    });

    // Replace with your actual save logic (e.g., API call)
    console.log('Saving data:', formData);

    // Example: Sending data to an API
    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Save result:', result);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  if (isError) return <div>Error loading recipes</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <NavbarComponent />
      <div className={styles.post_con}>
        <div className="max-w-7xl mx-auto p-8">
          {/* MainImageSection */}
          <MainImageSection
            recipeForm={recipeForm}
            setMainImageFile={setMainImageFile}  // Pass the setMainImageFile function
          />
          {/* IngredientsSection */}
          <IngredientsSection
            ingredientsForm={inputs.ingredientsForm}
            setIngredientsForm={(form) => setInputs((prev) => ({ ...prev, ingredientsForm: form }))}
          />
          {/* SeasoningsSection */}
          <SeasoningsSection
            seasoningsForm={inputs.seasoningsForm}
            setSeasoningsForm={(form) => setInputs((prev) => ({ ...prev, seasoningsForm: form }))}
          />
          {/* SubItemsSection */}
          <SubItemsSection
            subItemsForm={inputs.subItemsForm}
            setSubItemsForm={(form) => setInputs((prev) => ({ ...prev, subItemsForm: form }))}
          />
          <br className="my-32"/>
          {/* Save Button */}
          <Button color="primary" variant="contained" onClick={handleSave} fullWidth>
            저장
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeFormPage;
