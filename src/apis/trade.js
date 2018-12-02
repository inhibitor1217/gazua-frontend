import axios from 'axios';

const { REACT_APP_DEV_API_URL: apiURL } = process.env;

export const ask = ({ states, currencyPairs }) => {
    return axios.get(
        apiURL + `/trade/ask?states=${JSON.stringify(states)}&currencyPairs=${JSON.stringify(currencyPairs)}`,
        { withCredentials: true }
    );
};

export const withdrawAsk = ({ askID }) => {
    return axios.put(
        apiURL + `/trade/ask/withdraw?ask_id=${askID}`,
        { withCredentials: true }
    );
};

export const registerAsk = ({ currencyPair, price, volume }) => {
    return axios.post(
        apiURL + '/trade/ask/register',
        { currencyPair, price, volume },
        { withCredentials: true }
    );
};

export const bid = ({ states, currencyPairs }) => {
    return axios.get(
        apiURL + `/trade/bid?states=${JSON.stringify(states)}&currencyPairs=${JSON.stringify(currencyPairs)}`,
        { withCredentials: true }
    );
};

export const withdrawBid = ({ bidID }) => {
    return axios.put(
        apiURL + `/trade/bid/withdraw?bid_id=${bidID}`,
        { withCredentials: true }
    );
};

export const registerBid = ({ currencyPair, price, volume }) => {
    return axios.post(
        apiURL + '/trade/bid/register',
        { currencyPair, price, volume },
        { withCredentials: true }
    );
};