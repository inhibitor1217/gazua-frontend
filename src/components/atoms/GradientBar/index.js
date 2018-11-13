import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const GradientBar = () => {
    return (
        <div className={cx('gradient-bar')}></div>
    );
};

export default GradientBar;