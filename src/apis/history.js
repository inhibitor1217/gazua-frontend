import axios from 'axios';
import { apiURL } from 'lib/constants';

export const lastHistory = () => {
    return axios.get(apiURL + '/history/last', { withCredentials: true });
};

export const yesterdayHistory = () => {
    return axios.get(apiURL + '/history/yesterday', { withCredentials: true });
};