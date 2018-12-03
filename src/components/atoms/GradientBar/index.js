import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const GradientBar = ({ warm, dark }) => {
    return (
        <div className={cx('gradient-bar', { warm, dark })}></div>
    );
};

export default GradientBar;