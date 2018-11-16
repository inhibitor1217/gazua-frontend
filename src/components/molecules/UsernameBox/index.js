import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { MaterialIcon, Button } from 'components';

const cx = classNames.bind(style);

const UsernameBox = ({
    username
}) => {
    return (
        <div className={cx('username-box')}>
            <Button transparent shadow flex>
                <MaterialIcon md18>person</MaterialIcon>
                <div className={cx('username-box-name')}>
                    {username}
                </div>
            </Button>
        </div>
    );
};

export default UsernameBox;