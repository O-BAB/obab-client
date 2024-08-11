import React from 'react';
import {styled} from "@mui/system";
import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import AccountContainer from "../../hooks/AccountContainer";
import {useRecoilValue} from "recoil";
import {userinfoBookmarkState, userinfoRecipeWriteState} from "../../recoil/userState";

const CardStyled = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const CardMediaStyled = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 비율
});

/**
 * 메인 부분
 * @return {Element}
 * @constructor
 */
function BookmarkPage() {
  const {useBookmark} = AccountContainer();
  const page = 1;
  const {isError, isLoading} = useBookmark(page);

  // 데이터 출력
  const rows = useRecoilValue(userinfoBookmarkState);

  if (isLoading) <div>isLoading....</div>
  if (isError) <div>error</div>
  return (
    <Container maxWidth="lg" className={`mt-8`}>
      <Grid container spacing={4} className="mt-8">
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {rows?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardStyled>
                  <CardMediaStyled
                    image={`${item?.thumnail}`}
                    title="이미지"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {/*Easy and Quick Recipes with Ingredients From...*/}
                      {item?.title}
                    </Typography>
                    <Typography>
                      {/*March 5, 2024*/}
                      {item?.updatedAt}
                    </Typography>
                    <Typography>
                      {/*OBAB is a Korean food and recipe blog that offers a...*/}
                      {item?.intro}
                    </Typography>
                  </CardContent>
                </CardStyled>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BookmarkPage;
