import { createBrowserRouter } from 'react-router-dom';
import BaristaLayout from '../layout/BaristaLayout';

import Orders from '../pages/barista/Orders';
import Menu from '../pages/barista/Menu';
import Profile from '../pages/barista/Profile';

import OrderCard from '../components/barista/orders/OrderCard';
// import BaristaTabs from '../components/UI/BaristaTabs';

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
                  path: ':place/:name',
                  element: <OrderCard/>,
                  // children: [
                  //   {
                  //     path: ':name',
                  //     element: <OrderCard/>,
                  //   },
                  // ],
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
            },
          ],
        },
      ],
    },
  ],
  // ),
);
