import React from 'react';
import { Button, IconButton, TextField, Typography, Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";

const SeasoningsSection = ({ seasoningsForm, setSeasoningsForm }) => {

  const handleSeasoningChange = (index, field, value) => {
    try {
      if (index < 0 || index >= seasoningsForm.length) {
        throw new Error(`Invalid index: ${index}`);
      }
      if (!['name', 'count', 'unit', 'etc'].includes(field)) {
        throw new Error(`Invalid field: ${field}`);
      }
      const newSeasonings = [...seasoningsForm];
      newSeasonings[index][field] = value;
      setSeasoningsForm(newSeasonings);
    } catch (error) {
      console.error("Error updating seasoning:", error);
    }
  };

  const handleAddSeasoning = () => {
    try {
      setSeasoningsForm([...seasoningsForm, { name: '', count: '', unit: '', etc: '' }]);
    } catch (error) {
      console.error("Error adding seasoning:", error);
    }
  };

  const handleRemoveSeasoning = (index) => {
    try {
      if (index < 0 || index >= seasoningsForm.length) {
        throw new Error(`Invalid index: ${index}`);
      }
      const newSeasonings = seasoningsForm.filter((_, i) => i !== index);
      setSeasoningsForm(newSeasonings);
    } catch (error) {
      console.error("Error removing seasoning:", error);
    }
  };

  return (
    <div className="mt-8">
      <Typography variant="h6" className="mb-2">양념</Typography>
      {seasoningsForm.map((seasoning, index) => (
        <Grid container spacing={2} alignItems="center" key={index} className="mb-2">
          <Grid item xs={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="재료 명"
              value={seasoning?.name || ''}
              onChange={(e) => handleSeasoningChange(index, 'name', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="수량"
              value={seasoning?.count || ''}
              onChange={(e) => handleSeasoningChange(index, 'count', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="단위"
              value={seasoning?.unit || ''}
              onChange={(e) => handleSeasoningChange(index, 'unit', e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="비고"
              value={seasoning?.etc || ''}
              onChange={(e) => handleSeasoningChange(index, 'etc', e.target.value)}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton color="secondary" onClick={() => handleRemoveSeasoning(index)}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        color="primary"
        variant="contained"
        onClick={handleAddSeasoning}
      >
        양념 추가
      </Button>
    </div>
  );
};

export default SeasoningsSection;
