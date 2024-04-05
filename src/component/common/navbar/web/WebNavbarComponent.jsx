import React from 'react';
import styles from "../../../../css/common/navbar/navbar.module.css";
import Logo from "../item/Logo";
import CATEGORIES from "../data/CATEGORIES";
import MenuBarList from "../item/MenuBarList";
import CommonContainer from "../../../../hooks/CommonContainer";

const WebNavbarComponent = () => {
  const {onClickMovingMenu} = CommonContainer();
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
            <div className={`${styles.navbarRightItem} cursor-pointer hover:text-blue-700 `} onClick={() => {
              onClickMovingMenu('/mypage')
            }}>
              마이페이지
            </div>
            <div className={`${styles.navbarRightItem} cursor-pointer hover:text-blue-700 `} onClick={() => {
              onClickMovingMenu('/login')
            }}>
              로그인 버튼
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default WebNavbarComponent;