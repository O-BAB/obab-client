import React from 'react';
import {styled} from "@mui/system";
import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import AccountContainer from "../../hooks/AccountContainer";

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
function InterestedBoardPage() {
  const {useBookmark} = AccountContainer();
  const page = 1;
  const {isError, isLoading} = useBookmark(page);

  if (isLoading) <div>isLoading....</div>
  if (isError) <div>error</div>
  return (
    <Container maxWidth="lg" className={`mt-8`}>
      <Grid container spacing={4} className="mt-8">
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <CardStyled>
                  <CardMediaStyled
                    image="/static/images/cards/paella.jpg"
                    title="이미지"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Easy and Quick Recipes with Ingredients From...
                    </Typography>
                    <Typography>
                      March 5, 2024
                    </Typography>
                    <Typography>
                      OBAB is a Korean food and recipe blog that offers a...
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

export default InterestedBoardPage;
