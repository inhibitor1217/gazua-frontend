import axios from 'axios';

const { REACT_APP_DEV_API_URL: apiURL } = process.env;

export const lastHistory = () => {
    return axios.get(apiURL + '/history/last', { withCredentials: true });
};

export const yesterdayHistory = () => {
    return axios.get(apiURL + '/history/yesterday', { withCredentials: true });
};