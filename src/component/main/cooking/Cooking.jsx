import React from 'react';
import styles from '../../../css/main/cooking/cooking.module.css';

const Cooking = () => {
    return (
        <div className={styles.Cooking_con}>
            <div className={styles.Cooking_title}>
                <h2>Cooking</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.element}>
                    <img className={styles.Cooking_img} src="./images/siteinfo/siteinfo.webp" alt="Cooking" />
                    <div className={styles.name}>Easy and Quick Recipes with Ingredients From Your Fridge</div>
                    <div className={styles.date}>March 5, 2024</div>
                    <div className={styles.content}>OBAB is a Korean food and recipe blog that offers a unique…</div>
                </div>
                <div className={styles.element}>
                    <img className={styles.Cooking_img} src="./images/siteinfo/siteinfo.webp" alt="Cooking" />

                    <div className={styles.name}>How to Use OBAB to Find Recipes with Ingredients You Already Have</div>
                    <div className={styles.date}>March 5, 2024</div>
                    <div className={styles.content}>Sometimes, we have to cook what we have in the fridge. This…</div>
                </div>
                <div className={styles.element}>
                    <img className={styles.Cooking_img} src="./images/siteinfo/siteinfo.webp" alt="Cooking" />
                    <div className={styles.name}>Hello world!</div>
                    <div className={styles.date}>March 5, 2024</div>
                    <div className={styles.content}>Korean cuisine is known for its delicious and unique flavors. If you…</div>
                </div>
            </div>
            <div className={styles.divider}></div>
        </div>

    );
}

export default Cooking;
