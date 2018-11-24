import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { AbbrInfoBox } from 'components';

const cx = classNames.bind(style);

const currencyPairToAbbr = {
    'btc_krw': 'BTC',
    'etc_krw': 'ETC',
    'eth_krw': 'ETH',
    'xrp_krw': 'XRP',
    'bch_krw': 'BCH',
    'ltc_krw': 'LTC'
};

const AbbrInfoPanel = ({
    dark,
    data,
    highlights
}) => {
    const processedData = {};
    for (let currencyPair in currencyPairToAbbr) {
        data[currencyPair].currencyAbbr = currencyPairToAbbr[currencyPair];
    }
    const {
        'btc_krw': hBTC,
        'etc_krw': hETC,
        'eth_krw': hETH,
        'xrp_krw': hXRP,
        'bch_krw': hBCH,
        'ltc_krw': hLTC
    } = highlights.toJS();
    return (
        <div className={cx('abbr-info-panel')}>
            <div className={cx('abbr-info-panel-horizontal')}>
                <AbbrInfoBox dark={dark} highlight={hBTC} data={data['btc_krw']}/>
                <AbbrInfoBox dark={dark} highlight={hETC} data={data['etc_krw']}/>
                <AbbrInfoBox dark={dark} highlight={hETH} data={data['eth_krw']}/>
            </div>
            <div className={cx('abbr-info-panel-horizontal')}>
                <AbbrInfoBox dark={dark} highlight={hXRP} data={data['xrp_krw']}/>
                <AbbrInfoBox dark={dark} highlight={hBCH} data={data['bch_krw']}/>
                <AbbrInfoBox dark={dark} highlight={hLTC} data={data['ltc_krw']}/>
            </div>
        </div>
    );
};

export default AbbrInfoPanel;