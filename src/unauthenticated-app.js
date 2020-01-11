import React from 'react';
import { useAuth } from './context/auth';
import Login from './screens/Login';

function UnauthenticatedApp() {
  return (
    <>
      <h1>Unauthenticated App</h1>
      <Login />
    </>
  );
}

export default UnauthenticatedApp;
