import React, { useState, useEffect } from 'react';
import * as authClient from '../services/auth-client';

export const FullPageSpinner = () => <h1>Loading...</h1>;

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [data, setData] = useState({ user: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    authClient.getUser().then(res => res && setData({ user: res.data }));
  }, []);

  const login = (usernameOrEmail, password) =>
    authClient.login(usernameOrEmail, password).then(user => {
      console.log('user', user);
      setData({ user });
    });

  const logout = () =>
    authClient.logout().then(res => {
      setData({ user: null });
    });

  const register = () => {};

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register, error }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
