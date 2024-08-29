import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import FitContainer from 'components/Layout/Container/FitContainer';
import Home from 'pages/Home/Home';
import Signup from 'pages/Signup/Signup';
import Login from 'pages/Login/Login';
import Group from 'pages/Group/Group';
import ParticipantDelModal from 'components/Group/ParticipantDelModal';
import Project from 'pages/Project/Project';
import Deploy from 'pages/Deploy/Deploy';

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
            {
              path: 'ParticipantDelModal',
              element: <ParticipantDelModal />,
            },
            {
              path: 'Project',
              element: <Project />,
            },
            {
              path: 'Deploy',
              element: <Deploy />,
            },
          ],
        },
      ],
    },
  ]);
};

export default useMainRouter;
