import React from 'react';
import {useRecoilValue} from "recoil";
import {recipeFormState} from "../../../recoil/recipeState";

const RecipeSubItems = () => {
  const recipeForm = useRecoilValue(recipeFormState);
  return (
    <div>
      {recipeForm?.recipeSubItems?.map((data, index) => (
        <div key={index} className="flex my-8 items-center">
          <div className="text-2xl font-bold w-1/12 text-center">{index + 1}</div>
          <div className="flex w-11/12 items-center">
            <div className="w-3/4">
              <p className="text-xl font-bold mb-2">{data.recipeProcess}</p>
              <p className="text-lg text-gray-600">{data.recipeComment}</p>
            </div>
            <div className="w-1/4 flex justify-center">
              <img className="w-full h-auto" src={data.recipeImage} alt={`Recipe ${index + 1}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeSubItems;
