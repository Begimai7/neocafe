import { Outlet } from 'react-router-dom';
import BaristaTabs from '../../components/UI/BaristaTabs';

const Orders = () => {
  return (
    <div className="flex flex-col gap-3 w-full bg-[#F3F5F7] h-screen">
      <BaristaTabs />
      <div className="grid grid-cols-4 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Orders;
