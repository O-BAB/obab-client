import React, {useRef} from 'react';
import {recipeFormState} from "../../../recoil/recipeState";
import {Info} from "@mui/icons-material";

const RecipeIngredients = () => {
  const recipeForm = useRef(recipeFormState);

  /**
   * recipeIngredients 데이터 형식
   * {
   *   id: 번호
   *   type: 양념장,
   *   name: 명
   *   count: 갯수
   *   unit: 단위
   *   etc: 기타
   * }
   */
  return (
    <div className="mt-12">
      <div className="text-xl font-bold mt-4 text-center">재료</div>
      <div className="flex flex-wrap mt-4">
        {recipeForm?.recipeIngredients?.map((ingredient, index) => (
          <div
            key={index}
            className="w-1/2 flex justify-between items-center text-gray-600 list-none text-lg border-b border-gray-300 py-2 px-4"
          >
            <div className="flex items-center">
              <div className="mr-2">{ingredient?.name}</div>
              <Info className="cursor-pointer" onClick={() => alert(`${ingredient?.name} 클릭`)} />
            </div>
            <div>{`${ingredient?.count} ${ingredient?.unit}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeIngredients;
