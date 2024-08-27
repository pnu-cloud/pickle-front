import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import FitContainer from 'components/Layout/Container/FitContainer';
import Home from 'pages/Home/Home';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';
import Group from 'pages/Group/Group';
import GalleryBox from 'components/Gallery/GalleryBox';
import SortButton from 'components/Buttons/SortButton';
import SearchBox from 'components/Input/SearchBox';

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <FitContainer />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'signup',
              element: <Signup />,
            },
            {
              path: 'login',
              element: <Login />,
            },
            {
              path: 'group',
              element: <Group />,
            },
          ],
        },
      ],
    },
    { path: 'button', element: <SortButton /> },
    { path: 'search', element: <SearchBox /> },
  ]);
};

export default useMainRouter;
