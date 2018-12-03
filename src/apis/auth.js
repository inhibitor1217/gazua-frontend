import axios from 'axios';
import { apiURL } from 'lib/constants';

export const localLogin = ({ email, password }) => {
    return axios.post(apiURL + '/auth/login/local', { email, password }, { withCredentials: true });
};

export const localRegister = ({ username, email, password }) => {
    return axios.post(apiURL + '/auth/register/local', { username, email, password });
};

export const checkStatus = () => {
    return axios.get(apiURL + '/auth/check', { withCredentials: true });
};

export const checkEmail = ({ email }) => {
    return axios.get(apiURL + '/auth/check-email?email=' + email);
};