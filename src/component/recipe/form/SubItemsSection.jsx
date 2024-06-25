import React from 'react';
import { Button, TextField, Card, CardContent, Grid, Typography, IconButton } from '@mui/material';
import { PhotoCamera, Delete } from '@mui/icons-material';
import { useRecoilState } from "recoil";
import { subItemsFormState } from "../../../recoil/recipeState";

const SubItemsSection = () => {
  const [subItemsForm, setSubItemsForm] = useRecoilState(subItemsFormState);

  const handleDescriptionChange = (index, e) => {
    setSubItemsForm(subItemsForm.map((item, i) =>
      i === index ? { ...item, description: e.target.value } : item
    ));
  };

  const handleImageChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newImageURL = URL.createObjectURL(e.target.files[0]);
      setSubItemsForm(subItemsForm.map((item, i) =>
        i === index ? { ...item, image: newImageURL } : item
      ));
    }
  };

  const handleAddSubItem = () => {
    setSubItemsForm([...subItemsForm, { description: '', image: null }]);
  };

  const handleRemoveSubItem = (index) => {
    setSubItemsForm(subItemsForm.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-8">
      {subItemsForm.map((item, index) => (
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
                  value={item.description}
                  onChange={(e) => handleDescriptionChange(index, e)}
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
                      src={item.image}
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

export default SubItemsSection;
