import React from 'react';
import Media from 'react-media';
import style from './style.scss';
import classNames from 'classnames/bind';
import { ContentDivisor, LoginBanner, LoginWindow } from 'components';

const cx = classNames.bind(style);

const LoginModal = () => {
    return (
        <div className={cx('login-modal')}>
            <Media query="(max-width: 1000px)">
                {
                    matches => matches
                        ? <LoginWindow />
                        : <ContentDivisor
                            leftChild={<LoginBanner />}
                            rightChild={<LoginWindow />}
                        />
                }
            </Media>
        </div>
    );
};

export default LoginModal;