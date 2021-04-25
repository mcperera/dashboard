const axios = require("axios");

const rootUrl = "http://apps.avantrio.xyz:8010/api";

const api_signIn = async (credentials) => {
  const token = await axios.post(`${rootUrl}/user/login`, credentials);
  return token;
};

const api_getUsers = async (token) => {
  console.log(token);
  const data = await axios.get(`${rootUrl}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { api_signIn, api_getUsers };
