import React from 'react';
import Media from 'react-media';
import style from './style.scss';
import classNames from 'classnames/bind';
import { ContentDivisor, LoginBanner } from 'components';
import LoginWindowContainer from 'containers/LoginWindowContainer';

const cx = classNames.bind(style);

const LoginModal = () => {
    return (
        <div className={cx('login-modal')}>
            <Media query="(max-width: 1000px)">
                {
                    matches => matches
                        ? <LoginWindowContainer />
                        : <ContentDivisor
                            leftChild={<LoginBanner />}
                            rightChild={<LoginWindowContainer />}
                        />
                }
            </Media>
        </div>
    );
};

export default LoginModal;