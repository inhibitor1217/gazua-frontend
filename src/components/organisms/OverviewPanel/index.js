import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, GradientBar, AssetPanel, AssetChartPanel, TradeDisplayPanel } from 'components';

const cx = classNames.bind(style);

const OverviewPanel = ({
    user,
    wallet,
    history,
    tickers
}) => {
    const username = user && user.username;
    return (
        <div className={cx('overview-panel')}>
            <Block shadow>
                <div className={cx('overview-panel-wrapper')}>
                    <GradientBar />
                    <div className={cx('overview-panel-header')}>
                        <div className={cx('overview-panel-header-title')}>개요</div>
                        <div className={cx('overview-panel-header-username')}>{username}</div>
                    </div>
                    <div className={cx('overview-panel-content')}>
                        <div className={cx('overview-panel-content-box')}>
                            <AssetPanel wallet={wallet} history={history}/>
                        </div>
                        <div className={cx('overview-panel-content-box')}>
                            <AssetChartPanel wallet={wallet} tickers={tickers}/>
                        </div>
                        <div className={cx('overview-panel-content-box')}>
                            <TradeDisplayPanel label='최근 거래 :' subLabel='매수' api='bid' maxLimit={3}/>
                            <TradeDisplayPanel label='최근 거래 :' subLabel='매도' api='ask' maxLimit={3}/>
                        </div>
                    </div>
                </div>
            </Block>
        </div>
    );
};

export default OverviewPanel;