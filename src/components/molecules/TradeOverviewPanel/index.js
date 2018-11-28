import React from 'react';
import style from './style.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

const TradeOverviewPanel = () => {
    return (
        <div className={cx('trade-overview-panel')}>
            Trade Overview Panel
        </div>
    );
};

export default TradeOverviewPanel;