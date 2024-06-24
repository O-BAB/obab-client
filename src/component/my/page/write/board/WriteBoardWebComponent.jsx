import React from 'react';
import styles from "../../../../../css/my/page/web/writeBoard.web.module.css";
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

const WriteBoardWebComponent = () => {
  let arr = ['', '', '', '', '', '']
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
    </Container>
  );
//   return (
//     <div className={`${styles?.myPageRouterComponent}`}>
//       <div className={`${styles?.writeBoardContents} flex flex-wrap`}>
//         {
//           arr.map(() =>
//             <div className={`flex flex-col h-96 w-60 border-4 mx-5 my-5`}>
//               <img src={`/images/siteinfo/siteinfo.webp`} alt={`이미지`} className={`h-52 border-4`}/>
//               <div className={`text-left text-xl py-1 ${styles?.commonEllipsis}`}>{`Easy and Quick Recipes with
// Ingredients From Your Fridge`}</div>
//               <div className={`text-left py-1 text-sm text-gray-400 ${styles?.commonEllipsis}`}>{`March 5, 2024`}</div>
//               <div className={`text-left py-1 text-gray-500 ${styles?.commonEllipsis}`}>{`OBAB is a Korean food and recipe blog that
// offers a unique…`}</div>
//             </div>
//           )
//         }
//       </div>
//
//       <div className={`m-10 text-blue-400 cursor-pointer text-lg`}>{`더 보기`}</div>
//     </div>
//   );
}

export default WriteBoardWebComponent;
