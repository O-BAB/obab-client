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
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="w-3/4 text-center mb-10">
        <h2 className="text-xl font-semibold">오늘 하루 어떤 기분이신가요?</h2>
      </div>
      <div className="w-3/4 h-12 bg-gray-200 rounded-full flex items-center">
        <div className="bg-white w-8 h-8 rounded-full shadow-md ml-2"></div>
      </div>
      <div className="w-3/4 mt-10">
        {/*<TodayPick/>*/}
        <div className="today-pick-container mx-9 my-10 flex flex-col">
          <div className="today-pick-title mb-5">
            <h2 className="text-2xl font-bold">Today pick</h2>
          </div>
          <div className="container flex overflow-x-auto space-x-4">
            <div className="element flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg">
              <div className="name text-lg font-bold">오뎅탕</div>
              <div className="item text-sm">오늘 같이 추운날엔 따뜻한 오뎅탕, 첫번째 글이 조금 길어야할 것 같음</div>
            </div>
            <div className="element flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg">
              <div className="name text-lg font-bold">GPT</div>
              <div className="item text-sm">이부분은 GPT를 이용하여 매일 업데이트 되도록, 날씨정보도 가지고와서 검색하면 좋을 것 같음</div>
            </div>
            <div className="element flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg">
              <div className="name text-lg font-bold">짜장면</div>
              <div className="item text-sm">오늘 같이 추운날엔 따뜻한 오뎅탕, 뜬금없긴한데 짜장면도 먹고싶다..</div>
            </div>
            <div className="element flex-shrink-0 w-64 p-4 bg-gray-100 rounded-lg">
              <div className="name text-lg font-bold">배고파요</div>
              <div className="item text-sm">아무생각 없이 배고프다..</div>
            </div>
          </div>
          <div className="divider mt-5 border-t border-gray-300 w-full"></div>
        </div>
      </div>
      <div className="w-3/4 mt-10">
        <Container className="mx-auto p-4">
          <h2 className="text-xl font-semibold">직접 선택</h2>
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
      </div>
    </div>

  );
}

export default MenuRecommendPage;
