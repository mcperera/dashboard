const axios = require("axios");

const rootUrl = "http://apps.avantrio.xyz:8010/api";

const api_signIn = async (credentials) => {
  const token = await axios.post(`${rootUrl}/user/login`, credentials);
  return token;
};

const api_getUsers = async (token) => {
  const data = await axios.get(`${rootUrl}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const api_getUserLogs = async (token, userId) => {
  const data = await axios.get(`${rootUrl}/user/${userId}/logs`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { api_signIn, api_getUsers, api_getUserLogs };
