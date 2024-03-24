import React from 'react';
import styles from '../../../css/common/navbar/navbar.module.css';
import Logo from "./item/Logo";
import CATEGORIES from "./data/CATEGORIES";
import MenuBarList from "./item/MenuBarList";
import commonContainer from "../../../hooks/commonContainer";

function Navbar() {
  const {onClickMovingMenu} = commonContainer();
// function Navbar({ onCategorySelect }) {

//     const handleCategoryClick = (category) => {
//         onCategorySelect(category.name);
//     };
  /**
   * 위에 함수는 Origin Component 용으로 사용 된 것으로, 굳이 중복되는 부분을 사용할 필요 없다.
   * 자세한 사항은 React Design Pattern 을 검색하고 학습 습득하는 것을 확인 하면 좋다.
   * 이 중 Custom Hook Pattern 으로 구조를 나눠 사용한다.
   */
  // const {handleCategorySelect} = commonContainer()

  return (
    <nav className={styles.navbar}>
      <div className={styles.navelement}>
        <div className={styles.navcontainer}>
          <Logo/>
          <ul className={styles.menu}>
            {/* key={index} 넣어줘야 console에 빨간색 에러 방지 */}
            {CATEGORIES.map((category, index) => (
              <MenuBarList key={index} category={category}/>
            ))}
          </ul>
          {/*<div className={`flex flex-row flex-wrap justify-end`}>*/}
          <div className={`${styles.navbarRight} px-5`}>
            <div className={`${styles.navbarRightItem} cursor-pointer hover:text-blue-700 `} onClick={() => {onClickMovingMenu('/mypage')}}>
              마이페이지
            </div>
            <div className={`${styles.navbarRightItem} cursor-pointer hover:text-blue-700 `} onClick={() => {onClickMovingMenu('/login')}}>
              로그인 버튼
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
