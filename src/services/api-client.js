import { getBaseURL } from '../utils/env';
import axios from 'axios';

function client(endpoint, { body, ...customConfig } = {}) {
  const token = window.localStorage.getItem('$TOKEN');
  const headers = { 'content-type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${getBaseURL()}/${endpoint}`, config)
    .then(r => r.json());
}

function deleteById(endpoint, { id }) {
  const token = window.localStorage.getItem('$TOKEN');
  const headers = { 'content-type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.delete(`${getBaseURL()}/${endpoint}/${id}`, { headers });
}

export { deleteById };
export default client;
