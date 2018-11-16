import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { MaterialIcon } from 'components';

const cx = classNames.bind(style);

const UsernameBox = ({
    username
}) => {
    return (
        <div className={cx('username-box')}>
            <MaterialIcon light md18>person</MaterialIcon>
            <div className={cx('username-box-name')}>
                {username}
            </div>
        </div>
    );
};

export default UsernameBox;