import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import Hello from 'components/Hello';
import Group from 'components/Layout/Group/Group';
import Header from 'components/Layout/Header/Header';
import Sidebar from 'components/Layout/Sidebar/Sidebar';
import GroupNav from 'components/Navigation/GroupNav';

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <Hello />,
        },
      ],
    },
    { path: '/Group', element: <Group /> },
    { path: '/header', element: <Header /> },
    { path: '/sidebar', element: <Sidebar /> },
    { path: '/groupnav', element: <GroupNav /> },
  ]);
};

export default useMainRouter;
