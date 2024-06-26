import React from 'react';
import { Avatar, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const MyPageLeftComponent = () => {
  return (
    <div className="flex flex-col w-1/5 min-h-[89vh] py-5 px-7">
      <Grid item xs={12} md={3} className="justify-center items-center">
        <div className={`flex flex-row justify-center w-full`}>
          <AvatarStyled src="/profile.jpg" alt="닉네임" className="items-center" />
        </div>
        <Typography variant="h6" className="mt-4 flex flex-col items-center">닉네임</Typography>
        <Typography variant="body1" className="mt-2 text-center flex flex-col items-center">
          간단한 자기소개 두줄 정도 가나다라마바사 아자차
        </Typography>
        <div className="mt-4 flex flex-col items-start">
          <SocialLink href="#">
            <FacebookIcon className="mr-2" style={{ color: '#4267B2' }} />
            <div className="flex flex-col">
              <span className="platform-name">Facebook</span>
              <span className="followers-count">2M+ Followers</span>
            </div>
          </SocialLink>
          <SocialLink href="#">
            <TwitterIcon className="mr-2" style={{ color: '#1DA1F2' }} />
            <div className="flex flex-col">
              <span className="platform-name">Twitter</span>
              <span className="followers-count">2M+ Followers</span>
            </div>
          </SocialLink>
          <SocialLink href="#">
            <YouTubeIcon className="mr-2" style={{ color: '#FF0000' }} />
            <div className="flex flex-col">
              <span className="platform-name">YouTube</span>
              <span className="followers-count">2M+ Followers</span>
            </div>
          </SocialLink>
        </div>
      </Grid>
    </div>
  );
}

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
  textDecoration: 'none',
  color: 'inherit',
  '& .flex': {
    display: 'flex',
    flexDirection: 'column'
  },
  '& .platform-name': {
    fontSize: '14px',
    color: 'black'
  },
  '& .followers-count': {
    fontSize: '12px',
    color: 'gray'
  }
}));

export default MyPageLeftComponent;
