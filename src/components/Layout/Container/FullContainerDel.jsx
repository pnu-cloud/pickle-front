import React from 'react';
import { Outlet } from 'react-router-dom';

const FullContainer = () => {
  return (
    <div className="flex justify-center w-full min-h-screen sm:pt-6">
      <Outlet />
    </div>
  );
};

export default FullContainer;
