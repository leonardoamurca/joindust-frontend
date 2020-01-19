import React from 'react';
import { Router, Redirect } from '@reach/router';
import NotFound from './utils/NotFound';
import Home from './screens/Recycler/Home';
import Profile from './screens/Profile';
import AllCollects from './screens/Recycler/AllCollects';
import MyContacts from './screens/Recycler/MyContacts';

function RecyclerApp({ roleId }) {
  function RedirectHomeFromLogin() {
    return <Redirect noThrow to={`/auth/${roleId}/all-collects`} />;
  }

  return (
    <Router>
      <RedirectHomeFromLogin path="/login" />
      <Home path={`auth/${roleId}`}>
        <AllCollects path="all-collects" />
        <MyContacts path="my-contacts" />
        <Profile path="profile" />
        <NotFound
          default
          path={`/auth/${roleId}/all-collects`}
          screenName="news"
        />
      </Home>
      <NotFound
        default
        path={`/auth/${roleId}/all-collects`}
        screenName="news"
      />
    </Router>
  );
}

export default RecyclerApp;
