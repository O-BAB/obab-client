import React from 'react';
import {useNavigate} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import {recipeFormState} from "../../../recoil/recipeState";
import recipeContainer from "../../../hooks/RecipeContainer";
import {IconButton, Typography} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

const RecipeHeader = () => {
  const navigate = useNavigate();
  const recipeForm = useRecoilValue(recipeFormState);
  const { handlerDateFormatter } = recipeContainer();

  const handleEdit = (id) => {
    // 수정하기 핸들러 로직 추가
    navigate(`/recipe/form/${id}`);
  };

  const handleDelete = (id) => {
    // 삭제하기 핸들러 로직 추가
    console.log('삭제하기 클릭됨');
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute top-4 right-4 flex space-x-2">
        <IconButton color="primary" onClick={() => handleEdit(recipeForm?.id)}>
          <Edit />
        </IconButton>
        <IconButton color="secondary" onClick={() => handleDelete(recipeForm?.id)}>
          <Delete />
        </IconButton>
      </div>
      <img className="w-2/3 mx-auto" src={recipeForm?.thumbnailUrl} alt="Thumbnail" />
      <div className="w-2/3 mt-4 bg-white bg-opacity-75 text-black p-4 text-left">
        <Typography variant="h5" className="font-bold">
          {`작성자: ${recipeForm?.user}`}
        </Typography>
        <Typography variant="subtitle1" className="mt-2">
          {`${handlerDateFormatter(recipeForm?.createdAt)} | 좋아요 ${recipeForm?.likeCount}개`}
        </Typography>
        <Typography variant="body1" className="mt-4">
          {recipeForm?.intro}
        </Typography>
      </div>
    </div>
  );
}

export default RecipeHeader;
