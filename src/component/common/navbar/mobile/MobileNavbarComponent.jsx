import React from 'react';
import styles from "../../../../css/common/navbar/navbar.module.css";
import Logo from "../item/Logo";
import NavBarDropDown from "../item/NavBarDropDown";

const WebNavbarComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navelement}>
        {/*<div className={styles.navcontainer}>*/}
        <div className={`flex flex-wrap justify-between mt-2 mx-3 items-center`}>
          <Logo/>
          <NavBarDropDown/>
        </div>
      </div>
    </nav>
  );
}

export default WebNavbarComponent;