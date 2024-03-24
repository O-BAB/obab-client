import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "../page/main/Main";
import Posting from "../page/posting/Posting";
import ErrorPage from "../page/error/ErrorPage";
import Login from "../page/login/user/Login";
import MyPageLayout from "../layout/my/page/MyPageLayout";
import InterestedBoardPage from "../page/my/page/interested/board/InterestedBoardPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/category/Posting/detail',
    element: <Posting />,
    errorElement: <ErrorPage />
  },
  {
    path: '/mypage',
    element: <MyPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'interested/board',
        element: <InterestedBoardPage/>,
        errorElement: <ErrorPage />
      }
    ]
  }
])


export default router;