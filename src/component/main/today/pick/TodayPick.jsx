import React from 'react';
import styles from '../../../../css/main/today/pick/todayPick.module.css';

const TodayPick = () => {
    return (
        <div className={styles.today_pick_con}>
            <div className={styles.today_pick_title}>
                <h2>Today pick</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.element}>
                    <div className={styles.name}>오뎅탕</div>
                    <div className={styles.item}>오늘 같이 추운날엔 따뜻한 오뎅탕, 첫번째 글이 조금 길어야할 것 같음</div>
                </div>
                <div className={styles.element}>
                    <div className={styles.name}>GPT</div>
                    <div className={styles.item}>이부분은 GPT를 이용하여 매일 업데이트 되도록, 날씨정보도 가지고와서 검색하면 좋을 것 같음</div>
                </div>
                <div className={styles.element}>
                    <div className={styles.name}>짜장면</div>
                    <div className={styles.item}>오늘 같이 추운날엔 따뜻한 오뎅탕, 뜬금없긴한데 짜장면도 먹고싶다..</div>
                </div>
                <div className={styles.element}>
                    <div className={styles.name}>배고파요</div>
                    <div className={styles.item}>아무생각 없이 배고프다..</div>
                </div>
            </div>
            <div class={styles.divider}></div>
        </div>
        
    );
}

export default TodayPick;
