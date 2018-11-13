import axios from 'axios';

const { REACT_APP_DEV_API_URL: apiURL } = process.env;

export const localLogin = ({ email, password }) => {
    return axios.post(apiURL + '/auth/login/local', { email, password });
};

export const localRegister = ({ username, email, password }) => {
    return axios.post(apiURL + '/auth/register/local', { username, email, password });
};

export const checkEmail = ({ email }) => {
    return axios.get(apiURL + '/auth/check-email?email=' + email);
};