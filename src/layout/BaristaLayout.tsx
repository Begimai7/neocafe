// import React from 'react';
import { BaristaSidebar } from './BaristaSidebar';
// import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const BaristaLayout = () => {
 
  return (
    <div className='flex'>
      <BaristaSidebar />
      <Outlet />
    </div>
  );
};

export default BaristaLayout;
