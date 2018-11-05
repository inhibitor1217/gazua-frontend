import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Banner = ({ children }) => {
    return (
        <div className={cx('banner')}>
            {children}
        </div>
    );
};

export default Banner;