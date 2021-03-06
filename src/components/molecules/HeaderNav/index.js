import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { FlexBox, Button, UsernameBox } from 'components';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const HeaderNav = ({
    user, // { _id, username, email }
    onClickLogout
}) => {
    return (
        <FlexBox horizontal className={cx('header-nav')}>
            {
                user != null
                    ? <div className={cx('header-nav-dropdown')}>
                        <button className={cx('header-nav-dropdown-button')}>
                            <UsernameBox username={user.username} />
                        </button>
                        <div className={cx('header-nav-dropdown-content')}>
                            <Link to='/dashboard'>
                                <div>대시보드</div>
                            </Link>
                            <div onClick={onClickLogout}>로그아웃</div>
                        </div>
                    </div>
                    : <Link to='/login'>
                        <Button transparent shadow>
                            <div className={cx('header-nav-login-button')}>
                                로그인
                            </div>
                        </Button>
                    </Link>
            }
        </FlexBox>
    );
};

export default HeaderNav;