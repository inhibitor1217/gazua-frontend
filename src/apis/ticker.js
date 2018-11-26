import axios from 'axios';

const { REACT_APP_DEV_API_URL: apiURL } = process.env;

export const ticker = ({ currencyPair }) => {
    return axios.get(apiURL + `/ticker?currencyPair=${currencyPair}`);
};