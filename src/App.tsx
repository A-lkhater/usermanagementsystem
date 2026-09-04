import { useState } from 'react'
import heroImg from './assets/img/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './components/AuthLayout/AuthLayout'
import Login from './components/Login/Login'
import MasterLayOut from './components/MasterLayOut/MasterLayOut'
import Home from './components/Home/Home'
import UsersList from './components/UsersList/UsersList'
import UsersData from './components/UsersData/UsersData'
import Profile from './components/Profile/Profile'
import NotFound from './components/NotFound/NotFound'
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
function App() {
  const routes = createBrowserRouter([
    {
      path: '', element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "Login", element: <Login /> },
      ]
    },
    {
      path: 'dashboard', element: <MasterLayOut />,
      errorElement: <NotFound />,

      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "UsersList", element: <UsersList /> },
        { path: "UsersData", element: <UsersData /> },
        { path: "/dashboard/UsersData/:id", element: <UsersData /> },
        { path: "Profile", element: <Profile /> },

      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
export default App

