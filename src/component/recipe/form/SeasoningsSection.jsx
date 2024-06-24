import React from 'react';
import {useRecoilState} from "recoil";
import {seasoningsFormState} from "../../../recoil/recipeState";
import {Button, IconButton, TextField, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";

const SeasoningsSection = () => {
  const [seasoningsForm, setSeasoningsForm] = useRecoilState(seasoningsFormState);

  const handleSeasoningChange = (index, field, value) => {
    const newSeasonings = [...seasoningsForm];
    newSeasonings[index][field] = value;
    setSeasoningsForm(newSeasonings);
  };

  const handleAddSeasoning = () => {
    setSeasoningsForm([...seasoningsForm, {name: '', quantity: '', unit: '', notes: ''}]);
  };

  const handleRemoveSeasoning = (index) => {
    const newSeasonings = seasoningsForm.filter((_, i) => i !== index);
    setSeasoningsForm(newSeasonings);
  };

  return (
    <div className="mt-8">
      <Typography variant="h6" className="mb-2">양념</Typography>
      {seasoningsForm.map((seasoning, index) => (
        <div key={index} className="grid grid-cols-5 gap-4 mb-2">
          <TextField
            className="col-span-1"
            variant="outlined"
            placeholder="재료 명"
            value={seasoning.name}
            onChange={(e) => handleSeasoningChange(index, 'name', e.target.value)}
          />
          <TextField
            className="col-span-1"
            variant="outlined"
            placeholder="수량"
            value={seasoning.quantity}
            onChange={(e) => handleSeasoningChange(index, 'quantity', e.target.value)}
          />
          <TextField
            className="col-span-1"
            variant="outlined"
            placeholder="단위"
            value={seasoning.unit}
            onChange={(e) => handleSeasoningChange(index, 'unit', e.target.value)}
          />
          <TextField
            className="col-span-2"
            variant="outlined"
            placeholder="비고"
            value={seasoning.notes}
            onChange={(e) => handleSeasoningChange(index, 'notes', e.target.value)}
          />
          <IconButton color="secondary" onClick={() => handleRemoveSeasoning(index)}>
            <Delete/>
          </IconButton>
        </div>
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
