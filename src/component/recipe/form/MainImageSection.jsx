import React, { useEffect, useState } from 'react';
import { FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

// MainImageSection 컴포넌트는 메인 이미지를 관리하고 표시하는 데 사용됩니다.
const MainImageSection = ({ setMainImageFile, mainImageForm, setMainImageForm, inputs, setInputs }) => {
  const [recipeForm, setRecipeForm] = useState(inputs || {});

  // 이미지 변경 처리 함수
  const handleMainImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMainImageForm(URL.createObjectURL(file));
      setMainImageFile(file);  // 파일을 상태로 설정
    }
  };

  // 입력 변경 처리 함수
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRecipeForm({
      ...recipeForm,
      [name]: value
    });
  }

  useEffect(() => {
    setInputs(recipeForm);
  }, [recipeForm]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">카테고리</Typography>
          <FormControl className="w-4/5">
            <InputLabel id="category-label">카테고리</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              defaultValue={recipeForm?.categoryCD || ""}
              onChange={handleOnChange}
              label="카테고리"
              name="categoryCD"
              sx={{ height: '40px' }}
            >
              <MenuItem value="food_recipe">음식 레시피</MenuItem>
              <MenuItem value="broadcast_recipe">방송 레시피</MenuItem>
              <MenuItem value="convenience_store_combination">편의점 꿀조합</MenuItem>
              <MenuItem value="seasoning_recipe">양념레시피</MenuItem>
              <MenuItem value="cooking_tip">요리TIP</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">요리 제목</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="요리 제목"
                 defaultValue={recipeForm?.title} onChange={handleOnChange} name="title" />
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">요리 소개</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="요리 소개"
                 defaultValue={recipeForm?.intro} onChange={handleOnChange} name="intro" />
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">동영상 링크</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="동영상 링크"
                 defaultValue={recipeForm?.video} onChange={handleOnChange} name="video" />
        </div>
      </div>
      <div className={`relative flex justify-center items-center ${mainImageForm ? '' : 'bg-blue-500'} h-64 border-2 border-gray-300`}>
        {mainImageForm || recipeForm?.thumnail ? (
          <img src={mainImageForm || recipeForm?.thumnail} alt="Main" className="absolute inset-0 w-full h-full object-cover" />
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
