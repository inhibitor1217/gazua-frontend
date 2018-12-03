import axios from 'axios';
import { apiURL } from 'lib/constants';

export const wallet = () => {
    return axios.get(apiURL + '/wallet', { withCredentials: true });
};