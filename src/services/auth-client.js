import client from './api-client';

const localStorageKey = '$TOKEN';

function handleUserResponse({ accessToken, error, ...rest }) {
  window.localStorage.setItem(localStorageKey, accessToken);
  if (error) {
    logout();
    return Promise.reject(rest);
  }
  return rest;
}

function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return client('users/me').catch(error => {
    logout();
    return Promise.reject(error);
  });
}

function login(usernameOrEmail, password) {
  return client('auth/signin', { body: { usernameOrEmail, password } }).then(
    handleUserResponse
  );
}

function logout() {
  window.localStorage.removeItem(localStorageKey);

  return Promise.resolve();
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export { login, logout, getToken, getUser };
