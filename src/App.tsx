// import AppRoutes from './router/AppRoutes';

// import OrdersPanel from "./components/barista/orders/OrdersPanel";

// import DeleteModal from "./components/barista/orders/DeleteModal";
// import Notification from "./components/barista/orders/Notification";
// import OrdersPanel from "./components/barista/orders/OrdersPanel";
// import Orders from "./pages/barista/Orders";
import {  RouterProvider } from 'react-router-dom';
// import { router } from './router/BaristaRoute';
import { router } from './router/AppRoutes';
// import TableTabs from './components/Tabs';
// import BaristaTabs from './components/UI/BaristaTabs';
// 
// import OrderNavlink from "./components/barista/orders/OrderNavlink";

// import OrderCard from "./components/barista/orders/OrderCard";

function App() {
  return (
    <div>
        <RouterProvider router={router} />
      {/* <OrderNavlink /> */}
      {/* <OrderCard /> */}
      {/* <AppRoutes /> */}
      {/* <Orders /> */}
      {/* <DeleteModal /> */}
      {/* <OrdersPanel /> */}
      {/* <Notification /> */}
      {/* <TableTabs /> */}
      {/* <BaristaTabs /> */}
    </div>
  );
}
export default App;
