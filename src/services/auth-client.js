import axios from 'axios';

const localStorageKey = '$TOKEN';

async function handleUserResponse({ data: { accessToken } }) {
  window.localStorage.setItem(localStorageKey, accessToken);
  const { data } = await getUser();

  return data;
}

function getUser() {
  const token = window.localStorage.getItem(localStorageKey);

  if (!token) {
    return Promise.resolve(null);
  }

  return axios
    .get('http://localhost:8080/api/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(err => {
      logout();
      return Promise.reject(err);
    });
}

function login(usernameOrEmail, password) {
  return axios
    .post('http://localhost:8080/api/auth/signin', {
      usernameOrEmail,
      password,
    })
    .then(handleUserResponse)
    .catch(err => {
      logout();
      return Promise.reject(err);
    });
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export { login, logout, getToken, getUser };
