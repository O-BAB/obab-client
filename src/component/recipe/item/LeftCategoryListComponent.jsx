import React from 'react';
import styles from "../../../css/recipe/category.module.css";
import {useNavigate} from "react-router-dom";
import {Cup} from "react-bootstrap-icons";
import {useRecoilValue} from "recoil";
import {categoryTitleState, recipesState} from "../../../recoil/recipeState";
import RecipeContainer from "../../../hooks/RecipeContainer";

const LeftCategoryListComponent = () => {
  const { handlerDateFormatter } = RecipeContainer();
  const categoryTitle = useRecoilValue(categoryTitleState)
  const recipes = useRecoilValue(recipesState);
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.flexrow}>
        <div className={styles.title}>
          {categoryTitle}
        </div>
        <Cup className="w-12 h-12 mb-2 text-gray-700 cursor-pointer" onClick={() => navigate('/recipe/form/create')}/>
      </div>
      {
        recipes.map((data, index) =>
          <div key={index} className={`cursor-pointer`} onClick={() => {
            navigate(`/recipe/view/${data?.id}`)
          }}>
            <div className={styles.soupupdate_img_box}>
              {/*이미지 출력 부분*/}
              {/*<img className={styles.soupupdate_img} src="/images/siteinfo/siteinfo.webp" alt="Site Info"/>*/}
              <img className={styles.soupupdate_img} src={data?.thumnailUrl} alt="Site Info"/>
            </div>
            <div className={styles.recipeContainer}>
              <div className={styles.recipeContent}>
                <p className={styles.recipetitle}>
                  {/*제목 부분*/}
                  {data?.title}
                </p>
              </div>
              {/*<div className={styles.divider}></div>*/}
              <div className={styles.dateandcomments}>
                <p className={styles.date}>
                  {/*날짜부분 : data 값이 들어오지 않음*/}
                  {/*March 5, 2024*/}
                  {handlerDateFormatter(data?.createdAt)}
                </p>
                <p className={styles.separator}>•</p>
                <p className={styles.category}>
                  {/*이부분 어디에 들어가는지 확인 필요*/}
                  {/*123*/}
                  {data?.bookmarkCount}
                </p>
              </div>
              <div className={styles.description}>
                <p className={styles.descriptiontext}>
                  {/*소개 부분 으로 설명 넣기*/}
                  {data?.intro}
                </p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default LeftCategoryListComponent;
