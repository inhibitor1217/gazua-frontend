import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Logo } from 'components';
import HeaderNavContainer from 'containers/HeaderNavContainer';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('header-responsive')}>
                <div className={cx('header-logo-wrapper')}>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <div className={cx('header-right-side')}>
                    <HeaderNavContainer />
                </div>
            </div>
        </div>
    );
};

export default Header;