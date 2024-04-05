import React, {useEffect} from 'react';
import NavbarComponent from "../../component/common/navbar/NavbarComponent";
import Footer from "../../component/common/footer/Footer";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import TopButton from "../../component/common/top/button/TopButton";
import styles from '../../css/main/main.module.css'

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
      <NavbarComponent/>
      <div className={`${styles?.mainContents}`}>
        <Outlet/>
      </div>
      <TopButton/>
      <Footer/>
    </div>
  );
}

export default MainLayout;