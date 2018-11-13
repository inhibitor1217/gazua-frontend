import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { MaterialIcon } from 'components';

const cx = classNames.bind(style);

const RegisterFooter = ({
    phase,
    onClickNextPhase,
    onClickPrevPhase,
    onClickRegister
}) => {
    return (
        phase === 3
            ? null
            : <div className={cx('register-footer')}>
                <div className={cx('register-footer-left')}>
                    {
                        phase === 1
                            ? null
                            : <MaterialIcon md36 dark onClick={onClickPrevPhase}>chevron_left</MaterialIcon>
                    }
                </div>
                <div className={cx('register-footer-center')}>
                    {
                        phase === 1
                            ? <MaterialIcon md36 dark onClick={onClickNextPhase}>chevron_right</MaterialIcon>
                            : <MaterialIcon md36 dark onClick={onClickRegister}>done</MaterialIcon>
                    }
                    <div>{phase}/2</div>
                </div>
                <div className={cx('register-footer-right')}></div>
            </div>
    );
};

export default RegisterFooter;