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
import Deploy2 from 'pages/Deploy/Deploy2';
import ImageUploader from 'components/Uploader/ImageUploader';
import CodeUploader from 'components/Uploader/CodeManager';
import ParticipantNav from 'components/Navigation/ParticipantNav';
import Mypage from 'pages/Mypage/Mypage';
import CodeBox from 'components/Input/CodeBox';

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
              path: 'group/:groupId',
              element: <Group />,
            },
            {
              path: 'group/:groupId/deploy-step1',
              element: <Deploy />,
            },
            {
              path: 'group/:groupId/deploy-step2',
              element: <Deploy2 />,
            },
            {
              path: 'ParticipantDelModal',
              element: <ParticipantDelModal />,
            },
            {
              path: 'project',
              element: <Project />,
            },
            { path: 'participant', element: <ParticipantNav /> },
            { path: 'mypage', element: <Mypage /> },
            { path: 'codebox', element: <CodeBox /> },
            { path: 'codeuploader', element: <CodeUploader /> },
          ],
        },
      ],
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
};

export default useMainRouter;
