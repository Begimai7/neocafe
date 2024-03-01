import {  RouterProvider } from 'react-router-dom';
import { router } from './router/AppRoutes';

// import Calendar from "./components/barista/profile/Calendar";

function App() {
  return (
    <div>
        <RouterProvider router={router} />
        {/* <Calendar /> */}
    </div>
  );
}

export default App;
