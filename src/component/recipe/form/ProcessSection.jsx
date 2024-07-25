import React, {useState} from 'react';
import { Button, TextField, Card, CardContent, Grid, Typography, IconButton } from '@mui/material';
import { PhotoCamera, Delete } from '@mui/icons-material';

// ProcessSection 컴포넌트는 레시피의 각 과정 단계를 관리하고 표시하는 데 사용됩니다.
// 각 과정 단계는 설명과 선택적인 이미지를 포함합니다.
const ProcessSection = ({ inputs, setInputs }) => {
  const [previewImage, setPreviewImage] = useState(null)
  // 특정 과정 단계의 설명이 변경될 때 처리합니다.
  const handleDescriptionChange = (index, field, value) => {
    const newProcessForm = [...inputs?.recipeProcess];
    newProcessForm[index][field] = value;
    setInputs({...inputs, recipeProcess: newProcessForm});
  };

  // 특정 과정 단계의 이미지가 변경될 때 처리합니다.
  const handleImageChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      const newProcessForm = inputs?.recipeProcess.map((item, i) =>
        i === index ? { ...item, image: e.target.files[0] } : item
      );
      setInputs({ ...inputs, recipeProcess: newProcessForm });
    }
  };

  // 새로운 과정 단계를 추가합니다.
  const handleAddSubItem = () => {
    setInputs({
      ...inputs,
      recipeProcess: [
        ...(inputs?.recipeProcess || []),
        { content: '', image: null, imageFile: null }
      ],
    });
  };

  // 특정 과정 단계를 제거합니다.
  const handleRemoveSubItem = (index) => {
    const newProcessForm = inputs?.recipeProcess.filter((_, i) => i !== index);
    setInputs({
      ...inputs,
      recipeProcess: newProcessForm
    });
  };

  return (
    <div className="mt-8">
      <Typography variant="h6" className="mb-2">조리방법</Typography>
      {inputs?.recipeProcess?.map((item, index) => (
        <Card key={index} className="mb-5">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                <Typography variant="h6">{`설명 ${index + 1}`}</Typography>
                <IconButton color="secondary" onClick={() => handleRemoveSubItem(index)}>
                  <Delete />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={9} style={{ display: 'flex', alignItems: 'stretch' }}>
                <TextField
                  fullWidth
                  label={`설명 ${index + 1}`}
                  variant="outlined"
                  multiline
                  name='content'
                  value={item?.content}
                  onChange={(e) => handleDescriptionChange(index, 'content', e.target.value)}
                  InputProps={{
                    style: {
                      height: '200px',
                      overflow: 'auto',
                      display: 'flex',
                      flexDirection: 'column'
                    },
                    inputProps: {
                      style: {
                        height: '100%',
                        boxSizing: 'border-box',
                        padding: '10px'
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3} className="relative">
                <div className="relative" style={{ width: '100%', height: '200px' }}>
                  {item.image ? (
                    <img
                      src={typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image)}
                      alt={`Uploaded ${index + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="flex justify-center items-center h-full bg-gray-200 cursor-pointer">
                      <Typography variant="h6">이미지 공간</Typography>
                    </div>
                  )}
                  <input
                    style={{ display: 'none' }}
                    id={`upload-photo-${index}`}
                    name={`upload-photo-${index}`}
                    type="file"
                    onChange={(e) => handleImageChange(index, e)}
                  />
                  <label htmlFor={`upload-photo-${index}`} className="absolute top-2 right-2">
                    <IconButton
                      color="primary"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <Button
        color="primary"
        variant="contained"
        onClick={handleAddSubItem}
        fullWidth
      >
        추가
      </Button>
    </div>
  );
};

export default ProcessSection;
