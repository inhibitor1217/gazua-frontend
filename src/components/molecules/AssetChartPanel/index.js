import React from 'react';
import style from './style.scss';
import classnames from 'classnames/bind';
import { PieChart } from 'components';

const cx = classnames.bind(style);

const AssetChartPanel = ({ wallet, tickers }) => {
    const data = [];
    if (wallet) {
        data.push({ y: wallet['krw'], label: 'KRW' });
    }
    if (wallet && tickers) {
        for (let currencyPair in tickers) {
            if (wallet[currencyPair] > 0 && tickers[currencyPair].last) {
                data.push({ y: wallet[currencyPair] * tickers[currencyPair].last, label: currencyPair.substr(0, 3).toUpperCase() });
            }
        }
    }
    return (
        <div className={cx('asset-chart-panel')}>
            <PieChart data={data}/>
        </div>
    );
};

export default AssetChartPanel;