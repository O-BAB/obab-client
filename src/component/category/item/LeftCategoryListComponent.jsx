import React from 'react';
import styles from "../../../css/category/category.module.css";
import CategoryContainer from "../../../hooks/CategoryContainer";
import {useLocation, useNavigate} from "react-router-dom";

const LeftCategoryListComponent = () => {
  const {displayCategoryTitle, displayReceiptList} = CategoryContainer();
  const {pathname} = useLocation()
  const categories = displayCategoryTitle(pathname)
  const navigate = useNavigate()

  const test = displayReceiptList(1, 10, categories);
  console.log(test);

  return (
    <div className={`cursor-pointer`} onClick={() => {
      navigate('/category/Posting/detail')
    }}>
      <div className={styles.flexrow}>
        <div className={styles.title}>
          {categories}
        </div>
      </div>
      <div className={styles.soupupdate_img_box}>
        <img className={styles.soupupdate_img} src="/images/siteinfo/siteinfo.webp" alt="Site Info"/>
      </div>
      <div className={styles.recipeContainer}>
        <div className={styles.recipeContent}>
          <p className={styles.recipetitle}>
            How to Make Korean Army Stew: A Step-by-Step Recipe
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.dateandcomments}>
          <p className={styles.date}>
            March 5, 2024
          </p>
          <p className={styles.separator}>•</p>
          <p className={styles.category}>
            123
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.descriptiontext}>
            If you are looking for a hearty and delicious soup that is perfect for the cold weather, look no
            further…
          </p>
        </div>
      </div>

    </div>
  );
}

export default LeftCategoryListComponent;