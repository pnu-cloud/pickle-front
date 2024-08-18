import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Header></Header>
      <Sidebar></Sidebar>
    </div>
  );
};

export default MainLayout;
