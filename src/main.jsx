import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mian from './layout/Main';
import Home from './components/Home';
import Register from './components/Register';
import LogIn from './components/LogIn';
import AuthProviders from './providers/AuthProviders';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian></Mian>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
