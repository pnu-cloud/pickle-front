import React from 'react';
import { useRoutes } from 'react-router-dom';
import Hello from '../components/Hello';
import Group from '../components/Layout/Group/Group';
import Sidebar from '../components/Layout/Sidebar/Sidebar';

const useMainRouter = () => {
  return useRoutes([
    { path: '/', element: <Hello /> },
    { path: '/Group', element: <Group /> },
    { path: '/sidebar', element: <Sidebar /> },
  ]);
};

export default useMainRouter;
