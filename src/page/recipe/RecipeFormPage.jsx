import React, {useState} from 'react';
import NavbarComponent from 'component/common/navbar/NavbarComponent';
import Footer from 'component/common/footer/Footer';
import styles from '../../css/recipe/category.view.module.css';
import MainImageSection from "../../component/recipe/form/MainImageSection";
import IngredientsSection from "../../component/recipe/form/IngredientsSection";
import ProcessSection from "../../component/recipe/form/ProcessSection";
import RecipeContainer from "../../hooks/RecipeContainer";
import {useParams} from "react-router-dom";
import {useRecoilState} from 'recoil';
import {mainImageFormState, recipeFormState} from "../../recoil/recipeState";
import {Button} from "@mui/material";

const RecipeFormPage = () => {
  const {useRecipesDetailQuery, saveServerRecipe} = RecipeContainer();
  const params = useParams();
  const {isLoading, isError} = useRecipesDetailQuery(params?.id);

  const [recipeForm, setRecipeForm] = useRecoilState(recipeFormState);

  console.log(recipeForm)

  const [mainImageForm, setMainImageForm] = useRecoilState(mainImageFormState);

  const [mainImageFile, setMainImageFile] = useState(null);  // State to hold the image file

  const [inputs, setInputs] = useState(recipeForm);

  // Handle save action to send data to the server
  const handleSave = async () => {
    // 여기서 본격적으로 저장
    setRecipeForm(inputs);

    const formData = new FormData();
    formData.append('categoryCD', inputs?.categoryCD);
    formData.append('title', inputs?.title);
    formData.append('video', inputs?.video);
    formData.append('intro', inputs?.intro);
    formData.append('time', new Date().toLocaleDateString());
    formData.append('people', inputs?.people);
    formData.append('difficulty', inputs?.difficulty);

    if (!!mainImageFile) {
      formData.append('image', mainImageFile[0]);
    }

    for (let i = 0; i < inputs?.recipeIngredients.length; i++) {
      let recipeIngredients = inputs?.recipeIngredients[i];
      console.log(recipeIngredients);
      recipeIngredients = {
        ...recipeIngredients,
        type: 'medium'
      } // 임시로 하드 코딩으로 박음, 원래는 이렇게 하면 안됨
      formData.append('recipeIngredients', recipeIngredients);
    }

    for (let i = 0; i < inputs?.recipeProcess.length; i++) {
      let recipeProcess = inputs?.recipeProcess[i];

      recipeProcess = {
        ...recipeProcess,
        order: (i+1)
      } // 순차적으로 저장
      formData.append('recipeProcess', recipeProcess);
    }
    // API 호출 - 유저 인덱스 번호, 보낼 데이터
    //        현재는 테스트 진행을 위해 일부로 하드코딩으로 보냄
    await saveServerRecipe(1, formData);
    // await saveServerRecipe(formData);
  };

  if (isError) return <div>Error loading recipes</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <NavbarComponent/>
      <div className={styles.post_con}>
        <div className="max-w-7xl mx-auto p-8">
          {/* MainImageSection */}
          <MainImageSection
            recipeForm={recipeForm}
            setMainImageFile={setMainImageFile}  // Pass the setMainImageFile function
            mainImageForm={mainImageForm}
            setMainImageForm={setMainImageForm}
            inputs={inputs}
            setInputs={setInputs}
          />
          {/* IngredientsSection */}
          <IngredientsSection
            inputs={inputs}
            setInputs={setInputs}
          />
          {/*/!* SeasoningsSection *!/*/}
          {/*<SeasoningsSection*/}
          {/*  seasoningsForm={inputs.seasoningsForm}*/}
          {/*  setSeasoningsForm={(form) => setInputs((prev) => ({...prev, seasoningsForm: form}))}*/}
          {/*/>*/}
          {/* ProcessSection */}
          <ProcessSection
            inputs={inputs}
            setInputs={setInputs}
          />
          <br className="my-32"/>
          {/* Save Button */}
          <Button color="primary" variant="contained" onClick={handleSave} fullWidth>
            저장
          </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RecipeFormPage;
