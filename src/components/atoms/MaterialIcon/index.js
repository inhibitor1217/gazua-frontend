import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const MaterialIcon = ({ children, ...rest }) => {
    return (
        <i className={cx('material-icon', { ...rest })}>
            {children}
        </i>
    );
};

export default MaterialIcon;