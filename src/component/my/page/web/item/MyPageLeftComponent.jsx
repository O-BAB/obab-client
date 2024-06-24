import React from 'react';
import {Avatar, Grid, Link, Typography} from "@mui/material";
import styles from "../../../../../css/my/page/web/myPage.web.module.css";
import {styled} from "@mui/system";

const MyPageLeftComponent = () => {

  return (
    <div className={`${styles?.myPageLeftComponent} py-5 px-7`}>
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
    // <div className={`${styles?.myPageLeftComponent} py-5 px-7`}>
    //   <Grid item xs={12} md={3} className="flex justify-center items-center">
    //     <AvatarStyled src="/profile.jpg" alt="닉네임" className={`flex flex-col items-center`} />
    //     <Typography variant="h6" className="mt-4 flex flex-col items-center">닉네임</Typography>
    //     <Typography variant="body1" className="mt-2 text-center flex flex-col items-center">
    //       간단한 자기소개 두줄 정도 가나다라마바사 아자차
    //     </Typography>
    //     <div className="mt-4">
    //       <Link href="#" className="block mt-2">페이스북</Link>
    //       <Link href="#" className="block mt-2">트위터</Link>
    //       <Link href="#" className="block mt-2">유튜브</Link>
    //     </div>
    //   </Grid>
    // </div>
    // <div className={`${styles?.myPageLeftComponent} py-5 px-7`}>
    //   <div className={`${styles?.myPageLeftProfileImageComponent}`}>
    //     <PersonCircle className={`${styles?.myPageLeftProfileImage}`}/>
    //   </div>
    //   <div className={`font-bold text-xl my-4`}>
    //     {`닉네임`}
    //   </div>
    //   <div className={`justify-items-start text-left px-7 my-5`}>
    //     {`간단한 자기소개 두줄 정도 가나다라마바사 아자차`}
    //   </div>
    //   <div className={`justify-items-start text-left px-7 my-5`}>
    //     <div className={`flex-col cursor-pointer my-3 `}>
    //       {`페이스북`}
    //     </div>
    //     <div className={`flex-col cursor-pointer my-3`}>
    //       {`트위터`}
    //     </div>
    //     <div className={`flex-col cursor-pointer my-3`}>
    //       {`유튜브`}
    //     </div>
    //   </div>
    // </div>
  );
}

const AvatarStyled = styled(Avatar)(({theme}) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

export default MyPageLeftComponent;
