const axios = require('axios');

const rootUrl = "http://apps.avantrio.xyz:8010/api";

const api_signIn = async (credentials) => {
    const token = await axios.post(`${rootUrl}/user/login`,credentials );
    return token;
}

export {api_signIn};