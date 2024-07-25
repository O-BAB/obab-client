import React from 'react';
import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import {styled} from "@mui/system";

const CardStyled = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const CardMediaStyled = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 비율
});

const WriteBoardPage = () => {
  return (
    <Container maxWidth="lg" className={`mt-8`}>
      <Grid container spacing={4} className="mt-8">
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <CardStyled>
                  <CardMediaStyled
                    image="/images/siteinfo/siteinfo.webp"
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
    </Container>  )
}

export default WriteBoardPage;
