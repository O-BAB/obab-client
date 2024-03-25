import React, {useEffect} from 'react';
import Navbar from "../../component/common/navbar/Navbar";
import Footer from "../../component/common/footer/Footer";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import TopButton from "../../component/common/top/button/TopButton";

const MainLayout = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()

  // 아래는 경로가 / 이면 /main 으로 리다이렉션
  useEffect(() => {
    if (pathname === '/') {
      navigate('/main')
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <TopButton/>
      <Footer/>
    </div>
  );
}

export default MainLayout;