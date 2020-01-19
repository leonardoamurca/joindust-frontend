import React from 'react';
import { Router, Redirect } from '@reach/router';

import About from './screens/Producer/About';
import NotFound from './utils/NotFound';
import Home from './screens/Producer/Home';

function ProducerApp({ roleId }) {
  function RedirectHomeFromLogin() {
    return <Redirect noThrow to={`/auth/${roleId}/about`} />;
  }

  return (
    <Router>
      <RedirectHomeFromLogin path="/login" />
      <Home path={`auth/${roleId}`}>
        <About path="about" />
      </Home>
      <NotFound default path={`/auth/${roleId}/about`} screenName="about" />
    </Router>
  );
}

export default ProducerApp;
