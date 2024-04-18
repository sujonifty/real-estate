import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Components/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Error from './Pages/Error/Error';
import AuthProvider from './AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardDetails from './Components/CardDetails';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import PrivateRoute from './Components/PrivateRoute';
import UserProfile from './Pages/UserProfile/UserProfile';
import ContactUs from './Pages/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contactUs",
        element: <PrivateRoute>
          <ContactUs></ContactUs>
        </PrivateRoute>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>,
      },
      {
        path: "/userProfile",
        element: <PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute >

      },
      {
        path: "/cardDetails/:id",
        element: <PrivateRoute>
          <CardDetails></CardDetails>
        </PrivateRoute>,
        loader: () => fetch('/categories.json'),
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />,
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
