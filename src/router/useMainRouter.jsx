import React from 'react';
import { useRoutes } from 'react-router-dom';
import Hello from '../components/Hello';
import GalleryBox from '../Gallery/GalleryBox';
import Sidebar from '../components/Layout/Sidebar/Sidebar';

const useMainRouter = () => {
  return useRoutes([
    { path: '/', element: <Hello /> },
    { path: '/gallerybox', element: <GalleryBox /> },
    { path: '/sidebar', element: <Sidebar /> },
  ]);
};

export default useMainRouter;
