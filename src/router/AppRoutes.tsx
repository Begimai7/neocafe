import { createBrowserRouter } from 'react-router-dom';
import BaristaLayout from '../layout/BaristaLayout';

import Orders from '../pages/barista/Orders';
import Menu from '../pages/barista/Menu';
import Profile from '../pages/barista/Profile';

import OrderCard from '../components/barista/orders/OrderCard';
import Calendar from '../components/barista/profile/Calendar';
import AdminLayout from '../layout/AdminLayout';
import AdminMenu from '../pages/AdminMenu';
import Stock from '../pages/Stock';
import Branches from '../pages/Branches';
import Employees from '../pages/Employees';


export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: '',
      children: [
        {
          path: '/barista',
          element: <BaristaLayout />,
          children: [
            {
              path: 'orders',
              element: <Orders />,
              children: [
                {
                  path: 'takeaway',
                  element: <OrderCard />,
                },
              ],
            },
            {
              path: 'menu',
              element: <Menu />,
            },
            {
              path: 'profile',
              element: <Profile />,
              children: [
                {
                  path: ':name',
                  element: <Calendar />,
                },
              ],
            },
          ],
        },
        {
          path: '/admin',
          element: <AdminLayout />,
          children: [{
            path: 'menu',
            element: <AdminMenu />
          },
          {
            path: 'stock',
            element: <Stock />
          },
          {
            path: 'branches',
            element: <Branches />
          },
          {
            path: 'employees',
            element: <Employees />
          }

        ]
        }
      ]
    }
  ],
);
