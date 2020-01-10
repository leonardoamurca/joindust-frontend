import React from 'react';
import { useAuth } from './context/auth';

function AuthenticatedApp() {
  const user = useAuth();
  console.log(user);
  return <h1>Authenticated App</h1>;
}

export default AuthenticatedApp;
