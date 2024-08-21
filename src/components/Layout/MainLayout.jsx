import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
