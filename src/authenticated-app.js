import React from 'react';
import { Router, Redirect } from '@reach/router';
import { useUser } from './context/user';
import { useAuth } from './context/auth';

import Home from './screens/Home';
import About from './screens/About';
import NotFound from './utils/NotFound';

function AuthenticatedApp() {
  const auth = useAuth();
  const user = useUser();
  const roleId = user.roles[0].id;

  function RedirectHomeFromLogin() {
    return <Redirect noThrow to={`/auth/${roleId}/home`} />;
  }

  return (
    <>
      <h1>Authenticated App</h1> <button onClick={auth.logout}>logout</button>
      <Router>
        <RedirectHomeFromLogin path="/login" />
        <Home path={`/auth/${roleId}/home`}></Home>
        <About path={`/auth/${roleId}/about`} />
        <NotFound default path={`/auth/${roleId}/home`} screenName="home" />
      </Router>
    </>
  );
}

export default AuthenticatedApp;
