import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import FullContainer from 'components/Layout/Container/FullContainer';
import Home from 'pages/Home/Home';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';
import Group from 'components/Group/Group';

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <FullContainer />,
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
    { path: '/Group', element: <Group /> },
  ]);
};

export default useMainRouter;
