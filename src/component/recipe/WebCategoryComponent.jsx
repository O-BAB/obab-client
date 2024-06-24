import React from 'react';
import styles from '../../css/recipe/category.web.module.css';
import LeftCategoryListComponent from "./item/LeftCategoryListComponent";
import RightCategoryListComponent from "./item/RightCategoryListComponent";

const WebCategoryComponent = () => {
  return (<div className={styles.siteinfo_con}>
    <div className={styles.soupupdate_element_left}>
      <LeftCategoryListComponent/>
    </div>
    <div className={styles.siteinfo_element_right}>
      <RightCategoryListComponent/>
    </div>
  </div>)
}

export default WebCategoryComponent;
