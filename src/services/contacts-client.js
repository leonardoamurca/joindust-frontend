import client, { deleteById } from './api-client';

function getContacts(page = 0, size = 20) {
  return client(`contacts?page=${page}&size=${size}`);
}

function deleteContactById({ contactId }) {
  return deleteById('contacts', { id: contactId }).then(handleDeleteContact);
}

function handleDeleteContact({ data: { contactId, message }, error, ...rest }) {
  if (error || !contactId) {
    return Promise.reject({ error, ...rest });
  }

  return { contactId, message };
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
