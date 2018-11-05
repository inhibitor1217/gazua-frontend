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
                    <p>#비트코인투자</p>
                </Banner>
            </div>
            <div className={cx('banner-bottom')}>
                <p>Start your first investment to <span className={cx('yellow')}>crypto currency</span></p>
                <Logo /><p> <span className={cx('large')}>와 함께 도전하세요.</span></p>
            </div>
        </div>
    );
};

export default LoginBanner;