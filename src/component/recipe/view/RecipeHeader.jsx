import React from 'react';
import {useNavigate} from "react-router-dom";
import {IconButton, Typography} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import recipeContainer from "../../../hooks/RecipeContainer";

function RecipeHeader({ data }) {
  const navigate = useNavigate();
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
        <IconButton color="primary" onClick={() => handleEdit(data?.id)}>
          <Edit />
        </IconButton>
        <IconButton color="secondary" onClick={() => handleDelete(data?.id)}>
          <Delete />
        </IconButton>
      </div>
      <img className="w-2/3 mx-auto" src={data?.thumbnailUrl} alt="Thumbnail" />
      <div className="w-2/3 mt-4 bg-white bg-opacity-75 text-black p-4 text-left">
        <Typography variant="h5" className="font-bold">
          {`작성자: ${data?.user}`}
        </Typography>
        <Typography variant="subtitle1" className="mt-2">
          {`${handlerDateFormatter(data?.createdAt)} | 좋아요 ${data?.likeCount}개`}
        </Typography>
        <Typography variant="body1" className="mt-4">
          {data?.intro}
        </Typography>
      </div>
    </div>
  );
}

export default RecipeHeader;
