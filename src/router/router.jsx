import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainPage from "../page/main/MainPage";
import CategoryViewPage from "../page/recipe/RecipeViewPage";
import ErrorPage from "../page/error/ErrorPage";
import Login from "../page/login/user/Login";
import MyPageLayout from "../layout/my/page/MyPageLayout";
import InterestedBoardPage from "../page/my/page/InterestedBoardPage";
import WriteBoardPage from "../page/my/page/WriteBoardPage";
import WriteCommentPage from "../page/my/page/WriteCommentPage";
import MainLayout from "../layout/main/MainLayout";
import RecipeListPage from "../page/recipe/RecipeListPage";
import SignUp from "../page/login/user/SignUp";
import MenuRecommendPage from "../page/recipe/MenuRecommendPage";
import RecipeFormPage from "../page/recipe/RecipeFormPage";

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
        path: '/menu/recommend',
        element: <MenuRecommendPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'korean/cuisine',
        element: <RecipeListPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'food/recipe',
        element: <RecipeListPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'cooking/tips',
        element: <RecipeListPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'recipe',
        element: <RecipeListPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'soup/recipe',
        element: <RecipeListPage/>,
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
    path: '/SignUp',
    element: <SignUp/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/recipe/view/:id',
    element: <CategoryViewPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/recipe/form/:id',
    element: <RecipeFormPage/>,
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
