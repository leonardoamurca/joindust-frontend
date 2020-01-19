import React from 'react';
import { Router, Redirect } from '@reach/router';
import NotFound from './utils/NotFound';
import News from './screens/Recycler/News';
import Home from './screens/Recycler/Home';

function RecyclerApp({ roleId }) {
  function RedirectHomeFromLogin() {
    return <Redirect noThrow to={`/auth/${roleId}/news`} />;
  }

  return (
    <Router>
      <RedirectHomeFromLogin path="/login" />
      <Home path={`auth/${roleId}`}>
        <News path="news" />
      </Home>
      <NotFound default path={`/auth/${roleId}/news`} screenName="news" />
    </Router>
  );
}

export default RecyclerApp;
