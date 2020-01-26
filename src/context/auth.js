import React from 'react';
import { useAsync } from 'react-async';

import * as authClient from '../services/auth-client';
import { bootstrapAppData } from '../utils/bootstrapAppData';
import FullPageSpinner from '../components/FullPageSpinner';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const {
    data = { user: null, collections: [] },
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({
    promiseFn: bootstrapAppData,
  });

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />;
    }
    if (isRejected) {
      return (
        <div css={{ color: 'red' }}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }

  const login = (usernameOrEmail, password) =>
    authClient.login(usernameOrEmail, password).then(reload);

  const logout = () => authClient.logout().then(reload);

  const register = form => authClient.register(form);

  const getUserProfile = form => authClient.getUserProfile(form);

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register, reload, getUserProfile }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
