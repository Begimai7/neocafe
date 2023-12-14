import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer icon={false} />
    <BrowserRouter>
      <App />
      <ToastContainer icon={false} />
    </BrowserRouter>
  </React.StrictMode>,
);
