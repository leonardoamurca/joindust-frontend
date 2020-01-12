function getBaseURL() {
  return process.env.REACT_APP_API_URL;
}

function getAppVersion() {
  return process.env.REACT_APP_VERSION;
}

export { getBaseURL, getAppVersion };
