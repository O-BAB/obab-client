import { Container, Box, Typography, Card, CardContent, Grid } from '@mui/material';

const data = [
  { title: "닭갈비", description: "닭갈비는 한국의 대표적인 ... 맛있는 요리다." },
  { title: "돼지고기", description: "돼지고기는 한국의 대표적인 ... 맛있는 요리다." },
  { title: "순대국밥", description: "순대국밥은 한국의 대표적인 ... 맛있는 요리다." }
];

const categories = [
  ["종류", "회", "비빔", "조림"],
  ["포감도", "가벼운", "보통", "해비"],
  ["온도", "뜨거운", "따뜻한", "차가운"],
  ["맵기", "엄청 맵게", "맵게", "보통", "순하게"],
  ["육류", "돼지", "소", "닭", "생선", "비건"],
  ["조리 방법", "구이", "튀김", "찜", "탕"],
];

const MenuRecommendPage = () => {
  return (
    <Container className="mx-auto p-4">
      <Box className="bg-pink-100 p-6 rounded-lg shadow-md">
        {categories.map((category, index) => (
          <Box key={index} className="mb-4">
            <Typography variant="body1" className="font-bold">
              {category[0]}
            </Typography>
            <Grid container spacing={2}>
              {category.slice(1).map((item, idx) => (
                <Grid item key={idx}>
                  <Typography variant="body2">
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
      <Grid container spacing={2} className="mt-6">
        {data.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="shadow-lg">
              <CardContent>
                <Typography variant="h6" className="font-bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="mt-2">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MenuRecommendPage;
