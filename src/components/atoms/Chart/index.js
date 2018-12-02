import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Chart = ({ labels, data }) => {
    return (
        <div className={cx('chart')}>
            {
                labels.map((label, i) => {
                    return (
                        <div className={cx('chart-column')} key={`chart-column-${label}-${i}`}>
                            <div className={cx('chart-column-item', 'chart-column-header')}>
                                {label}
                            </div>
                            {
                                data[i].map((x, j) => {
                                    return (
                                        <div className={cx('chart-item')} key={`chart-item-${i}-${j}`}>
                                            {x}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Chart;