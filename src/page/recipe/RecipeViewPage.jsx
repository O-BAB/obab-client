import NavbarComponent from 'component/common/navbar/NavbarComponent';
import Footer from 'component/common/footer/Footer';
import {useRecoilState} from "recoil";
import {recipeFormState} from "../../recoil/recipeState";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import RecipeContainer from "../../hooks/RecipeContainer";
import RecipeHeader from "../../component/recipe/view/RecipeHeader";
import RecipeIngredients from "../../component/recipe/view/RecipeIngredients";
import RecipeSubItems from "../../component/recipe/view/RecipeSubItems";
import CookingItems from "../../component/recipe/view/CookingItems";
import {useQuery} from "react-query";

const sampleCategoryData = {
  id: 2,
  title: '특정 카테고리의 레시피',
  thumbnailUrl: '/images/siteinfo/siteinfo.webp',
  createdAt: "2024-05-14T17:58:57.658834",
  likeCount: 10,
  user: 'test@admin.com',
  intro: '음식에 대한 간단한 소개가 들어가면 좋을 것 같아요',
  recipeIngredients: [
    {name: '간장', amount: '3숟갈'},
    {name: '고추장', amount: '2숟갈'},
    {name: '설탕', amount: '1숟갈'},
  ],
  recipeSubItems: [
    {
      recipeProcess: '1. 재료를 준비합니다.',
      recipeComment: '재료는 신선한 것으로 준비해주세요.',
      recipeImage: '/images/siteinfo/siteinfo.webp',
    },
    {
      recipeProcess: '2. 재료를 손질합니다.',
      recipeComment: '깨끗이 씻어서 준비해주세요.',
      recipeImage: '/images/siteinfo/siteinfo.webp',
    },
    {
      recipeProcess: '3. 요리를 시작합니다.',
      recipeComment: '중간중간 불 조절에 신경써주세요.',
      recipeImage: '/images/siteinfo/siteinfo.webp',
    },
  ],
  cookingItems: [
    {
      image: '/images/siteinfo/siteinfo.webp',
      name: '간단한 요리 1',
      date: '2024-01-01',
      content: '간단한 요리 설명 1',
    },
    {
      image: '/images/siteinfo/siteinfo.webp',
      name: '간단한 요리 2',
      date: '2024-01-02',
      content: '간단한 요리 설명 2',
    },
    {
      image: '/images/siteinfo/siteinfo.webp',
      name: '간단한 요리 3',
      date: '2024-01-03',
      content: '간단한 요리 설명 3',
    },
  ],
};

function RecipeViewPage() {
  const [recipeForm, setRecipeForm] = useRecoilState(recipeFormState);
  const {useRecipesDetailQuery} = RecipeContainer();
  const params = useParams();
  const { isLoading, isError } = useRecipesDetailQuery(params?.id);

  // useEffect(() => {
  //   // 실제 데이터 가져오기
  //   displayRecipesDetail(params.id)
  //     .then((res) => {
  //       // setRecipeForm(res);
  //       setRecipeForm(sampleCategoryData);
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       // 샘플 데이터 설정
  //       setRecipeForm(sampleCategoryData);
  //     });
  // }, [params.id]);
  console.log(recipeForm)

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading recipes</div>;
  return (
    <>
      <NavbarComponent/>
      {/*<RecipeViewComponent/>*/}
      <div className="mt-8 px-40">
        <h2 className="text-3xl font-bold text-center mb-4">
          {recipeForm?.title}
        </h2>
        <RecipeHeader data={recipeForm} />
        <RecipeIngredients ingredients={recipeForm.recipeIngredients} />
        <div className="my-12 border-t-2 border-gray-300"></div>
        <RecipeSubItems subItems={recipeForm.recipeSubItems} />
        <CookingItems cookingItems={recipeForm.cookingItems} />
      </div>
      <Footer/>
    </>
  );
};
export default RecipeViewPage;
