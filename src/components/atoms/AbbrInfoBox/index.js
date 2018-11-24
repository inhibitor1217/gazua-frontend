import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const AbbrInfoBox = ({
    dark,
    border,
    changeType,
    data
}) => {
    if (!data) data = {};
    const {
        currencyAbbr,
        last,
        change,
        changePercent,
        timestamp
    } = data;
    return (
        <div className={cx('abbr-info-box', {
            'abbr-info-box-border': border,
            'abbr-info-box-dark': dark
        })}>
            <div className={cx('abbr-info-box-header')}>
                {currencyAbbr}/KRW
            </div>
            <div className={cx('abbr-info-box-content')}>
                <div className={cx('abbr-info-box-text', 'abbr-info-box-changepercent', {
                    'changetype-positive': changePercent > 0.1,
                    'changetype-neutral': changePercent > -0.1 && changePercent < 0.1,
                    'changetype-negative': changePercent < -0.1
                })}>
                    {changePercent}%
                </div>
                <div className={cx('abbr-info-box-text', 'abbr-info-box-last')}>
                    {last}
                </div>
                <div className={cx('abbr-info-box-text', 'abbr-info-box-change', {
                    'changetype-positive': changePercent > 0.1,
                    'changetype-neutral': changePercent > -0.1 && changePercent < 0.1,
                    'changetype-negative': changePercent < -0.1
                })}>
                    {change}
                </div>
                <div className={cx('abbr-info-box-text', 'abbr-info-box-timestamp')}>
                    {new Date(timestamp).toDateString()} (최근 24시간)
                </div>
            </div>
        </div>
    );
};

export default AbbrInfoBox;