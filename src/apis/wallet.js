import axios from 'axios';

const { REACT_APP_DEV_API_URL: apiURL } = process.env;

export const wallet = () => {
    return axios.get(apiURL + '/wallet', { withCredentials: true });
};