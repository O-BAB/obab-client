import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainPage from "../page/main/MainPage";
import CategoryViewPage from "../page/category/CategoryViewPage";
import ErrorPage from "../page/error/ErrorPage";
import Login from "../page/login/user/Login";
import MyPageLayout from "../layout/my/page/MyPageLayout";
import InterestedBoardPage from "../page/my/page/InterestedBoardPage";
import WriteBoardPage from "../page/my/page/WriteBoardPage";
import WriteCommentPage from "../page/my/page/WriteCommentPage";
import MainLayout from "../layout/main/MainLayout";
import KoreanCuisinePage from "../page/category/KoreanCuisinePage";
import FoodRecipePage from "../page/category/FoodRecipePage";
import CookingTipsPage from "../page/category/CookingTipsPage";
import RecipePage from "../page/category/RecipePage";
import SoupRecipePage from "../page/category/SoupRecipePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'main',
        element: <MainPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'korean/cuisine',
        element: <KoreanCuisinePage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'food/recipe',
        element: <FoodRecipePage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'cooking/tips',
        element: <CookingTipsPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'recipe',
        element: <RecipePage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'soup/recipe',
        element: <SoupRecipePage/>,
        errorElement: <ErrorPage/>
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/category/view/:id',
    element: <CategoryViewPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/mypage',
    element: <MyPageLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'interested/board',
        element: <InterestedBoardPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'write/board',
        element: <WriteBoardPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'write/comment',
        element: <WriteCommentPage/>,
        errorElement: <ErrorPage/>
      }
    ]
  }
])


export default router;
