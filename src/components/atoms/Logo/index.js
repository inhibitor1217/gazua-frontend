import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import logo from 'styles/static/images/logo_white.png';

const cx = classNames.bind(style);

const Logo = () => {
    return (
        <div className={cx('logo')}>
            <img src={logo} alt="logo" className={cx('logo-image')}/>
        </div>
    );
};

export default Logo;