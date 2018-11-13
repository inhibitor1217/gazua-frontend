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
    onClickPrevPhase
}) => {
    return (
        <div className={cx('register-modal-wrapper')}>
            <Block shadow>
                <div className={cx('register-modal')}>
                    <div className={cx('register-modal-header')}>
                        <GradientBar />
                        <h2>회원가입</h2>
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
                    />
                </div>
            </Block>
        </div>
    );
};

export default RegisterModal;