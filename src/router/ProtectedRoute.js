import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route {...rest} render={props => {
      if (!isAuthenticated) {
        return (<Redirect to="/auth/login" />)
      } else
        return <Component {...props} />
    }}
    />
  )
}

export default ProtectedRoute;
