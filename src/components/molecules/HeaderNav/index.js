import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { FlexBox, Button, UsernameBox } from 'components';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const HeaderNav = ({
    user // { _id, username, email }
}) => {
    return (
        <FlexBox horizontal className={cx('header-nav')}>
            {
                user != null
                    ? <UsernameBox username={user.username} />
                    : <Link to='/login'>
                        <Button className={cx('header-nav-login-button')} transparent shadow>
                            로그인
                        </Button>
                    </Link>
            }
        </FlexBox>
    );
};

export default HeaderNav;