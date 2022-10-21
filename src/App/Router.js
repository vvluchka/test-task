import React from 'react'
import {
  createBrowserRouter,
} from "react-router-dom";

import DataFetching from '../Components/ShortList/DataFetching';
import Article from '../Components/Article/Article';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DataFetching />,
    children: [
      {
        path: "article",
        element: <Article />
      }
    ]
  },
]);