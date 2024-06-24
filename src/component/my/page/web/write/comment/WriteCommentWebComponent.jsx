// import React from 'react';
// import styles from "../../../../../../css/my/page/web/writeComment.web.module.css";
// import {CardList} from "react-bootstrap-icons";
//
// const WriteCommentWebComponent = () => {
//   let arr = ['', '', '', '', '', '']
//   return (
//     <div className={`${styles?.myPageRouterComponent} py-5 px-5`}>
//       <div className={``}>
//         {
//           arr.map(() =>
//             // <div className={`flex flex-col flex-wrap border-black border-2 mx-12`}>
//             <div className={`flex flex-col flex-wrap mx-12`}>
//               <div className={`flex flex-wrap flex-row items-center justify-items-center py-2`}>
//                 <div className={`flex flex-col px-10 text-xl text-orange-600`}>곰돌이곰곰</div>
//                 <div className={`flex flex-col px-10 text-lg text-gray-400`}>111.111.xxx.111</div>
//                 <div className={`flex flex-col px-10 text-lg text-gray-400`}>2024-01-11 21:59</div>
//               </div>
//               <div className={`flex flex-wrap flex-row px-10 py-2`}>
//                 {`오늘도 양질의 포스터를 보고 갑니다.`}
//               </div>
//               <div className={`flex flex-wrap flex-row px-10 py-3 items-center`}>
//                 <CardList className={`mr-2`}/> {`  소프트웨어 아키텍처`}
//               </div>
//             </div>
//           )
//         }
//       </div>
//
//       <div className={`m-10 text-blue-400 cursor-pointer text-lg`}>{`더 보기`}</div>
//     </div>
//   );
// }
//
// export default WriteCommentWebComponent


import React from 'react';
import { Card, CardContent, Typography, Link, Grid } from '@mui/material';
import { CardList } from 'react-bootstrap-icons';

const WriteCommentWebComponent = () => {
  const comments = [
    { user: '곰돌이곰곰', ip: '111.111.xxx.111', date: '2024-01-11 21:59', content: '오늘도 양질의 포스터를 보고 갑니다.', category: '소프트웨어 아키텍처' },
    { user: '곰돌이곰곰', ip: '111.111.xxx.111', date: '2024-01-11 21:59', content: '오늘도 양질의 포스터를 보고 갑니다.', category: '소프트웨어 아키텍처' },
    { user: '곰돌이곰곰', ip: '111.111.xxx.111', date: '2024-01-11 21:59', content: '오늘도 양질의 포스터를 보고 갑니다.', category: '소프트웨어 아키텍처' },
    { user: '곰돌이곰곰', ip: '111.111.xxx.111', date: '2024-01-11 21:59', content: '오늘도 양질의 포스터를 보고 갑니다.', category: '소프트웨어 아키텍처' },
    { user: '곰돌이곰곰', ip: '111.111.xxx.111', date: '2024-01-11 21:59', content: '오늘도 양질의 포스터를 보고 갑니다.', category: '소프트웨어 아키텍처' },
    { user: '곰돌이곰곰', ip: '111.111.xxx.111', date: '2024-01-11 21:59', content: '오늘도 양질의 포스터를 보고 갑니다.', category: '소프트웨어 아키텍처' },
  ];

  return (
    <div className="py-5 px-5">
      <Grid container spacing={3}>
        {comments.map((comment, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Typography variant="h6" color="textPrimary">{comment.user}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">{comment.ip}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">{comment.date}</Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" color="textPrimary" style={{ marginTop: 16, textAlign: 'left' }}>
                  {comment.content}
                </Typography>
                <Grid container alignItems="center" style={{ marginTop: 16 }}>
                  <CardList style={{ marginRight: 8 }} />
                  <Typography variant="body2" color="primary">
                    {comment.category}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" color="primary" style={{ marginTop: 32, cursor: 'pointer', textAlign: 'center' }}>
        더 보기
      </Typography>
    </div>
  );
};

export default WriteCommentWebComponent;
