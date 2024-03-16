import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "../page/main/Main";
import Posting from "../page/posting/Posting";
import ErrorPage from "../page/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/category/Posting/detail',
    element: <Posting />,
    errorElement: <ErrorPage />
  },
])


export default router;