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

export { getContacts, deleteContactById };
