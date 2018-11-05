import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block } from 'components';

const cx = classNames.bind(style);

const LoginModal = () => {
    return (
        <div className={cx('login-modal')}>
            <Block roundCorner shadow>
                Content
            </Block>
        </div>
    );
};

export default LoginModal;