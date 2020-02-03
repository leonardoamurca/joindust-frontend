import {
  getBaseURL,
  getImageProviderClientID,
  getImageProviderBaseURL,
} from '../utils/env';
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

function patchColumn(endpoint, { body }) {
  const token = window.localStorage.getItem('$TOKEN');
  const headers = { 'content-type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.patch(`${getBaseURL()}/${endpoint}`, body, { headers });
}

function clientImageProvider(endpoint, { body, ...customConfig } = {}) {
  const clientID = getImageProviderClientID();

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Client-ID ${clientID}`);

  const formdata = new FormData();
  formdata.append(body[0], body[1]);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return window
    .fetch(`${getImageProviderBaseURL()}/${endpoint}`, requestOptions)
    .then(r => r.json());
}

export { deleteById, patchColumn, clientImageProvider };
export default client;
