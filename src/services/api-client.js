const process = {
  env: {
    REACT_APP_API_URL: 'http://localhost:8080/api',
  },
};

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
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(r => r.json());
}

export default client;
