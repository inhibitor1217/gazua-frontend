const {
    NODE_ENV: nodeEnv,
    REACT_APP_DEV_API_URL: devURL,
    REACT_APP_BUILD_API_URL: buildURL,
    REACT_APP_DEV_SOCKET_URL: devSocketURL,
    REACT_APP_BUILD_SOCKET_URL: buildSocketURL
} = process.env;

exports.apiURL = nodeEnv === 'development' ? devURL : buildURL;
exports.socketURL = nodeEnv === 'development' ? devSocketURL : buildSocketURL;

exports.currencyPairs = [
    'btc_krw', 'etc_krw', 'eth_krw', 'xrp_krw', 'bch_krw', 'ltc_krw'
];

exports.currencyPairToAbbr = {
    'btc_krw': 'BTC',
    'etc_krw': 'ETC',
    'eth_krw': 'ETH',
    'xrp_krw': 'XRP',
    'bch_krw': 'BCH',
    'ltc_krw': 'LTC'
};

exports.states = ['pending', 'warning', 'completed', 'withdrawn'];

exports.stateToStateText = {
    'pending': '처리 중',
    'completed': '완료',
    'withdrawn': '취소됨',
    'warning': '처리 중 (거부됨: 자금 부족)'
};

exports.orderCondition = {
    btc_krw: {
        tick_size: 500,
        min_price: 1000,
        max_price: 100000000,
        order_min_size: 0.001,
        order_max_size: 100
    },
    etc_krw: {
        tick_size: 50,
        min_price: 1000,
        max_price: 100000000,
        order_min_size: 0.01,
        order_max_size: 1000
    },
    eth_krw: {
        tick_size: 10,
        min_price: 100,
        max_price: 100000000,
        order_min_size: 0.1,
        order_max_size: 20000
    },
    xrp_krw: {
        tick_size: 0.1,
        min_price: 10,
        max_price: 100000000,
        order_min_size: 10,
        order_max_size: 1000000
    },
    bch_krw: {
        tick_size: 500,
        min_price: 1000,
        max_price: 100000000,
        order_min_size: 0.005,
        order_max_size: 400
    },
    ltc_krw: {
        tick_size: 50,
        min_price: 1000,
        max_price: 100000000,
        order_min_size: 0.005,
        order_max_size: 500
    }
};