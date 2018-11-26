import React from 'react';
import style from './style.scss';
import classnames from 'classnames/bind';
import { Block, AbbrInfoBox } from 'components';

const cx = classnames.bind(style);

const AssetPanel = () => {
    return (
        <div className={cx('asset-panel')}>
            <div className={cx('asset-panel-header')}>
                내 자산
            </div>
            <div className={cx('asset-panel-content')}>
                <div className={cx('asset-display', 'krw')}>
                    <div className={cx('asset-number', 'num', 'num-krw')}>[user_userdata_wallet_krw]</div>
                    <div className={cx('asset-unit', 'unit', 'unit-krw')}>KRW</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>[user_userdata_wallet_btc]</div>
                    <div className={cx('asset-unit', 'unit')}>BTC</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>[user_userdata_wallet_etc]</div>
                    <div className={cx('asset-unit', 'unit')}>ETC</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>[user_userdata_wallet_eth]</div>
                    <div className={cx('asset-unit', 'unit')}>ETH</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>[user_userdata_wallet_xrp]</div>
                    <div className={cx('asset-unit', 'unit')}>XRP</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>[user_userdata_wallet_bch]</div>
                    <div className={cx('asset-unit', 'unit')}>BCH</div>
                </div>
                <div className={cx('asset-display')}>
                    <div className={cx('asset-number', 'num')}>[user_userdata_wallet_ltc]</div>
                    <div className={cx('asset-unit', 'unit')}>LTC</div>
                </div>
                <div className={cx('asset-total')}>
                    <Block shadow customMargin>
                        <AbbrInfoBox
                            expand
                            data={{
                                currencyAbbr: 'custom',
                                last: 'user_userdata_wallet_total',
                                change: 'user_userdata_wallet_change',
                                changePercent: 'user_userdata_wallet_changePercent',
                                timestamp: 'user_userdata_wallet_lastUpdated'
                            }}
                        />
                    </Block>
                </div>
            </div>
        </div>
    );
};

export default AssetPanel;