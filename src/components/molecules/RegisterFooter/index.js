import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { MaterialIcon } from 'components';

const cx = classNames.bind(style);

const RegisterFooter = ({
    phase,
    onClickNextPhase,
    onClickPrevPhase
}) => {
    return (
        <div className={cx('register-footer')}>
            <div className={cx('register-footer-left')}>
                {
                    phase === 1
                        ? null
                        : <MaterialIcon md-36 md-dark onClick={onClickPrevPhase}>chevron_left</MaterialIcon>
                }
            </div>
            <div className={cx('register-footer-center')}>
                {
                    phase === 1
                        ? <MaterialIcon md-36 md-dark onClick={onClickNextPhase}>chevron_right</MaterialIcon>
                        : <a href="/login"><MaterialIcon md-36 md-dark>done</MaterialIcon></a>
                }
                <div>{phase}/2</div>
            </div>
            <div className={cx('register-footer-right')}></div>
        </div>
    );
};

export default RegisterFooter;