import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Logo, HeaderNav } from 'components';

const cx = classNames.bind(style);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('responsive')}>
                <div className={cx('logo-wrapper')}>
                    <Logo />
                </div>
                <div className={cx('right-side')}>
                    <HeaderNav />
                </div>
            </div>
        </div>
    );
};

export default Header;