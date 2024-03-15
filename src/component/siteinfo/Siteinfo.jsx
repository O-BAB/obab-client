/* Siteinfo.jsx */
import styles from '../../css/siteinfo/siteinfo.module.css';
import React from 'react';

const SiteInfo = () => {
    return (
        <div className={styles.siteinfo_con}>
            <div className={styles.siteinfo_element_left}>
                <div className={styles.siteinfo_container}>
                    <div className={styles.siteinfo_content}>
                        <img className={styles.siteinfo_img} src="./images/siteinfo/siteinfo.webp" alt="Site Info" />
                        <div className={styles.siteinfo_img_front}></div>
                        <div className={styles.siteinfo_text}>
                            <h2><a href="/">OBAB</a></h2>
                            <div class={styles.divider}></div>
                            <div class={styles.siteinfo_span}>
                                <span>March 5, 2024</span><span>|</span><span>No comments</span><span>|</span><span><a href="/">Food recipe</a></span>
                            </div>
                            <p>Oneul-ui bab is a recipe blog that aims to help individuals create delicious meals using the ingredients they have in…</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.siteinfo_element_right}>
                <div className={styles.image_container}>
                    <img className={styles.image} src="./images/siteinfo/siteinfoside.webp" alt="Site Info Side" />
                </div>
                <div className={styles.content}>
                    <h3>제목</h3>
                    <p>미리보기 내용</p>
                </div>
            </div>

        </div>
    )
}

export default SiteInfo;
