import { Outlet } from 'react-router-dom';
import BaristaTabs from '../../components/UI/BaristaTabs';
import { orderTabsData } from '../../utils/constants/constants';

const Profile = () => {
  return (
    <div className="w-full">
      <BaristaTabs labels={orderTabsData} />
      <Outlet />
    </div>
  );
};

export default Profile;
