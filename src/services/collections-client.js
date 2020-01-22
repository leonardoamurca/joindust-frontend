import client from './api-client';

function getCollectionsCreatedBy(username) {
  return client(`users/${username}/collections?page=0&size=20`);
}

export { getCollectionsCreatedBy };
