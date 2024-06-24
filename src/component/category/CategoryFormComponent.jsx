import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import { PhotoCamera, Info, Delete } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import categoryContainer from '../../hooks/CategoryContainer';
import styles from '../../css/category/category.view.module.css';

function CategoryFormComponent() {
  const [category, setCategory] = useState();
  const [subItems, setSubItems] = useState([
    { description: '', image: null },
  ]);
  const { displayRecipesDetail } = categoryContainer();
  const params = useParams();

  useEffect(() => {
    displayRecipesDetail(params.id)
      .then((res) => {
        setCategory(res);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDescriptionChange = (index, e) => {
    const newSubItems = [...subItems];
    newSubItems[index].description = e.target.value;
    setSubItems(newSubItems);
  };

  const handleImageChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newSubItems = [...subItems];
      newSubItems[index].image = URL.createObjectURL(e.target.files[0]);
      setSubItems(newSubItems);
    }
  };

  const handleAddSubItem = () => {
    setSubItems([...subItems, { description: '', image: null }]);
  };

  const handleRemoveSubItem = (index) => {
    const newSubItems = subItems.filter((_, i) => i !== index);
    setSubItems(newSubItems);
  };

  return (
    <div className={styles.post_con}>
      <div className={styles.post_need_con}>
        <div className={styles.post_title}>
          {category?.title}
        </div>
        <div className={styles.post_thumbnail_box}>
          <img className={styles.post_thumbnail} src={category?.thumbnailUrl} alt="Site Info" />
        </div>
        <div className={styles.post_needs_list}>
          <div className={styles.post_needs_ingredients}>재료</div>
          <div className={styles.post_needs_list_element}>
            {category?.recipeIngredients?.map((data, index) => (
              <li key={index}>
                <div className="flex flex-row items-center">
                  <div className="flex-col justify-center">{data.name}</div>
                  <Info className="flex-col cursor-pointer justify-center p-0.5" onClick={() => alert(`${data.name} 클릭`)} />
                </div>
                <div>{data.amount}</div>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      {subItems.map((item, index) => (
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
      <div className={styles.Cooking_con}>
        <div className={styles.Cooking_title}>
          <h2>Cooking</h2>
        </div>
        <div className={styles.container}>
          {category?.cookingItems?.map((item, index) => (
            <div key={index} className={styles.element}>
              <img className={styles.Cooking_img} src={item.image} alt="Cooking" />
              <div className={styles.name}>{item.name}</div>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.content}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryFormComponent;
