import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const AbbrInfoBox = ({
    dark,
    border,
    highlight,
    expand,
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
    const lastFormattedString = last ? last.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : last;
    const changeFormattedString = change ? change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : change;
    return (
        <div className={cx('abbr-info-box', {
            'abbr-info-box-border': border,
            'abbr-info-box-dark': dark,
            'abbr-info-box-highlight': highlight,
            'abbr-info-box-expand': expand
        })}>
            <div className={cx('abbr-info-box-header')}>
                {
                    currencyAbbr === 'custom' ? '총 자산' : `${currencyAbbr}/KRW`
                }
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
                    {lastFormattedString}
                </div>
                <div className={cx('abbr-info-box-text', 'abbr-info-box-change', {
                    'changetype-positive': changePercent > 0.1,
                    'changetype-neutral': changePercent > -0.1 && changePercent < 0.1,
                    'changetype-negative': changePercent < -0.1
                })}>
                    {changeFormattedString}
                </div>
                <div className={cx('abbr-info-box-text', 'abbr-info-box-timestamp')}>
                    {new Date(timestamp).toLocaleString()} (최근 24시간 기준)
                </div>
            </div>
        </div>
    );
};

export default AbbrInfoBox;