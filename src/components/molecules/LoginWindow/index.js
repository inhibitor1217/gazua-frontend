import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, Input } from 'components';

const cx = classNames.bind(style);

const LoginWindow = () => {
    return (
        <Block roundCorner shadow>
            <div className={cx('login-window')}>
                <div className={cx('login-window-bar')}></div>
                <div className={cx('login-window-inputs')}>
                    <h2>로그인</h2>
                    <Input fullWidth big placeholder="이메일"/>
                    <Input fullWidth big placeholder="비밀번호" type="password"/>
                </div>
            </div>
        </Block>
    );
};

export default LoginWindow;