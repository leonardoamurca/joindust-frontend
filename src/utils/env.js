function getBaseURL() {
  return process.env.REACT_APP_API_URL;
}

function getAppVersion() {
  return process.env.REACT_APP_VERSION;
}

function getImageProviderBaseURL() {
  return process.env.REACT_APP_IMAGE_PROVIDER_URL;
}

function getImageProviderClientID() {
  return process.env.REACT_APP_IMAGE_PROVIDER_CLIENT_ID;
}

export {
  getBaseURL,
  getAppVersion,
  getImageProviderBaseURL,
  getImageProviderClientID,
};
