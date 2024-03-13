
import styles from './recipe.module.css';
import React from 'react';

const Recipe = () => {
    return (
        <div className={styles.hot_recipe_con}>
            <div className={styles.hot_recipe_title}>인터넷 화제 레피시</div>
            <div className={styles.hot_recipe_list}>
            <div className={styles.hot_recipe_element}>
                <div className={styles.hot_recipe_container}>
                    <div className={styles.hot_recipe_content}>
                        <img className={styles.hot_recipe_img} src="./images/siteinfo/siteinfo.webp" alt="Site Info" />
                        <div className={styles.hot_recipe_img_front}></div>
                        <div className={styles.hot_recipe_text}>
                            <h2><a href="https://10web-site.ai/61/real-gobbler/obab/">Title</a></h2>
                            <div class={styles.divider}></div>
                            <div class={styles.hot_recipe_span}>
                                <span>March 5, 2024</span><span>|</span><span>author</span>
                            </div>
                            <p>Oneul-ui bab is a recipe blog that aims to help individuals create delicious meals using the ingredients they have in…</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hot_recipe_element}>
                <div className={styles.hot_recipe_container}>
                    <div className={styles.hot_recipe_content}>
                        <img className={styles.hot_recipe_img} src="./images/siteinfo/siteinfo.webp" alt="Site Info" />
                        <div className={styles.hot_recipe_img_front}></div>
                        <div className={styles.hot_recipe_text}>
                            <h2><a href="https://10web-site.ai/61/real-gobbler/obab/">Title</a></h2>
                            <div class={styles.divider}></div>
                            <div class={styles.hot_recipe_span}>
                            <span>March 5, 2024</span><span>|</span><span>author</span>
                            </div>
                            <p>Oneul-ui bab is a recipe blog that aims to help individuals create delicious meals using the ingredients they have in…</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Recipe;
