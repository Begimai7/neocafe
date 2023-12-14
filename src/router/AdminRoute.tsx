import { Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu';
import Employees from '../pages/Employees';
import Branches from '../pages/Branches';
import Stock from '../pages/Stock';
import Layout from '../layout/Layout';

const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/menu/" element={<Menu />} />
          <Route path="/stock/" element={<Stock />} />
          <Route path="/branches/" element={<Branches />} />
          <Route path="/employees/" element={<Employees />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRoute;
