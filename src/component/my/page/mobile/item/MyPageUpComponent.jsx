import React from 'react';
import {Avatar, Link, Typography} from "@mui/material";
import {styled} from "@mui/system";

const MyPageUpComponent = () => {
  return (
    <div className="flex flex-row w-full min-h-[10vh] justify-between items-center px-7">
      <div className="flex flex-row items-center">
        <AvatarStyled src="/profile.jpg" alt="닉네임"/>
        <Typography variant="h6" className="ml-4">닉네임</Typography>
      </div>
      <div className="flex flex-col items-center">
        <Typography variant="body1" className="mt-2 text-center">
          간단한 자기소개 두줄 정도 가나다라마바사 아자차
        </Typography>
      </div>
      <div className="flex flex-col items-end">
        <Link href="#" className="block mt-2">페이스북</Link>
        <Link href="#" className="block mt-2">트위터</Link>
        <Link href="#" className="block mt-2">유튜브</Link>
      </div>
    </div>
  );
}

const AvatarStyled = styled(Avatar)(({theme}) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));
export default MyPageUpComponent;
