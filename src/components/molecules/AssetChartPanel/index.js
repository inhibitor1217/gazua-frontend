import React from 'react';
import style from './style.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

const AssetChartPanel = () => {
    return (
        <div className={cx('asset-chart-panel')}>
            Asset Chart Panel
        </div>
    );
};

export default AssetChartPanel;