import React from 'react';
import styles from "../../../../css/common/navbar/navbar.module.css";
import CommonContainer from "../../../../hooks/CommonContainer";

// const MenuBarList = ({category}) => {
const MenuBarList = ({category}) => {
  /**
   * React Hooks 사용
   */
  const {handleCategorySelect, onClickMovingMenu} = CommonContainer()
  return (
    <li key={category?.subCategoryId} className={styles.item}>
      {/*<a href="/public" onClick={(event) => {*/}
      <a href="/" onClick={(event) => {
        event.preventDefault();
        // handleCategoryClick(category);
        // handleCategorySelect(category);
        handleCategorySelect(category);
        onClickMovingMenu(category?.link)
      }}>{category?.name}</a>
    </li>
  );
}

export default MenuBarList;