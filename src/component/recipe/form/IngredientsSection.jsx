import React from 'react';
import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";

// IngredientsSection 컴포넌트는 레시피의 재료를 관리하고 표시하는 데 사용됩니다.
const IngredientsSection = ({inputs, setInputs}) => {
  // 특정 재료의 필드 값이 변경될 때 처리합니다.
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...inputs?.recipeIngredients];
    newIngredients[index][field] = value;
    setInputs({...inputs, recipeIngredients: newIngredients});
  };

  // 새로운 재료 항목을 추가합니다.
  const handleAddIngredient = () => {
    setInputs({
      ...inputs,
      recipeIngredients: [
        ...(inputs?.recipeIngredients || []),
        {name: '', count: '', unit: '', etc: ''}
      ],
    });
  };

  // 특정 재료 항목을 제거합니다.
  const handleRemoveIngredient = (index) => {
    const newIngredients = inputs?.recipeIngredients.filter((_, i) => i !== index);
    setInputs({
      ...inputs,
      recipeIngredients: newIngredients
    });
  };

  return (
    <div className="mt-8">
      <Typography variant="h6" className="mb-2">재료</Typography>
      {inputs?.recipeIngredients?.map((ingredient, index) => (
        <Grid container spacing={2} alignItems="center" key={index} className="mb-2">
          <Grid item xs={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="재료 명"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="수량"
              value={ingredient.count}
              onChange={(e) => handleIngredientChange(index, 'count', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="단위"
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="비고"
              value={ingredient.etc}
              onChange={(e) => handleIngredientChange(index, 'etc', e.target.value)}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton color="secondary" onClick={() => handleRemoveIngredient(index)}>
              <Delete/>
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        color="primary"
        variant="contained"
        onClick={handleAddIngredient}
      >
        재료 추가
      </Button>
    </div>
  );
}

export default IngredientsSection;
