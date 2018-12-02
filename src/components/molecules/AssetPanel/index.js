import React from 'react';
import style from './style.scss';
import classnames from 'classnames/bind';
import { Block, AbbrInfoBox } from 'components';
import { currencyPairs, currencyPairToAbbr } from 'lib/constants';
import { formatString } from 'lib/utils';

const cx = classnames.bind(style);

const AssetPanel = ({ wallet, history }) => {
    const { wallet: walletHistory } = history;
    const { last, yesterday } = walletHistory;
    const lastTotal = last && last.total;
    const lastTimestamp = last && last.timestamp;

    const yesterdayTotal = yesterday && yesterday.total;
    const change = yesterday ? lastTotal - yesterdayTotal : '(자산 변화는 가입 후 약 24시간이 지나야 측정됩니다.)';
    const changePercent = yesterday ? (change * 100 / yesterdayTotal).toFixed(2) : '- ';

    return (
        <div className={cx('asset-panel')}>
            <div className={cx('asset-panel-header')}>
                내 자산
            </div>
            <div className={cx('asset-panel-content')}>
                <div className={cx('asset-display', 'krw')}>
                    <div className={cx('asset-number', 'num', 'num-krw')}>{formatString(wallet['krw'])}</div>
                    <div className={cx('asset-unit', 'unit', 'unit-krw')}>KRW</div>
                </div>
                {
                    currencyPairs.map((currencyPair) => {
                        return (
                            <div className={cx('asset-display')} key={`asset-display-${currencyPair}`}>
                                <div className={cx('asset-number', 'num')}>{formatString(wallet[currencyPair])}</div>
                                <div className={cx('asset-unit', 'unit')}>{currencyPairToAbbr[currencyPair]}</div>
                            </div>
                        );
                    })
                }
                <div className={cx('asset-total')}>
                    <Block shadow customMargin>
                        <AbbrInfoBox
                            expand
                            data={{
                                currencyAbbr: 'custom',
                                last: formatString(lastTotal),
                                change,
                                changePercent,
                                timestamp: lastTimestamp
                            }}
                        />
                    </Block>
                </div>
            </div>
        </div>
    );
};

export default AssetPanel;