import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { MaterialIcon } from 'components';

const cx = classNames.bind(style);

const RegisterFooter = () => {
    return (
        <div className={cx('register-footer')}>
            <div className={cx('register-footer-left')}>
                left
            </div>
            <div className={cx('register-footer-center')}>
                <MaterialIcon md-48 md-dark>chevron_right</MaterialIcon>
                <div>1/2</div>
            </div>
            <div className={cx('register-footer-right')}></div>
        </div>
    );
};

export default RegisterFooter;