import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem, NavSeparator } from 'components';

const cx = classNames.bind(style);

const HeaderNav = () => {
    return (
        <FlexBox
            horizontal
            className={cx('header-nav')}>
            <NavItem>
                대시보드
            </NavItem>
            <NavSeparator />
            <NavItem>
                마이페이지
            </NavItem>
        </FlexBox>
    );
};

export default HeaderNav;