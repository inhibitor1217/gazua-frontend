import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { FlexBox, Button } from 'components';

const cx = classNames.bind(style);

const HeaderNav = () => {
    return (
        <FlexBox horizontal className={cx('header-nav')}>
            <Button className={cx('header-nav-login-button')} roundCorner transparent shadow>
                로그인
            </Button>
        </FlexBox>
    );
};

export default HeaderNav;