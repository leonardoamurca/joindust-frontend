import React from 'react';
import { useUser } from './context/user';
import { useAuth } from './context/auth';

function AuthenticatedApp() {
  const auth = useAuth();
  const user = useUser();

  return (
    <>
      <h1>Authenticated App</h1> <button onClick={auth.logout}>logout</button>
    </>
  );
}

export default AuthenticatedApp;
