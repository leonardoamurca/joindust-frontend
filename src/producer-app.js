import React from 'react';
import { Router, Redirect } from '@reach/router';

import NotFound from './utils/NotFound';
import Home from './screens/Producer/Home';
import NewCollect from './screens/Producer/NewCollect';
import MyCollects from './screens/Producer/MyCollects';
import Profile from './screens/Profile';

function ProducerApp({ roleId }) {
  function RedirectHomeFromLogin() {
    return <Redirect noThrow to={`/auth/${roleId}/new-collect`} />;
  }

  return (
    <Router>
      <RedirectHomeFromLogin path="/login" />
      <Home path={`auth/${roleId}`}>
        <NewCollect path="new-collect" />
        <MyCollects path="my-collects" />
        <Profile path="profile" />
        <NotFound
          default
          path={`/auth/${roleId}/new-collect`}
          screenName="about"
        />
      </Home>
      <NotFound
        default
        path={`/auth/${roleId}/new-collect`}
        screenName="about"
      />
    </Router>
  );
}

export default ProducerApp;
