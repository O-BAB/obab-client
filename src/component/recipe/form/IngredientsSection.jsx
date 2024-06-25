import React from 'react';
import { useRecoilState } from "recoil";
import { ingredientsFormState } from "../../../recoil/recipeState";
import { Button, IconButton, TextField, Typography, Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";

const IngredientsSection = () => {
  const [ingredientsForm, setIngredientsForm] = useRecoilState(ingredientsFormState);

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredientsForm];
    newIngredients[index][field] = value;
    setIngredientsForm(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredientsForm([...ingredientsForm, { name: '', quantity: '', unit: '', notes: '' }]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredientsForm.filter((_, i) => i !== index);
    setIngredientsForm(newIngredients);
  };

  return (
    <div className="mt-8">
      <Typography variant="h6" className="mb-2">재료</Typography>
      {ingredientsForm.map((ingredient, index) => (
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
