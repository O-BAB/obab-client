import React from 'react';
import styles from '../../css/postinfo/postinfo.module.css';

function PostInfo() {
    return (
        <div className={styles.post_con}>
            <div className={styles.post_need_con}>
                <div className={styles.post_title}>
                    title
                </div>
                <div className={styles.post_thumbnail_box}>
                    <img className={styles.post_thumbnail} src="/images/siteinfo/siteinfo.webp" alt="Site I2nfo" />
                </div>
                <div className={styles.post_needs_list}>
                    <div className={styles.post_needs_ingredients}>재료</div>
                    <div className={styles.post_needs_list_element}>
                        <li><div>간장</div><div>3숫갈</div></li>
                        <li><div>고추장</div><div>4숫갈</div></li>
                        <li><div>소금</div><div>1숫갈</div></li>
                        <li><div>설탕</div><div>6숫갈</div></li>
                        <li><div>굴소스</div><div>1숫갈</div></li>
                    </div>
                </div>
            </div>
            <div class={styles.divider}></div>
            <div class={styles.post_item}>
                <div>1</div>
                <div class={styles.post_content}>
                    <p>1번 사진에 대한 설명을 여기에 작성합니다.</p>
                    <img className={styles.post_img} src="/images/siteinfo/siteinfo.webp" alt="Site I2nfo" />
                </div>
            </div>
            <div class={styles.post_item}>
                <div>2</div>
                <div class={styles.post_content}>
                    <p>2번 사진에 대한 설명을 여기에 작성합니다.</p>
                    <img className={styles.post_img} src="/images/siteinfo/siteinfo.webp" alt="Site Inf1o" />
                </div>
            </div>
            <div class={styles.post_item}>
                <div>3</div>
                <div class={styles.post_content}>
                    <p>3번 사진에 대한 설명을 여기에 작성합니다.</p>
                    <img className={styles.post_img} src="/images/siteinfo/siteinfo.webp" alt="Site I3fo" />
                </div>
            </div>
            {/* cooking */}
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
            </div>

        </div>
    );
}

export default PostInfo;