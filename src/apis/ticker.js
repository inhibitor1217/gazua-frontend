import axios from 'axios';
import { apiURL } from 'lib/constants';

export const ticker = ({ currencyPair }) => {
    return axios.get(apiURL + `/ticker?currencyPair=${currencyPair}`);
};

export const tickerTimeInterval = ({ currencyPair, timeInterval }) => {
    return axios.get(apiURL + `/ticker?currencyPair=${currencyPair}&timeInterval=${timeInterval}`);
};