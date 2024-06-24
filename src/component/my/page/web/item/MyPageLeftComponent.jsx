import React from 'react';
import {Avatar, Grid, Link, Typography} from "@mui/material";
import {styled} from "@mui/system";

const MyPageLeftComponent = () => {

  return (
    <div className="flex flex-col w-1/5 min-h-[89vh] py-5 px-7">
      <Grid item XS={12} md={3} className="justify-center items-center">
        <div className={`flex flex-row justify-center w-full`}>
          <AvatarStyled src="/profile.jpg" alt="닉네임" className="items-center"/>
        </div>
        <Typography variant="h6" className="mt-4 flex flex-col items-center">닉네임</Typography>
        <Typography variant="body1" className="mt-2 text-center flex flex-col items-center">
          간단한 자기소개 두줄 정도 가나다라마바사 아자차
        </Typography>
        <div className="mt-4 flex flex-col items-center">
          <Link href="#" className="block mt-2">페이스북</Link>
          <Link href="#" className="block mt-2">트위터</Link>
          <Link href="#" className="block mt-2">유튜브</Link>
        </div>
      </Grid>
    </div>
  );
}

const AvatarStyled = styled(Avatar)(({theme}) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

export default MyPageLeftComponent;
