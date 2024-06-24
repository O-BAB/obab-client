import React from 'react';
import CommonContainer from "../../../hooks/CommonContainer";
import styles from '../../../css/recipe/category.module.css';
import CATEGORIES from "../../common/navbar/data/CATEGORIES";

function RightCategoryListComponent(props) {
  const {onClickMovingMenu, handleCategorySelect} = CommonContainer()

  return (
    <div>
      <div className={styles.siteinfo_element_right_box}>
        <div className={styles.content}>
          <h3>카테고리</h3>
          <ul className={styles.categories}>
            {/*{CATEGORIES.map(recipe => (*/}
            {CATEGORIES.map((category, index) => (// <li key={recipe.id} className={styles.item}>
              <li key={index} className={styles.item}>
                <button onClick={() => {

                  handleCategorySelect(category);
                  onClickMovingMenu(category?.link)
                }}>{category.name}</button>
              </li>))}
          </ul>
        </div>
        <div className={styles.content}>
          <div className={styles.image_container}>
            <img className={styles.image} src="/images/siteinfo/siteinfoside.webp" alt="Site Info Side"/>
          </div>
        </div>
        <div className={styles.content}>
          <h3>new post</h3>
          <li><a href='/public'>카테고리 1</a></li>
          <li><a href='/public'>카테고리 2</a></li>
          <li><a href='/public'>카테고리 3</a></li>
          <li><a href='/public'>카테고리 4</a></li>
          <li><a href='/public'>카테고리 5</a></li>
        </div>
      </div>
    </div>
  );
}

export default RightCategoryListComponent;
