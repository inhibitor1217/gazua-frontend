import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Input, InputError, Button } from 'components';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const RegisterWindow = ({
    phase,
    error,
    form,
    onChangeInput
}) => {
    const { email, password, confirmPassword, username } = form.toJS();

    return (
        <div className={cx('register-window')}>
            {
                phase === 1
                    ? <div>
                        <h5>이메일 주소를 입력해주세요.</h5>
                        <Input
                            name="email"
                            value={email}
                            onChange={onChangeInput}
                            fullWidth big
                            placeholder="이메일"
                        />
                        <h5>6글자 이상의 비밀번호를 입력해주세요.</h5>
                        <Input
                            name="password"
                            value={password}
                            onChange={onChangeInput}
                            fullWidth big
                            placeholder="비밀번호"
                            type="password"
                        />
                        <h5>비밀번호를 다시 한 번 입력해주세요.</h5>
                        <Input
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChangeInput}
                            fullWidth big
                            placeholder="비밀번호 확인"
                            type="password"
                        />
                        <InputError error={error}></InputError>
                    </div>
                    : phase === 2
                        ? <div>
                            <h5>이름을 입력해주세요.</h5>
                            <Input
                                name="username"
                                value={username}
                                onChange={onChangeInput}
                                fullWidth big
                                placeholder="이름"
                            />
                            <InputError error={error}></InputError>
                        </div>
                        : <div className={cx('register-window-complete')}>
                            <h3>회원가입이 완료되었습니다.</h3>
                            <div>
                                <Link to='/login'>
                                    <Button
                                        large flexChild
                                    >
                                        로그인 페이지로
                                    </Button>
                                </Link>
                            </div>
                        </div>
            }
        </div>
    );
};

export default RegisterWindow;