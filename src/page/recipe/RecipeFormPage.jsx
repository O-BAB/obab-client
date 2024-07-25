import React, {useEffect, useState} from 'react';
import NavbarComponent from 'component/common/navbar/NavbarComponent';
import Footer from 'component/common/footer/Footer';
import styles from '../../css/recipe/category.view.module.css';
import MainImageSection from "../../component/recipe/form/MainImageSection";
import IngredientsSection from "../../component/recipe/form/IngredientsSection";
import ProcessSection from "../../component/recipe/form/ProcessSection";
import RecipeContainer from "../../hooks/RecipeContainer";
import {useParams} from "react-router-dom";
import {useRecoilState, useRecoilValue} from 'recoil';
import {mainImageFormState, recipeFormState} from "../../recoil/recipeState";
import {Button} from "@mui/material";
import {userState} from "../../recoil/userState";

const RecipeFormPage = () => {
  const {useRecipesDetailQuery, saveServerRecipe} = RecipeContainer();
  const params = useParams();
  const { isLoading, isError } = useRecipesDetailQuery(params?.id, {
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  const [recipeForm, setRecipeForm] = useRecoilState(recipeFormState);
  const user = useRecoilValue(userState);

  const [mainImageForm, setMainImageForm] = useRecoilState(mainImageFormState);
  const [mainImageFile, setMainImageFile] = useState(null);  // State to hold the image file

  // 여기는 인풋 - 입력 내용 저장한다
  const [inputs, setInputs] = useState(() => {
    const savedInputs = localStorage.getItem('recipeInputs');
    return savedInputs ? JSON.parse(savedInputs) : recipeForm;
  });

  // Update local state when recipeData is loaded
  useEffect(() => {
    setInputs(recipeForm);
  }, [recipeForm])


  // Handle save action to send interestedBoardData to the server
  const handleSave = async () => {
    // 여기서 본격적으로 저장
    setRecipeForm(inputs);

    let data = {};

    let keys = Object.keys(inputs);

    for (let i = 0; i < keys.length; i++) {
      data[keys[i]] = inputs[keys[i]];
    }

    // 데이터 time 형식 - hh:mm[:ss[.uuuuuu]] 넣는 방식
    const formatTime = (date) => {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    data = {
      ...data,
      time: formatTime(new Date()),
    }

    let arrIngre = [];
    for (let i = 0; i < inputs?.recipeIngredients.length; i++) {
      let recipeIngredients = inputs?.recipeIngredients[i];
      recipeIngredients = {
        ...recipeIngredients,
        id: `${i+1}`,
        type: 'medium'
      } // 임시로 하드 코딩으로 박음, 원래는 이렇게 하면 안됨

      arrIngre.push(recipeIngredients);
    }



    let arrPro = [];
    for (let i = 0; i < inputs?.recipeProcess.length; i++) {
      let recipeProcess = inputs?.recipeProcess[i];

      recipeProcess = {
        ...recipeProcess,
        order: (i+1),
        id: `${i+1}`
      } // 순차적으로 저장

      arrPro.push(recipeProcess);
    }


    data = {
      ...data,
      recipeIngredients: arrIngre,
      recipeProcess: arrPro,
    }

    // API 호출 - 유저 인덱스 번호, 보낼 데이터
    //        현재는 테스트 진행을 위해 일부로 하드코딩으로 보냄
    await saveServerRecipe(data);

    // 저장이 완료되면 로컬 스토리지에서 입력값을 제거합니다.
    localStorage.removeItem('recipeInputs');
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
