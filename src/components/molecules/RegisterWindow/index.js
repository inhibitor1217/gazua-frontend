import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Input, InputError } from 'components';

const cx = classNames.bind(style);

const RegisterWindow = ({
    phase,
    error,
    form,
    onChangeInput
}) => {
    const { email, password, confirmPassword } = form.toJS();

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
                    : <div>
                        2
                    </div>
            }
        </div>
    );
};

export default RegisterWindow;