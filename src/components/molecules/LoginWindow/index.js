import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, Button, Input } from 'components';

const cx = classNames.bind(style);

const LoginWindow = () => {
    return (
        <Block shadow>
            <div className={cx('login-window')}>
                <div className={cx('login-window-bar')}></div>
                <div className={cx('login-window-inputs')}>
                    <h2>로그인</h2>
                    <Input fullWidth big placeholder="이메일"/>
                    <Input fullWidth big placeholder="비밀번호" type="password"/>
                </div>
                <div className={cx('login-window-button')}>
                    <Button large flexChild>로그인</Button>
                </div>
                <div className={cx('login-window-register-link')}>
                    아직 계정이 없나요? <a href='/'>회원가입</a>
                </div>
            </div>
        </Block>
    );
};

export default LoginWindow;