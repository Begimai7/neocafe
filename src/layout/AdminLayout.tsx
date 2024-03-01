// import React from 'react';
// import AdminHeader from '../components/admin/AdminHeader';
import AdminSideBar from './AdminSideBar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className="flex flex-col w-full">
        
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
