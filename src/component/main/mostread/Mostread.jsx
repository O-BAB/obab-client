import styles from '../../../css/main/mostread/mostread.module.css';
import React from 'react';

const Mostread = () => {
    return (
        <div className={styles.most_read_con}>
            <div className={styles.most_read_title}>Most Reads</div>
            <div className={styles.most_read_list}>
            <div className={styles.most_read_element}>
                <div className={styles.most_read_container}>
                    <div className={styles.most_read_content}>
                        <img className={styles.most_read_img} src="./images/siteinfo/siteinfo.webp" alt="Site Info" />
                        <div className={styles.most_read_img_front}></div>
                        <div className={styles.most_read_text}>
                            <h2><a href="https://10web-site.ai/61/real-gobbler/obab/">Title</a></h2>
                            <div class={styles.divider}></div>
                            <div class={styles.most_read_span}>
                                <span>March 5, 2024</span><span>|</span><span>author</span>
                            </div>
                            <p>Oneul-ui bab is a recipe blog that aims to help individuals create delicious meals using the ingredients they have in…</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.most_read_element}>
                <div className={styles.most_read_container}>
                    <div className={styles.most_read_content}>
                        <img className={styles.most_read_img} src="./images/siteinfo/siteinfo.webp" alt="Site Info" />
                        <div className={styles.most_read_img_front}></div>
                        <div className={styles.most_read_text}>
                            <h2><a href="https://10web-site.ai/61/real-gobbler/obab/">Title</a></h2>
                            <div class={styles.divider}></div>
                            <div class={styles.most_read_span}>
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

export default Mostread;
