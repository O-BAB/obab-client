import React from 'react';
import styles from '../../../css/category/category.web.module.css';
import LeftCategoryListComponent from "./LeftCategoryListComponent";
import RightCategoryListComponent from "./RightCategoryListComponent";

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
