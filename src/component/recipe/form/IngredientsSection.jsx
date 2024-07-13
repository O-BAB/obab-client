import React, { useEffect, useState } from 'react';
import { Button, IconButton, TextField, Typography, Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";

// IngredientsSection 컴포넌트는 레시피의 재료를 관리하고 표시하는 데 사용됩니다.
const IngredientsSection = ({ inputs, setInputs }) => {
  // 로컬 상태를 부모 컴포넌트의 상태에서 가져온 레시피 재료로 초기화합니다.
  // 초기값을 빈 배열로 설정하여 null 또는 undefined 오류를 방지합니다.
  const [ingredientsForm, setIngredientsForm] = useState(inputs?.recipeIngredients || []);

  // 특정 재료의 필드 값이 변경될 때 처리합니다.
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredientsForm];
    newIngredients[index][field] = value;
    setIngredientsForm(newIngredients);
  };

  // 새로운 재료 항목을 추가합니다.
  const handleAddIngredient = () => {
    setIngredientsForm([...ingredientsForm, { name: '', quantity: '', unit: '', notes: '' }]);
  };

  // 특정 재료 항목을 제거합니다.
  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredientsForm.filter((_, i) => i !== index);
    setIngredientsForm(newIngredients);
  };

  // 로컬 상태가 변경될 때마다 부모 컴포넌트의 상태와 동기화합니다.
  useEffect(() => {
    setInputs({ ...inputs, recipeIngredients: ingredientsForm });
  }, [ingredientsForm]);

  return (
    <div className="mt-8">
      <Typography variant="h6" className="mb-2">재료</Typography>
      {ingredientsForm?.map((ingredient, index) => (
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
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
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
              value={ingredient.notes}
              onChange={(e) => handleIngredientChange(index, 'notes', e.target.value)}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton color="secondary" onClick={() => handleRemoveIngredient(index)}>
              <Delete />
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
