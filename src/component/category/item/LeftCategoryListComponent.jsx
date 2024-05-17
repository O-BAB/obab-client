import React, {useCallback, useEffect, useState} from 'react';
import styles from "../../../css/category/category.module.css";
import CategoryContainer from "../../../hooks/CategoryContainer";
import {useLocation, useNavigate} from "react-router-dom";

const LeftCategoryListComponent = () => {
  const {displayCategoryTitle, displayReceiptList} = CategoryContainer();
  const {pathname} = useLocation()
  const categories = displayCategoryTitle(pathname)
  /**
   */
  const [categoriesList, setCategoriesList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // 아래는 1~10 페이지로 먼저 하드코딩으로 테스트
    // 페이지 네이션은 다음 스탭으로 이룰 예정
    const list = displayReceiptList(1, 10, categories);
    list
      .then((res) => {
        setCategoriesList(res.data);
      })
      .catch((e) => console.error(e));

  }, []);

  console.log(categoriesList)

  const handlerDateFormatter = (date) => {
    const d = new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    console.log(d)
    return d;
  }


  return (
    <div className={`cursor-pointer`} onClick={() => {
      navigate('/category/Posting/detail')
    }}>
      <div className={styles.flexrow}>
        <div className={styles.title}>
          {categories}
        </div>
      </div>
      {
        categoriesList.map((data, index) =>
          <div key={index}>
            <div className={styles.soupupdate_img_box}>
              {/*이미지 출력 부분*/}
              {/*<img className={styles.soupupdate_img} src="/images/siteinfo/siteinfo.webp" alt="Site Info"/>*/}
              <img className={styles.soupupdate_img} src={data?.thumnail_url} alt="Site Info"/>
            </div>
            <div className={styles.recipeContainer}>
              <div className={styles.recipeContent}>
              <p className={styles.recipetitle}>
                {/*제목 부분*/}
                {data?.title}
              </p>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.dateandcomments}>
                <p className={styles.date}>
                  {/*날짜부분 : data 값이 들어오지 않음*/}
                  {/*March 5, 2024*/}
                  {handlerDateFormatter(data?.created_at)}
                </p>
                <p className={styles.separator}>•</p>
                <p className={styles.category}>
                  {/*이부분 어디에 들어가는지 확인 필요*/}
                  {/*123*/}
                  {data?.like_count}
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
