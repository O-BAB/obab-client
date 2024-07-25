import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {CardList} from "react-bootstrap-icons";

const WriteCommentPage = () => {
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
  )
}

export default WriteCommentPage;
