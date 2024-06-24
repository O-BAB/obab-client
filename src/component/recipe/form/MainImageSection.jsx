import React from 'react';
import {useRecoilState} from "recoil";
import {mainImageFormState} from "../../../recoil/recipeState";
import {Button, Typography} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";

const MainImageSection = () => {
  const [mainImageForm, setMainImageForm] = useRecoilState(mainImageFormState);

  const handleMainImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMainImageForm(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">카테고리</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="카테고리"/>
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">요리 제목</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="요리 제목"/>
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">요리 소개</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="요리 소개"/>
        </div>
        <div className="flex items-center mb-4">
          <Typography className="w-1/5 min-w-[80px] text-right pr-4" variant="h6">동영상 링크</Typography>
          <input className="w-4/5 border border-gray-300 p-2" type="text" placeholder="동영상 링크"/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-500 h-64">
        {mainImageForm ? (
          <img src={mainImageForm} alt="Main" className="w-full h-full object-cover"/>
        ) : (
          <Typography variant="h6" color="white">이미지 공간</Typography>
        )}
        <label htmlFor="upload-main-image">
          <input
            style={{display: 'none'}}
            id="upload-main-image"
            name="upload-main-image"
            type="file"
            onChange={handleMainImageChange}
          />
          <Button
            color="primary"
            variant="contained"
            component="span"
            startIcon={<PhotoCamera/>}
            className="mt-4"
          >
            이미지 업로드
          </Button>
        </label>
      </div>
    </div>
  );
}

export default MainImageSection;
