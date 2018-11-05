import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Logo, Banner } from 'components';

const cx = classNames.bind(style);

const LoginBanner = () => {
    return (
        <div className={cx('login-banner')}>
            <div className={cx('banner-top')}>
                <Banner>
                    <p>#떡락걱정없는</p>
                    <p>#비트코인모의투자</p>
                </Banner>
            </div>
            <div className={cx('banner-bottom')}>
                <div>
                    <p>당신의 첫 <span className={cx('yellow')}>가상화폐</span> 투자</p>
                </div>
                <div className={cx('text-bottom')}>
                    <div className={cx('logo-wrapper')}>
                        <Logo />
                    </div>
                    <p>와 함께 도전하세요.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginBanner;