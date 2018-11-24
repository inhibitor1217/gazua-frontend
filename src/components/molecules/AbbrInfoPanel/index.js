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
    data
}) => {
    const processedData = {};
    for (let currencyPair in currencyPairToAbbr) {
        data[currencyPair].currencyAbbr = currencyPairToAbbr[currencyPair];
    }
    return (
        <div className={cx('abbr-info-panel')}>
            <div className={cx('abbr-info-panel-horizontal')}>
                <AbbrInfoBox dark={dark} data={data['btc_krw']}/>
                <AbbrInfoBox dark={dark} data={data['etc_krw']}/>
                <AbbrInfoBox dark={dark} data={data['eth_krw']}/>
            </div>
            <div className={cx('abbr-info-panel-horizontal')}>
                <AbbrInfoBox dark={dark} data={data['xrp_krw']}/>
                <AbbrInfoBox dark={dark} data={data['bch_krw']}/>
                <AbbrInfoBox dark={dark} data={data['ltc_krw']}/>
            </div>
        </div>
    );
};

export default AbbrInfoPanel;