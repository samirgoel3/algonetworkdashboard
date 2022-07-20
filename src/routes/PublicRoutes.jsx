import React, { Component } from 'react'
import { Navigate, Outlet } from "react-router-dom";


const redirect = "/dashboard";


const PublicRoutes = ({isAuthenticated, children}) => {
    if (isAuthenticated) {
      return <Navigate to={redirect} />;
    }
  
    return children ? children : <Outlet />;
  };
  
  export default PublicRoutes;
  