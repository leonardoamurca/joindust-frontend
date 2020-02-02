import client, { deleteById } from './api-client';

function getContacts(page = 0, size = 20) {
  return client(`contacts?page=${page}&size=${size}`);
}

function deleteContactById({ collectId }) {
  return deleteById('contacts', { id: collectId }).then(handleDeleteContact);
}

function handleDeleteContact({ data: { collectId, message }, error, ...rest }) {
  if (error || !collectId) {
    return Promise.reject({ error, ...rest });
  }

  return { collectId, message };
}

function createContact({ userId }) {
  return client('contacts', { body: { userId } }).then(handleCreateContact);
}

function handleCreateContact({ success, message, error = null, ...rest }) {
  if (!success) {
    return Promise.reject({ error, message, ...rest });
  }

  return { success, message };
}

export { getContacts, deleteContactById, createContact };
