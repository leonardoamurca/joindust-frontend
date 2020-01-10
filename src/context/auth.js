import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getUser() {
  const TOKEN_KEY = '$TOKEN';
  const token = window.localStorage.getItem(TOKEN_KEY);

  if (!token) {
    return Promise.resolve(null);
  }

  return axios.get('http://localhost:8080/api/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const FullPageSpinner = () => <h1>Loading...</h1>;

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const [data, setData] = useState({ user: null });

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const res = await getUser();
        if (!res) {
          setData({ user: null });
        }
        console.log(res);
      } catch (error) {
        throw new Error('Erro!');
      }
    }

    getCurrentUser();
  }, []);

  if (firstAttemptFinished) {
    return <FullPageSpinner />;
  }

  const login = () => {}; // make a login request
  const register = () => {}; // register the user
  const logout = () => {}; // clear the token in localStorage and the user data

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
