import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, Button, GradientBar, Input, InputError } from 'components';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const LoginWindow = ({
    form,
    error,
    onChangeInput,
    onLocalLogin
}) => {
    const { email, password } = form.toJS();
    const { error: localLoginError } = error ? error.toJS() : {};

    return (
        <Block shadow>
            <div className={cx('login-window')}>
                <GradientBar />
                <div className={cx('login-window-inputs')}>
                    <h2>로그인</h2>
                    <Input
                        name="email"
                        value={email}
                        onChange={onChangeInput}
                        fullWidth big
                        placeholder="이메일"
                    />
                    <Input
                        name="password"
                        value={password}
                        onChange={onChangeInput}
                        fullWidth big
                        placeholder="비밀번호"
                        type="password"
                    />
                    <InputError error={localLoginError}/>
                </div>
                <div className={cx('login-window-button')}>
                    <Button
                        large flexChild
                        onClick={onLocalLogin}
                    >
                        로그인
                    </Button>
                </div>
                <div className={cx('login-window-register-link')}>
                    아직 계정이 없나요? <Link to="/register">회원가입</Link>
                </div>
            </div>
        </Block>
    );
};

export default LoginWindow;