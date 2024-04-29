import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Task1 from './pages/componentPractice';
import Task2 from './pages/jsonData';
import DataPolling from './pages/dataPolling';
import Debounce from './pages/Debounce';

//Main component wrapped in React Router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Task2 />,
  },
  {
    path: '/Components',
    element: <Task1 />,
  },
  {
    path: '/dataPolling',
    element: <DataPolling />,
  },
  {
    path: '/debounce',
    element: <Debounce />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
