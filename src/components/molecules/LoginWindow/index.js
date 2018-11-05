import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block } from 'components';

const cx = classNames.bind(style);

const LoginWindow = () => {
    return (
        <Block roundCorner shadow>
            <div className={cx('login-window')}>
                <div className={cx('login-window-bar')}></div>
                <div className={cx('login-window-content')}>
                    로그인
                </div>
            </div>
        </Block>
    );
};

export default LoginWindow;