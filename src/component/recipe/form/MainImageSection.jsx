import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {mainImageFormState, recipeFormState} from "../../../recoil/recipeState";
import { IconButton, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const MainImageSection = () => {
  const recipeForm = useRecoilValue(recipeFormState);
  const [inputs, setInputs] = React.useState({});
  const [mainImageForm, setMainImageForm] = useRecoilState(mainImageFormState);

  const handleMainImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMainImageForm(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">카테고리</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="카테고리" defaultValue={recipeForm?.categoryCD} onChange={handleOnChange} />
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">요리 제목</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="요리 제목" defaultValue={recipeForm?.title} onChange={handleOnChange} />
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">요리 소개</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="요리 소개" defaultValue={recipeForm?.intro} onChange={handleOnChange} />
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">동영상 링크</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="동영상 링크" defaultValue={recipeForm?.video} onChange={handleOnChange} />
        </div>
      </div>
      <div className={`relative flex justify-center items-center ${mainImageForm ? '' : 'bg-blue-500'} h-64 border-2 border-gray-300`}>
        {mainImageForm ? (
          <img src={mainImageForm} alt="Main" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <Typography variant="h6" color="white">이미지 공간</Typography>
        )}
        <input
          style={{ display: 'none' }}
          id="upload-main-image"
          name="upload-main-image"
          type="file"
          onChange={handleMainImageChange}
        />
        <label htmlFor="upload-main-image" className="absolute top-2 right-2">
          <IconButton
            color="primary"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </div>
  );
}

export default MainImageSection;
