import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, GradientBar, RegisterWindow, RegisterFooter } from 'components';

const cx = classNames.bind(style);

const RegisterModal = ({
    phase,
    error,
    form,
    onChangeInput,
    onClickNextPhase,
    onClickPrevPhase,
    onClickRegister
}) => {
    return (
        <div className={cx('register-modal-wrapper')}>
            <Block shadow>
                <div className={cx('register-modal')}>
                    <div className={cx('register-modal-header')}>
                        <GradientBar />
                        { phase === 3 ? null : <h2>회원가입</h2> }
                    </div>
                    <RegisterWindow
                        phase={phase}
                        error={error}
                        form={form}
                        onChangeInput={onChangeInput}
                    />
                    <RegisterFooter
                        phase={phase}
                        onClickNextPhase={onClickNextPhase}
                        onClickPrevPhase={onClickPrevPhase}
                        onClickRegister={onClickRegister}
                    />
                </div>
            </Block>
        </div>
    );
};

export default RegisterModal;