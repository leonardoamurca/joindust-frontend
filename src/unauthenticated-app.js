import React from 'react';
import { Router, Redirect } from '@reach/router';

import Login from './screens/Login';
import NotFound from './utils/NotFound';
import Register from './screens/Register';

function UnauthenticatedApp() {
  function RedirectLogin() {
    return <Redirect noThrow to="/login" />;
  }

  return (
    <Router>
      <Login path="login" />
      <Register path="register" />
      <RedirectLogin path="/auth/*" />
      <RedirectLogin path="/" />
      <NotFound default screenName="login" path="/login" />
    </Router>
  );
}

export default UnauthenticatedApp;
