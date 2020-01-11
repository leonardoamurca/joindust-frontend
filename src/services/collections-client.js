import client from './api-client';

function readForUser(username) {
  return client(`users/${username}/collections?page=0&size=20`);
}

export { readForUser };
