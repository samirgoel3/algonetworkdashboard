import React, { Component } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from '../components/sidebar/';

const redirect = "/login";

const ProtectedRoute = ({isAuthenticated, children, ...rest}) => {
    if (!isAuthenticated) {
      return <Navigate to={redirect} />;
    }
  
    // if (adminRoute && !isAdmin) {
    //   return <Navigate to={redirectAdmin} />;
    // }
  
    return children ? children : <Sidebar><Outlet {...rest}/></Sidebar>;
  };
  
  export default ProtectedRoute;
  