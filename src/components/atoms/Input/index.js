import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Input = ({ big, fullWidth, className, ...rest }) => {
    return (
        <input className={cx('input', {
            big,
            'full-width': fullWidth
        }, className)} {...rest} />
    );
};

export default Input;