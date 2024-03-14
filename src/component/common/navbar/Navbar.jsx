import React from 'react';
import styles from '../../../css/common/navbar/navbar.module.css';

function Navbar({ onCategorySelect }) {
    const CATEGORIES = [
        { subCategoryId: 1, name: "Korean Cuisine" },
        { subCategoryId: 2, name: "Food recipe" },
        { subCategoryId: 3, name: "Cooking Tips" },
        { subCategoryId: 4, name: "Recipe" },
        { subCategoryId: 5, name: "Soup Recipe" },
    ];

    const handleCategoryClick = (category) => {
        onCategorySelect(category.name);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navelement}>
                <div className={styles.navcontainer}>
                    <div className={styles.mainlog}>
                        {/*<a href="/public">oneul-ui bab</a>*/}
                        <a href="/">oneul-ui bab</a>
                    </div>
                    <div className={styles.categorycontainer}>
                        <ul className={styles.menu}>
                            {CATEGORIES.map(category => (
                                <li key={category.subCategoryId} className={styles.item}>
                                    {/*<a href="/public" onClick={(event) => {*/}
                                    <a href="/" onClick={(event) => {
                                        event.preventDefault();
                                        handleCategoryClick(category);
                                    }}>{category.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        로그인 버튼
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
