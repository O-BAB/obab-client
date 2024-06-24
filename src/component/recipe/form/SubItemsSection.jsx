// src/components/SubItemsSection.js
import React from 'react';
import { Button, TextField, Card, CardContent, Grid, Typography, IconButton } from '@mui/material';
import { PhotoCamera, Delete } from '@mui/icons-material';
import {useRecoilState} from "recoil";
import {subItemsFormState} from "../../../recoil/recipeState";

const SubItemsSection = () => {
  const [subItemsForm, setSubItemsForm] = useRecoilState(subItemsFormState);
  const handleDescriptionChange = (index, e) => {
    const newSubItems = [...subItemsForm];
    newSubItems[index].description = e.target.value;
    setSubItemsForm(newSubItems);
  };

  const handleImageChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newSubItems = [...subItemsForm];
      newSubItems[index].image = URL.createObjectURL(e.target.files[0]);
      setSubItemsForm(newSubItems);
    }
  };

  const handleAddSubItem = () => {
    setSubItemsForm([...subItemsForm, { description: '', image: null }]);
  };

  const handleRemoveSubItem = (index) => {
    const newSubItems = subItemsForm.filter((_, i) => i !== index);
    setSubItemsForm(newSubItems);
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={`설명 ${index + 1}`}
                  variant="outlined"
                  multiline
                  rows={4}
                  value={item.description}
                  onChange={(e) => handleDescriptionChange(index, e)}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor={`upload-photo-${index}`}>
                  <input
                    style={{ display: 'none' }}
                    id={`upload-photo-${index}`}
                    name={`upload-photo-${index}`}
                    type="file"
                    onChange={(e) => handleImageChange(index, e)}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    component="span"
                    startIcon={<PhotoCamera />}
                  >
                    이미지 업로드
                  </Button>
                </label>
                {item.image && (
                  <div className="mt-4">
                    <img src={item.image} alt={`Uploaded ${index + 1}`} className="w-full h-auto" />
                  </div>
                )}
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
