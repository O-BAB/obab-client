import styles from '../../../../css/main/soup/update/soupUpdate.module.css';
import React from 'react';

const SoupUpdate = () => {
    return (
        <div className={styles.soupupdate_con}>
            <div className={styles.soupupdate_element_left}>
                <div className={styles.flexrow}>
                    <div className={styles.title}>
                        Soup Recipe Updates
                    </div>
                    <div className={styles.morelink}>
                        More in Soup Recipe
                    </div>
                </div>
                <div className={styles.soupupdate_img_box}>
                    <img className={styles.soupupdate_img} src="./images/siteinfo/siteinfo.webp" alt="Site Info" />

                </div>
                <div className={styles.recipeContainer}>
                    <div className={styles.recipeContent}>
                        <p className={styles.recipetitle}>
                            How to Make Korean Army Stew: A Step-by-Step Recipe
                        </p>
                    </div>
                    <div class={styles.divider}></div>
                    <div className={styles.dateandcomments}>
                        <p className={styles.date}>
                            March 5, 2024
                        </p>
                        <p className={styles.separator}>•</p>
                        <p className={styles.category}>
                            Soup Recipe
                        </p>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.descriptiontext}>
                            If you are looking for a hearty and delicious soup that is perfect for the cold weather, look no further…
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.soupupdate_element_right}>
                <div className={styles.soupupdate_add_con}>

                </div>
                <div className={styles.socialMediaContainer}>
                    <div className={styles.socialmedia_element}>
                        <div className={styles.facebookicon}>icon</div>
                        <div className={styles.socialmedia_text}>
                        <p className={styles.socialMediaName}>Facebook</p>
                        <p className={styles.followers}>2M+ Followers</p>
                        </div>
                    </div>
                    <div className={styles.socialmedia_element}>
                        <div className={styles.twitterIcon}>icon</div>
                        <div className={styles.socialmedia_text}>
                        <p className={styles.socialMediaName}>Twitter</p>
                        <p className={styles.followers}>2M+ Followers</p>
                        </div>
                    </div>
                    <div className={styles.socialmedia_element}>
                        <div className={styles.youtubeIcon}>icon</div>
                        <div className={styles.socialmedia_text}>
                        <p className={styles.socialMediaName}>YouTube</p>
                        <p className={styles.followers}>2M+ Followers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.background}></div>
        </div>
    )
}

export default SoupUpdate;
