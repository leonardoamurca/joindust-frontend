import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './isAuthenticated';

function PrivateRoute({ component: Component, location, ...rest }) {
  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default PrivateRoute;
