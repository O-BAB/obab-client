import React from 'react';
import styles from '../../../css/category/category.module.css';
import CATEGORIES from "../../common/navbar/data/CATEGORIES";
import {useRecoilValue} from "recoil";
import {categoriesState} from "../../../recoil/commomState";
import CommonContainer from "../../../hooks/CommonContainer";

// const Category = (props) => {
const Category = () => {
    // let name = props;
    const categories = useRecoilValue(categoriesState)
    const {onClickMovingMenu, handleCategorySelect} = CommonContainer()

    // const CATEGORIES = [
    //     { subCategoryId: 1, name: "Korean Cuisine" },
    //     { subCategoryId: 2, name: "Food recipe" },
    //     { subCategoryId: 3, name: "Cooking Tips" },
    //     { subCategoryId: 4, name: "Recipe" },
    //     { subCategoryId: 5, name: "Soup Recipe" },
    // ];

    return (
        <div className={styles.siteinfo_con}>
            <div className={styles.soupupdate_element_left}>
                <div className={styles.flexrow}>
                    <div className={styles.title}>
                        {categories}
                        {/*{name.category_title}*/}
                    </div>
                </div>
                <div className={styles.soupupdate_img_box}>
                    <img className={styles.soupupdate_img} src="/images/siteinfo/siteinfo.webp" alt="Site Info" />
                </div>
                <div className={styles.recipeContainer}>
                    <div className={styles.recipeContent}>
                        <p className={styles.recipetitle}>
                            How to Make Korean Army Stew: A Step-by-Step Recipe
                        </p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.dateandcomments}>
                        <p className={styles.date}>
                            March 5, 2024
                        </p>
                        <p className={styles.separator}>•</p>
                        <p className={styles.category}>
                            123
                        </p>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.descriptiontext}>
                            If you are looking for a hearty and delicious soup that is perfect for the cold weather, look no further…
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.siteinfo_element_right}>
                <div className={styles.siteinfo_element_right_box}>
                    <div className={styles.content}>
                        <h3>카테고리</h3>
                        <ul className={styles.categories}>
                            {/*{CATEGORIES.map(category => (*/}
                            {CATEGORIES.map((category, index) => (
                                // <li key={category.id} className={styles.item}>
                                <li key={index} className={styles.item}>
                                    <button onClick={() => {

                                      handleCategorySelect(category);
                                      onClickMovingMenu(category?.link)
                                    }}>{category.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image_container}>
                            <img className={styles.image} src="/images/siteinfo/siteinfoside.webp" alt="Site Info Side" />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h3>new post</h3>
                        <li><a href='/public'>카테고리 1</a></li>
                        <li><a href='/public'>카테고리 2</a></li>
                        <li><a href='/public'>카테고리 3</a></li>
                        <li><a href='/public'>카테고리 4</a></li>
                        <li><a href='/public'>카테고리 5</a></li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;
