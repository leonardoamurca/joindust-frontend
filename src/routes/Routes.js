import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Root from '../screens/Root';
import PrivateRoute from './PrivateRoute';
import Home from '../screens/Home';
import Login from '../screens/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
