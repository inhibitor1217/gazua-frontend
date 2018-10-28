import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const NavSeparator = () => {
    return (
        <div className={cx('nav-separator')}>
        </div>
    );
};

export default NavSeparator;