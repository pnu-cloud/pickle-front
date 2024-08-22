import React from 'react';
import { Outlet } from 'react-router-dom';

const FitContainer = () => {
  return (
    <div className="flex justify-center w-full min-h-screen pt-10 sm:pt-16">
      <div className="w-full px-2 mb-20 mt-header max-w-container 2xl:px-0">
        <Outlet />;
      </div>
    </div>
  );
};

export default FitContainer;
