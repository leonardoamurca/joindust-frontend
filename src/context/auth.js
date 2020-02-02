import React, { useState, useLayoutEffect, useContext } from 'react';
import { useAsync } from 'react-async';

import FullPageSpinner from '../components/FullPageSpinner';
import UnhandledError from '../components/UnhandledError';
import * as authClient from '../services/auth-client';
import { bootstrapAppData } from '../utils/bootstrapAppData';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const {
    data = { user: null },
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({
    promiseFn: bootstrapAppData,
  });

  useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />;
    }
    if (isRejected) {
      return <UnhandledError error={error} />;
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
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
