import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Input = ({ big, fullWidth, dark, className, ...rest }) => {
    return (
        <input className={cx('input', {
            big,
            'full-width': fullWidth,
            'input-dark': dark
        }, className)} {...rest} />
    );
};

export default Input;