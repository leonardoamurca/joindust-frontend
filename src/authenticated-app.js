import React from 'react';
import { Router, Redirect, Link } from '@reach/router';
import { useUser } from './context/user';
import { useAuth } from './context/auth';

import Home from './screens/Home';
import About from './screens/About';

function AuthenticatedApp() {
  const auth = useAuth();
  const user = useUser();

  console.log(user);

  function RedirectHome() {
    return <Redirect noThrow to="/home" />;
  }

  function NotFound() {
    return (
      <div
        css={{
          height: '100%',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          Sorry... nothing here. <Link to="/">Go home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Authenticated App</h1> <button onClick={auth.logout}>logout</button>
      <Router>
        <RedirectHome path="/" />
        <Home path="/home" />
        <About path="about" />
        <NotFound default />
      </Router>
    </>
  );
}

export default AuthenticatedApp;
