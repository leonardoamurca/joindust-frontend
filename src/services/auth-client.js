import client, { patchColumn, clientImageProvider } from './api-client';

const localStorageKey = '$TOKEN';

function handleUserResponse({ accessToken, error, ...rest }) {
  window.localStorage.setItem(localStorageKey, accessToken);
  if (error) {
    logout();
    return Promise.reject(rest);
  }
  return rest;
}

function handleRegisterUser({
  success,
  message,
  errors = null,
  error = null,
  field = null,
  ...rest
}) {
  if (!success) {
    return Promise.reject({ success, message, errors, error, field });
  }

  return { success, message };
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

function register({
  corporateName,
  username,
  email,
  password,
  cnpj,
  phone,
  roleId,
}) {
  return client('auth/signup', {
    body: {
      corporateName,
      username,
      email,
      password,
      cnpj,
      phone,
      roleId,
    },
  }).then(handleRegisterUser);
}

function getUserProfile({ username }) {
  return client(`users/${username}`);
}

function updateProfileImage({ profileImage }) {
  return patchColumn('users/image', { body: { profileImage } });
}

function uploadImage({ profileImage }) {
  return clientImageProvider('3/image', { body: ['image', profileImage] }).then(
    handleUploadImageReponse
  );
}

function handleUploadImageReponse({
  success,
  data: { link, error = null, method = null },
  ...rest
}) {
  if (!success) {
    return Promise.reject({ error, method, ...rest });
  }

  return { success, link };
}

export {
  login,
  register,
  logout,
  getToken,
  getUser,
  getUserProfile,
  updateProfileImage,
  uploadImage,
};
