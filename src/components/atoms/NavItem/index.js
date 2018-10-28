import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const NavItem = ({ children }) => {
    return (
        <div className={cx('nav-item')}>
            {children}
        </div>
    );
};

export default NavItem;