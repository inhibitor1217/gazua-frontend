import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { FlexBox, Button } from 'components';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const HeaderNav = () => {
    return (
        <FlexBox horizontal className={cx('header-nav')}>
            <Link to='/login'>
                <Button className={cx('header-nav-login-button')} roundCorner transparent shadow>
                    로그인
                </Button>
            </Link>
        </FlexBox>
    );
};

export default HeaderNav;