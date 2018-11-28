import React from 'react';
import style from './style.scss';
import classnames from 'classnames/bind';
import { Block, AbbrInfoBox } from 'components';

const cx = classnames.bind(style);

const AssetPanel = ({ wallet, history }) => {
    const formattedStrings = {};
    for (let key in wallet) {
        formattedStrings[key] = wallet[key] ? wallet[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : wallet[key];
    }

    const { wallet: walletHistory } = history;
    const { last, yesterday } = walletHistory;
    const lastTotal = last && last.total;
    const lastTimestamp = last && last.timestamp;
    const lastTotalFormattedString = lastTotal ? lastTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : lastTotal;

    const yesterdayTotal = yesterday && yesterday.total;
    const change = yesterday ? lastTotal - yesterdayTotal : '(자산 변화는 가입 후 약 24시간이 지나야 측정됩니다.)';
    const changePercent = yesterday ? change / lastTotal : '- ';

    return (
        <div className={cx('asset-panel')}>
            <div className={cx('asset-panel-header')}>
                내 자산
            </div>
            <div className={cx('asset-panel-content')}>
                <div className={cx('asset-display', 'krw')}>
                    <div className={cx('asset-number', 'num', 'num-krw')}>{formattedStrings['krw']}</div>
                    <div className={cx('asset-unit', 'unit', 'unit-krw')}>KRW</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>{formattedStrings['btc_krw']}</div>
                    <div className={cx('asset-unit', 'unit')}>BTC</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>{formattedStrings['etc_krw']}</div>
                    <div className={cx('asset-unit', 'unit')}>ETC</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>{formattedStrings['eth_krw']}</div>
                    <div className={cx('asset-unit', 'unit')}>ETH</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>{formattedStrings['xrp_krw']}</div>
                    <div className={cx('asset-unit', 'unit')}>XRP</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>{formattedStrings['bch_krw']}</div>
                    <div className={cx('asset-unit', 'unit')}>BCH</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>{formattedStrings['ltc_krw']}</div>
                    <div className={cx('asset-unit', 'unit')}>LTC</div>
                </div>
                <div className={cx('asset-total')}>
                    <Block shadow customMargin>
                        <AbbrInfoBox
                            expand
                            data={{
                                currencyAbbr: 'custom',
                                last: lastTotalFormattedString,
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