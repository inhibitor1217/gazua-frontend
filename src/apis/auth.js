import axios from 'axios';

const { REACT_APP_DEV_API_URL: apiURL } = process.env;

export const localLogin = ({ email, password }) => {
    return axios.post(apiURL + '/auth/login/local', { email, password });
};