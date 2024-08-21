import React from 'react';
import { Outlet } from 'react-router-dom';

const FullContainer = () => {
  return (
    <div className="flex justify-center w-full min-h-screen pt-14 sm:pt-header">
      <Outlet />
    </div>
  );
};

export default FullContainer;
