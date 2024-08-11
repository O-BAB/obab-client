import React, {useEffect, useState} from 'react';
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
  const {isLoading, isError} = useRecipesDetailQuery(params?.id, {
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  const [recipeForm, setRecipeForm] = useRecoilState(recipeFormState);

  const [mainImageForm, setMainImageForm] = useRecoilState(mainImageFormState);

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
        id: `${i + 1}`,
        type: 'medium'
      } // 임시로 하드 코딩으로 박음, 원래는 이렇게 하면 안됨

      arrIngre.push(recipeIngredients);
    }


    let arrPro = [];
    for (let i = 0; i < inputs?.recipeProcess.length; i++) {
      let recipeProcess = inputs?.recipeProcess[i];

      recipeProcess = {
        ...recipeProcess,
        order: Number(i + 1),
        id: `${Number(i + 1)}`,

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

    // formData로 변환해서 전송
    const formData = new FormData();
    formData.append('thumnail', data.thumnail);  // 파일 데이터는 그대로 추가
    formData.append('title', data.title);
    formData.append('video', data.video);
    formData.append('intro', data.intro);
    formData.append('time', data.time);
    formData.append('peopleNum', Number(data.peopleNum) || 1);
    formData.append('difficulty', data.difficulty || 'medium');
    formData.append('user', data.user);
    formData.append('likeCount', Number(data.likeCount));
    formData.append('bookmarkCount', Number(data.bookmarkCount));
    formData.append('createdAt', data.createdAt);
    formData.append('updatedAt', data.updatedAt);


    for (let i = 0; i < data?.recipeIngredients.length; i++) {
      formData.append(`recipeIngredients[${i}]`, JSON.stringify(data.recipeIngredients[i]));
    }

    for (let i = 0; i < data?.recipeProcess.length; i++) {
      formData.append(`recipeProcess[${i}]`, data.recipeProcess[i]);
    }
    // for (let i = 0; i < data.recipeProcess.length; i++) {
    //   const process = data.recipeProcess[i];
    //   formData.append(`recipeProcess[${i}]['order']`, process.order);
    //   formData.append(`recipeProcess[${i}]['id']`, process.id);
    //   formData.append(`recipeProcess[${i}]['content']`, process.content);
    //
    //   if (process.image && process.image instanceof File) {
    //     formData.append(`recipeProcess[${i}]['image']`, process.image);
    //   } else {
    //     formData.append(`recipeProcess[${i}]['image']`, "");
    //   }
    // }
    await saveServerRecipe(formData);

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
