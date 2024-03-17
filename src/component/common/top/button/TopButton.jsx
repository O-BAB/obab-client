import React from 'react';
import styles from '../../../../css/common/top/button/topButton.module.css';
import {ChevronDoubleUp} from "react-bootstrap-icons";

const TopButton = () => {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.topButton}>
      <ChevronDoubleUp
        onClick={() => moveToTop()}
        className={`${styles.topButtonIcons} cursor-pointer`}
      />
      {/*<img*/}
      {/*  className={styles.topButtonImage}*/}
      {/*  src='/images/info/topButton.png'*/}
      {/*  alt='default'*/}
      {/*  onClick={moveToTop}*/}
      {/*/>*/}
    </div>
  );
};

export default TopButton;