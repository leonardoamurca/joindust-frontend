import client, { deleteById } from './api-client';

function getCollectionsCreatedBy({ username, page = 0, size = 20 }) {
  return client(`users/${username}/collections?page=${page}&size=${size}`);
}

function getCollectById({ collectId }) {
  return client(`collections/${collectId}`);
}

function createCollect({ price, quantity, userId }) {
  return client('collections', { body: { price, quantity, userId } }).then(
    handleCreateCollect
  );
}

function deleteCollectById({ collectId }) {
  return deleteById('collections', { id: collectId }).then(handleDeleteCollect);
}

function handleCreateCollect({ success, message, error = null, ...rest }) {
  if (!success) {
    return Promise.reject({ error, message, ...rest });
  }

  return { success, message };
}

function handleDeleteCollect({ data: { collectId, message }, error, ...rest }) {
  if (error || !collectId) {
    return Promise.reject({ error, ...rest });
  }

  return { collectId, message };
}

export {
  getCollectionsCreatedBy,
  createCollect,
  getCollectById,
  deleteCollectById,
};
